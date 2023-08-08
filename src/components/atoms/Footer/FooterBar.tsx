import { styled } from 'styled-components';

// Hook
import { useNavigate } from 'react-router-dom';

// Container
import IconContainer from '../../Wrapper/IconContainer';

// React-Icon
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsListUl } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

const FooterWraaper = styled.footer`
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

const FooterBar = () => {
  const navigate = useNavigate();
  return (
    <FooterWraaper>
      <IconContainer onClick={() => navigate('/search')}>
        <AiOutlinePlusCircle style={{ width: '100%', height: '100%' }} />
      </IconContainer>
      <IconContainer onClick={() => navigate('/main')}>
        <BsListUl style={{ width: '100%', height: '100%' }} />
      </IconContainer>
      <IconContainer onClick={() => navigate('/profile')}>
        <CgProfile style={{ width: '100%', height: '100%' }} />
      </IconContainer>
    </FooterWraaper>
  );
};

export default FooterBar;
