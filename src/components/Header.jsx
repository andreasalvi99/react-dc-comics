const navbarLinks = [
  {
    title: "CHARACTERS",
    URL: "#",
  },
  {
    title: "COMICS",
    URL: "#",
  },
  {
    title: "MOVIES",
    URL: "#",
  },
  {
    title: "TV",
    URL: "#",
  },
  {
    title: "GAMES",
    URL: "#",
  },
  {
    title: "COLLECTIBLES",
    URL: "#",
  },
  {
    title: "VIDEOS",
    URL: "#",
  },
  {
    title: "FANS",
    URL: "#",
  },
  {
    title: "NEWS",
    URL: "#",
  },
  {
    title: "SHOP",
    URL: "#",
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
            <li key={link.index}>
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
