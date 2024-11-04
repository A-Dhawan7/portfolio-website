import React, { useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';

import { 
    BsLinkedin, 
    BsGithub, 
    BsEnvelope 
} from 'react-icons/bs';

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    BlueText,
    ParaText,
    StyledIconContainer,
    ParticlesOverlay,
    Particle
} from '../styles/Global.styled';

import { 
    ShowcaseContainer,
    ShowcaseImageCard,
} from '../styles/Showcase.styled';

import ShowCaseImg from '../assets/aarush.png';

const Showcase = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const generateParticles = () => {
            const newParticles = [];
            for (let i = 0; i < 75; i++) {
                const topPosition = Math.random() * 100;
                const leftPosition = Math.random() * 100;

                if ((topPosition < 25 || topPosition > 75) || (leftPosition < 20 || leftPosition > 80)) {
                    newParticles.push({ top: `${topPosition}%`, left: `${leftPosition}%` });
                }
            }
            setParticles(newParticles);
        };

        generateParticles();
    }, []);

    return (
        <PaddingContainer
            id="Home"
            top="10%"
            bottom="10%"
            left="3%"
            right="10%"
        >
            <ParticlesOverlay>
                {particles.map((particle, index) => (
                    <Particle 
                        key={index} 
                        style={{ top: particle.top, left: particle.left }} 
                    />
                ))}
            </ParticlesOverlay>

            <ShowcaseContainer>
                <FlexContainer
                    align="flex-start"
                    direction="column"
                    style={{ textAlign: 'left' }}
                >
                    <Heading
                        as="h1"
                        size="h2"
                        style={{ fontSize: 'clamp(1.8rem, 3vw + 1rem, 3rem)', textAlign: 'left' }}
                    >
                        <BlueText>Hi, I'm Aarush Dhawan</BlueText>
                    </Heading>
                    <Heading
                        as="h3"
                        size="h3"
                        style={{ fontSize: 'clamp(1.2rem, 1.5vw + 0.5rem, 1.5rem)', textAlign: 'left' }}
                    >
                        <ReactTyped
                            strings={['A Developer', 'A Student', 'An Entrepreneur']}
                            typeSpeed={150}
                            backSpeed={100}
                            loop
                        />
                    </Heading>

                    {/* Hide text on mobile */}
                    <ParaText as="p" className="desktop-only">
                        Dive into my professional journey and explore my passion projects! Connect with me on socials to collaborate and create something amazing together!
                    </ParaText>

                    <FlexContainer gap="1rem">
                        <StyledIconContainer>
                            <BsGithub />
                        </StyledIconContainer>
                        <StyledIconContainer>
                            <BsLinkedin />
                        </StyledIconContainer>
                        <StyledIconContainer>
                            <BsEnvelope />
                        </StyledIconContainer>
                    </FlexContainer>
                </FlexContainer>

                <ShowcaseImageCard>
                    <img 
                        src={ShowCaseImg} 
                        alt="showcase" 
                    />
                </ShowcaseImageCard>
            </ShowcaseContainer>     
        </PaddingContainer>
    );
}

export default Showcase;
