import Navbar from "./components/Nav";
import Home from "./components/Home";
import ProjectsSection from "./components/Projects";
import Footer from "./components/Footer";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="bg-[--background] md:px-48 lg:px-20 px-9">
      <Navbar />
      <Home />
      <ProjectsSection />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
