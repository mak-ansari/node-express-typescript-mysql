import { Test } from './../models/test.model';


export class TestModelHelper {

    public async findAllTest() {
        return await Test.find();
    }

}