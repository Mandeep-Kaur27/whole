import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DetailCollection from "./pages/DetailCollection";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import Explore from "./pages/Explore";
import Collections from "./pages/Collections";
import DetailArt from "./pages/DetailArt";
import Blog from "./pages/Blog";
import DetailBlog from "./pages/DetailBlog";
import HelpCenter from "./pages/HelpCenter";
import AuthorCollector from "./pages/AuthorCollector";
import { useEffect } from "react";

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
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/user-page":
        title = "";
        metaDescription = "";
        break;
      case "/explore":
        title = "";
        metaDescription = "";
        break;
      case "/collections":
        title = "";
        metaDescription = "";
        break;
      case "/detail-art":
        title = "";
        metaDescription = "";
        break;
      case "/blog":
        title = "";
        metaDescription = "";
        break;
      case "/detail-blog":
        title = "";
        metaDescription = "";
        break;
      case "/help-center":
        title = "";
        metaDescription = "";
        break;
      case "/author-collector":
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
      <Route path="/" element={<DetailCollection />} />
      <Route path="/home" element={<Home />} />
      <Route path="/user-page" element={<UserPage />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/detail-art" element={<DetailArt />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/detail-blog" element={<DetailBlog />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/author-collector" element={<AuthorCollector />} />
    </Routes>
  );
}
export default App;
