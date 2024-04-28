
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

import pages from "../../data/pages.json"
import SecondaryBtn from '../buttons/Secondary';

interface SocilaLinks {
    title: string,
    link: string,
    icon: ReactElement
}

interface Pages {
    title: string,
    link: string
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

export const Footer = () => {
    return (
        <div className="pt-10 text-white" id="contact">
            <div className='mb-10'>
                <h2 className='text-xl font-bold underline text-center mb-4'>Contact Me</h2>
                <ul className='text-center gap-5'>
                    <li className='hover:underline mb-1'>
                        <Link to="tel:+919360517438"><CallIcon /> +91 93605 17438 </Link>
                    </li>
                    <li className='hover:underline mb-1'>
                        <Link to="mailto:vaseekaransaminathan@gmail.com">
                            <EmailIcon /> vaseekaransaminathan@gmail.com
                        </Link>
                    </li>
                    <li className='hover:underline mb-1'>
                        <LocationOnIcon /> Thanjavur, Tamil Nadu, India.
                    </li>
                    <li className='flex-center flex-col mt-3'>
                        <div className='flex gap-3 mb-5'>
                            {socilaLinks.map(({ title, link, icon }: SocilaLinks) => (
                                <Link key={link} to={link} title={title} target='_blank' className='hover:scale-125'>
                                    {icon}
                                </Link>
                            ))}
                        </div>
                        <SecondaryBtn component={<DescriptionIcon className='mr-2' />} link="/resume/vaseekaran_resume.pdf" title="Resume" />
                    </li>
                </ul>
            </div>
            <div className="border-t-2 p-7 md:flex justify-between text-center">
                <div className='flex-center gap-3 mb-2'>
                    {pages.map(({ title, link }: Pages) => (
                        <a key={title} href={link} className='hover:underline'>
                            {title}
                        </a>
                    ))}
                </div>
                <p>Copyright ©2024 All rights reserved</p>
            </div>
        </div>
    )
}