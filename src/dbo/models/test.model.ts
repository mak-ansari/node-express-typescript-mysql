import * as mongoose from "mongoose";

export type TestDocument = mongoose.Document & {
    email: string;

    facebook: string;
    tokens: AuthToken[];

    profile: {
        name: string;
        gender: string;
        location: string;
        website: string;
        picture: string;
    };

    gravatar: (size: number) => string;
}

export interface AuthToken {
    accessToken: string;
    kind: string;
}

const testSchema = new mongoose.Schema<TestDocument>(
    {
        email: { type: String, unique: true },

        facebook: String,
        twitter: String,
        google: String,
        tokens: Array,
    
        profile: {
            name: String,
            gender: String,
            location: String,
            website: String,
            picture: String
        }
    },
    { timestamps: true },
);

testSchema.methods.gravatar = (size: number = 200): String => {
    return `https://gravatar.com/avatar/?s=${size}&d=retro`;
};

export const Test = mongoose.model<TestDocument>("Test", testSchema);