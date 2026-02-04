export default function Header() {
  return (
    <header>
      <div id="dc-logo" className="py-3">
        <img src="../../public/dc-logo.png" alt="dc-logo" />
      </div>
      <div id="navbar" className="">
        <ul>
          <li className="fw-bold">CHARACTERS</li>
          <li className="fw-bold">COMICS</li>
          <li className="fw-bold">MOVIES</li>
          <li className="fw-bold">TV</li>
          <li className="fw-bold">SHOP</li>
          <li className="fw-bold">NEWS</li>
          <li className="fw-bold">FANS</li>
          <li className="fw-bold">VIDEOS</li>
          <li className="fw-bold">COLLECTIBLES</li>
          <li className="fw-bold">GAMES</li>
        </ul>
      </div>
    </header>
  );
}
