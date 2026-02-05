const navbarLinks = [
  {
    title: "CHARACTERS",
    url: "#",
    isActive: false,
  },
  {
    title: "COMICS",
    url: "#",
    isActive: true,
  },
  {
    title: "MOVIES",
    url: "#",
    isActive: false,
  },
  {
    title: "TV",
    url: "#",
    isActive: false,
  },
  {
    title: "GAMES",
    url: "#",
    isActive: false,
  },
  {
    title: "COLLECTIBLES",
    url: "#",
    isActive: false,
  },
  {
    title: "VIDEOS",
    url: "#",
    isActive: false,
  },
  {
    title: "FANS",
    url: "#",
    isActive: false,
  },
  {
    title: "NEWS",
    url: "#",
    isActive: false,
  },
  {
    title: "SHOP",
    url: "#",
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
            <li
              key={index}
              className={"" + (link.isActive ? " active-bar" : "")}
            >
              <a
                href={link.url}
                className={"" + (link.isActive ? " active" : "")}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
