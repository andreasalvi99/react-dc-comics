export default function Footer() {
  return (
    <footer>
      <section id="about-us">
        <div className="container text-center">
          <div className="links">
            <div className="info">
              <div className="comics">
                <h1 className="fs-4">DC COMICS</h1>
                <ul>
                  <li className="text-start opacity-50">item</li>
                  <li className="text-start opacity-50">item</li>
                  <li className="text-start opacity-50">item</li>
                  <li className="text-start opacity-50">item</li>
                  <li className="text-start opacity-50">item</li>
                  <li className="text-start opacity-50">item</li>
                  <li className="text-start opacity-50">item</li>
                </ul>
              </div>
              <div className="shop">
                <h1 className="fs-4 text-start">SHOP</h1>
                <ul>
                  <li className="text-start opacity-50">item</li>
                  <li className="text-start opacity-50">item</li>
                </ul>
              </div>
            </div>
            <div className="policy">
              <h1 className="fs-4 pl-4">DC</h1>
              <ul>
                <li className="text-start opacity-50">item</li>
                <li className="text-start opacity-50">item</li>
                <li className="text-start opacity-50">item</li>
                <li className="text-start opacity-50">item</li>
                <li className="text-start opacity-50">item</li>
                <li className="text-start opacity-50">item</li>
                <li className="text-start opacity-50">item</li>
                <li className="text-start opacity-50">item</li>
                <li className="text-start opacity-50">item</li>
                <li className="text-start opacity-50">item</li>
                <li className="text-start opacity-50">item</li>
              </ul>
            </div>
            <div className="sites">
              <h1 className="fs-4 pl-4">SITES</h1>
              <ul>
                <li className="text-start opacity-50">item</li>
                <li className="text-start opacity-50">item</li>
                <li className="text-start opacity-50">DC Kids</li>
                <li className="text-start opacity-50">DC Universe</li>
                <li className="text-start opacity-50">DC Power Visa</li>
              </ul>
            </div>
          </div>
          <div className="bg-img">
            <img src="../../public/dc-logo-bg.png" alt="" />
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
            <p className="text-primary fw-bold w-100">FOLLOW US</p>
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
