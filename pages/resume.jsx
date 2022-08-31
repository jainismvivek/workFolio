import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Vivek | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Vivek jain</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/vivek-jain-104b79119/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/jainismvivek'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
            CSS <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Medium, Shopify, Fiverr
            </span>
            <span className='px-2'>|</span>remote
          </p>
          <p className='py-1 italic'>Freelance Work (2020 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Chegg India</span>
            <span className='px-2'>|</span>jasola ,Delhi
          </p>
          <p className='py-1 italic'>Subject matter expert(2021 – 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Being a subject matter expert in education technology i  to give the best posible solution to the problem within my experties which in this case was web development. 
            </li>
            <li>
              While writing answers you can always create your own pattern of
              writing and teaching
            </li>
            <li>
              Evaluate the business processes and operations by implementing
              their subject expertise
            </li>
            <li>
              Public outreach and relations for the developers and community
              awareness to training methods.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Optimhire</span>
            <span className='px-2'>|</span>Hyderabad
          </p>
          <p className='py-1 italic'>devrel associate (2020 – 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper flow with smoothness in a community
              that revolves around the product of a company.
            </li>
            <li>
              As developer evangelists i played a crucial role of representing the voice of external
              developers internally and bringing their feedback into our current and upcoming
              product offerings. Come grow the Square developer community!
            </li>
            <li>
              gathered feedback from developers and sharing it with engineering and marketing teams..
            </li>
            <li>
              Created content like documentation, guides, tutorials, and podcasts...
            </li>
            <li>
              my sole purpose  at optimhire was of creating and maintaining a proper flow of engagement with people,
              marketing and reaching out of product, providing support to customers or developers,
              producing documentation and content
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
