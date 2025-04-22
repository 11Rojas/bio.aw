import React from "react";
import { Link } from "react-router"; // Corrección en la importación

interface NavItem {
  label: string;
  path: string;
}

const Header: React.FC = () => {
  const navLinks: NavItem[] = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Contact",
      path: "/contact",
    },
    {
      label: "Pricing",
      path: "/pricing",
    },
  ];

  return (
    <nav className="p-8 bg-red-500 text-white">
      <div className="flex flex-row justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80">
          <img src="/logo.png" alt="Bio.aw Logo" className="h-8 w-8" />
          <span className="font-bold text-lg">Bio.aw awe</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link 
                to={item.path}
                className="hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;