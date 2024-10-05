import { MenuItems } from "@/constants/data";
import Image from "next/image";
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="hidden md:block text-teal-600" href="#">
              <Image
                src="/images/logo500-166.png"
                alt="Logo"
                width={170}
                height={60}
              />
            </a>

            <a className="block md:hidden text-teal-600" href="#">
              <Image
                src="/images/logo-mini.png"
                alt="Logo"
                width={60}
                height={60}
              />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {MenuItems.map((item) => (
                  <li key={item.id}>
                    <a
                      className="text-white text-md transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      {item.title}{" "}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className=" sm:flex">
                <a
                  className="rounded-md bg-maincolor-1 px-5 py-2.5 text-sm font-medium text-white"
                  href="#"
                >
                  Prenez un rendez-vous
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
