import mongoose from "mongoose";
// import { type } from "os";

const applicationSchema = new mongoose.Schema(
    {
        userId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true,
            index : true,

        },
        
        companyName : {
            type : String,
            required : true,
            trim : true,
        },

        role : {
            type : String,
            required : true,
            trim : true,
        },

        application : {
            type : String,
            enum : [
                "job",
                "internship",
                "hackathon",
                "scholarship",
                "fellowship"
            ],
            default : "job",
            index : "true",
        },

        status : {
            type : String,
            enum : [
                "applied",
                "shortlisted",
                "interviewing",
                "offer",
                "rejected",
            ],
            default : "applied",
            index : true,

        },

        appliedDate : {
            type : Date,
            default : Date.now,
        },

        interviewDate : {
            type : Date,
            
        },

        notes : {
            type : String,
            trim : true,
            maxlength : 1000,
        },
    },
    {
        timestamps : true,
        versionkKey : false,
    }
);

const ApplicationModel = mongoose.model("Application", applicationSchema);

export default ApplicationModel;