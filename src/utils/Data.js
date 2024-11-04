import { FaReact, FaAws } from 'react-icons/fa';
import { SiTensorflow, SiCashapp } from 'react-icons/si';

export const Skills = [
    {
        id: 0,
        tech: 'ReactJS',
        shortTech: 'React',
        icon: <FaReact />
    },
    {
        id: 1,
        tech: 'AWS',
        icon: <FaAws />
    },
    {
        id: 2,
        tech: 'Machine Learning',
        shortTech: 'ML',
        icon: <SiTensorflow /> 
    },
    {
        id: 3,
        tech: 'Financial Analysis',
        shortTech: 'FA',
        icon: <SiCashapp />
    },
];

export const projectDetails = [
    {
        id: 0,
        project_name: "CFR Kuhn Poker Bot",
        project_desc: "A bot implementing Counterfactual Regret Minimization (CFR) to simulate and optimize strategies for Kuhn Poker. The bot adapts to various opponent types—passive, aggressive, and balanced—while aiming to approximate Nash equilibrium. Features performance tracking and win rate visualizations, making it a powerful tool for studying game theory in simplified poker scenarios.",
        tech_stacks: ['Python', 'CFR Algorithm', 'Game Theory'],
        project_image: '/Project1.png', 
        project_link: 'https://github.com/A-Dhawan7/CFR_Kuhn_Poker',
        reverse: false
    },
    {
        id: 1,
        project_name: "ASL Lingo Language Learning App",
        project_desc: "A Duolingo-inspired language-learning platform integrating machine learning for adaptive learning paths and American Sign Language (ASL) recognition. The app offers interactive lessons with real-time tracking and features secure user authentication. Utilizes PyTorch, TensorFlow, and IBM Cloud services for scalable learning experience and computer vision functionalities.",
        tech_stacks: ['React.js', 'PyTorch', 'TensorFlow', 'IBM Cloud', 'Drizzle ORM', 'Clerk'],
        project_image: '/Project2.png', 
        project_link: 'https://asl-lingoo.vercel.app/',
        reverse: true 
    }
];

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home',
    },
    {
        id: 1,
        name: 'My Skills',
        href: 'skills',
    },
    {
        id: 2,
        name: 'My Projects',
        href: 'Projects',
    },
    {
        id: 3,
        name: 'Contact Me',
        href: 'Contact',
    },
];