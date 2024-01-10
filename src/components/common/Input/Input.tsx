import clsx from 'clsx';
import s from './Input.module.scss';

interface InputProps {
  type?: 'text' | 'password';
  name?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  className,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={clsx(s.input, className)}
    />
  );
};
