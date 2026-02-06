import ComicsList from "./props/ComicsList";

export default function Main({ elements }) {
  return (
    <main>
      <ComicsList items={elements} />
    </main>
  );
}
