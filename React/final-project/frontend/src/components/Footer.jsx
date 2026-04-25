function Footer() {
    return (
        <footer className="bg-rose-900 text-stone-950 text-center">
        <p className="font-mono text-2xl py-6">Information and socials</p>
        <div className="container grid md:grid-cols-12 grid cols-1 gap-7 mx-auto py-4 px-9 text-center">

            {/*Osoite*/}
            <div className="lg:col-span-4 col-span-4">
                <h3 className="font-mono text-2xl p-4">Company Address</h3>
                <p>GameRentals</p>
                <p>Example Street</p>
                <p>Example City</p>
                <p>Open: 10:00-18:00</p>
                <p>GameRentals@email.com</p>
            </div>

            {/*Some*/}
            <div className="lg:col-span-4 col-span-4">
                <h4 className="font-mono text-2xl p-4">Socials</h4>
                <a href="#" className="block hover:underline">Instagram</a>
                <a href="#" className="block hover:underline">Facebook</a>
                <a href="#" className="block hover:underline">Discord</a>
            </div>

            {/*Tekijänoikeuskohta*/}
            <div className="lg:col-span-4 col-span-4">
                <h5 className="p-4 font-mono text-2xl">@Copyright</h5>
                <p>Antti Ranta</p>
            </div>
        </div>
    </footer>
    );
}

export default Footer;