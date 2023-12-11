import { z } from "zod";

export const contactSchema = z.object({
  senderEmail: z.string().email(),
  firstName: z.string().max(50, "Name has max length of 50"),
  message: z
    .string()
    .max(5000, "Thanks for the long message. Please shorten to 5000 chars."),
});

export type TContactSchema = z.infer<typeof contactSchema>;
