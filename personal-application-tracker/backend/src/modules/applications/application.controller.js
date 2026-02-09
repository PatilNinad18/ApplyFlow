import { application } from "express";
import { createApplicationService, getMyApplicationsService, updateApplicationService, deleteApplicationService } from "./application.service.js";
import { createApplicationValidation, updateApplicationValidation } from "./application.validation.js";

// POST /api/applications

export const createApplicationController = async (req, res, next) =>{
    try {

        const {error, value} = createApplicationValidation.validate(req.body);

        if(error){
            return res.status(400)
            .json({
                message : error.details[0].message,
            })
        }

        const userId = req.user.userId;

        const application = await createApplicationService(
            userId,
            req.body
        );

        return res.status(201)
        .json({
            message : "Application created successfully",
            application,
        });
    } catch (error) {
        next(error)
    }
};

// GET /api/application

export const getMyApplicationController = async (req,res,next) => {
    try {
        
        const userId = req.user.userId;
        
        const applications = await getMyApplicationsService(userId);

        return res.status(200)
        .json({
            applications,
        })
    } catch (error) {
        next(error);
    }
};

// PATCH /api.applications/:id

export const updateApplicationController = async (req, res, next) => {
    try {
        const {error, value} = updateApplicationValidation.validate(req.body);

        if(error){
            return res.status(400).json({
                message : error.details[0].message,
            });
        }
        
        const userId = req.user.userId;
        const applicationId = req.params.id;

        const application = await updateApplicationService(
            userId,
            applicationId,
            req.body
        );

        return res.status(200)
        .json({
            message : "Application updated successfully",
            application,
        
        });
    } catch (error) {
        next(error);
    }
}

// DELETE /api/applications/:id

export const deleteApplicationController = async (req, res, next) => {
    try {
        const userId = req.user.userId;
        const applicationId = req.params.id;

        await deleteApplicationService(userId, applicationId);

        return res.status(200)
        .json({
            message : "Application deleted successfully",
        });
    } catch (error) {
        next(error);
    }
}