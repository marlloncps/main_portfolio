import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/marlloncps",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-8"
        >
          <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
        </svg>
      ),
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/marlloncps",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-8"
        >
          <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
        </svg>
      ),
      label: "LinkedIn",
    },
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=marllon.cps@gmail.com&su=Olá%20Márllon!",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.1em"
          height="2.1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"
          />
        </svg>
      ),
      label: "Email",
    },
    {
      href: "https://discord.com/users/Playz7x", // Link para seu perfil do Discord
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.1em"
          height="2.1em"
          fill="currentColor"
          className="bi bi-discord"
          viewBox="0 0 16 16"
        >
          <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
        </svg>
      ),
      label: "Discord",
      tooltip: "Playz7x",
    },
  ];

  const techs = [
    {
      desc: "Feito com",
      name: "React",
      icon: "../public/svg/react.svg",
      alt: "React Logo",
    },
    {
      desc: "Estilizado com",
      name: "TailwindCSS",
      icon: "/public/svg/tailwindcss.svg",
      alt: "TailwindCSS Logo",
    },
    {
      desc: "Deploy em",
      name: "Vercel",
      icon: "../svg/vercel.svg",
      alt: "Vercel Logo",
    },
  ];

  return (
    <footer className="w-full py-12 border-t border-[#ffffff10]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col lg:items-end items-center space-y-6 gap-9">
            <div className="flex space-x-6 sm:space-x-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="flex flex-col items-center group"
                  aria-label={link.label}
                  title={link.tooltip || ""}
                >
                  <div className="text-[var(--white-icon)] hover:text-[var(--white)]">
                    <div>{link.icon}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-center space-y-6">
            <div className="grid grid-cols-1 gap-3 w-full max-w-xs">
              {techs.map((tech, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-[var(--white-icon)] text-sm">
                    {tech.desc}
                  </span>
                  <img
                    src={tech.icon}
                    alt={tech.alt}
                    className="h-5 w-5 object-contain filter brightness-0 invert opacity-50"
                    loading="lazy"
                  />
                  <span className="text-[var(--white-icon)] text-sm">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#ffffff10]">
          <p className="text-center text-sm text-[var(--white-icon)] space-y-2">
            <span className="block sm:inline">
              © 2025 Portfolio. Todos os direitos reservados.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
