import clsx from 'clsx';
import { RadioColorsProps } from 'utils/types';
import s from './InputRadio.module.scss';

interface InputRadioProps {
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  colors: RadioColorsProps[];
  setColors: React.Dispatch<React.SetStateAction<RadioColorsProps[]>>;
}

export const InputRadio: React.FC<InputRadioProps> = ({
  className,
  onChange,
  colors,
  setColors,
}) => {
  const handleRadioClick = (index: number) => {
    const updateRadioColors = colors.map((color, idx) => {
      if (idx === index) {
        return { ...color, isActive: true };
      } else {
        return { ...color, isActive: false };
      }
    });

    setColors(updateRadioColors);
  };

  return (
    <div className={clsx(s.radioBtn, className)}>
      {colors.map((c, i) => (
        <label key={c.color} htmlFor={c.color} className={s.radioBtn__label}>
          <input
            type="radio"
            id={c.color}
            name={c.color}
            value={c.color}
            checked={c.isActive}
            onChange={onChange}
            onClick={() => handleRadioClick(i)}
            className={s.radioBtn__input}
          />
          <span
            className={s.radioBtn__custom}
            style={{ backgroundColor: c.color }}
          />
        </label>
      ))}
    </div>
  );
};
