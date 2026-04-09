import { Link } from "react-router-dom";
import { useState } from 'react'

/*import './App.css'*/
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function HomePage() {
    return (
         <>
              <Header />
              <Main />
              <Footer />
            </>
    )
}

export default HomePage;