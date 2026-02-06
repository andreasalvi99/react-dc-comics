export default function HeaderLink({ url, isActive, title }) {
  return (
    <li className={"" + (isActive ? " active-bar" : "")}>
      <a href={url} className={"" + (isActive ? " active" : "")}>
        {title}
      </a>
    </li>
  );
}
