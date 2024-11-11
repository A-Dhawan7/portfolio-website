import React, { useState } from 'react';
import {
    PaddingContainer,
    Heading,
    FlexContainer,
    ParaText,
    StyledIconContainer,
    Button
} from '../../styles/Global.styled';

import { FaGithub } from 'react-icons/fa';
import {
    TechStackCard,
    ProjectImage,
    ProjectImageContainer,
    HoverText
} from '../../styles/MyProject.styled';

import { motion } from 'framer-motion';

import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';

const Project = ({ data }) => {
    const [showHoverText, setShowHoverText] = useState(false);

    const handleTouch = () => {
        setShowHoverText(true);
        setTimeout(() => setShowHoverText(false), 1500);
    };

    return (
        <FlexContainer direction={data.reverse ? 'row-reverse' : 'row'} fullWidthChild align="flex-start" gap="2rem">
            <motion.div
                variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                <FlexContainer align='center' gap='1rem'>
                    <Heading as='h3' size='h3' bottom='1rem'>
                        {data.project_name || 'Project Name'}
                    </Heading>
                    <StyledIconContainer as="a" href="https://github.com/A-Dhawan7" target="_blank" rel="noopener noreferrer" color='blue' size='2rem'>
                        <FaGithub />
                    </StyledIconContainer>
                </FlexContainer>

                <PaddingContainer top='1rem'>
                    <FlexContainer gap='1rem' wrap="wrap">
                        {data.tech_stacks && data.tech_stacks.map((stack, index) => (
                            <TechStackCard key={index}>{stack}</TechStackCard>
                        ))}
                    </FlexContainer>
                </PaddingContainer>

                <ParaText top='1.5rem' bottom='2rem'>
                    {data.project_desc || 'Project Description'}
                </ParaText>

                <Button href={data.project_link || '#'} target="_blank" rel="noopener noreferrer">
                    Visit Website
                </Button>
            </motion.div>

            <a
                href={data.project_link || 'https://github.com/A-Dhawan7'}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
            >
                <ProjectImageContainer
                    as={motion.div}
                    variant={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
                    initial="hidden"
                    whileInView="visible"
                    justify={data.reverse ? 'flex-start' : 'flex-end'}
                    onTouchStart={handleTouch}
                >
                    <ProjectImage src={data.project_image} alt={`${data.project_name} Image`} />
                    <HoverText className="hover-text" style={{ opacity: showHoverText ? 1 : 0 }}>
                        Visit Website
                    </HoverText>
                </ProjectImageContainer>
            </a>
        </FlexContainer>
    );
};

export default Project;