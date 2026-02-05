import comics from "../../comics";

export default function Main() {
  return (
    <main>
      <section id="contents" className="bg-black">
        <div id="jumbotron">
          <button>CURRENT SERIES</button>
        </div>
        <div className="container text-light text-center py-5" id="comics">
          <div className="row row-cols-6 g-4">
            {comics.map((comic) => (
              <div key={comic.id} className="col">
                <figure className="wrapper">
                  <img src={comic.thumb} alt={comic.title} />
                </figure>
                <p className="fs-6 fw-medium text-white opacity-75 py-2 text-start">
                  {comic.series}
                </p>
              </div>
            ))}
          </div>
          <button className="mt-5">LOAD MORE</button>
        </div>
      </section>
    </main>
  );
}
