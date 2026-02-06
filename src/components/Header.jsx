import HeaderLinksList from "./props/HeaderLinksList";

export default function Header({ links }) {
  return (
    <header>
      <HeaderLinksList items={links} />
    </header>
  );
}
