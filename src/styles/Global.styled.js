import styled, { keyframes } from 'styled-components';

export const MainBody = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: auto;
`;

export const PaddingContainer = styled.div`
  padding-top: ${({ top }) => top};
  padding-bottom: ${({ bottom }) => bottom };
  padding-left: ${({ left }) => left};
  padding-right: ${({ right }) => right};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: ${({ responsiveTop }) => responsiveTop};
    padding-bottom: ${({ responsiveBottom }) => responsiveBottom};
    padding-left: ${({ responsiveLeft }) => responsiveLeft};
    padding-right: ${({ responsiveRight}) => responsiveRight};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify };
  align-items: ${({ align }) => align };
  gap: ${({ gap }) => gap };
  flex-direction: ${({ direction }) => direction };

  & > div {
    flex: ${({ fullWidthChild }) => (fullWidthChild && 1)};
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    display: ${({ responsiveFlex }) => responsiveFlex ? 'flex' : 'block'};

    flex-direction: ${({ responsiveDirection }) => responsiveDirection};
  }
`;

export const Heading = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.white};
  text-align: ${({ align }) => align };
  font-size: ${({ size }) => {
    switch (size) {
      case 'h1':
        return '4.5rem';
      case 'h2':
        return '3rem';
      case 'h3':
        return '2rem';
      case 'h4':
        return '1.2rem';
      default:
        return;
    }
  }};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
  font-size: ${({ size }) => {
    switch (size) {
      case 'h1':
        return '2.5rem';
      case 'h2':
        return '2rem';
      case 'h3':
        return '1.5rem';
      case 'h4':
        return '1rem';
      default:
        return;
    }
  }
  }
  
`;


export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const OffWhite = styled.span`
  color: ${({ theme }) => theme.colors.offwhite};
`;

export const ParaText = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.para_text_color};
  line-height: 1.5;
  font-weight: bold;
  font-size: clamp(0.9rem, 1.3vw + 0.5rem, 1.1rem);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  font-size: ${({ size }) => size };
  cursor: pointer;
  color: ${({ color, theme }) => {
    switch (color) {
      case 'white':
        return theme.colors.white;
      case 'blue':
        return theme.colors.secondary;
      default:
        return;
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

const floatParticles = keyframes`
  0% { transform: translate(0, 0); opacity: 1; }
  50% { transform: translate(20px, -30px); opacity: 0.5; }
  100% { transform: translate(-20px, 30px); opacity: 0; }
`;

export const ParticlesOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
`;

export const Particle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: ${floatParticles} 10s infinite ease-in-out;
`;

export const Button = styled.a`
  display: inline-block;
  width: max-content;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary_light};
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`;

export const MessageMeButton = styled.a`
  display: inline-block;
  width: max-content;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary_light};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;