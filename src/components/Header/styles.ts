import styled from "styled-components";

export const Container = styled.header`
    height: 212px;
    background-color: ${({theme}) => theme['gray-900']};

    @media(max-width: 768px) {
        img {
            width: 117px;
        }
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
    max-width: 1420px;
    padding: 2.5rem 1.25rem;
`

export const ButtonTransation = styled.button`
    height: 50px;
    width: 9.5rem;

    border: 0;
    border-radius: 6px;

    cursor: pointer;

    font-size: 1rem;
    font-weight: 700;
    color: ${({theme}) => theme.white};
    background-color: ${({theme}) => theme['green-500']};

    @media(max-width: 768px) {
        height: 38px;
        width: 8.125rem;
        font-size: 0.875rem;
    }
`