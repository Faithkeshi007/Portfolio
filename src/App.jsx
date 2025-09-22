import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <nav className="flex justify-center space-x-6 bg-purple-200 p-4">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>

      <div id="home"><Home /></div>
      <div id="skills"><Skills /></div>
      <div id="experience"><Experience /></div>
      <div id="education"><Education /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
