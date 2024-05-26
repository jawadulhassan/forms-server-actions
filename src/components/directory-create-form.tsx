"use client";

import { useFormState } from "react-dom";
import { createMessage } from "@/app/actions";
import { SubmitButton } from "./submit-button";
import { EMPTY_FORM_STATE } from "@/utils/to-form-state";
import { useToastMessage } from "@/hooks/use-toast-message";
import { FieldError } from "./field-error";
import { useFormReset } from "@/hooks/use-form-reset";

const DirectoryCreateForm = () => {
  const [formState, action] = useFormState(createMessage, EMPTY_FORM_STATE);
  const noScriptFallback = useToastMessage(formState);
  const formRef = useFormReset(formState);

  return (
    <form action={action} ref={formRef} className="flex flex-col gap-y-2">
      <FormField
        label="Name"
        name="name"
        placeholder="Please Enter Name"
        formState={formState}
      />
      <FormField
        label="Employee ID"
        name="employeeId"
        placeholder="Please Enter Employee ID"
        formState={formState}
      />
      <FormField
        label="Contact No"
        name="contactNo"
        placeholder="Please Enter Contact No"
        formState={formState}
      />
      <FormField
        label="Date of Joining"
        name="dateOfJoining"
        placeholder="Please Enter Date of Joining"
        formState={formState}
      />

      <SubmitButton label="Create" loading="Creating ..." />

      {noScriptFallback}
    </form>
  );
};

type FormFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  formState: any; // Adjust the type according to your form state type
};

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  placeholder,
  formState,
}) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      className="border-2 rounded p-2"
      placeholder={placeholder}
    />
    <FieldError formState={formState} name={name} />
  </>
);

export { DirectoryCreateForm };
