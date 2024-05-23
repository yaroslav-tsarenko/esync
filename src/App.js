import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Support from "./pages/Support";
import About from "./pages/About";
import Regions from "./pages/Regions";
import CountryOptions from "./pages/CountryOptions";
import SignUp from "./pages/SignUp";
import BlogListing from "./pages/BlogListing";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/support":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/regions":
        title = "";
        metaDescription = "";
        break;
      case "/country-options":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/support" element={<Support />} />
      <Route path="/about" element={<About />} />
      <Route path="/regions" element={<Regions />} />
      <Route path="/login" element={<SignUp />} />
      <Route path="/blog" element={<BlogListing />} />
      <Route path="/country-options" element={<CountryOptions />} />
    </Routes>
  );
}
export default App;
