import { getMyApplicationStatsService } from "./stats.service.js";

// GET /api/stats

export const getMyStatsController = async (req,res,next) =>{
    try {
        const userId = req.user.userId;

        const stats = await getMyApplicationStatsService(userId);

        return res.status(200)
        .json({
            stats,
        });

    } catch (error) {
        next(error);
    }
}