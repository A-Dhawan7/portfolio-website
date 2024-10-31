
import styled from 'styled-components';

export const ShowcaseParticleContainer = styled.div`
  position: relative;
`

export const ShowcaseContainer = styled.div`
  display: flex;
`;

export const ShowcaseImageCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  max-height: 340px;
  overflow: hidden;
  border-radius: 1rem;
  z-index: 2;

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