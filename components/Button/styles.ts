import styled from "styled-components"

export const SelectButton = styled.button`
    background-color: var(--yellow);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 24px;
    border-radius: 18px;
    border: none;
    min-height: 62px;

    cursor: pointer;

    &:hover {
        background-color: var(--orange);
        transition: 0.2s ease-in-out;
    }

    @media (max-width: 630px) {
        
    }
`