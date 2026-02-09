import Joi from "joi";

// Create 
export const createApplicationValidation = Joi.object({
  companyName: Joi.string().min(2).max(100).required(),

  role: Joi.string().min(2).max(100).required(),

  application: Joi.string()
    .valid("job", "internship", "hackathon", "scholarship", "fellowship")
    .optional(),

  status: Joi.string()
    .valid("applied", "shortlisted", "interviewing", "offer", "rejected")
    .optional(),

  appliedDate: Joi.alternatives().try(
    Joi.date(),
    Joi.string()
  ).optional(),

  interviewDate: Joi.alternatives().try(
    Joi.date(),
    Joi.string()
  ).optional(),

  notes: Joi.string().max(1000).optional(),
});


export const updateApplicationValidation = Joi.object({
    status : Joi.string()
    .valid(
        "applied",
        "shortlisted",
        "interviewing",
        "offer",
        "rejected"
    )
    .optional(),

    notes: Joi.string()
    .max(1000)
    .optional(),

    appliedDate: Joi.alternatives().try(
      Joi.date(),
      Joi.string()
    ).optional(),

    interviewDate: Joi.alternatives().try(
      Joi.date(),
      Joi.string()
    ).optional(),
}).min(1);