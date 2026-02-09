import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            trim : true,
            minlength : 2,
            maxlength : 50,
        },

        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            index : true,
        },

        password : {
            type :  String,
            required : true,
            minlength : 6,
            select : false,
        },

        isActive : {
            type : Boolean,
            default : true,
        },
    },
    {
        timestamps : true,
        versionKey : false,
    }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
