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

const Project = ({ data }) => {
    const [showHoverText, setShowHoverText] = useState(false);

    const handleTouch = () => {
        setShowHoverText(true);
        setTimeout(() => setShowHoverText(false), 1500);
    };

    return (
        <FlexContainer fullWidthChild align="flex-start" gap="2rem">
            <div>
                <FlexContainer align='center' gap='1rem'>
                    <Heading as='h3' size='h3' bottom='1rem'>
                        {data.project_name || 'Project Name'}
                    </Heading>
                    <StyledIconContainer color='blue' size='2rem'>
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
            </div>

            <ProjectImageContainer
                href={data.project_link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                onTouchStart={handleTouch}
            >
                <ProjectImage src={data.project_image} alt={`${data.project_name} Image`} />
                <HoverText className="hover-text" style={{ opacity: showHoverText ? 1 : 0 }}>
                    Visit Website
                </HoverText>
            </ProjectImageContainer>
        </FlexContainer>
    );
};

export default Project;
