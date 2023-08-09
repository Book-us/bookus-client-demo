import { styled } from 'styled-components';

// Container
import TopContainer from '../../components/Wrapper/TopContainer';
import MainContentWrapper from '../../components/Wrapper/MainContentWrapper';

// Logo
import LogoBox from '../../components/atoms/Box/LogoBox';
import MainLogo from '../../assets/MainLogo.svg';

// Library
import TitleBox from '../../components/atoms/Box/TitleBox';
import LibraryUl from '../../components/atoms/List/LibraryUl';

// Footer
import FooterBar from '../../components/atoms/Footer/FooterBar';

const LibraryTitleWrapper = styled.div`
  width: 100%;
  height: 18px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

const MainPage = () => {
  return (
    <TopContainer padding="40px">
      <LogoBox top="25px" src={MainLogo} width="150px" height="40px" />
      <MainContentWrapper width="300px" height="620px">
        <LibraryTitleWrapper>
          <TitleBox text="My Library" />
        </LibraryTitleWrapper>
        <LibraryUl>서재 기능 할 공간</LibraryUl>
      </MainContentWrapper>
      <FooterBar />
    </TopContainer>
  );
};

export default MainPage;
