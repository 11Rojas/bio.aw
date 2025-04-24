import { ROUTE_PATHS } from "@/routes/routes";
import { MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

interface NavItem {
    label: string;
    path: string;
}

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const navLinks: NavItem[] = [
        { label: "Home", path: ROUTE_PATHS.PUBLIC.HOME },
        { label: "Contact", path: ROUTE_PATHS.PUBLIC.CONTACT },
        { label: "Pricing", path: ROUTE_PATHS.PUBLIC.PRICING }
    ];

    return (
        <header className="sticky top-0 z-50 w-full md:p-8 p-4 flex justify-center">
            <nav className=" flex justify-center px-4 py-3  bg-gradient-to-br  w-full md:w-[50%] ">
                <div className="w-full max-w-6xl flex justify-between items-center px-1 py-3">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 hover:opacity-80 z-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <img
                            src="/logo.png"
                            alt="Bio.aw Logo"
                            className="h-8 w-8"
                        />
                        <span className="font-bold text-white">Bio.aw</span>
                    </Link>

                    {/* Menú Desktop (oculto en móviles) */}
                    <ul className="hidden md:flex gap-8">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <Link
                                    to={item.path}
                                    className="text-white hover:underline font-medium"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Botón Menú Mobile */}
                    <button
                        className="md:hidden text-white focus:outline-none z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                    </button>

                    {/* Menú Mobile */}
                    <div className={`
  fixed inset-0 
  transition-all duration-300 ease-in-out
  flex flex-col items-start
  ${isMenuOpen ? 'opacity-100 backdrop-blur-sm' : 'opacity-0 pointer-events-none backdrop-blur-none'}
  md:hidden z-40 pt-24 px-8
  bg-black/30  /* Fondo semi-transparente */
`}>
                        <ul className="flex flex-col gap-6 w-full">
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        to={item.path}
                                        className="text-lg font-medium text-white hover:text-red-400 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;