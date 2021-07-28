import * as express from 'express';

//Import Require Controllers
import {
    TestController
} from './../../controllers/_index';


const testController: TestController = new TestController();


import {
    TestValidator
} from "../../helper/validator/_index";

//Create Instance of Validator
const testValidator: TestValidator = new TestValidator();

const testRoute = express(); // Created a Express instance

testRoute.route('/test/create')
    .get(testValidator.testCreateValidator, testController.getTestData);

testRoute.route('/test/list')
    .get(testController.getTestList);


export const testRouter = testRoute;