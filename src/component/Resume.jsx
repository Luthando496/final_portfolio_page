import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

// Card sub-component
const Card = ({ year, title, institution, description }) => (
  <article className="card px-5 py-6 bg-slate-700 rounded-xl space-y-3 shadow-lg">
    <span className="bg-teal-600 text-white p-2 py-1 rounded-md text-sm font-semibold">{year}</span>
    <h3 className="text-white font-bold text-2xl pt-2">{title}</h3>
    <p className="text-teal-400 text-lg font-light">{institution}</p>
    <p className="text-gray-300 text-base font-light">{description}</p>
  </article>
);

const Resume = () => {
  const education = [
    {
      year: '2019 - 2020',
      title: 'Frontend Development',
      institution: 'LinkedIn Learning',
      description: 'Completed a certificate in frontend development, mastering HTML, CSS, and JavaScript.',
    },
    {
      year: '2020 - 2021',
      title: 'React.js Mastery',
      institution: 'Coursera',
      description: 'Earned a certificate in React.js, focusing on components, hooks, and state management.',
    },
    {
      year: '2014 - 2019',
      title: 'Matric Certificate',
      institution: 'Mfuleni High School',
      description: 'Obtained a Matric Certificate after completing high school education.',
    },
  ];

  const experience = [
    {
      year: '2023 - Present',
      title: 'Frontend Developer',
      institution: 'Freelance',
      description: 'Developed responsive web applications using React, Tailwind CSS, and Next.js for various clients.',
    },
    {
      year: '2022 - 2023',
      title: 'Intern Developer',
      institution: 'ComegetCred Finance',
      description: 'Contributed to building React-based dashboards, learning advanced state management and API integration.',
    },
  ];

  return (
    <section id="resume" className="pt-28 pb-12 bg-slate-900 w-full">
      <h1 className="text-4xl font-bold text-teal-400 text-center">Resume</h1>
      <div className="w-24 my-3 h-1 bg-teal-400 text-center mx-auto rounded-full"></div>

      <div className="mt-[6rem] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Education */}
        <div data-aos="fade-right" className="flex flex-col space-y-8">
          <h2 className="text-3xl text-white text-center font-semibold">My Education</h2>
          {education.map((item, index) => (
            <Card key={`edu-${index}`} {...item} />
          ))}
        </div>

        {/* Experience */}
        <div data-aos="fade-left" className="flex flex-col space-y-8">
          <h2 className="text-3xl text-white text-center font-semibold">My Experience</h2>
          {experience.map((item, index) => (
            <Card key={`exp-${index}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;