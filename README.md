https://khalilstemmler.com/blogs/typescript/node-starter-project/
https://github.com/stemmlerjs/simple-typescript-starter

# Flatbee

#### Node | Express | TypeScript | MongoDB ####

## Quick summary ##
This project contains configuration & source code files for a node Application

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js 12.x](https://nodejs.org/en/)
- Install [TypeScript 4.x](https://www.typescriptlang.org/download/)
- Install [MongoDB v4.2.8](https://docs.mongodb.com/manual/installation/)
- Install [VS Code](https://code.visualstudio.com/)


# Getting started
- Clone the repository
```
git clone https://gitlab.com/northbloomfield/back-end.git <project_name>
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
│   │   │   ├── pagination.ts
│   │   ├── db.config.ts
│   ├── controller
│   │   ├── _index.ts
│   │   ├── testController.ts
│   │   ├── administratorController.ts
│   │   ├── .
│   ├── dbo
│   │   ├── _index.ts
│   │   ├── helpers
│   │   │   ├── test.model.helper.ts
│   │   ├── ├── administrator.model.helper.ts
│   │   ├── ├──.
│   │   ├── models
│   │   │   ├── test.model.ts
│   │   ├── ├── administrator.model.ts
│   │   ├── ├──.
│   ├── helper
│   │   ├── component
│   │   │   ├── applicationMailService.ts
│   │   ├── emailTemplate
│   │   │   ├── contact.ejs
│   │   │   ├── maintenance.ejs
│   │   ├── validator
│   │   │   ├── testValidator.ts
│   │   ├── authHelper.ts
│   │   ├── emailHelper.ts
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
        * **`component`** : 
            * **`applicationMailService.ts`** : application mailService
        * **`emailTemplate`** : 
            * **`contact.ejs`** : contact ejs
            * **`maintenance.ejs`** : maintenance ejs
        * **`validator`** : 
            * **`testValidator.ts`** : add/edit country validation
        * **`paginationHelper.ts`** : Get pagingData
        * **`responseHelper.ts`** : Lambda functions & configuration
        * **`.`** : keep adding other helpers
    * **`routes`** : 
        * **`_index.ts`** : Parent router
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