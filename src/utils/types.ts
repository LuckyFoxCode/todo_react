export interface TodosProps {
  id: string;
  note: string;
  isDone: boolean;
}

export interface FoldersProps {
  id: string;
  isActive: boolean;
  folder: string;
  bgColor: string;
  notes: TodosProps[];
}
