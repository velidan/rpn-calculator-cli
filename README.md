# prn-calculator-cli

Welcome. It's a RPN calculator.
It opens the CLI and you need to enter a rpn queue where each number
should be separated by spaces. Then press Enter.
You will see the result and the IO session will be restarted
so you can play with it more.

I did this project to demostrate the OOP way for such simple task in the case of Javascript (Typestript) and the custom structure (LinkedStack) implementation.
Implemented System tests. That's enough for demo.
UML would be nice but I don't have time for it right now so, maybe, later.

[Documentation](https://velidan.github.io/rpn-calculator-cli/)


*Requirements*: Node v12.

_In general it should work on lowest version because Typescript handles everythign
but I didn't tested it on lowest version so feel free to check it._

### Attention
*If you are Windows user so you can use prn-calculator-cli.exe*
in this case no dependencies needed.
It's located in the prn-calculator-cli-exe.zip archive

It supports 4 basic operations: +, -, /, *

How to install:
 - clone the project
 - go to the project folder root
 - execute `node ./build/main/index.js`

To play with the project as developer you need to do:

 - execute `npm install` or `yarn`. This will install dependencies

after that you'll be able to use next commands

- *info*: "Display information about the package scripts" <br />
- *build*: "Clean and rebuild the project. Creates 2 types of package. ES6 (module) and CommonJS (main)" <br />
- *fix*: "Try to automatically fix any linting problems", <br />
- *test*: "Lint and unit test the project", <br />
- *doc*: "Generate HTML API documentation and open it in a browser", <br />
- *doc:json*: "Generate API documentation in typedoc JSON format", <br />
- *version*: "Bump package.json version, update CHANGELOG.md, tag release", <br />
- *reset*: "Delete all untracked files and reset the repo to the last commit", <br />
- *prepare-release*: "One-step: clean, build, test, docs, and prep a release" <br />

*Examples: covered in tests*
 - "Input: '5 2 /' : Result => 2.5"
    _Explanation_:  5 / 2  = 2.5
 - "Input: '4 -' : Result => -4"
    _Explanation_:  4 - 0  = -4
 - "Input: '5 8 +' : Result => 13"
    _Explanation_:  5 + 8 = 13
 - "Input: '5 5 5 8 + + -' : Result => -13"
    _Explanation_:  5 + 8 = 13.  13 + 5 = 18. 5 - 18 = -13
 - "Input: '-3 -2 * 5 +' : Result => 11"
    _Explanation_:  ( -3 * -2 ) + 5 = 11
 - "Input: '5 9 1 - /' : Result => 0.65"
    _Explanation_:  (9 - 1) / 5 = 0.625
 - "Input: '5 9 1 - 8 /' : Result => 1"
    (9 - 1) / 8 = 1. 5 will be skipped. We don't have an operation for it


## Why are there two builds? (main and module)
The src of typescript-starter is compiled into two separate builds: main and module. The main build is configured to use the CommonJS module system. The module build uses the new es6 module system.

Because Node.js LTS releases do not yet support the es6 module system, some projects which depend on your project will follow the main field in package.json. Tools which support the new system (like Rollup, Webpack, or Parcel) will follow the module field, giving them the ability to statically analyze your project. These tools can tree-shake your module build to import only the code they need.
