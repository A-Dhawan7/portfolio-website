import React from 'react';
import {
    FlexContainer,
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    BlueText,
} from '../styles/Global.styled';
import {
    SkillsCardContainer,
    SkillsCard,
} from '../styles/MySkills.styled';
import { Skills } from '../utils/Data';

const MySkills = () => {
    return (
        <PaddingContainer id="skills" top="10%" bottom="10%" responsiveLeft='1rem' responsiveRight='1rem'>
            <FlexContainer
                responsiveFlex
                responsiveDirection='column-reverse'
                fullWidthChild
            >
                <SkillsCardContainer>
                    {Skills.map((skill) => (
                        <SkillsCard>
                            <IconContainer size="5rem" color="blue">
                                {skill.icon}
                            </IconContainer>
                            <Heading as="h4" size="h4">
                                {skill.tech}
                            </Heading>
                        </SkillsCard>
                    ))}
                </SkillsCardContainer>

                <div>
                    <Heading as="h4" size="h4">
                        MY SKILLS
                    </Heading>
                    <Heading as="h2" size="h2">
                        What <BlueText>I can do</BlueText>
                    </Heading>
                    <div>
                        <ParaText top="2rem" bottom="1.5rem">
                            I bring a unique blend of technical and analytical skills, with expertise in ReactJS and AWS for scalable, cloud-based solutions.
                        </ParaText>
                        <ParaText>
                            Additionally, my Financial Analysis and Data Analytics skills support data-driven insights and measurable business value.
                        </ParaText>
                    </div>
                </div>
            </FlexContainer>
        </PaddingContainer>
    );
};

export default MySkills;