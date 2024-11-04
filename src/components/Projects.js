import React from 'react';
import { 
    PaddingContainer,
    Heading,
    BlueText
 } from '../styles/Global.styled';

 const MyProjects = () => {
    return (
        <PaddingContainer
            id='Projects'
            top='5%'
            bottom='5%'
        >

            <Heading
                as='h4'
                size='h4'
            >
                MY PROJECTS
            </Heading>
            <Heading
                as='h2'
                size='h2'
            >
                What <BlueText> I have built</BlueText>
            </Heading>
        </PaddingContainer>
    )
 }

 export default MyProjects