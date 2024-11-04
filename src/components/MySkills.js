import React from 'react';
import { motion } from 'framer-motion';
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

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const MySkills = () => {
    return (
        <PaddingContainer id="skills" top="10%" bottom="10%" responsiveLeft='1rem' responsiveRight='1rem'>
            <FlexContainer
                responsiveFlex
                responsiveDirection='column-reverse'
                fullWidthChild
            >
                <SkillsCardContainer
                    as={motion.div}
                    variants={fadeInLeftVariant}
                    initial='hidden'
                    whileInView='visible'
                >
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

                <motion.div
                    variants={fadeInRightVariant}
                    initial="hidden"
                    whileInView='visible'
                    
                >
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
                </motion.div>
            </FlexContainer>
        </PaddingContainer>
    );
};

export default MySkills;