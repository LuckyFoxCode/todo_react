export interface CategoriesProps {
  id: string;
  title: string;
  isActive: boolean;
  colorTitle: string;
}

export interface TasksProps {
  id: string;
  description: string;
  isDone: boolean;
}

export interface RadioColorsProps {
  color: string;
  isActive: boolean;
}
