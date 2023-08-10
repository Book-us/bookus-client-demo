import { styled } from 'styled-components';

// Container
import TopContainer from '../../components/Wrapper/TopContainer';

// BookInfo
import BookImgBox from '../../components/atoms/Box/BookImgBox';
import BookTitle from '../../components/atoms/Text/BookTitle';
import BookAuthor from '../../components/atoms/Text/BookAuthor';

// Footer
import FooterBar from '../../components/atoms/Footer/FooterBar';

const BookInfoBox = styled.div`
  width: 300px;
  height: 130px;

  position: relative;
  top: -20px;
  display: flex;
  gap: 30px;
`;

const BookRecordListBox = styled.div`
  width: 300px;
  height: 500px;
  background-color: red;
`;

const BookTitleAuthorBox = styled.div`
  width: 170px;
  height: 125px;
`;

const BookReportList = () => {
  return (
    <TopContainer>
      <BookInfoBox>
        <BookImgBox width="90px" height="120px">
          bookImg
        </BookImgBox>
        <BookTitleAuthorBox>
          <BookTitle content="booktitle" width="100%" height="20px" />
          <BookAuthor content="bookauthor" width="100%" height="20px" />
        </BookTitleAuthorBox>
      </BookInfoBox>
      <BookRecordListBox></BookRecordListBox>
      <FooterBar />
    </TopContainer>
  );
};

export default BookReportList;
