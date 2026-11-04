import { createTask, deleteTask, getTasks } from "@/lib/tasks";
export default async function TodoApp() {
  const tasks = await getTasks();
  return (
    <>
      <form action={createTask}>
        <label>
          New task: <input name="title" />
        </label>
        <button>Submit</button>
      </form>
      <ul>
        {tasks.map((task, id) => (
          <form action={deleteTask.bind(null, id)} key={id}>
            <li>{task.title}</li>
            <button>Delete task</button>
          </form>
        ))}
      </ul>
    </>
  );
}

/*
export default async function () {
  const tasks = await getTasks();
  return (
    <section>
      <h1>Mes taches</h1>

      <pre>{JSON.stringify(tasks)}</pre>

      <ul className="list-disc list-inside">
        {tasks.map((task, id) => (
          <li>{task}</li>
        ))}
      </ul>

      <form action={createTask}>
        Tache: <input name="input_id" />
        <button>Ajouter</button>
      </form>
      <ul>
        {tasks.map((task, id) => (
          <form action={deleteTask.bind(null, id)} key={id}>
            <li>{task}</li>
            <button>Delete task</button>
          </form>
        ))}
      </ul>
    </section>
  );
}
  */
