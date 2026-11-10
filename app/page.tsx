import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ul className="flex space-x-4">
          <li>
            <a href="/firstPage" className="hover:text-gray-400">
              My First Page
            </a>
          </li>
          <li>
            <a href="/Cv" className="hover:text-gray-400">
              Mon cv
            </a>
          </li>
          <li>
            <a href="/todo" className="hover:text-gray-400">
              Todo (tasks)
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:text-gray-400">
              Mon blog
            </a>
          </li>
          <li>
            <a href="/shop" className="hover:text-gray-400">
              Shop (crud examples)
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
