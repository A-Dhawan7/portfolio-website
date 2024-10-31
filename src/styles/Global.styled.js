import styled, { keyframes } from 'styled-components';

export const MainBody = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 100vh;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: auto;
`;

export const PaddingContainer = styled.div`
  padding-top: ${({ top }) => top || '0'};
  padding-bottom: ${({ bottom }) => bottom || '0'};
  padding-left: ${({ left }) => left || '0'};
  padding-right: ${({ right }) => right || '0'};
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  gap: ${({ gap }) => gap || '0'};
  flex-direction: ${({ direction }) => direction || 'row'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};

  & > div {
    flex: ${({ fullWidthChild }) => (fullWidthChild ? 1 : 'auto')};
  }
`;

export const Heading = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.white};
  text-align: ${({ align }) => align || 'left'};
  font-size: ${({ size }) => {
    switch (size) {
      case 'h1':
        return 'clamp(1.8rem, 2.5vw + 1rem, 4.5rem)';
      case 'h2':
        return 'clamp(1.5rem, 2vw + 1rem, 3rem)';
      case 'h3':
        return 'clamp(1.2rem, 1.8vw + 1rem, 2rem)';
      case 'h4':
        return 'clamp(1rem, 1.5vw + 0.5rem, 1.2rem)';
      default:
        return 'clamp(1rem, 1.5vw + 0.5rem, 1.2rem)';
    }
  }};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: center;
  }
`;

export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ParaText = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.para_text_color};
  line-height: 1.5;
  font-weight: bold;
  font-size: clamp(0.9rem, 1.3vw + 0.5rem, 1.1rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  font-size: ${({ size }) => size || '1.75rem'};
  cursor: pointer;
  color: ${({ color, theme }) => {
    switch (color) {
      case 'white':
        return theme.colors.white;
      case 'blue':
        return theme.colors.secondary;
      default:
        return 'inherit';
    }
  }};
`;

const flashEffect = keyframes`
  0% {
    box-shadow: 0 0 8px rgba(127, 255, 212, 0.3), 0 0 16px rgba(127, 255, 212, 0.2);
    background-color: rgba(127, 255, 212, 0.2);
    color: #ffffff;
  }
  50% {
    box-shadow: 0 0 30px rgba(127, 255, 212, 0.8), 0 0 60px rgba(127, 255, 212, 0.6), 0 0 90px rgba(127, 255, 212, 0.4);
    background-color: rgba(127, 255, 212, 0.5);
    color: rgba(127, 255, 212, 1);
  }
  100% {
    box-shadow: 0 0 8px rgba(127, 255, 212, 0.3), 0 0 16px rgba(127, 255, 212, 0.2);
    background-color: rgba(127, 255, 212, 0.2);
    color: #ffffff;
  }
`;

export const StyledIconContainer = styled.div`
  color: #ffffff;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  font-size: 1.75rem;

  &:hover {
    background-color: rgba(127, 255, 212, 0.1); /* Aqua color */
  }

  &:active {
    animation: ${flashEffect} 0.4s ease-in-out;
  }
`;
