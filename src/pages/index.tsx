
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

import services from '../data/services.json'
import skills from '../data/skills.json'
import projects from '../data/projects.json'
import FadeEffects from '../components/animations/FadeEffects';

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
                <div className="grid grid-cols-12 min-h-[100vh] items-center mt-[50px] md:mt-0 gap-5">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="flex-center h-full w-full">
                            <FadeEffects direction='leftToRight'>
                                <img src="/images/vaseekaran/img2.jpg" alt="img" className="max-w-[300px] rounded" />
                            </FadeEffects>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <FadeEffects direction='rightToLeft'>
                            <>
                                <p>Hello World!</p>
                                <h2 className="text-6xl my-4">
                                    <ReactTyped
                                        strings={["I'm Vaseekaran Saminathan."]}
                                        typeSpeed={100}
                                        showCursor
                                    />
                                </h2>
                                <h6 className='text-2xl'>Full Stack Developer</h6>
                            </>
                        </FadeEffects>
                    </div>
                </div>
            </section>
            <section id='about' className='py-10'>
                <div className="grid grid-cols-12 min-h-[100vh] items-center gap-5">
                    <div className="col-span-12 lg:col-span-5">
                        <div className="flex-center h-full w-full">
                            <img src="/images/vaseekaran/img3.jpg" alt="img" className="max-w-[300px] max-h-[400px] rounded" />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <FadeEffects direction='rightToLeft'>
                            <>
                                <h2 className="text-4xl mb-5 text-center md:text-start">
                                    About Me
                                </h2>
                                <p>
                                    I'm a versatile Full Stack Web Developer focused on creating dynamic and user-friendly web applications that provide excellent user experiences.
                                    I'm skilled in HTML, CSS, JavaScript, React.js, Next.js, Express.js, Node.js, MongoDB and Firebase.
                                    I'm enthusiastic about developing interactive and responsive web solutions that meet client needs and go beyond expectations.
                                    I'm committed to continuous learning and staying up-to-date with new technologies to enhance my development skills.
                                    Let's work together to build engaging and effective web solutions that make a difference.
                                </p>
                                <div className='flex gap-3 mt-5'>
                                    {socilaLinks.map(({ title, link, icon }: SocilaLinks) => (
                                        <Link to={link} title={title} target='_blank' className='hover:scale-125'>
                                            {icon}
                                        </Link>
                                    ))}
                                    <SecondaryBtn component={<DescriptionIcon className='mr-2' />} link="/resume/vaseekaran_resume.pdf" title="Resume" />
                                </div>
                            </>
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
                <div className="grid grid-cols-12 mt-10 gap-5 justify-center" >
                    {projects.map((project) => (
                        <div key={project.title} className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    )
}