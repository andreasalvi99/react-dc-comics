const footerItems = [
  {
    title: "dc comics",
    links: [
      { name: "Characters", url: "#" },
      { name: "Comics", url: "#" },
      { name: "Movies", url: "#" },
      { name: "TV", url: "#" },

      { name: "Games", url: "#" },
      { name: "Videos", url: "#" },
      { name: "News", url: "#" },
    ],
  },
  {
    title: "shop",
    links: [
      { name: "Shop DC", url: "#" },
      { name: "Shop DC Collectibles", url: "#" },
    ],
  },
];

const aboutUs = [
  {
    title: "dc",
    links: [
      { name: "Terms Of Use", url: "#" },

      { name: "Privacy Policy (New)", url: "#" },
      { name: "Ad Choices", url: "#" },
      { name: "Advertising", url: "#" },
      { name: "Jobs", url: "#" },
      { name: "Subscriptions", url: "#" },
      { name: "Talent Workshops", url: "#" },
      { name: "CPSC Certificate", url: "#" },
      { name: "Ratings", url: "#" },
      { name: "Shop Help", url: "#" },
      { name: "Contact Us", url: "#" },
    ],
  },
  {
    title: "sites",
    links: [
      { name: "DC", url: "#" },
      { name: "MAD Magazine", url: "#" },
      { name: "DC Kids", url: "#" },
      { name: "DC Universe", url: "#" },
      { name: "DC Power Visa", url: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <section id="about-us">
        <div className="container text-center">
          <div className="links">
            <div className="d-flex flex-column">
              {footerItems.map((item, index) => (
                <div key={index} className={item.title}>
                  <h1 className="fs-4 my-3 fw-bold text-start">
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
            {aboutUs.map((item, index) => (
              <div key={index} className={item.title}>
                <h1 className="fs-4 pl-4 text-start my-3 fw-bold">
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
