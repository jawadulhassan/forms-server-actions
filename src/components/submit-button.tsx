"use client";

import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  label: string;
  loading: React.ReactNode;
};

const SubmitButton = ({ label, loading }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="border-2 rounded-full p-2 bg-blue-500 text-white border-white"
    >
      {pending ? loading : label}
    </button>
  );
};

export { SubmitButton };
