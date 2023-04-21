import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./component/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Home />
      <Plans />
      <Trainers />
      <NotFound />
    </>
  );
}
