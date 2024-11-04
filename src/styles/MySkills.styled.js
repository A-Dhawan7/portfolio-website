import styled from "styled-components";

export const SkillsCardContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 2rem;
    padding: 0 5%;
`;

export const SkillsCard = styled.div`
    width: 230px;
    padding: 3rem 0;
    border: 2px solid #0008B
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: #1E88E5;
    box-shadow: 0 4px 20px rgba(0, 123, 255, 0.2);
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &:hover {
        box-shadow: 0 4px 30px rgba(0, 123, 255, 0.5);
        transform: scale(1.05);
    }
   
`;
