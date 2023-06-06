import React from "react"
import Image from "next/image"

// const skills = [
//   { skill: "Frugal innovation" },
//   { skill: "Marketplace" },
//    { skill: "Web 3" },
//   { skill: "Machine Learning" },
//   { skill: "Python" },
//   { skill: "Doing MORE with LESS" },
//   { skill: "React" },
//   { skill: "Jugaad" },
//   { skill: "Decentyralize" },
//   { skill: "Git" },
//   { skill: "GitHub" },
//   { skill: "NFTs" },
// ]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-myFuschiaL border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          
          <div className="text-center md:w-1/2 md:text-left">

            <h1 className="text-2xl font-bold mb-6">  </h1>
            {/* <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div> */}

            <Image
              src="/jynwebded.jpg"
              alt=""
              width={325}
              height={525}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
          
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Jean Yves and I am a{" "}
              <span className="font-bold">{"web developer"}</span>,
              <span className="font-bold">{" serial entreprener"}</span>, and have a
              <span className="font-bold">{" disrupter mindset "} </span>
              based in Paris, France.
            </p>
            <br />
            <p>
              5 years ago, I ask my wife about my disruptif idea for movies market. She said that she don&#39;t want to know more about it.
              I forget and put this idéas aside until nowaday, because it&#39;s time for jugaad innovation to rise. Peoples are struggling, even middle class, hard workers.
              We are struggling.
            </p>
            {/* <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to making YouTube videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p> */}
            <br />
            <p>
              {" "}
              <span className="font-bold text-myRed">
                Vid30
              </span>{" "}
              is a Jugaad innovation project which will help peoples (Inclusif), have good impact for the environnement (Green), by using less ressources for more impact (Smart) and more.
             🙂
            </p>
          </div>
          
          
        </div>
      </div>
    </section>
  )
}

export default AboutSection
