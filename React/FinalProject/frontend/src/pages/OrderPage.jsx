import { Link } from "react-router-dom";


/*import './App.css'*/
import Header from '../components/Header'
import Form from '../components/Form'
import Footer from '../components/Footer'

function OrderPage() {
    return (
        <>
            <Header />
            <Link
                className="block text-center hover:underline bg-zinc-600 px-4 py-2 rounded"
                to="/">
                HomePage
            </Link>
            <Form />
            <Footer />
        </>
    );
}

export default OrderPage;