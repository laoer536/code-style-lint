# create-code-style-lint

Code style lint config for front-end project.  Execute the following command in the root directory of your project-->>>

## Scaffolding Your Eslint+Prettier

### With npm

```bash

 npm create code-style-lint

```

### With yarn

```bash

 yarn create code-style-lint

```

### With pnpm

```bash

 pnpm create code-style-lint

```

Currently supported preset eslint+prettier

If ". eslintrc" file already exists in your project, only the corresponding type of "code style int" will be added to your extensions configuration. Otherwise, try to generate a ". eslintrc" file. If ". prettierc" file already exists in your project, then your ". prettierc" file will not be modified. Otherwise, try to generate a. prettierc file with default configuration.

```json
{
  "packages": [
    { "packageName": "code-style-lint", "packageVersion": "3.0.6" },
    { "packageName": "code-style-lint-nuxt3", "packageVersion": "1.0.0" },
    { "packageName": "code-style-lint-nuxt3-ts", "packageVersion": "1.0.0" },
    { "packageName": "code-style-lint-react", "packageVersion": "3.0.5" },
    { "packageName": "code-style-lint-react-ts", "packageVersion": "3.0.5" },
    { "packageName": "code-style-lint-ts", "packageVersion": "3.0.5" },
    { "packageName": "code-style-lint-vue3", "packageVersion": "3.0.5" },
    { "packageName": "code-style-lint-vue3-ts", "packageVersion": "3.0.5" }
  ]
}
```
