import { styled } from 'styled-components';

interface LogoBoxProps {
    width: string;
    height: string;
    onClick?: () => void;
}

const Box = styled.div<LogoBoxProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: red;
    cursor: pointer;
`;

const LogoBox = ({ width, height, onClick }: LogoBoxProps) => {
    return <Box width={width} height={height} onClick={onClick}></Box>;
};

export default LogoBox;
