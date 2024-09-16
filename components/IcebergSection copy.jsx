'use client'; // this is a client component

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { SiLinktree } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from 'react-icons/ai';

const services = [
  {
    name: 'VDTK is a centralised, trusted SaaS.',
    description: "I'm putting my knowledge on frugal innovation into practice.",
    linkedin:
      'https://www.linkedin.com/feed/update/urn:li:activity:7021414724961521664',
    link: 'https://linktr.ee/jynadal',
  },
  {
    name: 'Bankable marketplace',
    description:
      'The primary and secondary market to buy, sell and mint your dMovies (RWA+ movie). Getting money is the cherry on the cake.',
    linkedin:
      'https://www.linkedin.com/posts/vid30_top-nft-use-cases-activity-7022331042980089856-L7qR?utm_source=share&utm_medium=member_desktop',
    link: 'https://linktr.ee/jynadal',
  },
  {
    name: 'Vid30: Your streaming platform is not an insult',
    description:
      ' Working with partner like Vid30 by Kody, Vid30 by Samsung and we are open for more partners.',
    linkedin: 'http://bit.ly/3ljLO8M',
    link: 'https://linktr.ee/jynadal',
  },
];

const IcebergSection = () => {
  return (
    <section id="blog">
      <h2 className="my-10 text-center font-bold text-4xl">
        Vid30, VDTK and Bankable services
        <hr className="w-6 h-1 mx-auto my-4 colors: bg-myRed border-0 rounded"></hr>
      </h2>
      <p className="text-xl text-center leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
        Favorite movies on DVDs, video tape or else, we can help you to watch
        them at anytime and everywhere on your laptop, mobile phone or
      </p>

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
            <span className="font-bold">{' serial entreprener'}</span> and with
            a<span className="font-bold">{' flibuster mindset '} </span>
            ready to build awesome project.
            <span className="font-bold">{' Are you with me?'}</span>
            <br />
          </p>
          <br />
          <p>
            One year ago, people laught when I pitch them. I am still working on
            my project, structuring and iterating.
            <br />
            <span className="font-bold">
              {
                ' Do you know how hard it is to coding after difficult working days by carrying heavy packages in a warehouse?'
              }
            </span>
            <br /> I took advise, do hackathon to learn and networking on major
            conference.
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
            <span className="font-bold text-myRed">VDTK</span> The backend with
            Proof of Reserve, Real World Asset, Computing and Storage Provider,
            ... <br />
            <span className="font-bold text-myRed">Bankable</span> The
            marketplace to sell RWA(movies) and more features. So 🙂!
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-28">
        {services.map((service, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{service.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {service.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={service.linkedin} target="_blank">
                        <BsLinkedin
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>

                      <Link href={service.link} target="_blank">
                        <SiLinktree
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IcebergSection;
