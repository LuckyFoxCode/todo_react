export interface Category {
  id: string;
  title: string;
  colorTitle: string;
}

export interface Tasks {
  id: string;
  categoryId: string;
  description: string;
  isDone: boolean;
}

export interface RadioColors {
  color: string;
  isActive: boolean;
}

export interface SelectedCategory {
  id: string;
  title: string;
  color: string;
}
