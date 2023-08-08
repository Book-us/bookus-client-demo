import { styled } from 'styled-components';

// Container
import TopContainer from '../../components/Wrapper/TopContainer';
import MainContentWrapper from '../../components/Wrapper/MainContentWrapper';

// Logo
import LogoBox from '../../components/atoms/Box/LogoBox';
import MainLogo from '../../assets/MainLogo.svg';

// Profile
import TitleBox from '../../components/atoms/Box/TitleBox';
import FooterBar from '../../components/atoms/Footer/FooterBar';

const ProfileTitleWrapper = styled.div`
  width: 100%;
  height: 18px;
  margin-bottom: 40px;
`;

const ProfileMain = styled.div`
  width: 100%;
  height: 500px;
  border-top: 1px solid #050505;
  border-bottom: 1px solid #050505;
`;

const UserPropfile = () => {
  return (
    <TopContainer padding="40px">
      <LogoBox src={MainLogo} width="150px" height="40px" />
      <MainContentWrapper width="300px" height="620px">
        <ProfileTitleWrapper>
          <TitleBox text="My Profile" />
        </ProfileTitleWrapper>
        <ProfileMain></ProfileMain>
        <FooterBar />
      </MainContentWrapper>
    </TopContainer>
  );
};

export default UserPropfile;
