import { styled } from 'styled-components';

// TopContainer
import TopContainer from '../../components/Wrapper/TopContainer';

// Logo
import LogoBox from '../../components/atoms/Box/LogoBox';
import MainLogo from '../../assets/MainLogo.svg';

// LoginBtn
import StandardBtn from '../../components/atoms/Button/StandardBtn';

const MainContainer = styled.div`
  width: 283px;
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const WelcomeMessage = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 1.5;
`;

const LoginComplete = () => {
  return (
    <TopContainer>
      <MainContainer>
        <LogoBox src={MainLogo} width="283px" height="61px"></LogoBox>
        <WelcomeMessage>
          '건용'님 환영합니다.
          <br />
          북커스와 함께
          <br />
          독서 기록을 기록해보세요.
        </WelcomeMessage>
        <StandardBtn color="#FFFFFF" background="#000000">
          시작하기
        </StandardBtn>
      </MainContainer>
    </TopContainer>
  );
};

export default LoginComplete;
