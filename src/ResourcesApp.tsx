import React from 'react';
import NavBar from "./components/NavBar";
import ResourcesPage from "./components/ResourcesPage";
import Footer from "./components/Footer";
import './App.css';

function ResourcesApp() {
    return (
        <>
            <NavBar />
            <ResourcesPage />
            <Footer />
        </>
    );
}

export default ResourcesApp; 