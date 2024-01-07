import clsx from 'clsx';

interface ButtonProps {
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset';
  withIcon?: boolean;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  disabled,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'px-3 py-2 bg-slate-100 rounded-lg text-slate-700 font-normal focus:outline-cyan-500',
        className,
      )}
    >
      {children}
    </button>
  );
};
