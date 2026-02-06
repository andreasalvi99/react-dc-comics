import Header from "./components/Header";
import Main from "./components/Main";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const navbarLinks = [
  {
    title: "CHARACTERS",
    url: "#",
    isActive: false,
  },
  {
    title: "COMICS",
    url: "#",
    isActive: true,
  },
  {
    title: "MOVIES",
    url: "#",
    isActive: false,
  },
  {
    title: "TV",
    url: "#",
    isActive: false,
  },
  {
    title: "GAMES",
    url: "#",
    isActive: false,
  },
  {
    title: "COLLECTIBLES",
    url: "#",
    isActive: false,
  },
  {
    title: "VIDEOS",
    url: "#",
    isActive: false,
  },
  {
    title: "FANS",
    url: "#",
    isActive: false,
  },
  {
    title: "NEWS",
    url: "#",
    isActive: false,
  },
  {
    title: "SHOP",
    url: "#",
    isActive: false,
  },
];

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

export default function App() {
  return (
    <>
      <Header links={navbarLinks} />
      <Main />
      <Banner />
      <Footer items={footerItems} />
    </>
  );
}
