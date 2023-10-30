import { z } from "zod";

export const UserAuthSchema = z.object({
  username: z
    .string({
      required_error: "Required",
    })
    .min(5, {
      message: "min 5 characters",
    }),
  password: z
    .string({
      required_error: "Required",
    })
    .min(8, {
      message: "min 8 characters",
    }),
});
