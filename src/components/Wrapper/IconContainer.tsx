import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface IconProps {
  children: ReactNode;
  onClick?: () => void;
}

const Box = styled.div`
  width: 25px;
`;

const IconContainer = ({ children, onClick }: IconProps) => {
  return <Box onClick={onClick}> {children}</Box>;
};

export default IconContainer;
