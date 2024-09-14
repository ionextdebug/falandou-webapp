export default function Nav() {
  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-black hover:text-greenlight"
                aria-current="page"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-black hover:text-greenlight"
              >
                Diferenciais
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-black hover:text-greenlight"
              >
                Perguntas Frequentes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-black hover:text-greenlight"
              >
                Preço
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-greenlightalt hover:bg-greenlight rounded-lg font-bold hover:text-black"
              >
                Acessar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
