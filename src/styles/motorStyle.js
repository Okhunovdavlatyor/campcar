import styled from 'styled-components';
 export const Container = styled.div`
 display: flex;
 flex-direction: column;
 `
 export const Wrapper = styled.div`
 display: flex;

 padding: 20px 20%;
 `

 export const Listwrap = styled.div`
flex: 2;

border-bottom: 1px solid #37373780;
margin-bottom: 20px;
padding: 5px;
 `
 export const Catalogwraper = styled.div`
 flex: 8;
 `

export const Carwap = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
gap: 15px;
`
export const CardCont = styled.div`
border-radius: 20px;
padding: 15px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
h1 {
    font-size: 20px;
    font-weight: 500px;
}
h2 {
    font-size: 20px;
    color: #006DAB;
}
`
export const Btn = styled.button`
padding: 2px;
width: 100px;
background-color: transparent;
border-radius: 10px;
border: 2px solid #006DAB;
font-size: 15px;

`
export const Btnwrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 12px;
:hover {
    color: white;
    background-color: #006DAB;
}
;
`
export const ItemWraper = styled.div`
display: flex;
border-bottom: 1px solid #37373780;
margin-bottom: 20px;
padding: 5px;

 p{
    font-size: 18px;
    font-weight: 500;
    margin-right: 5px;
 }
`
export const ItemLeft = styled.div`
flex: 1;
display: flex;


`
export const ItemRight = styled.div`
display: flex;
flex: 1;
gap: 5px;
justify-content: center;
align-items: center;
input {
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
}
img{
    border: 1px solid black;
    border-radius: 5px;
}
justify-content: end;
`