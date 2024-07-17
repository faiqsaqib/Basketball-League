import About from "./About";
import "./Navbar.css";
import Team from "./Team";
import Tournament from "./Tournament";
import Navbar from "./navbar";

export function HomePage() {
  return (
    <>
      {/* ----------- Navbar Section ----------- */}

      <Navbar />

      {/* ----------- Home Section ----------- */}

      <header>
        <section className="body-font px-14 home-page">
          <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center justify-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex pt-12 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1
                className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white amazing"
                style={{ width: "580px" }}
              >
                Welcome to LCO
                <br className="hidden lg:inline-block" />
                <h1 className="">Basketball Tournament</h1>
              </h1>

              <p className="mb-8 leading-relaxed text-white font-mono font-semibold w-96">
                Welcome to the LCO Basketball League website, your ultimate hub
                for all things basketball in the LCO community. Join our vibrant
                community, connect with players, and celebrate the spirit of the
                game!
              </p>
              <div className="flex justify-center">
                <button className=" inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  MORE INFO..
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2  first-img mt-16">
              <img
                className="object-cover object-center first-img"
                alt="hero"
                src="../../public/sports-logo-template.png"
              />
            </div>
          </div>
        </section>
      </header>

      <main>
        {/* ----------- About Section ----------- */}

        <About />

        {/* ----------- Tournament Section ----------- */}

        <Tournament />

        {/* ----------- Team Section ----------- */}

        <Team />
      </main>
      {/* <footer>
              <p>&copy; 2024 LCO Basketball Tournament</p>
            </footer> */}
    </>
  );
}
