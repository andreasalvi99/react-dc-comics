export default function ComicCard({ thumb, title, series }) {
  return (
    <div className="col">
      <figure className="wrapper">
        <img src={thumb} alt={title} />
      </figure>
      <p className="fs-6 fw-medium text-white opacity-75 py-2 text-start">
        {series}
      </p>
    </div>
  );
}
