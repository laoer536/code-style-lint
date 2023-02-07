# code-style-lint
Code style lint config for front-end project. No more tedious eslint and prettier configuration of your project. 😛

### Demo

Code-style-lint-react-ts

[laoer536/vite3.0-react18-TypeScript-router-dom6-mobx6-Eslint-prettier-template: 这是一个vite3-react18-react-TypeScript-router-dom6-mobx6-Eslint-prettier-husky模板项目 (github.com)](https://github.com/laoer536/vite3.0-react18-TypeScript-router-dom6-mobx6-Eslint-prettier-template)

```js
//.eslintrc
 {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "./.eslintrc-auto-import.json",
    "eslint-config-code-style-lint-react-ts"
  ],
  "rules": {}
}
```

Code-style-lint-vue3-ts

[laoer536/vite3.0-vue3.2-TypeScript-Pinia-sass-eslint-prettier-template: 这是一个vite2.6-vue3.2-TypeScript-less-eslint-prettier模板项目 (github.com)](https://github.com/laoer536/vite3.0-vue3.2-TypeScript-Pinia-sass-eslint-prettier-template)

```js
//.eslintrc
 {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "./.eslintrc-auto-import.json",
    "eslint-config-code-style-lint-vue3-ts"
  ],
  "rules": {
    "vue/multi-word-component-names": "off"
  }
}
```



### How to use

- For javascript project

  ```js
  //npm
  npm install eslint-config-code-style-lint eslint prettier -D
  //pnpm 
  pnpm install eslint-config-code-style-lint eslint prettier -D
  //yarn
  yarn add eslint-config-code-style-lint eslint prettier -D
  ```

  Create a '.eslintrc' file to your project root

  ```javascript
  {
    //...
    "extends": ["code-style-lint"]
    //...
  }
  ```

- For typescript project

  ```js
  //npm
  npm install eslint-config-code-style-lint-ts eslint prettier -D
  //pnpm 
  pnpm install eslint-config-code-style-lint-ts eslint prettier -D
  //yarn
  yarn add eslint-config-code-style-lint-ts eslint prettier -D
  ```

  Create a '.eslintrc' file to your project root

  ```javascript
  {
    //...
    "extends": ["code-style-lint-ts"]
    //...
  }
  ```

- For vue3-typescript project

  ```js
  //npm
  npm install eslint-config-code-style-lint-vue3-ts eslint prettier -D
  //pnpm 
  pnpm install eslint-config-code-style-lint-vue3-ts eslint prettier -D
  //yarn
  yarn add eslint-config-code-style-lint-vue3-ts eslint prettier -D
  ```

  Create a '.eslintrc' file to your project root

  ```javascript
  {
    //...
    "extends": ["code-style-lint-vue3-ts"]
    //...
  }
  ```

- For vue3-javascript project

  ```js
  //npm
  npm install eslint-config-code-style-lint-vue3 eslint prettier -D
  //pnpm 
  pnpm install eslint-config-code-style-lint-vue3 eslint prettier -D
  //yarn
  yarn add eslint-config-code-style-lint-vue3 eslint prettier -D
  ```
  
  Create a '.eslintrc' file to your project root

  ```javascript
  {
    //...
    "extends": ["code-style-lint-vue3"]
    //...
  }
  ```
  
- For react-typescript project

  ```js
  //npm
  npm install eslint-config-code-style-lint-react-ts eslint prettier -D
  //pnpm 
  pnpm install eslint-config-code-style-lint-react-ts eslint prettier -D
  //yarn
  yarn add eslint-config-code-style-lint-react-ts eslint prettier -D
  ```

  Create a '.eslintrc' file to your project root

  ```javascript
  {
    //...
    "extends": ["code-style-lint-react-ts"]
    //...
  }
  ```

- For react-javascript project

  ```js
  //npm
  npm install eslint-config-code-style-lint-react eslint prettier -D
  //pnpm 
  pnpm install eslint-config-code-style-lint-react eslint prettier -D
  //yarn
  yarn add eslint-config-code-style-lint-react eslint prettier -D
  ```

  Create a '.eslintrc' file to your project root

  ```javascript
  {
    //...
    "extends": ["code-style-lint-react"]
    //...
  }
  ```
