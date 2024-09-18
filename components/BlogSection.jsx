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

const projects = [
  {
    name: '3 in One. Vid30, Bankable and VDTK!',
    description: '2 awesome products managing by the third one.',
    image: '/blog/iceBerg.jpg',
    linkedin: 'http://bit.ly/3ljLO8M',
    link: 'https://linktr.ee/jynadal',
  },
  {
    name: 'Doing MORE with LESS!',
    description: "I'm putting my knowledge on frugal innovation into practice.",
    image: '/blog/moneyball.jpg',
    linkedin:
      'https://www.linkedin.com/feed/update/urn:li:activity:7021414724961521664',
    link: 'https://linktr.ee/jynadal',
  },
  {
    name: 'Save now while waiting to get more',
    description:
      'Save money, times and space. Getting money is the cherry on the cake.',
    image: '/blog/banqueAlim.jpg',
    linkedin:
      'https://www.linkedin.com/posts/vid30_top-nft-use-cases-activity-7022331042980089856-L7qR?utm_source=share&utm_medium=member_desktop',
    link: 'https://linktr.ee/jynadal',
  },
  {
    name: 'Distruption is comming!',
    description:
      'How to disrupt a huge market with a little f*****g flibuster team!',
    image: '/blog/AllOceans11.jpeg',
    linkedin:
      'https://www.linkedin.com/posts/vid30_vid30-planning-to-conquer-a-huge-market-activity-7022205590047219713-ridm?utm_source=share&utm_medium=member_desktop/',
    link: 'https://linktr.ee/jynadal',
  },
];

const ProjectsSection = () => {
  return (
    <section id="blog">
      <h1 className="my-10 text-center font-bold text-4xl">
        Blog
        <hr className="w-6 h-1 mx-auto my-4 colors: bg-myRed border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.linkedin} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>

                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.linkedin} target="_blank">
                        <BsLinkedin
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>

                      <Link href={project.link} target="_blank">
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

export default ProjectsSection;
