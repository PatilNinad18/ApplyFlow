import jwt from 'jsonwebtoken';
import env from '../config/env/index.js'

export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // Check token presence
        if(!authHeader || !authHeader.startsWith("Bearer "))
            return res.status(401)
            .json({
                message : "Authentication Required",
            });

        // Extract token

        const token = authHeader.split(" ")[1];

        // Verify Token
        const decoded = jwt.verify(token, env.JWT_SECRET);

        // Attach  user payload to request
        req.user = decoded;
        next();

    } catch (error) {
        return res.status(401)
        .json({
            message : "Invalid or expired token",
        });
    }
};