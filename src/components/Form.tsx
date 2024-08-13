'use client';

import { useRef } from 'react';

type formProps = {
  children: React.ReactNode;
  action: (FormData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: () => void;
};

const Form = ({ children, action, className, onSubmit }: formProps) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
      onSubmit={onSubmit}
      ref={ref}
    >
      {children}
    </form>
  );
};

export default Form;
