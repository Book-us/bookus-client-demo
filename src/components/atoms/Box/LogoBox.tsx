import { styled } from 'styled-components';

interface LogoBoxProps {
  width: string;
  height: string;
  onClick?: () => void;
  src: string;
  top?: string;
}

const LogoWrapper = styled.img<LogoBoxProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
  position: absolute;
  top: ${(props) => props.top};
`;

const LogoBox = ({ width, height, onClick, src, top }: LogoBoxProps) => {
  return <LogoWrapper top={top} src={src} width={width} height={height} onClick={onClick}></LogoWrapper>;
};

export default LogoBox;
