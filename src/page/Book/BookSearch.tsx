import { styled } from 'styled-components';
import { useState } from 'react';

// Container
import TopContainer from '../../components/Wrapper/TopContainer';

// Logo
import LogoBox from '../../components/atoms/Box/LogoBox';
import MainLogo from '../../assets/MainLogo.svg';

// Input
import SearchInput from '../../components/atoms/Input/SearchInput';

// Footer
import FooterBar from '../../components/atoms/Footer/FooterBar';

// It will replace to book search result
const MainContent = styled.div`
  width: 300px;
  height: 550px;
  border-top: 1px solid #050505;
  border-bottom: 1px solid #050505;
`;

const BookSearch = () => {
  const [book, setBook] = useState<string>('');

  const handleSearchBook = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook(event.target.value);
  };

  return (
    <TopContainer>
      <LogoBox top="25px" src={MainLogo} width="150px" height="40px" />
      <SearchInput value={book} onChange={handleSearchBook} placeholder="원하시는 책을 입력해주세요" />
      <MainContent />
      <FooterBar />
    </TopContainer>
  );
};

export default BookSearch;
