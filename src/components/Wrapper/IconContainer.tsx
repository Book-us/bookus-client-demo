import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface IconProps {
  children: ReactNode;
}

const Box = styled.div`
  width: 30px;
  height: 30px;
`;

const IconContainer = ({ children }: IconProps) => {
  return <Box>{children}</Box>;
};

export default IconContainer;
