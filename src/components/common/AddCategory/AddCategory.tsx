import { radioColors } from 'data/radio-colors';
import { useState } from 'react';
import { CategoriesProps, RadioColorsProps } from 'utils/types';
import { Button } from '../Button';
import { Input } from '../Input';
import { InputRadio } from '../InputRadio';
import s from './AddCategory.module.scss';

interface AddCategoryProps {
  setData: React.Dispatch<React.SetStateAction<CategoriesProps[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddCategory: React.FC<AddCategoryProps> = ({
  setData,
  setShowModal,
}) => {
  const [colors, setColors] = useState<RadioColorsProps[]>(radioColors);
  const [inputVal, setInputVal] = useState<string>('');
  const [inputCol, setInputCol] = useState<string>('');

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputVal(e.target.value);

  const getInputColor = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputCol(e.target.name);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCategory = {
      id: crypto.randomUUID(),
      title: inputVal,
      colorTitle: inputCol,
      isActive: false,
    };

    setData((prev) => [...prev, newCategory]);
    setInputVal('');
    setShowModal((prev) => !prev);
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Name category"
        className={s.form__input}
        onChange={getInputValue}
        value={inputVal}
      />
      <InputRadio
        className={s.form__radio}
        colors={colors}
        setColors={setColors}
        onChange={getInputColor}
      />
      <Button
        type="submit"
        title="Add"
        disabled={inputVal.length === 0}
        className={s.form__btn}
      />
    </form>
  );
};
