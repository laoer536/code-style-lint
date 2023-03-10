import { exec } from "child_process";
import inquirer from "inquirer";
import prettier from "prettier";
import {
  readFileSync,
  existsSync,
  writeFileSync,
  appendFileSync,
} from "fs-extra";
import { lightGreen, red, cyan } from "kolorist";
import path from "node:path";
import { defaultPrettierTem, defaultTemplate, prettierConfig } from "./utilts";
import { fileURLToPath } from "node:url";

const __dirname = path.resolve();

interface PromptResult {
  lintType: string;
}

interface EslintConfig {
  extends: string[];
  [x: string]: unknown;
}

async function main() {
  const metaDataPath = path.resolve(
    fileURLToPath(import.meta.url),
    "../../meta-data.json"
  );

  const metaData = readFileSync(metaDataPath);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const data = JSON.parse(metaData);

  let result: PromptResult;

  try {
    result = await inquirer.prompt([
      {
        type: "list",
        name: "lintType",
        message: "Select Your project lint type?",
        choices: data.packages.map((i: any) => i.packageName),
        loop: false,
      },
    ]);
  } catch (error) {
    console.log(red(error));
    return;
  }

  const { lintType } = result;

  // 往 pkg 添加依赖
  const packagesFilePath = path.join(__dirname, "package.json");
  if (existsSync(packagesFilePath)) {
    const pkg = JSON.parse(readFileSync(packagesFilePath, "utf-8"));
    if (pkg.devDependencies) {
      pkg.devDependencies[`eslint-config-${lintType}`] = `^${
        data.packages.find((i: any) => i.packageName === lintType)
          .packageVersion
      }`;
    } else
      pkg.devDependencies = {
        [`elint-config-${lintType}`]: data.packages.find(
          (i: any) => i.packageName === lintType
        ).packageVersion,
      };

    writeFileSync(
      packagesFilePath,
      prettier.format(JSON.stringify(pkg), {
        ...prettierConfig,
        parser: "json",
      })
    );
  } else {
    throw new Error("package.json is not exist!");
  }

  // 生成eslint配置, extends继承选择的code-style-lint配置包, 并保证不会破坏原来的配置
  const dir = path.join(__dirname, ".eslintrc");
  if (existsSync(dir)) {
    console.log("Directory exists, Will modify .eslintrc file!");

    const eslintrc = readFileSync(dir, "utf-8");
    const parseEslintrc: EslintConfig = JSON.parse(eslintrc);
    // 去重
    Object.assign(parseEslintrc, {
      extends: Array.from(
        new Set([...(parseEslintrc.extends ?? []), lintType])
      ),
    });
    writeFileSync(
      dir,
      prettier.format(JSON.stringify(parseEslintrc), {
        ...prettierConfig,
        parser: "json",
      }),
      "utf-8"
    );
  } else {
    console.log("Directory not found, Will create .eslintrc file");
    appendFileSync(dir, defaultTemplate(lintType), "utf-8");
  }

  // 生成prettier配置,并保证不会破坏原来的配置
  const prettierDir = path.join(__dirname, ".prettierrc");
  if (!existsSync(prettierDir)) {
    console.log("Directory not found, Will create .prettierrc file.");
    appendFileSync(prettierDir, defaultPrettierTem, "utf-8");
  }

  const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent);
  const pkgManager = pkgInfo ? pkgInfo.name : "npm";
  console.log(
    cyan(`You selected ${result.lintType}, will install eslint and prettier.`)
  );
  install(pkgManager);
  console.log();
}

function pkgFromUserAgent(userAgent: string | undefined) {
  if (!userAgent) return undefined;

  const pkgSpec = userAgent.split(" ")[0];
  const pkgSpecArr = pkgSpec.split("/");

  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1],
  };
}

function install(pkgManager: string) {
  switch (pkgManager) {
    case "yarn":
      exec("yarn add prettier eslint -D", (err) => {
        throw err;
      });
      console.log(` ${lightGreen("  Config and install is finished")}`);
      break;
    default:
      exec(`${pkgManager} install prettier eslint -D`, (err) => {
        throw err;
      });
      console.log(` ${lightGreen(`  Config and install is finished`)}`);
      break;
  }
}

main().catch((error) => {
  console.error(error);
});
