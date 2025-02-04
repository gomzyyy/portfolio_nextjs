import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(4, "Name should between 4-20 characters in length.")
    .max(20, "Name should between 4-20 characters in length."),
  email: z.string().email("Invalid Email"),
  countryCode:z.string().optional(),
  number:z.string().length(10,"Invalid phone number").optional(),
  socialHandleUrlType:z.enum(["linkdid","instagram","facebook","twitter"]).optional(),
  socialHandleUrl:z.string().optional(),
  message:z.string().max(300,"Message cannot exceed 300 characters.").optional()
});


