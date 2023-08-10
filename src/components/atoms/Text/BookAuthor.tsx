import { styled } from 'styled-components';

interface AuthorPros {
  width: string;
  height: string;
  content: string;
}

const Author = styled.div<AuthorPros>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
`;

const BookAuthor = ({ width, height, content }: AuthorPros) => {
  return (
    <Author width={width} height={height} content={content}>
      {content}
    </Author>
  );
};

export default BookAuthor;
