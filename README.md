# Node Sample

#### Node | Express | TypeScript | MySql ####

## Quick summary ##
This project contains configuration & source code files for a node Application

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js 12.x](https://nodejs.org/en/)
- Install [TypeScript 4.x](https://www.typescriptlang.org/download/)
- Install [MySql 5.6](https://www.mysql.com/downloads/)
- Install [VS Code](https://code.visualstudio.com/)


# Getting started
- Clone the repository
```
git clone https://github.com/mak-ansari/node-express-typescript-mysql.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```

- Run the project | OLD
```
npm run serve
```

- Run the project | NEW 
```
npm run start
```

- Run the project with nodemon
```
npm run start:watch
```

- Build the project
```
npm run build
```

Finally, navigate to `http://localhost:3000` and you should see the api being served locally!

#### Files and Directory structure ####

```bash
├── node_modules
├── src
│   ├── config
│   │   ├── schema
│   │   │   ├── */schema
│   │   │   ├── mail.
│   │   │   ├── pagination.ts
│   │   ├── db.config.ts
│   ├── controller
│   │   ├── _index.ts
│   │   ├── testController.ts
│   │   ├── .
│   ├── dbo
│   │   ├── _index.ts
│   │   ├── helpers
│   │   │   ├── test.model.helper.ts
│   │   ├── ├──.
│   │   ├── models
│   │   │   ├── test.model.ts
│   │   ├── ├──.
│   ├── helper
│   │   ├── validator
│   │   │   ├── testValidator.ts
│   │   │   ├── .
│   │   ├── responseHelper.ts
│   │   ├── paginationHelper.ts
│   │   ├── .
│   ├── routes
│   │   ├── _index.ts
│   │   ├── testRoute.ts
│   │   ├── .
├── ├── app.ts
├── ├── server.ts
├── .env.example
├── .gitignore
├── chnage.log.md
├── package.json
├── README.md
└── tsconfig.json
```

* **`node_modules`** : Node module packages
* **`src`** : Resource of the application
    * **`config`** : Business Centre AppSync Resources
        * **`schema`** : Schema of varibales
            * **`.`** : Keep adding schema
        * **`db.config.ts`** : Database configuration
    * **`controller`** : Common AppSync Resources
        * **`_index.ts`** : Parent router with child route configurations
        * **`testController.ts`** : Test controller
        * **`.`** : Keep adding other controllers
    * **`dbo`** : Database operations
        * **`_index.ts`** : Database config & settings
        * **`helpers`** : AppSync configuration
            * **`test.model.helper.ts`** : Test model helper
            * **`.`** : Keep adding other model helpers
        * **`models`** : Database models
            * **`test.model.ts`** : Test model
            * **`.`** : Keep adding other models
    * **`helper`** : Comman helpers
        * **`validator`** : 
            * **`testValidator.ts`** : add/edit test validation
            * **`.`** : eep adding other validation
        * **`paginationHelper.ts`** : Get pagingData
        * **`responseHelper.ts`** : Lambda functions & configuration _[Not in use]_
        * **`.`** : keep adding other helpers
    * **`routes`** : 
        * **`_index.ts`** : Parent router
        * **`testRouter.ts`** : Sample test router
    * **`app.ts`** : Application config & setup
    * **`server.ts`** : Http Server creator
* **`.env.example`** : Environment variables (Create .env file)
* **`.gitignore`** : Git ignore files
* **`chnage.log.md`** : Change logs 
* **`package.json`** : Included Node Packages or Modules
* **`README.md`** : Project information
* **`tsconfig.json`** : TypeScript configuration

-----------------------

#### How do I Manage Branch? ####

In Git there are three default branches:

* dev : development branch
* stage : staging/testing branch
* production : live/master branch

To develop a new feature of your code, create a new branch from `dev` called `feature/<name_of_feature>`.
Remember to put a tag with the version of your code when you commit on master branch.