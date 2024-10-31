
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: translate(-50%, -50%) rotate(1turn);
  }
`;

export const ShowcaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet || '768px'}) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
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

  /* Pseudo-elements for animated border */
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    border-radius: 1rem;
    pointer-events: none;
  }

  /* Animated Border - Glow */
  &::before {
    z-index: -2;
    background-image: conic-gradient(rgba(0, 0, 0, 0), #1976ed, rgba(0, 0, 0, 0) 25%);
    background-repeat: no-repeat;
    background-position: 0 0;
    animation: ${rotate} 4s linear infinite;
    filter: blur(20px);
    width: 120%;
    height: 120%;
  }

  /* Static Background Border */
  &::after {
    z-index: -1;
    background: #292a2e;
    border: 5px solid transparent;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    position: relative;
    z-index: 1; /* Ensure image is above the borders */
  }

  /* Optional Hover Effects */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  /* Responsive adjustments */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile || '480px'}) {
    max-width: 200px;
    max-height: 240px;
  }
`;