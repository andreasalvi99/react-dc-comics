export default function Footer() {
  return (
    <footer>
      <section id="about-us">
        <div className="container text-center">
          <div className="links">
            <div className="d-flex flex-column">
              <div className="comics">
                <h1 className="fs-4 mb-3 fw-bold">DC COMICS</h1>
                <ul>
                  <li className="text-start opacity-50">Characters</li>
                  <li className="text-start opacity-50">Comics</li>
                  <li className="text-start opacity-50">Movies</li>
                  <li className="text-start opacity-50">TV</li>
                  <li className="text-start opacity-50">Games</li>
                  <li className="text-start opacity-50">Videos</li>
                  <li className="text-start opacity-50">News</li>
                </ul>
              </div>
              <div className="shop">
                <h1 className="fs-4 text-start my-3 fw-bold">SHOP</h1>
                <ul>
                  <li className="text-start opacity-50">Shop DC</li>
                  <li className="text-start opacity-50">
                    Shop DC Collectibles
                  </li>
                </ul>
              </div>
            </div>
            <div className="policy">
              <h1 className="fs-4 pl-4 text-start mb-3 fw-bold">DC</h1>
              <ul>
                <li className="text-start opacity-50">Terms Of Use</li>
                <li className="text-start opacity-50">Privacy Policy (New)</li>
                <li className="text-start opacity-50">Ad Choices</li>
                <li className="text-start opacity-50">Advertising</li>
                <li className="text-start opacity-50">Jobs</li>
                <li className="text-start opacity-50">Subscriptions</li>
                <li className="text-start opacity-50">Talent Workshops</li>
                <li className="text-start opacity-50">CPSC Certificates</li>
                <li className="text-start opacity-50">Ratings</li>
                <li className="text-start opacity-50">Shop Help</li>
                <li className="text-start opacity-50">Contact Us</li>
              </ul>
            </div>
            <div className="sites">
              <h1 className="fs-4 pl-4 text-start mb-3 fw-bold">SITES</h1>
              <ul>
                <li className="text-start opacity-50">DC</li>
                <li className="text-start opacity-50">MAD Magazine</li>
                <li className="text-start opacity-50">DC Kids</li>
                <li className="text-start opacity-50">DC Universe</li>
                <li className="text-start opacity-50">DC Power Visa</li>
              </ul>
            </div>
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
