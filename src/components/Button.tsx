import clsx from 'clsx';

type buttonProps = {
  type: 'button' | 'submit' | 'reset';
  text: string | React.ReactNode;
  onClick: () => void;
  actionButton?: boolean;
  bgColor?: string;
};

const Button = ({
  type,
  text,
  onClick,
  actionButton,
  bgColor,
  ...props
}: buttonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        actionButton &&
          'text-white hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none',
        `${bgColor} hover:${bgColor} font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none `
      )}
    >
      {text}
    </button>
  );
};

export default Button;
