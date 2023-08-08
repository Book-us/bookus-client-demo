import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface WrapperProps {
  width: string;
  height: string;
  children: ReactNode;
}

const Wrapper = styled.div<WrapperProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 40px 0 30px 0;
  display: flex;
  flex-direction: column;
`;

const MainContentWrapper = ({ width, height, children }: WrapperProps) => {
  return (
    <Wrapper height={height} width={width}>
      {children}
    </Wrapper>
  );
};

export default MainContentWrapper;
