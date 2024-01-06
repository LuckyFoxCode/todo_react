import clsx from 'clsx';

interface InputProps {
  type: 'text' | 'password';
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  className,
  value,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={clsx(
        'grow bg-slate-100 px-3 py-2 rounded-lg focus:outline-cyan-500 text-cyan-500',
        className,
      )}
    />
  );
};
