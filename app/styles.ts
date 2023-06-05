import styled from 'styled-components'


export const Main = styled.main`
max-width: 1440px;
padding: 124px 112px;

display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;

@media (max-width: 630px) {
    padding: 30px;
}


`

export const Logo = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 12px;
max-width: 215px;
margin-bottom: 8.5rem;


h2 {
color: white;
font-size: 20px;
display: inline-block;
}

@media (max-width: 630px) {
    margin-bottom: 2rem;
}

`
export const Content = styled.div`
color: white;

`

export const Middle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 8.5rem;


h1 {
    font-size: 4.5rem;
    max-width: 487px;
}

@media (max-width: 1110px) {
    flex-direction: column;
    gap: 0;

    img {
        max-width: 80vw;
    }

    h1 {
        font-size: 2.5rem;
    }
}

@media (max-width: 630px) {
    margin-bottom: 0;
}
`

export const Bottom = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

margin-top: 7.5rem;

div {
    display: flex;
    gap: 32px;
    justify-content: center;

    @media (max-width: 630px) {
        flex-direction: column;
    }
}

h3 {
    max-width: 415px;
    font-size: 1.5rem;
}

a {
display: flex;
align-items: center;
justify-content: center;
}

@media (max-width: 1350px) {
    flex-direction: column;
    gap: 3rem;
}

@media (max-width: 630px) {
    margin-top: 0;
}
`

export const SelectUF = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    select {
        width: 72px;
        height: 72px;
        padding-left: 14px;

        color: white;
        font-weight: 800;
        border: 1px solid white;
        border-radius: 20px;
        background-color: var(--primary);

        appearance: none;

        * {
            padding-top: 5px;
        }

    }

`

