export function Navbar(){
    return (
        <nav className="bg-gra-800 text-white p-4">
            <ul className="flex space-x-4">
                <li>
                    <a href = "/" className="hover:text-gray-400">
                    Home
                    </a>
                </li>
                <li>
                    <a href = "/firstPage" className="hover:text-gray-400">
                    My First Page
                    </a>
                </li>
            </ul>
        </nav>
    )
}