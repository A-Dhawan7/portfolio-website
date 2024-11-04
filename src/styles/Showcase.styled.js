import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

export const ShowcaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Ensures spacing between text and image */
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
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
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150%;
    height: 150%;
    border-radius: 1rem;
    background-image: conic-gradient(
      from 0deg,
      rgba(0, 0, 0, 0),
      #1976ed 25%,
      rgba(0, 0, 0, 0) 50%,
      #1976ed 75%,
      rgba(0, 0, 0, 0)
    );
    animation: ${rotate} 6s linear infinite;
    filter: blur(20px);
    z-index: -1;
  }

  img {
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
`;
