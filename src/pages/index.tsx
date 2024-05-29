
import { ReactElement } from 'react';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

import Section from '../components/Section';
import SecondaryBtn from '../components/buttons/Secondary';
import ServiceCard from '../components/cards/ServiceCard';
import SkillCard from '../components/cards/SkillCard';
import ProjectCard from '../components/cards/ProjectsCard';
import FadeEffects from '../components/animations/FadeEffects';

import services from '../data/services.json'
import skills from '../data/skills.json'
import projects from '../data/projects.json'
import { Button } from '@mui/material';

interface SocilaLinks {
    title: string,
    link: string,
    icon: ReactElement
}

interface ServiceCardDetails {
    title: string,
    description: string,
    techStack: string
}

const socilaLinks = [
    {
        title: "Email",
        link: "mailto:vaseekaransaminathan@gmail.com",
        icon: <EmailIcon />
    },
    {
        title: "Github",
        link: "https://github.com/Vaseekaran-S",
        icon: <GitHubIcon />
    },
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/vaseekaran-saminathan",
        icon: <LinkedInIcon />
    },
    {
        title: "Twitter",
        link: "https://twitter.com/Vasi_Saminathan",
        icon: <XIcon />
    },
    {
        title: "Instagram",
        link: "https://www.instagram.com/vasi_senaikondar/",
        icon: <InstagramIcon />
    }
]


export const Home = () => {
    return (
        <div className="text-white">
            <section className='py-10'>
                <div className="grid grid-cols-12 lg:min-h-[100vh] lg:items-center mt-[50px] md:mt-0 gap-5">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="flex-center h-full w-full">
                            <FadeEffects direction='leftToRight'>
                                <img src="/images/vaseekaran/img2.jpg" alt="img" className="max-w-[300px] rounded" />
                            </FadeEffects>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <FadeEffects direction='rightToLeft'>
                            <div className='text-center lg:text-start'>
                                <p>Hello World!</p>
                                <h2 className="text-6xl my-4">
                                    <ReactTyped
                                        strings={["I'm Vaseekaran Saminathan"]}
                                        typeSpeed={30}
                                        showCursor={false}
                                    />
                                </h2>
                                <h6 className='text-2xl mb-8'>
                                    <ReactTyped strings={["Full Stack Developer", "Software Developer", "Digital Marketer", "Passinate Freelancer"]} loop={true} typeSpeed={100} showCursor/>
                                </h6>
                                <div className="flex items-center gap-4">
                                    <a href='/#contact' className='text-black bg-white rounded px-2 py-1 font-medium'>Create a Project</a>
                                    <a href='mailto:vaseekaransaminathan@gmail.com' className='font-medium'>Email Me</a>
                                </div>
                            </div>
                        </FadeEffects>
                    </div>
                </div>
            </section>
            <section id='about' className='py-10'>
                <div className="grid grid-cols-12 lg:min-h-[100vh] lg:items-center gap-5">
                    <div className="col-span-12 lg:col-span-5">
                        <div className="flex-center h-full w-full">
                            <img src="/images/vaseekaran/img3.jpg" alt="img" className="max-w-[300px] max-h-[400px] rounded" />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <FadeEffects direction='rightToLeft'>
                            <div className='text-center lg:text-start'>
                                <h2 className="text-4xl mb-5 text-center lg:text-start">
                                    About Me
                                </h2>
                                <p>
                                    I'm a versatile Full Stack Web Developer focused on creating dynamic and user-friendly web applications that provide excellent user experiences.
                                    I'm skilled in HTML, CSS, JavaScript, React.js, Next.js, Express.js, Node.js, MongoDB and Firebase.
                                    I'm enthusiastic about developing interactive and responsive web solutions that meet client needs and go beyond expectations.
                                    I'm committed to continuous learning and staying up-to-date with new technologies to enhance my development skills.
                                    Let's work together to build engaging and effective web solutions that make a difference.
                                </p>
                                <div className='gap-3 mt-5 flex-center lg:justify-start'>
                                    {socilaLinks.map(({ title, link, icon }: SocilaLinks) => (
                                        <Link key={link} to={link} title={title} target='_blank' className='hover:scale-125'>
                                            {icon}
                                        </Link>
                                    ))}
                                    <SecondaryBtn component={<DescriptionIcon className='mr-2' />} link="/resume/vaseekaran_resume.pdf" title="Resume" />
                                </div>
                            </div>
                        </FadeEffects>
                    </div>
                </div>
            </section>
            <Section id='services' title="What I Do?" subTitle="SERVICES">
                <div className="grid grid-cols-12 mt-10 gap-8" >
                    {services.map((service: ServiceCardDetails) => (
                        <div key={service?.title} className="col-span-12 md:col-span-6 lg:col-span-4">
                            <ServiceCard {...service} />
                        </div>
                    ))}
                </div>
            </Section>
            <Section id='skills' title="My Tech Stack" subTitle="Skills">
                <div className="grid grid-cols-12 mt-10 gap-6 justify-center" >
                    {skills.map((data) => (
                        <div key={data?.skill} className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                            <SkillCard {...data} />
                        </div>
                    ))}
                </div>
            </Section>
            <Section id='projects' title='My Projects' subTitle='Projects'>
                <>
                <div className="grid grid-cols-12 mt-10 gap-5 justify-center" >
                    {projects.slice(0, 4).map((project) => (
                        <div key={project.title} className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3">
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link to='/projects' className='mt-4 text-black bg-white rounded p-2 font-medium'>View All</Link>
                </div>
                </>
            </Section>
        </div>
    )
}