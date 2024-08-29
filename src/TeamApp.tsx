import NavBar from "./components/NavBar";
import './App.css';
import Footer from "./components/Footer";
import TeamPage from "./components/TeamPage";
import TeamBanner from "./components/TeamBanner";

function TeamApp(){
    return (<>
        <NavBar/>
        <TeamBanner/>
        <TeamPage/>
    <Footer/>
    </>)
}

export default TeamApp;