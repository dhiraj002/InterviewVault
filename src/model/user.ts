import mongoose, { Document, Schema } from "mongoose";

// TypeScript interface
export interface IUser extends Document {
    firstName: string;
    lastName?: string;
    email: string;
    password?: string;

    createdAt?: Date;
    updatedAt?: Date;
}

// Mongoose Schema
const UserSchema: Schema<IUser> = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
            required: false,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: false, // Optional for OAuth users
            select: false, // Don't return password in queries
        },
    },
    { timestamps: true }
);

// Prevent model overwrite during dev
const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;
