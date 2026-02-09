import { registerUserService, loginUserService } from "./auth.services.js";
import { registerValidation, loginValidation } from "./auth.validation.js";

// Register controller

export const registerController = async (req, res, next) =>{ 
    try {
        // Validate response
        const {error, value} = registerValidation.validate(req.body);
        if(error) {
            return res.status(400)
            .json({
                message : error.details[0].message,
            });
        }

        // Call service
        const user = await registerUserService(value);

        // Send response
        return res.status(201)
        .json({
            message : "User created successfully",
            user,

        });

    } catch (error) {
        next(error);
    };
};



export const loginController = async (req, res, next) => {
  try {
    const { error, value } = loginValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const data = await loginUserService(value);

    return res.status(200).json({
      message: "Login successful",
      token: data.token,
      user: data.user,
    });
  } catch (error) {
    next(error);
  }
};
