import styled from 'styled-components';

export const TechStackCard = styled.div`
    display: inline-block;
    background-color: #007BFF;
    color: #fff;
    padding: 0.3rem 0.8rem;
    border-radius: 5px;
    font-size: 0.85rem;
    white-space: nowrap;
    margin: 0.2rem 0.5rem;
    
`;

export const ProjectImageContainer = styled.a`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 300px;
    aspect-ratio: 4 / 3;
    margin: auto;
    border-radius: 10px;
    overflow: hidden;
    padding: 5px;
    box-shadow: 0 0 15px rgba(25, 118, 237, 0.6);
    background-color: rgba(25, 118, 237, 0.3);
    text-decoration: none;
    color: inherit;

    &:hover .hover-text {
        opacity: 1;
    }

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        padding: 5px;
        box-shadow: 0 0 15px rgba(25, 118, 237, 0.6);
        pointer-events: none;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 250px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        max-width: 200px;
        margin-top: 1.5rem;
    }
`;

export const HoverText = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.7);
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
`;


export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.03);
    }
`;

export const TechStackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    justify-content: center;
    margin-top: 1rem;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 0.3rem;
        justify-content: center;
    }
`;
