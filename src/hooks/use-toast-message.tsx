import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { FormState } from "@/utils/to-form-state";

const useToastMessage = (formState: FormState): boolean => {
  useEffect(() => {
    if (formState.message) {
      if (formState.status === "ERROR") {
        toast.error(formState.message);
      } else {
        toast.success(formState.message);
      }
    }
  }, [formState]);

  // Return a boolean indicating whether a toast message should be shown
  return !!formState.message;
};

export { useToastMessage };
