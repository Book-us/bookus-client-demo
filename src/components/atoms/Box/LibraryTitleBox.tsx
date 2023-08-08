import { styled } from 'styled-components';

interface TitleProps {
  text: string;
}

const Title = styled.div`
  width: 100%;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 20px;
`;

const LibraryTitleBox = ({ text }: TitleProps) => {
  return <Title>{text}</Title>;
};

export default LibraryTitleBox;
