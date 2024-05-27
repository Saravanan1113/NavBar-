import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PageOne from "./Pages/PageOne";
import PageTwo from "./Pages/PageTwo";
import PageThree from "./Pages/PageThree";
import PageCTA from "./Pages/PageCTA";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
          <Route path="/page-three" element={<PageThree />} />

          <Route path="/page-cta" element={<PageCTA />} />
          {/* <Home />
          </Route>
          <Route path="/page-one">
            <PageOne />
          </Route>
          <Route path="/page-two">
            <PageTwo />
          </Route>
          <Route path="/page-three">
            <PageThree />
          </Route>
          <Route path="/page-cta">
            <PageCTA />
          </Route> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
