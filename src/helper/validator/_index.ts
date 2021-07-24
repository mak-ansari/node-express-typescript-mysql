import { ValidationOptions } from "joi";

import { TestValidator } from './testValidator';

export const validationOptions: ValidationOptions = {
    abortEarly: false, // abort after the last validation error
    allowUnknown: false, // allow unknown keys that will be ignored
    stripUnknown: false, // remove unknown keys from the validated data
    convert: true,
    debug: true
}

export {
    TestValidator
}