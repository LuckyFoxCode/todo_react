import clsx from 'clsx';

interface InputProps {
  name?: string;
  value?: string;
  className?: string;
  placeholder: string;
  type: 'text' | 'password' | 'email';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  name,
  type,
  value,
  onChange,
  className,
  placeholder,
}) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={clsx(
        'grow bg-slate-100 px-3 py-2 rounded-lg  text-slate-900 font-medium placeholder:font-normal placeholder:text-slate-300 transition-colors focus:outline-cyan-500 focus:placeholder:text-slate-400',
        className,
      )}
    />
  );
};