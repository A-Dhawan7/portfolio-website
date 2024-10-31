import styled, { keyframes } from 'styled-components';

const popOut = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ShowcaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ShowcaseImageCard = styled.div`
  width: 100%;
  max-width: 280px;
  max-height: 340px;
  overflow: hidden;
  border-radius: 1rem;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${popOut} 5s infinite;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 200px;
    max-height: 240px;
  }
`;

export const Particle = styled.div`
    position: absolute;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    bottom: ${({ bottom }) => bottom};
    transform: rotate(${({ rotate }) => rotate});
`