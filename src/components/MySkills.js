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
    HeadingContainer,
} from '../styles/MySkills.styled';
import { Skills } from '../utils/Data';

const MySkills = () => {
    return (
        <PaddingContainer id="Skills" top="10%" bottom="10%" ref={skillsRef}>
            <FlexContainer
                fullWidthChild
                className={isVisible ? "fade-in" : ""}
                align="flex-start"
            >
                <HeadingContainer>
                    <Heading as="h4" size="h4" className="mobile-top-heading">
                        MY SKILLS
                    </Heading>
                    <Heading as="h2" size="h2" className="mobile-top-heading">
                        What <BlueText>I can do</BlueText>
                    </Heading>
                    <div className="desktop-only-text">
                        <ParaText top="2rem" bottom="1.5rem">
                            I bring a unique blend of technical and analytical skills, with expertise in ReactJS and AWS for scalable, cloud-based solutions.
                        </ParaText>
                        <ParaText top="1.5rem" bottom="1.5rem">
                            Additionally, my Financial Analysis and Data Analytics skills support data-driven insights and measurable business value.
                        </ParaText>
                    </div>
                </HeadingContainer>

                <SkillsCardContainer>
                    {Skills.map((skill) => (
                        <SkillsCard key={skill.id}>
                            <IconContainer size="3.5rem" color="blue">
                                {skill.icon}
                            </IconContainer>
                            <Heading as="h4" size="h4">
                                {skill.tech}
                            </Heading>
                        </SkillsCard>
                    ))}
                </SkillsCardContainer>
            </FlexContainer>
        </PaddingContainer>
    );
};

export default MySkills;