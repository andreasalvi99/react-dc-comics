export default function Header({ links }) {
  return (
    <header>
      <div id="dc-logo" className="py-3">
        <img src="/public/dc-logo.png" alt="dc-logo" />
      </div>
      <div id="navbar" className="">
        <ul>
          {links.map((link, index) => (
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
