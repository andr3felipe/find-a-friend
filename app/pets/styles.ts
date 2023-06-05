import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
max-width: 100vw;
width: 100%;

`

export const FilterContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 2.1875rem; // 35px

`


export const FilterHead = styled.div`
padding: 5.0625rem 2.5rem 1.625rem 3.5rem; // 81px 40px 26px 56px
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 26px;

background-color: var(--primary-dark);
`

export const FilterLogo = styled.div`
width: 100%;
`

export const FilterUFCityContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 12px;
`

export const FilterBody = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
width: 100%;
gap: 3.125rem; // 50px

padding-left: 7rem;
`

export const FilterBodyTitle = styled.h3`
font-size: 1.25rem; // 20px
color: white;
`

export const FilterBodyAge = styled.div``

export const FilterBodyEnergy = styled.div``

export const FilterBodyAnimalSize = styled.div``

export const FilterBodyIndependency = styled.div``

export const PetsContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
gap: 3.125rem; //50px
min-height: 100vh;
width: 100%;

padding-left: 2.1875rem; // 35px
padding-right: 7.1875rem; // 115px
padding-top: 9.375rem; // 150px

background-color: var(--secondary);
`

export const PetsHead = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`

export const PetsTitle = styled.h1`
font-size: 1.25rem; //20px
color: var(--text);
font-weight: 400;

 
`

export const PetsFilterByType = styled.div``

export const PetsBody = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;

width: 100%;

gap: 2rem; // 32px

padding-bottom: 1rem;

@media (max-width: 1400px){
    grid-template-columns: 1fr 1fr;
}

@media (max-width: 1120px){
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
}
`
