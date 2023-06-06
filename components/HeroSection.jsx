"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
     
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Save now and waiting to get more!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            How {" "}
            <span className="font-semibold text-myRed">
              Vid30{" "}
            </span>
            can help you to move throuth tough times?
            By helping you to do not buy something you ever own.
            You have some favorite movies even on video tape. You can watch them, discuss and comment on them.
            You will have some great time, good nostalgical memory, save time, money and get more.
          </p>
          <Link href="https://linktr.ee/jynadal" target="_blank"
            to="https://linktr.ee/jynadal"
            className="text-neutral-100 font-semibold px-6 py-3 bg-myRed  rounded shadow hover:bg-myFuschiaL"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Know more
          </Link>
        </div>
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/mascotteVid30.jpg"
            alt=""
            width={525}
            height={525}
            className="full shadow-2xl"
          />
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
