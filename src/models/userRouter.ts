import mongoose,{ Schema } from "mongoose";
import IUser from "../interfaces/userRouter";

const UserSchema: Schema = new Schema({
    username: { type: String, requied: true },
    password: {type: String, requied: true }
},
{
    timestamps: true
});

export default mongoose.model<IUser>('User', UserSchema);