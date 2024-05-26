"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import {
  FormState,
  fromErrorToFormState,
  toFormState,
} from "@/utils/to-form-state";

type Message = {
  id: string;
  name: string;
  employeeId: string;
  contactNo: string;
  dateOfJoining: Date;
};

let messages: Message[] = [];

export const getMessages = async (): Promise<Message[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return Promise.resolve(messages);
};

// Regular expression for validating phone numbers
const phoneNumberRegex = /^\d{10,15}$/;

// Regular expression for validating employee ID
const empIdRegex = /^\d{3,5}$/;

const createMessageSchema = z.object({
  name: z.string().min(1).max(50),
  employeeId: z.string().refine((value) => empIdRegex.test(value), {
    message: "Invalid Employee ID. Must be 3 to 5 digits.",
  }),
  contactNo: z.string().refine((value) => phoneNumberRegex.test(value), {
    message: "Invalid Phone number. Must be 10 to 15 digits.",
  }),
  dateOfJoining: z.string().transform((val, ctx) => {
    const date = new Date(val);
    if (isNaN(date.getTime())) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Invalid date. Must be a valid date string.",
      });
      return z.NEVER;
    }
    return date;
  }),
});

export const createMessage = async (
  formState: FormState,
  formData: FormData
) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  try {
    const data = createMessageSchema.parse({
      name: formData.get("name"),
      employeeId: formData.get("employeeId"),
      contactNo: formData.get("contactNo"),
      dateOfJoining: formData.get("dateOfJoining"),
    });

    messages.push({
      id: crypto.randomUUID(),
      ...data,
    });

    revalidatePath("/");

    return toFormState("SUCCESS", "Employee successfully created");
  } catch (error) {
    return fromErrorToFormState(error);
  }
};
