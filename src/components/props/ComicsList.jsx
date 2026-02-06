import ComicCard from "./ComicCard";

export default function ComicsList({ items }) {
  return (
    <section id="contents" className="bg-black">
      <div id="jumbotron">
        <button>CURRENT SERIES</button>
      </div>
      <div className="container text-light text-center py-5" id="comics">
        <div className="row row-cols-6 g-4">
          {items.map((comic) => (
            <ComicCard
              key={comic.id}
              thumb={comic.thumb}
              series={comic.series.toUpperCase()}
              title={comic.title}
            />
          ))}
        </div>
        <button className="mt-5">LOAD MORE</button>
      </div>
    </section>
  );
}
