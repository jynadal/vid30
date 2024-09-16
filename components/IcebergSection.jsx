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
    title: 'Vid30',
    name: ':Your STREAMING PLATEFORM.',
    description:
      ' Working with partner like Vid30 by Kody, Vid30 by Samsung and we are open for more partners.',
    linkedin:
      'https://www.linkedin.com/feed/update/urn:li:activity:7021414724961521664',
    link: 'https://linktr.ee/jynadal',
  },
  {
    title: 'Bankable',
    name: 'the MARKETPLACE',
    description:
      'The primary and secondary market for buying, selling and minting your dMovies (RWA+ movie). Getting money is the cherry on the cake.',
    linkedin:
      'https://www.linkedin.com/posts/vid30_top-nft-use-cases-activity-7022331042980089856-L7qR?utm_source=share&utm_medium=member_desktop',
    link: 'https://linktr.ee/jynadal',
  },
  {
    title: 'VDTK',
    name: 'is a centralised, trusted SaaS',
    description:
      'The hidding part of the Iceberg for all services for Vid30. Computer provider with partners to storing movies and mint Real World Asset for users.',
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
        Vid30 is like an iceberg. We make 3 services in one. Vid30 (the
        dencentralized Streaming plateform) and Bankable the (NFT and RWA
        Marketplace) on the top. The hidding part is VDTK a centralized frugal
        innovation Startup to manage the all.
        <br />
        Your favorite movies on DVDs, video tape or else, we can help you to
        watch them at anytime and everywhere.
      </p>
      <br />

      <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
        <div className="text-center justify-center md:w-1/2 md:text-left">
          <h1 className="text-2xl font-bold mb-6"> </h1>

          <Image
            src="/iceberg.jpg"
            alt=""
            width={623}
            height={1000}
            className="hidden flex-row justify-center md:block md:relative md:bottom-6 mx-auto md:z-0"
          />
        </div>

        <div className="md:w-1/2 ">
          {services.map((service, idx) => {
            return (
              <div key={idx}>
                <h3 className="text-4xl font-bold mb-6">
                  <span className="font-bold text-myRed">{service.title} </span>
                  {service.name}
                </h3>
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
                  <br />
                </div>
                <br />
                <br />
              </div>
            );
          })}
          <br />
        </div>
      </div>
    </section>
  );
};

export default IcebergSection;
