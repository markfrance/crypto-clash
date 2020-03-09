// @ts-ignore
import styled from 'styled-components/native';

interface IconContainerProps {
  left: number;
  top: number;
}

export const IconContainer = styled.View<{ left: number; top: number }>`
  position: absolute;
  left: ${(props: IconContainerProps) => props.left || 0};
  top: ${(props: IconContainerProps) => props.top || 0};
  shadow-color: #000;
  shadow-offset: 2px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4;
  elevation: 4;
`;

export const WheelContainer = styled.View`
  opacity: 1;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  shadow-color: #000;
  shadow-offset: 2px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 2;
  elevation: 4;
`;
