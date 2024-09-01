import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().trim().min(5, "Name must contain 6 characters"),
});

export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;
