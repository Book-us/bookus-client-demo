import { useNavigate } from 'react-router-dom';

// TopContainer
import TopContainer from '../../components/Wrapper/TopContainer';

// Logo
import LogoBox from '../../components/atoms/Box/LogoBox';
import MainLogo from '../../assets/MainLogo.svg';

const StartPage = () => {
  const navigate = useNavigate();
  return (
    <TopContainer>
      <LogoBox src={MainLogo} onClick={() => navigate('/login')} width="350px" height="76px" />
    </TopContainer>
  );
};

export default StartPage;
