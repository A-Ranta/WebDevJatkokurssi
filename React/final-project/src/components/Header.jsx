import logo from "../assets/GameRentals.png";

function Header() {
    return (
        <header className="bg-rose-900 text-stone-950 text-center items-center">       
        <div className="container grid md:grid-cols-12 grid-cols-1 gap-7 mx-auto py-4 px-9">

            {/* kuva */}
            <div className="lg:col-span-4 col-span-4">
                <img className="mx-auto h-auto w-30 md:w-60" src={logo} alt="GameRentals"/>
            </div>
            
            {/*info */}
            <div className="lg:col-span-4 col-span-4  py-10">
                <h1 className="font-mono text-2xl">GameRentals</h1>
                <p className="text-lg">Easy And Fast Video Game Renting</p>

                <nav className="flex justify-center gap-6 p-4">
                    <a href="#" className="hover:underline hover:bg-zinc-700 text-gray bg-zinc-600 rounded-full px-4 py-2.5">About us</a>
                    <a href="#" className="hover:underline hover:bg-zinc-700 text-gray bg-zinc-600 rounded-full px-4 py-2.5">Game Catalog</a>
                    <a href="#" className="hover:underline hover:bg-zinc-700 text-gray bg-zinc-600 rounded-full px-4 py-2.5">Other</a>
                </nav>
            </div>
            
            {/*hakupalkki*/}
            <div className="lg:col-span-4 col-span-4 flex flex-col justify-center items-center">
                <label htmlFor="search" className="text-lg mb-2">Video Game Search Bar</label>

                <form className="max-w-md w-full">
                    <div className="relative">
                        <input type="search" id="search" className="block w-full px-4 py-2.5 rounded-full"
                            placeholder="Search for a specific game" />

                        <button type="button"
                            className=" hover:underline hover:bg-zinc-700 text-white bg-zinc-600 rounded-full absolute end-1.5 bottom-1.5 px-3 py-1">
                            Search
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </header>
    );
}

export default Header;