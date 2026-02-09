import {User} from "../../../database/schema/index.js";

// Get current user profile

export const getMyProfileService = async (userId) => {
    const user = await User.findById(userId);

    if(!user){
        throw new Error("User not found");
    }

    return user;

};

// Update current user profile

export const updateMyProfileService = async (userId, updateData) =>{
    const allowedFields = ["name"];

    const updates = {};
    for(const key of allowedFields){
        if(updateData[key]){
            updates[key] = updateData[key];
        }
    }

    const updateUser = await User.findByIdAndUpdate(
        userId,
        updates,
        {new : true, runValidators : true}
    );

    if(!updateUser){
        throw new Error("User not found");
    }

    return updateUser;
    
}
