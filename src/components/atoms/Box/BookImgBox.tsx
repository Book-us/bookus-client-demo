import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ImgBoxPros {
  width: string;
  height: string;
  children: ReactNode;
}

const ImgBox = styled.div<ImgBoxPros>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 2px solid black;
`;

const BookImgBox = ({ width, height, children }: ImgBoxPros) => {
  return (
    <ImgBox width={width} height={height}>
      {children}
    </ImgBox>
  );
};

export default BookImgBox;
