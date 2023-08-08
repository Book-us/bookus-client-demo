import { styled } from 'styled-components';

// TopContainer
import TopContainer from '../../components/Wrapper/TopContainer';

// Logo
import LogoBox from '../../components/atoms/Box/LogoBox';
import MainLogo from '../../assets/MainLogo.svg';

// Icons
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsListUl } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import IconContainer from '../../components/Wrapper/IconContainer';

const LibraryWrapper = styled.div`
  width: 300px;
  height: 620px;
  background-color: yellow;
  margin: 40px 0 30px 0;
`;

const FooterWraaper = styled.footer`
  width: 300px;
  height: 40px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MainPage = () => {
  return (
    <TopContainer padding="40px">
      <LogoBox src={MainLogo} width="150px" height="40px"></LogoBox>
      <LibraryWrapper></LibraryWrapper>
      <FooterWraaper>
        <IconContainer>
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
