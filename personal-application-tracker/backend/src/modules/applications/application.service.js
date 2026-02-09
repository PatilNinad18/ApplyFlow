import mongoose from "mongoose";
import { Application } from "../../../database/schema/index.js";

export const createApplicationService = async (userId, data) => {
    const createData = {
        userId,
        companyName : data.companyName,
        role : data.role,
        application : data.application,
        status : data.status,
        notes : data.notes,
    };

    // Only add dates if they are provided (not empty strings)
    if (data.appliedDate) {
        createData.appliedDate = data.appliedDate;
    }
    if (data.interviewDate) {
        createData.interviewDate = data.interviewDate;
    }

    const application = await Application.create(createData);
    return application;
};

// get all applications for current use

export const getMyApplicationsService = async (userId) => {
    const applications = await Application.find({userId}).sort({createdAt : -1});
    return applications;
};

// update application

export const updateApplicationService = async (
    userId,
    applicationId,
    updateData
) => {
    const allowedFields = ["status", "notes", "appliedDate", "interviewDate"];

    const updates = {};
    for(const key of allowedFields){
        if(updateData[key] !== undefined){
            updates[key] = updateData[key];
        }
    }

    const application = await Application.findOneAndUpdate(
        { _id: applicationId, userId},
        updates,
        {new : true, runValidators : true}

    )

    if(!application){
        throw new Error("Application not found or access denied");

    }

    return application;
};

// Delete application

export const deleteApplicationService = async(
    userId,
    applicationId
) => {
    const application = await Application.findOneAndDelete({
        _id : applicationId,
        userId,
    });

    if(!application){
        throw new Error("Application not found or access denied");
    }

    return true;
    
}