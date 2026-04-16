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
            <Link
                className="block text-center hover:underline bg-zinc-600 px-4 py-2 rounded"
                to="/order"
            >
                OrderPage
            </Link>
            <Footer />
        </>
    )
}

export default HomePage;