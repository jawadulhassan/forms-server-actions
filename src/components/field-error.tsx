import { FormState } from "@/utils/to-form-state";

type FieldErrorProps = {
  formState: FormState;
  name: string;
};

const FieldError: React.FC<FieldErrorProps> = ({ formState, name }) => (
  <span className="text-xs text-red-400">
    {formState.fieldErrors[name]?.[0]}
  </span>
);

export { FieldError };
