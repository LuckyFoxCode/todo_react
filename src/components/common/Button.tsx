import clsx from 'clsx';

interface ButtonProps {
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset';
  withIcon?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'px-3 py-2 bg-slate-100 rounded-lg text-cyan-500 focus:outline-cyan-500 ',
        className,
      )}
    >
      {children}
    </button>
  );
};
