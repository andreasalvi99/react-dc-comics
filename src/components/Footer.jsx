export default function Footer() {
  return (
    <footer>
      <section id="about-us">
        <div className="container text-center">
          <div className="links"></div>
          <div className="bg-img">
            <img src="../../public/dc-logo-bg.png" alt="" />
          </div>
        </div>
      </section>
      <section id="socials" className="bg-dark">
        <div className="container text-center">
          <div id="register-btn">
            <button></button>
          </div>
          <div id="social-media">
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
