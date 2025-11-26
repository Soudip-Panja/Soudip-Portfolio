import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import "./Styles.css";

function App() {
  return (
    <>
      <Navbar />
      <section
        style={{ backgroundColor: "var(--main-bg-color)", minHeight: "100vh" }}
      >
        <div className="container">
          <Home />
          <About />
          <Portfolio />
          <Contact />
        </div>
      </section>
    </>
  );
}

export default App;
