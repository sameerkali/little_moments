
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Overview from "./components/Overview";
import Review from "./components/Review";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/review" element={<Review />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
