import { ReactNode } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: ReactNode;
  padding?: string;
}

const Container = styled.div<ContainerProps>`
  width: 375px;
  height: 812px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: ${(props) => props.padding || '0'};
`;

const TopContainer = ({ children, padding }: ContainerProps) => {
  return <Container padding={padding}>{children}</Container>;
};

export default TopContainer;
