import { styled } from 'styled-components';
import { useState } from 'react';

// Container
import TopContainer from '../../components/Wrapper/TopContainer';

// Logo
import LogoBox from '../../components/atoms/Box/LogoBox';
import MainLogo from '../../assets/MainLogo.svg';

// Input
import SearchInput from '../../components/atoms/Input/SearchInput';

const BookSearch = () => {
  const [book, setBook] = useState<string>('');

  const handleSearchBook = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook(event.target.value);
  };

  return (
    <TopContainer>
      <LogoBox src={MainLogo} width="150px" height="40px" />
      <SearchInput value={book} onChange={handleSearchBook} placeholder="원하시는 책을 입력해주세요" />
    </TopContainer>
  );
};

export default BookSearch;
