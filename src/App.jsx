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

export default function App() {
  return (
    <>
      <Header links={navbarLinks} />
      <Main />
      <Banner />
      <Footer />
    </>
  );
}
