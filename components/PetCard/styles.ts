import styled from "styled-components";


export const Container = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

background-color: white;
padding: 3px;
border-radius: 20px;
cursor: pointer;

font-weight: 700;
font-size: 1.125rem; //18 px

max-width: 280px;

&:hover {
    background-color: var(--text);

    color: white;

    div {
        background-color: var(--text);
    
    }
}
`

export const PetImage = styled.div`
border-radius: 20px;
padding-bottom: 2rem;

`

export const PetIconContainer = styled.div`
padding: 3px;
border-radius: 10px;
background-color: white;
position: absolute;
bottom: 55px;
`

export const PetIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 2.75rem; // 44px
height: 2.75rem; // 44px
border-radius: 10px;
`

export const PetName = styled.p`
padding-bottom: 1rem;
`