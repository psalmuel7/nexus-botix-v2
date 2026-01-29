import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Product", href: "/product" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal" },
];

const Header = () => {
  return (
    <header className="w-full bg-background sticky top-0 left-0 z-[100] shadow-s">
      <div className="flex flex-col py-5 px-5 sm:px-16 gap-6">
        <div className="justify-end hidden sm:flex">
          <Link
            to="/auth"
            className="text-base font-medium text-foreground hover:text-primary transition-colors mr-3"
          >
            Sign in
          </Link>
        </div>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-foreground">
            Nexus Botix
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-base font-normal text-black hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center">
            <Button asChild className="px-8 rounded-sm py-5">
              <Link to="/auth" className="flex items-center gap-2">
                Get started free
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
