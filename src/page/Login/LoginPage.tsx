import { styled } from 'styled-components';

// TopContainer
import TopContainer from '../../components/Wrapper/TopContainer';

// Logo
import LogoBox from '../../components/atoms/Box/LogoBox';

// LoginBtn
import StandardBtn from '../../components/atoms/Button/StandardBtn';
import Logo from '../../assets/kakaoLogin.svg';

const MainContainer = styled.div`
  width: 283px;
  height: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  width: 185px;
  height: 130px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const KaKaoLogo = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  right: 20px;
`;

const LoginPage = () => {
  return (
    <TopContainer>
      <MainContainer>
        <LogoBox width="283px" height="61px"></LogoBox>
        <ButtonContainer>
          <StandardBtn color="#351C1B" background="#FBE54D">
            <KaKaoLogo src={Logo} alt="logo" /> 카카오로 로그인
          </StandardBtn>
          <StandardBtn color="#FFFFFF" background="#000000">
            회원가입
          </StandardBtn>
        </ButtonContainer>
      </MainContainer>
    </TopContainer>
  );
};

export default LoginPage;
