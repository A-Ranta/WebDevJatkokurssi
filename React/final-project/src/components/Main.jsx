import shelf from "../assets/shelf.jpg";
import closet from "../assets/closet.jpg";

function Main() {
    return (
        <main className="flex-grow p-6 bg-gray-300 text-center text-4xl">
            Welcome to GameRentals!

            <section>
                <h2 className="text-lg">
                    Rent our games to try out before deciding to buy a new game
                </h2>

                <p className="text-lg"
                >We have a wide collection of older and newer games for many platforms available for rent
                </p>

                {/*2 kuvaa vierekkäin */}
                <div className="flex flex-col md:flex-row gap-6 p-8 items-center justify-center">
                    <div className="w-full max-w-xs md:max-w-sm aspect-[5/3] overflow-hidden rounded-lg">
                        <img className="w-full h-full object-cover" src={shelf} alt="GameShelf" />
                    </div>

                    <div className="w-full max-w-xs md:max-w-sm aspect-[5/3] overflow-hidden rounded-lg">
                        <img className="w-full h-full object-cover" src={closet} alt="GameCloset" />
                    </div>
                </div>

                <p className="text-lg">Click the button below to start browsing our game selection ↓</p>

               <Link to="/order">OrderPage</Link> 

                <button className="hover:underline hover:bg-zinc-700 bg-zinc-600 text-stone-950 m-4 px-4 py-2 rounded-full">
                    Start browsing
                </button>
            </section>
        </main>
    );
}

export default Main;