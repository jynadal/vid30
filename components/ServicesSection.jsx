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
    image: '/blog/moneyball.jpg',
    linkedin:
      'https://www.linkedin.com/feed/update/urn:li:activity:7021414724961521664',
    link: 'https://linktr.ee/jynadal',
  },
  {
    name: 'Bankable marketplace',
    description:
      'The primary and secondary market to buy, sell and mint your dMovies (RWA+ movie). Getting money is the cherry on the cake.',
    image: '/blog/banqueAlim.jpg',
    linkedin:
      'https://www.linkedin.com/posts/vid30_top-nft-use-cases-activity-7022331042980089856-L7qR?utm_source=share&utm_medium=member_desktop',
    link: 'https://linktr.ee/jynadal',
  },
  {
    name: 'Vid30: Your streaming platform is not an insult',
    description:
      ' Working with partner like Vid30 by Kody, Vid30 by Samsung and we are open for more partners.',
    image: '/blog/platoio.png',
    linkedin: 'http://bit.ly/3ljLO8M',
    link: 'https://linktr.ee/jynadal',
  },

  //   {
  //     name: 'Distruption is comming!',
  //     description:
  //       'How to disrupt a huge market with a little f*****g flibuster team!',
  //     image: '/blog/AllOceans11.jpeg',
  //     linkedin:
  //       'https://www.linkedin.com/posts/vid30_vid30-planning-to-conquer-a-huge-market-activity-7022205590047219713-ridm?utm_source=share&utm_medium=member_desktop/',
  //     link: 'https://linktr.ee/jynadal',
  //   },
];

const ServicesSection = () => {
  return (
    <section id="blog">
      <h1 className="my-10 text-center font-bold text-4xl">
        Services
        <hr className="w-6 h-1 mx-auto my-4 colors: bg-myRed border-0 rounded"></hr>
      </h1>
      <p className="text-xl text-center leading-7 mb-4 text-neutral-600 dark:text-neutral-400"></p>

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

                  <div className=" md:w-1/2">
                    <Link href={service.linkedin} target="_blank">
                      <Image
                        src={service.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
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

export default ServicesSection;
