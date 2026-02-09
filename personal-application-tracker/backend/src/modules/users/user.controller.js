import { getMyProfileService, updateMyProfileService } from "./user.service.js";

// GET /api/users/me

export const getMyProfileController = async (req, res, next) =>{
    try {
        const userId = req.user.userId; //from auth middleware

        const user = await getMyProfileService(userId);
        return res.status(200)
        .json({
            user,
        });
    } catch (error) {
        next(error);
    }
};

// PATCH /api/users/me

export const updateMyProfileController = async (req, res, next) =>{
    try {
        const userId = req.user.userId;

        const updateUser = await updateMyProfileService(
            userId,
            req.body
        );

        return res.status(200)
        .json({
            message : "Profile updated successfully",
            user : updateUser,
        });
    } catch (error) {
        next(error);
    }
}