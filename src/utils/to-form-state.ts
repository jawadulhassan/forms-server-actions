import { ZodError } from "zod";

export type FormState = {
  status: "UNSET" | "SUCCESS" | "ERROR";
  message: string;
  fieldErrors: Record<string, string[] | undefined>;
  timestamp: number;
};

// Helper function to generate timestamp
const generateTimestamp = (): number => Date.now();

export const EMPTY_FORM_STATE: FormState = {
  status: "UNSET",
  message: "",
  fieldErrors: {},
  timestamp: generateTimestamp(),
};

export const fromErrorToFormState = (error: unknown): FormState => {
  if (error instanceof ZodError) {
    return {
      status: "ERROR",
      message: "",
      fieldErrors: error.flatten().fieldErrors,
      timestamp: generateTimestamp(),
    };
  } else if (error instanceof Error) {
    return {
      status: "ERROR",
      message: error.message,
      fieldErrors: {},
      timestamp: generateTimestamp(),
    };
  } else {
    return {
      status: "ERROR",
      message: "An unknown error occurred",
      fieldErrors: {},
      timestamp: generateTimestamp(),
    };
  }
};

export const toFormState = (
  status: FormState["status"],
  message: string
): FormState => {
  return {
    status,
    message,
    fieldErrors: {},
    timestamp: generateTimestamp(),
  };
};
