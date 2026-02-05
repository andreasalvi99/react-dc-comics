const navbarLinks = [
  {
    title: "CHARACTERS",
    URL: "#",
    isActive: false,
  },
  {
    title: "COMICS",
    URL: "#",
    isActive: true,
  },
  {
    title: "MOVIES",
    URL: "#",
    isActive: false,
  },
  {
    title: "TV",
    URL: "#",
    isActive: false,
  },
  {
    title: "GAMES",
    URL: "#",
    isActive: false,
  },
  {
    title: "COLLECTIBLES",
    URL: "#",
    isActive: false,
  },
  {
    title: "VIDEOS",
    URL: "#",
    isActive: false,
  },
  {
    title: "FANS",
    URL: "#",
    isActive: false,
  },
  {
    title: "NEWS",
    URL: "#",
    isActive: false,
  },
  {
    title: "SHOP",
    URL: "#",
    isActive: false,
  },
];

export default function Header() {
  return (
    <header>
      <div id="dc-logo" className="py-3">
        <img src="/public/dc-logo.png" alt="dc-logo" />
      </div>
      <div id="navbar" className="">
        <ul>
          {navbarLinks.map((link, index) => (
            <li key={index}>
              <a href={link.URL} className="text-black">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
