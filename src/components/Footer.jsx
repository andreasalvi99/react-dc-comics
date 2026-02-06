import FooterLinksList from "./props/FooterLinksList";

export default function Footer({ items }) {
  return (
    <footer>
      <FooterLinksList elements={items} />
    </footer>
  );
}
