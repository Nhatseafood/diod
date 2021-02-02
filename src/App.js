import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectsScreen from "./screens/ProjectsScreen";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/projects" component={ProjectsScreen} />
      <Route path="/who" component={AboutScreen} />
      <Route path="/contact" component={ContactScreen} />
      <Route path="/" component={HomeScreen} exact />
      <Footer />
    </Router>
  );
}

export default App;
