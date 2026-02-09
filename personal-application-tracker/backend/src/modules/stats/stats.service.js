import mongoose from "mongoose";
import { Application } from "../../../database/schema/index.js";

// Get application stats for current user

export const getMyApplicationStatsService = async (userId) => {
    const totalApplications = await Application.countDocuments({
        userId,
    });

    // count by status
    const statusAggregation = await Application.aggregate([
        { $match : { userId: new mongoose.Types.ObjectId(userId) }},
        {
            $group : {
                _id : "$status",
                count : {$sum : 1},
            },
        },
    ]);

    // Normalize status counts
    const statusCounts = {
        applied : 0,
        shortlisted : 0,
        interviewing : 0,
        offer : 0,
        rejected : 0,
    };

    statusAggregation.forEach((item)=>{
        statusCounts[item._id] = item.count;
    });

    return {
        totalApplications,
        statusCounts,
    }
}
