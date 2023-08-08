import { styled } from 'styled-components';

// Hook
import { useNavigate } from 'react-router-dom';

// TopContainer
import TopContainer from '../../components/Wrapper/TopContainer';

// Logo
import LogoBox from '../../components/atoms/Box/LogoBox';
import MainLogo from '../../assets/MainLogo.svg';

// Library
import LibraryTitleBox from '../../components/atoms/Box/LibraryTitleBox';
import LibraryUl from '../../components/atoms/List/LibraryUl';

// Icons
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsListUl } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import IconContainer from '../../components/Wrapper/IconContainer';

const LibraryWrapper = styled.div`
  width: 300px;
  height: 620px;
  margin: 40px 0 30px 0;
  display: flex;
  flex-direction: column;
`;

const LibraryTitleWrapper = styled.div`
  width: 100%;
  height: 18px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

const FooterWraaper = styled.footer`
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <TopContainer padding="40px">
      <LogoBox src={MainLogo} width="150px" height="40px"></LogoBox>
      <LibraryWrapper>
        <LibraryTitleWrapper>
          <LibraryTitleBox text="My Library" />
        </LibraryTitleWrapper>
        <LibraryUl>서재 기능 할 공간</LibraryUl>
      </LibraryWrapper>
      <FooterWraaper>
        <IconContainer onClick={() => navigate('/search')}>
          <AiOutlinePlusCircle style={{ width: '100%', height: '100%' }} />
        </IconContainer>
        <IconContainer>
          <BsListUl style={{ width: '100%', height: '100%' }} />
        </IconContainer>
        <IconContainer>
          <CgProfile style={{ width: '100%', height: '100%' }} />
        </IconContainer>
      </FooterWraaper>
    </TopContainer>
  );
};

export default MainPage;
