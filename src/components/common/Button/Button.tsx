import clsx from 'clsx';
import { Icon, IconType } from '../Icon';
import s from './Button.module.scss';

interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit';
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
  iconName?: IconType;
  iconSize?: number;
  iconFill?: string;
  iconStyle?: React.CSSProperties;
  withIcon?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  title,
  disabled,
  onClick,
  className,
  iconName,
  iconSize,
  iconFill,
  iconStyle,
  withIcon = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(s.button, className)}
    >
      {withIcon && (
        <Icon
          name={iconName}
          size={iconSize}
          fill={iconFill}
          style={iconStyle}
        />
      )}
      {title}
    </button>
  );
};
