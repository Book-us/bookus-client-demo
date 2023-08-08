import { styled } from 'styled-components';

interface LogoBoxProps {
  width: string;
  height: string;
  onClick?: () => void;
  src: string;
}

const LogoWrapper = styled.img<LogoBoxProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
`;

const LogoBox = ({ width, height, onClick, src }: LogoBoxProps) => {
  return <LogoWrapper src={src} width={width} height={height} onClick={onClick}></LogoWrapper>;
};

export default LogoBox;
