import styled from 'styled-components';

export const TechStackCard = styled.div`
    display: inline-block;
    background-color: #007BFF;
    color: #fff;
    padding: 0.4rem 1.2rem;
    border-radius: 5px;
    font-size: 0.9rem;
    white-space: nowrap; 
    margin: 0.2rem 0; 
`;

export const ProjectImageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(25, 118, 237, 0.6);
    padding: 5px;
    background-color: rgba(25, 118, 237, 0.3);  */
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    max-height: 250px; 
    object-fit: cover;
    border-radius: 10px;
`;