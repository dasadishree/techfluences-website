import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import './App.css';
import Footer from "./components/Footer";

function BlogApp(){
    return (<>
        <NavBar/>
    <Projects/>
    <Footer/>
    </>)
}

export default BlogApp;