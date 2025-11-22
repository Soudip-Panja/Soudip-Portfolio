import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./Styles.css";

function App() {
  return (
    <>
      <Navbar />
      <section
        style={{ backgroundColor: "var(--main-bg-color)", minHeight: "100vh" }}
      >
        <Home />
        <About />
      </section>
    </>
  );
}

export default App;
