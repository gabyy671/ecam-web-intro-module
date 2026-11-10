import { addTask, removeTask, getTasks } from "@/lib/tasks";

export default async function TodoApp() {
  const tasks = await getTasks();

  return (
    <>
      <form action={addTask}>
        <label>
          New task: <input name="title" required />
        </label>
        <button type="submit">Submit</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}

            <form action={removeTask.bind(null, task.id)}>
              <button type="submit">Delete task</button>
            </form>
          </li>
        ))}
      </ul>
    </>
  );
}
