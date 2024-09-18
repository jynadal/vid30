'use client'; // this is a client component
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="md:mt-4 flex flex-row items-center justify-center">
        {/* <h1 className="block text-4xl font-bold mt-6 md:mt-0 md:text-5xl">
          Decentralised streaming plateform!!!!!
        </h1> */}
      </div>
      <br />
      <br />

      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 mt-20 sm:py-3 md:py-4 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-4 md:w-3/5">
          <h1 className="block text-4xl font-bold mt-20 md:mt-0 md:text-5xl">
            Do you still have{' '}
            <span className="font-semibold text-myRed">DVDs</span> and{' '}
            <span className="font-semibold text-myRed">video tapes</span>?
          </h1>
          <br />
          {/* Save now and waiting to get more! */}
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            {' '}
            <span className="font-semibold text-myRed">Vid30 </span>
            is the first streaming plateform on web3 for movie buff.
            <br />
            If you have your favorite movies on DVDs or else, we can help you to
            watch them at anytime and everywhere on your laptop, mobile phone or
            smart TV.
            <br />
            You can have some great time with familys and friends, good
            nostalgical memory, save time, money and hoppefully getting more.
            <br />
          </p>
          <p className="text-lg font-bold mt-4 mb-6 md:text-2xl">
            If else you aren&#39;t interresting and want to rid thoses films.
            <br />
            <span className="text-myRed">
              Just ask and we&#39;ll get rid on it for our users.
            </span>
          </p>
          <br />
        </div>

        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/mascotteVid30.jpg"
            alt="vid30 image"
            width={525}
            height={525}
            className="full shadow-2xl"
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-center my-10">
        <Link
          href="https://linktr.ee/jynadal"
          target="_blank"
          to="https://linktr.ee/jynadal"
          className="text-center font-bold text-2xl text-neutral-100 px-6 py-3 bg-myRed  rounded shadow hover:bg-myFuschiaL"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Lets schedule a call
        </Link>
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
  );
};

export default HeroSection;
