# North Bloom Field Properties

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
│   │   │   ├── mail.ts
│   │   │   ├── pagination.ts
│   │   ├── db.config.ts
│   ├── controller
│   │   ├── _index.ts
│   │   ├── testController.ts
│   │   ├── administratorController.ts
│   │   ├── countryController.ts
│   │   ├── stateController.ts
│   │   ├── cityController.ts
│   │   ├── applicationController.ts
│   │   ├── applicationTransactionController.ts
│   │   ├── testimonialController.ts
│   │   ├── payrentTransactionController.ts
│   │   ├── propertyScheduleController.ts
│   │   ├── propertyController.ts
│   │   ├── propertyScheduleMasterController.ts
│   │   ├── propertyTypeController.ts
│   │   ├── sideConfigurationController.ts
│   │   ├── webPageCityCntroller.ts
│   │   ├── webPageController.ts
│   │   ├── contactController.ts
│   │   ├── maintenanceController.ts
│   │   ├── newsLetterController.ts
│   │   ├── .
│   ├── dbo
│   │   ├── _index.ts
│   │   ├── helpers
│   │   │   ├── test.model.helper.ts
│   │   ├── ├── administrator.model.helper.ts
│   │   ├── ├── country.model.helper.ts
│   │   ├── ├── state.model.helper.ts
│   │   ├── ├── city.model.helper.ts
│   │   ├── ├── application.model.helper.ts
│   │   ├── ├── applicationTransaction.model.helper.ts
│   │   ├── ├── testimonial.model.helper.ts
│   │   ├── ├── payrentTransaction.model.helper.ts
│   │   ├── ├── propertySchedule.model.helper.ts
│   │   ├── ├── propertyScheduleMaster.model.helper.ts
│   │   ├── ├── property.model.helper.ts
│   │   ├── ├── propertyType.model.helper.ts
│   │   ├── ├── sideConfiguration.model.helper.ts
│   │   ├── ├── webPage.model.helper.ts
│   │   ├── ├── webPageCity.model.helper.ts
│   │   ├── ├── imageUpload.model.helper.ts
│   │   ├── ├── contact.model.helper.ts
│   │   ├── ├── maintenance.model.helper.ts
│   │   ├── ├──.
│   │   ├── models
│   │   │   ├── test.model.ts
│   │   ├── ├── administrator.model.ts
│   │   ├── ├── country.model.ts
│   │   ├── ├── state.model.ts
│   │   ├── ├── city.model.ts
│   │   ├── ├── application.model.ts
│   │   ├── ├── applicationAttechment.model.ts
│   │   ├── ├── applicationTransaction.model.ts
│   │   ├── ├── testimonial.model.ts
│   │   ├── ├── payrentTransaction.model.ts
│   │   ├── ├── propertySchedule.model.ts
│   │   ├── ├── propertyScheduleMaster.model.ts
│   │   ├── ├── property.model.ts
│   │   ├── ├── propertyType.model.ts
│   │   ├── ├── sideConfiguration.model.ts
│   │   ├── ├── propertyBasement.model.ts
│   │   ├── ├── propertyBath.model.ts
│   │   ├── ├── propertyBed.model.ts
│   │   ├── ├── propertyGarage.model.ts
│   │   ├── ├── webPage.model.ts
│   │   ├── ├── webPageCity.model.ts
│   │   ├── ├── propertyImage.model.ts
│   │   ├── ├── contact.model.ts
│   │   ├── ├── maintenance.model.ts
│   │   ├── ├──.
│   ├── helper
│   │   ├── component
│   │   │   ├── applicationMailService.ts
│   │   ├── emailTemplate
│   │   │   ├── contact.ejs
│   │   │   ├── maintenance.ejs
│   │   ├── validator
│   │   │   ├── countryValidator.ts
│   │   │   ├── stateValidator.ts
│   │   │   ├── cityValidator.ts
│   │   │   ├── propertyTypeValidator.ts
│   │   │   ├── sideConfigurationValidator.ts
│   │   │   ├── testimonialValidator.ts
│   │   │   ├── fileUploadValidator.ts
│   │   │   ├── propertyImageValidator.ts
│   │   │   ├── propertypagesValidator.ts
│   │   │   ├── contactValidator.ts
│   │   │   ├── fileUploadValidator.ts
│   │   │   ├── maintenanceValidator.ts
│   │   │   ├── newsLetterValidator.ts
│   │   ├── authHelper.ts
│   │   ├── emailHelper.ts
│   │   ├── responseHelper.ts
│   │   ├── paginationHelper.ts
│   │   ├── .
│   ├── routes
│   │   ├── _index.ts
│   │   ├── testRoute.ts
│   │   ├── administratorRouter.ts
│   │   ├── countryRoute.ts
│   │   ├── stateRoute.ts
│   │   ├── cityRoute.ts
│   │   ├── applicationRouter.ts
│   │   ├── applicationTransactionRouter.ts
│   │   ├── testimonialRouter.ts
│   │   ├── payRentTransactionRouter.ts
│   │   ├── propertRouter.ts
│   │   ├── propertyScheduleMasterRouter.ts
│   │   ├── propertyScheduleRouter.ts
│   │   ├── propertyTypeRouter.ts
│   │   ├── sideConfigurationRoute.ts
│   │   ├── webPageCityRoute.ts
│   │   ├── webPageRoute.ts
│   │   ├── contactRoute.ts
│   │   ├── maintenanceRoute.ts
│   │   ├── newsLetterRoute.ts
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
        * **`administratorController.ts`** : Administrator controller
        * **`countryController.ts`** : Country controller
        * **`stateController.ts`** : State controller
        * **`cityController.ts`** : City controller
        * **`applicationController.ts`** : Application controller
        * **`applicationTransactionController.ts`** : Application Transaction controller
        * **`testimonialController.ts`** : Testimonial controller
        * **`payrentTransactionController.ts`**: PayrentTransaction controller
        * **`propertyScheduleController.ts`**: propertySchedule controller
        * **`propertyController.ts`**: property controller
        * **`propertyScheduleMasterController.ts`**: propertyScheduleMaster controller
        * **`propertyTypeController.ts`**: propertyType controller
        * **`sideConfigurationController.ts`**: sideConfiguration controller
        * **`webPageCityController.ts`**: webPageCity controller
        * **`webPageController.ts`**: webPage controller
         * **`contactController.ts`**: contact controller
          * **`maintenanceController.ts`**: maintenance controller
          * **`newsLetterController.ts`**: newsLetter controller
        * **`.`** : Keep adding other controllers
    * **`dbo`** : Database operations
        * **`_index.ts`** : Database config & settings
        * **`helpers`** : AppSync configuration
            * **`test.model.helper.ts`** : Test model helper
            * **`administrator.model.helper.ts`** : administrator model helper
            * **`country.model.helper.ts`** : Country model helper
            * **`state.model.helper.ts`** : State model helper
            * **`city.model.helper.ts`** : City model helper
            * **`application.model.helper.ts`** : Application model helper
            * **`applicationAttachment.model.helper.ts`** : Application Attachment model helper
            * **`applicationTransaction.model.helper.ts`** : Application Transaction model helper
            * **`testimonial.model.helper.ts`** : Testimonial model helper
            * **`propertySchedule.model.helper.ts`** : PropertySchedule model helper
            * **`propertyScheduleMaster.model.helper.ts`** : PropertyScheduleMaster model helper
            * **`property.model.helper.ts`** : property model helper
            * **`propertyType.model.helper.ts`** : propertyType model helper 
            * **`payrentTransaction.model.helper.ts`** : payrentTransaction model helper 
            * **`sideConfiguration.model.helper.ts`** : sideConfiguration model helper 
            * **`webPage.model.helper.ts`** : webpage model helper 
            * **`webPageCity.model.helper.ts`** : webpagecity model helper 
            * **`imageUpload.model.helper.ts`** : imageUpload model helper 
            * **`contact.model.helper.ts`** : contact model helper 
            * **`maintenance.model.helper.ts`** : maintenance model helper 
            * **`.`** : Keep adding other model helpers
        * **`models`** : Database models
            * **`test.model.ts`** : Test model
            * **`administrator.model.ts`** : Administrator model
            * **`country.model.ts`** : Country model
            * **`state.model.ts`** : State model
            * **`city.model.ts`** : City model
            * **`application.model.ts`** : Application model
            * **`applicationAttechment.model.ts`** : Application Attechment model
            * **`applicationTransaction.model.ts`** : Application Transaction model
            * **`testimonial.model.ts`** : Testimonial model
            * **`payrentTransaction.model.ts`** : PayrentTransaction model
            * **`property.model.ts`** : property model
            * **`propertySchedule.model.ts`** : propertySchedule model
            * **`propertyScheduleMaster.model.ts`** : propertyScheduleMaster model
            * **`propertyType.model.ts`** : propertyType model
            * **`sideConfiguration.model.ts`** : sideConfiguration model
            * **`propertyBasement.model.ts`** : propertyBasement model
            * **`propertyBath.model.ts`** : propertyBath model 
            * **`propertyBed.model.ts`** : propertyBed model 
            * **`propertyGarage.model.ts`** : propertyGarage model 
            * **`webPage.model.ts`** : webpage model 
            * **`webPageCity.model.ts`** : webPageCity model 
            * **`propertyImage.model.ts`** : propertyImage model 
            * **`contact.model.ts`** : contact model
            * **`maintenance.model.ts`** : maintenance model
            * **`.`** : Keep adding other models
    * **`helper`** : Comman helpers
        * **`component`** : 
            * **`applicationMailService.ts`** : application mailService
        * **`emailTemplate`** : 
            * **`contact.ejs`** : contact ejs
            * **`maintenance.ejs`** : maintenance ejs
        * **`validator`** : 
            * **`countryValidator.ts`** : add/edit country validation
            * **`stateValidator.ts`** : add/edit state validation
            * **`cityValidator.ts`** : add/edit city validation
            * **`testimonialValidator.ts`** : add/edit testimonial validation
            * **`propertyTypeValidator.ts`** : add/edit property type validation
            * **`sideConfigurationValidator.ts`** : add/edit sideConfiguration validation
            * **`fileUploadValidator.ts`** : add/edit fileUpload validation
            * **`propertyimageValidator.ts`** : add/edit propertyImage validation
            * **`contactValidator.ts`** : add/edit contact validation
            * **`maintenanceValidator.ts`** : add/edit maintenance validation
            * **`newsLetterValidator.ts`** : add/edit newsLetter validation
            * **`propertypagesValidator.ts`** : add/edit propertyPages validation
        * **`paginationHelper.ts`** : Get pagingData
        * **`emailHelper.ts`** : Get emailData
        * **`authHelper.ts`** : Get pagingData
        * **`responseHelper.ts`** : Lambda functions & configuration _[Not in use]_
        * **`.`** : keep adding other helpers
    * **`routes`** : 
        * **`_index.ts`** : Parent router
        * **`testRouter.ts`** : Sample test router
        * **`administratorRouter.ts`** : administrator router
        * **`countryRouter.ts`** : Country router
        * **`stateRouter.ts`** : State router
        * **`cityRouter.ts`** : City router
        * **`applicationRouter.ts`** : Application router
        * **`applicationTransactionRoute.ts`** : ApplicationTransaction router
        * **`testimonialRouter.ts`** : Testimonial router
        * **`payRentTransactionRouter.ts`** : payRentTransaction router
        * **`propertyRouter.ts`** : Property router
        * **`propertyScheduleRouter.ts`** : PropertySchedule router
        * **`propertyScheduleMasterRouter.ts`** : propertyScheduleMaster router
        * **`propertyTypeRouter.ts`** : Property type router
        * **`sideConfigurationRouter.ts`** : sideConfiguration router
        * **`webPageCityRouter.ts`** : webpagecity router
        * **`webPageRouter.ts`** : webpage router
        * **`contactRouter.ts`** : contact router
        * **`maintenanceRouter.ts`** : maintenance router
        * **`newsLetterRouter.ts`** : newsLetter router
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