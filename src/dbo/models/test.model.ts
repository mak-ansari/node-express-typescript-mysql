// import { Sequelize, STRING, UUID, Deferrable, BuildOptions } from 'sequelize';
import { Model, DataTypes, BuildOptions } from "sequelize";

import sequelize from './../_index';

export class Test extends Model {
    public id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export class TestModel {
    id: string
    name: string
    pwd: string
    createdAt: Date
    updatedAt: Date
}

Test.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        pwd: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
    },
    {
        sequelize: sequelize, // this bit is important
        modelName: 'Test',
        tableName: 'tests'
    }
)

// Test.sync().then(() => console.log("Test table created"));
// Test.belongsTo(Language, {
//     foreignKey: 'languageId'
// });