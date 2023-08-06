import { MouseEventHandler, ReactNode } from 'react';
import { styled } from 'styled-components';

interface BtnProps {
    children: ReactNode;
    background: string;
    color: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Btn = styled.button<BtnProps>`
    width: 100%;
    height: 45px;
    padding: 14px 0px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: none;
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
`;

const StandardBtn = ({ background, color, children, onClick }: BtnProps) => {
    return (
        <Btn onClick={onClick} background={background} color={color}>
            {children}
        </Btn>
    );
};

export default StandardBtn;
