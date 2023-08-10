import { styled } from 'styled-components';

interface TitlePros {
  width: string;
  height: string;
  content: string;
}

const Title = styled.div<TitlePros>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
`;

const BookTitle = ({ width, height, content }: TitlePros) => {
  return (
    <Title width={width} height={height} content={content}>
      {content}
    </Title>
  );
};

export default BookTitle;
