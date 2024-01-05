import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { TodosProps } from '@/App';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { toast } from './ui/use-toast';

interface TodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<TodosProps[]>>;
}

const formSchema = zod.object({
  note: zod.string().min(2, {
    message: 'Note must be at least 2 characters',
  }),
});

export const TodoForm: React.FC<TodoFormProps> = ({ setTodos }) => {
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      note: '',
    },
  });

  const handleOnSubmit = (values: zod.infer<typeof formSchema>) => {
    setTodos((prevState) => [
      ...prevState,
      { id: crypto.randomUUID(), note: values.note, isDone: true },
    ]);

    toast({
      title: 'You added new note:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">👉 {values.note}</code>
        </pre>
      ),
    });

    values.note = '';
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnSubmit)}
        className=" bg-transparent border-none flex"
      >
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Edit notes..."
                  {...field}
                  className="w-full focus-visible:ring-cyan-400 mr-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant={'outline'}
          className="focus-visible:ring-cyan-400 ml-2"
        >
          Add note
        </Button>
      </form>
    </Form>
  );
};
