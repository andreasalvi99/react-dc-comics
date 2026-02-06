export default function HeaderLinks({ url, isActive, title }) {
  return (
    <li className={"" + (isActive ? " active-bar" : "")}>
      <a href={url} className={"" + (isActive ? " active" : "")}>
        {title}
      </a>
    </li>
  );
}
