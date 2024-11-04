import styled from "styled-components";

export const FadeInContainer = styled.div`
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1.5s ease, transform 1.5s ease;

    &.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const HeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 400px;
    margin-right: 5%;

    @media (max-width: 768px) {
        order: -1;
        align-items: center;
        margin: 0 auto;
        text-align: center;

        .desktop-only-text {
            display: none;
        }
    }
`;

export const SkillsCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 2.5rem;
    padding: 0 5%;
    width: 100%;
    justify-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 2rem;
    }
`;

export const SkillsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: #1E88E5;
    box-shadow: 0 4px 20px rgba(0, 123, 255, 0.2);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    color: #ffffff;
    width: 100%;
    max-width: 180px;
    height: auto; 

    &:hover {
        box-shadow: 0 4px 30px rgba(0, 123, 255, 0.5);
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        padding: 1rem;
        width: 100%;
        box-shadow: 0 3px 15px rgba(0, 123, 255, 0.3);
    }
`;