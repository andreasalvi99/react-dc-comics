import HeaderLink from "./HeaderLink";

export default function HeaderLinksList({ items }) {
  return (
    <>
      <div id="dc-logo" className="py-3">
        <img src="/public/dc-logo.png" alt="dc-logo" />
      </div>
      <div id="navbar" className="">
        <ul>
          {items.map((link, index) => (
            <HeaderLink
              key={index}
              url={link.url}
              isActive={link.isActive}
              title={link.title}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
