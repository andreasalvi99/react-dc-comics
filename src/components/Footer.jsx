export default function Footer({ items, infos }) {
  return (
    <footer>
      <section id="about-us">
        <div className="container text-center">
          <div className="links d-flex flex-column text-white fs-6 flex-wrap text-start justify-content-start">
            {items.map((item, index) => (
              <div key={index} className={item.title}>
                <h1 className="fs-4 fw-bold text-start">
                  {item.title.toUpperCase()}
                </h1>
                <ul>
                  {item.links.map((link, index) => (
                    <li key={index} className="text-start">
                      <a href={link.url} className="text-white opacity-50">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-img">
            <img src="/public/dc-logo-bg.png" alt="" />
          </div>
        </div>
      </section>
      <section id="socials" className="bg-dark p-4">
        <div className="container text-center">
          <div id="register-btn">
            <button className="border-primary border border-3">
              SIGN-UP NOW!
            </button>
          </div>
          <div id="social-media">
            <p className="text-primary fw-bold w-100 fs-4">FOLLOW US</p>
            <ul>
              <li>
                <img src="/footer-facebook.png" alt="" />
              </li>
              <li>
                <img src="/footer-twitter.png" alt="" />
              </li>
              <li>
                <img src="footer-youtube.png" alt="" />
              </li>
              <li>
                <img src="footer-pinterest.png" alt="" />
              </li>
              <li>
                <img src="footer-periscope.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
