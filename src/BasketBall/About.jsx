/* eslint-disable react/no-unescaped-entities */
import React from "react";

function About() {
  return (
    <>
      <h1 className="text-white text-center mt-40 font-bold Amazing "  id="about-us">
        Who Are We?
      </h1>
      <section className="text-gray-600  body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded transform transition-transform duration-500 hover:scale-105 hover:rotate-3 hover:translate-x-2 hover:translate-y-2"
            alt="hero"
            src="../../public/artimg-2.png"
            style={{ width: "25%", border: "2px solid white" }}
          />
          <div className="text-center lg:w-2/4 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-400">
              "Our Passion for Basketball"
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400 text-center">
              We are a passionate basketball club committed to promoting the
              sport and organizing exciting tournaments. Our dedicated team
              works tirelessly to create memorable experiences for players and
              fans alike. Join us and be part of an exhilarating journey on and
              off the court.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
