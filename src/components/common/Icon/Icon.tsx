import { IconType } from './types';

export interface IconProps {
  name: IconType | undefined;
  size?: number;
  onClick?: () => void;
  className?: string;
  fill?: string;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size,
  fill,
  style,
  onClick,
  className,
}) => {
  switch (name) {
    case 'Plus':
      return (
        <svg
          style={{ ...style }}
          width={size}
          height={size}
          fill={fill}
          className={className}
          onClick={onClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path d="M17.3333 6.66659C17.3333 5.93021 16.7363 5.33325 15.9999 5.33325C15.2635 5.33325 14.6666 5.93021 14.6666 6.66659V14.6666H6.66659C5.9302 14.6666 5.33325 15.2635 5.33325 15.9999C5.33325 16.7363 5.9302 17.3333 6.66659 17.3333H14.6666V25.3333C14.6666 26.0696 15.2635 26.6666 15.9999 26.6666C16.7363 26.6666 17.3333 26.0696 17.3333 25.3333V17.3333H25.3333C26.0696 17.3333 26.6666 16.7363 26.6666 15.9999C26.6666 15.2635 26.0696 14.6666 25.3333 14.6666H17.3333V6.66659Z" />
        </svg>
      );
    default:
      return null;
  }
};
