import React from 'react';
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
} from '../styles/Global.styled';

import { 
    ShowcaseContainer,
    ShowcaseImageCard 
} from '../styles/Showcase.styled';

const Showcase = () => {
    return (
        <PaddingContainer
            id="Home"
            top="15%"
            bottom="10%"
            left="3%"
            right="10%"
        >
            <ShowcaseContainer>
                <FlexContainer
                    align="flex-start"
                    direction="column"
                >
                    <Heading
                        as="h1"
                        size="h2"
                    >
                        <BlueText>Hi, I'm Aarush Dhawan</BlueText>
                    </Heading>
                    <Heading
                        as="h3"
                        size="h3"
                    >
                        <ReactTyped
                            strings={[
                                'A Developer',
                                'A Student',
                                'An Entrepreneur'
                            ]}
                            typeSpeed={150}
                            backSpeed={100}
                            loop
                        />
                    </Heading>

                    <ParaText
                        as="p"
                    >
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
                        src={`${process.env.PUBLIC_URL}/port-aarush.png`} 
                        alt="showcase" 
                    />
                </ShowcaseImageCard>
            </ShowcaseContainer>
        </PaddingContainer>
    );
}

export default Showcase;