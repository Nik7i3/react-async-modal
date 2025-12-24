import { globalIgnores } from 'eslint/config'

import {createConfig} from "@nik7i3/eslint-config"

export default createConfig({
  platform: "web",
  configs: {
    react: true,
    importX: {
      resolverOptions: {
        alwaysTryTypes: true,
        project: "./tsconfig.app.json"
      }
    },
    unicorn: true,
    typescript: true
  },
  languageOptions: {
    parserOptions: {
      tsconfigRootDir: import.meta.dirname
    }
  },
  extends: [
    globalIgnores(['dist']),
  ]
})
