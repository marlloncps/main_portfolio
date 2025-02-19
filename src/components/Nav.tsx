import { JSX, useEffect } from "react";

interface NavItem {
  label: string;
  href: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  {
    label: "Início",
    href: "#home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z" />
      </svg>
    ),
  },
  {
    label: "Projetos",
    href: "#projects",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z" />
      </svg>
    ),
  },
  {
    label: "Artigos",
    href: "#articles",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H17V17H7V15Z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  useEffect(() => {
    const handleSmoothScroll = (event: Event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.substring(1);
      const targetElement = document.getElementById(targetId!);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const navLinks = document.querySelectorAll("nav a[href^='#']");
    navLinks.forEach((link) =>
      link.addEventListener("click", handleSmoothScroll)
    );

    const observerOptions = { threshold: 0.6 };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const id = entry.target.getAttribute("id");
          const activeLink = document.querySelector(`nav a[href='#${id}']`);
          if (activeLink) activeLink.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div className="flex justify-center w-full">
      <nav className="fixed flex left-0 right-0 z-[100] bg-[#1414149c] border border-1 border-[var(--white-icon-tr)] backdrop-blur-xl transition-all md:top-0 md:bottom-auto bottom-0 md:w-[22rem] rounded-t-2xl md:rounded-full md:mt-6 md:justify-self-center">
        <div className="container mx-auto flex justify-center items-center p-2">
          <ul className="flex w-full justify-between md:space-x-6 md:justify-center md:gap-12 gap-6">
            {navItems.map((item) => (
              <li key={item.label} className="flex-1 md:flex-none">
                <a
                  href={item.href}
                  className="flex flex-col items-center gap-1 text-[var(--white-icon)] transition-colors text-xs md:text-base"
                >
                  <span className="md:hidden flex items-center justify-center w-6 h-6">
                    {item.icon}
                  </span>
                  <span className="hidden md:inline-block">{item.label}</span>
                  <span className="md:hidden">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
