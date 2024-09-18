'use client'; // this is a client component

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const skills = [
  { skill: 'Frugal innovation' },
  { skill: 'Marketplace' },
  { skill: 'Web 3' },
  { skill: 'Jugaad' },
  { skill: 'Decentyralize' },
  { skill: 'Smart TV' },
  { skill: 'NFTs' },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h2 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-myFuschiaL border-0 rounded"></hr>
        </h2>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="text-center justify-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6"> </h1>

            <Image
              src="/jynwebded.jpg"
              alt=""
              width={325}
              height={525}
              className="hidden flex-row justify-center md:block md:relative md:bottom-6 mx-auto md:z-0"
            />

            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-center">
              <br />
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              GM, hello world. Let&#39;s prompt!
            </h1>
            <p>
              My name is Jean Yves and I am a{' '}
              <span className="font-bold">{'CEO and technical founder '}</span>{' '}
              of, <span className="font-bold text-myRed">Vid30</span> based in
              Paris, France.
              <br />
              I&#39;m also a{' '}
              <span className="font-bold">{' real cinephile'}</span>,
              <span className="font-bold">{' serial entreprener'}</span> and
              with a<span className="font-bold">{' flibuster mindset '} </span>
              ready to build awesome project.
              <span className="font-bold">{' Are you with me?'}</span>
              <br />
            </p>
            <br />
            <p>
              One year ago, people laught when I pitch them. I am still working
              on my project, structuring and iterating.
              <br />
              <span className="font-bold">
                {
                  ' Do you know how hard it is to coding after difficult working days by carrying heavy packages in a warehouse?'
                }
              </span>
              <br /> I took advise, do hackathon to learn and networking on
              major conference.
            </p>
            <br />
            {/*
            <p>
              Thanks to Paris Blockchain Week, AWS ChainLink, theta Network,
              Samsung, Sony, ... .
            </p> */}

            <p>
              {' '}
              <span className="font-bold text-myRed">Vid30</span> is about to
              launch with three product in one. <br />
              <span className="font-bold text-myRed">VDTK</span> The backend
              with Proof of Reserve, Real World Asset, Computing and Storage
              Provider, ... <br />
              <span className="font-bold text-myRed">Bankable</span> The
              marketplace to sell RWA(movies) and more features. So 🙂!
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center mt-4">
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
            Let&#39;s take a call!
          </Link>

        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;
