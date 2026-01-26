import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    <header className="w-full bg-background">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-foreground">
          Nexus Botix
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/auth"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Sign in
          </Link>
          <Button asChild>
            <Link to="/auth" className="flex items-center gap-2">
              Get started free
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
