const fs = require('fs');
const path = require('path');

function createFolderIfNotExists(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
}

function createFileWithContent(filePath, content) {
  fs.writeFileSync(filePath, content);
}

function setupProjectStructure() {
  const srcFolder = path.join(__dirname, 'src');
  const packageJsonContent = `{
  "name": "motivational-extension",
  "displayName": "Motivational Extension",
  "description": "An extension to motivate you while coding",
  "version": "0.0.1",
  "publisher": "your-publisher-name",
  "engines": {
    "vscode": "^1.58.0"
  },
  "categories": [
    "Other"
  ],
  "activationEvents": [
    "onCommand:extension.sayHello"
  ],
  "main": "./out/extension.js",
  "contributes": {
    "commands": [
      {
        "command": "extension.sayHello",
        "title": "Have a Nice Code"
      }
    ]
  },
  "scripts": {
    "vscode:prepublish": "npm run compile",
    "compile": "tsc -p ./",
    "watch": "tsc -watch -p ./",
    "postinstall": "node ./node_modules/vscode/bin/install"
  },
  "devDependencies": {
    "typescript": "^4.0.0",
    "vscode": "^1.1.36",
    "vscode-test": "^1.4.0"
  }
}`;

  const tsConfigContent = `{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "outDir": "out",
    "sourceMap": true,
    "rootDir": "src",
    "strict": true
  },
  "exclude": [
    "node_modules",
    ".vscode-test"
  ]
}`;

  createFolderIfNotExists(srcFolder);
  createFileWithContent(path.join(__dirname, 'package.json'), packageJsonContent);
  createFileWithContent(path.join(__dirname, 'tsconfig.json'), tsConfigContent);
}

// Run setup
setupProjectStructure();
console.log('Project structure set up successfully!');
