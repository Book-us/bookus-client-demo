import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface UlProps {
  children: ReactNode;
}

const Ul = styled.ul`
  width: 100%;
  height: 600px;
  padding: 0;
  margin: 0;
  background-color: yellow;
`;

const LibraryUl = ({ children }: UlProps) => {
  return <Ul>{children}</Ul>;
};

export default LibraryUl;
