import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { TodosProps } from '@/utils/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface TodoFormProps {
  setNotes: React.Dispatch<React.SetStateAction<TodosProps[]>>;
}

const formSchema = z.object({
  note: z.string().min(2).max(50),
});

export const TodoForm: React.FC<TodoFormProps> = ({ setNotes }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      note: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setNotes((prev) => [
      ...prev,
      { id: crypto.randomUUID(), note: values.note, isDone: false },
    ]);

    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center bg-slate-300 rounded-md mb-5 p-5"
      >
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem className="grow">
              <FormControl>
                <Input type="text" placeholder="Edit..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          disabled={Boolean(form.control._defaultValues.note)}
          type="submit"
          className="ml-3"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
