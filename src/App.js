import "./App.css";
import AuthorSaying from "./components/author-saying";
import Benefits from "./components/benefits";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import SaveWorld from "./components/saveWorld";
import SaveWorldTwo from "./components/saveWorldTwo";
import ShowcaseOne from "./components/showcase-1";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navigation /> */}
      <Hero />
      <ShowcaseOne />
      <Benefits />
      <Projects />
      <SaveWorld />
      <SaveWorldTwo />
      <AuthorSaying />
      <Footer />
    </div>
  );
}

export default App;
