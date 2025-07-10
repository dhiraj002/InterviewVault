import mongoose, { Document, Schema } from "mongoose";

// TypeScript interface
export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt?: Date;
}

// Mongoose Schema
const UserSchema: Schema = new Schema<IUser>(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
    },
    { timestamps: true }
);

// Prevent re-declaration during dev
const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;
