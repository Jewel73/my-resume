/*
 * Title: VS Code workspace settings
 * Description: Workspace settings shown in Learn with Sumit React Tutorial Series which assumes you have 1) VS Code Dracula Theme Installed, VS Code ESLint and Prettier Plugins installed and you follow all the steps mentioned in the 3rd Video of this playlist - https://www.youtube.com/playlist?list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 02/15/2021
 *
 */

{
    // Theme
    "workbench.colorTheme": "Dracula",
  
    // config related to code formatting
    "editor.fontSize": 22,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "[javascript]": {
      "editor.formatOnSave": false,
      "editor.defaultFormatter": null
    },
    "[javascriptreact]": {
      "editor.formatOnSave": false,
      "editor.defaultFormatter": null
    },
    "javascript.validate.enable": false, //disable all built-in syntax checking
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.tslint": true,
      "source.organizeImports": true
    },
    "eslint.alwaysShowStatus": true,
    // emmet
    "emmet.triggerExpansionOnTab": true,
    "emmet.includeLanguages": {
      "javascript": "javascriptreact"
    }
  }