import { useRef, useEffect } from "react";
import { FormState } from "@/utils/to-form-state";

const useFormReset = (formState: FormState) => {
  const formRef = useRef<HTMLFormElement>(null);
  const previousFormTimestamp = useRef(formState.timestamp);

  useEffect(() => {
    if (!formRef.current) return; // Ensure formRef.current exists
    if (
      formState.status === "SUCCESS" &&
      formState.timestamp !== previousFormTimestamp.current
    ) {
      formRef.current.reset();
      previousFormTimestamp.current = formState.timestamp;
    }
  }, [formState.status, formState.timestamp]);

  return formRef;
};

export { useFormReset };
