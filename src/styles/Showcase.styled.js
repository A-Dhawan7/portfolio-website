import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: translate(-50%, -50%) rotate(1turn);
  }
`;

export const ShowcaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet || '768px'}) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    align-items: center;
  }
`;

export const ShowcaseImageCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  max-height: 340px;
  overflow: hidden;
  border-radius: 1rem;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
    border-top: 5px solid #1976ed;
    border-left: 5px solid #1976ed;
    border-radius: 1rem 0 0 0;
    pointer-events: none;
    animation: ${rotate} 6s linear infinite;
    filter: blur(15px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 50%;
    border-bottom: 5px solid #1976ed;
    border-right: 5px solid #1976ed;
    border-radius: 0 0 1rem 0;
    pointer-events: none;
    animation: ${rotate} 6s linear infinite;
    filter: blur(15px);
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    position: relative;
    z-index: 1;
  }

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile || '480px'}) {
    max-width: 200px;
    max-height: 240px;
  }
`;