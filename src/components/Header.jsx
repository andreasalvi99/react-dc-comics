import HeaderLinks from "./props/HeaderLinks";

export default function Header({ links }) {
  return (
    <header>
      <div id="dc-logo" className="py-3">
        <img src="/public/dc-logo.png" alt="dc-logo" />
      </div>
      <div id="navbar" className="">
        <ul>
          {links.map((link, index) => (
            <HeaderLinks
              key={index}
              url={link.url}
              isActive={link.isActive}
              title={link.title}
            />
          ))}
        </ul>
      </div>
    </header>
  );
}
