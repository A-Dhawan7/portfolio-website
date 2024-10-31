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
    OffWhiteText,
    ParaText,
    StyledIconContainer,
} from '../styles/Global.styled';
import { 
    ShowcaseContainer,
    ShowcaseParticleContainer,
    ShowcaseImageCard,
} from '../styles/Showcase.styled';

import ShowcaseImg from '../assets/aarush.png'


const Showcase = () => {
    return (
        <PaddingContainer
            id="Home"
            top="15%"
            bottom="10%"
            left="3%"
            right="10%"
        >
            <FlexContainer
                align="center"
                fullWidthChild
            >
                <div>
                    <Heading 
                        as="h1" 
                        size="h1" 
                        top="0.5rem" 
                        bottom="1rem"
                    >
                    <OffWhiteText>Aarush Dhawan</OffWhiteText>
                    </Heading>

                    <Heading as="h3" size="h3">
                        is <BlueText> <ReactTyped
                            strings={[
                                'A Developer',
                                'A Student',
                                'An Entrepreneur'
                            ]}
                            typeSpeed={150}
                            backSpeed={100}
                            loop
                        /> </BlueText>
                    </Heading>

                    <ParaText
                        as="p"
                        top="2rem"
                        bottom="4rem"
                    >
                        <OffWhiteText>Dive into my professional journey and explore my passion projects! Connect with me on socials to collaborate and create something amazing together!</OffWhiteText>
                    </ParaText>
                    
                    <FlexContainer gap="20px">
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
                </div>
                <FlexContainer>
                    <ShowcaseParticleContainer>
                        <ShowcaseImageCard>
                            <img src={ShowcaseImg} alt="showcase" />
                        </ShowcaseImageCard>
                    </ShowcaseParticleContainer>
                </FlexContainer>

            </FlexContainer>
        </PaddingContainer>
    );
}
export default Showcase;