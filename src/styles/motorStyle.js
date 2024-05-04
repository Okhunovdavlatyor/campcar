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
display: flex;
flex-direction: column;

padding: 10px;
 p{
    font-size: 18px;
    font-weight: 500;
    margin-right: 5px;
    
 }
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
display: flex;

flex-direction: ${props => props.$Hcomponent ? 'row' : 'column'};
//justify-content: space-between;

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
padding: 5px;
margin: ${props=> props.$ListBtn ? '5px' : '0'};
flex: ${(props)=> (props.$Hcomponent ? '1' : '')};
width: ${props=>props.$iconBtn ? 'fit-content' : '100px'};

background-color: ${props => props.$ListBtn ? 'orange' : 'transparent'};
border-radius: 15px;

border: ${props=>props.$iconBtn ? '1px solid #3737374d' : '2px solid #006DAB'};

font-size: 18px;
cursor: pointer;

`
export const Btnwrap = styled.div`
display: flex;
justify-content: center;
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

export const ListWrapper = styled.div`
display: flex;
border-bottom: 1px solid #37373780;
margin-bottom: 20px;
padding: 8px;




`
export const Imgwraper = styled.div`
display: flex;

flex: ${props => props.$Hcomponent ? '1' : '1'};
justify-content: center;

//border: 1px solid red;
img {
    width: 200px;
}
`
export const Infowraper = styled.div`
display: flex;
flex-direction: column;
flex: ${props => props.$Hcomponent ? '2' : '1'};

flex-direction: ${props => props.$Hcomponent ? 'row' : 'column'};
div {
    flex: 1;
}
`
export const InfoWrapper = styled.div`
display: flex;
`
export const LeftInfo = styled.div`
display: flex;
flex-direction: column;
flex:  1;
`
export const RightInfo = styled.div`
display: flex;
flex: 1;
flex-direction: ${props => props.$Hcomponent ? 'column' : ''};
justify-content: end;
align-items: center;
div {
    display: flex;
    flex: 1;
}
img {
    width: 12.67px;
height: 11.67px;
top: 1.17px;
left: 1.17px;
gap: 0px;
opacity: 0px;

}
`
export const BtnWraper = styled.div`

`
export const Listholder = styled.div`
display: flex;

padding: 10px;
flex: ${props => props.$Rightlist ? '1' : '2'};

flex-direction: ${props => props.$Listflex ? '': 'column'};
input {
    width: 70px;
    border-radius: 10px;
}
img {
    width: 22px;
height: 22px;
top: 229px;
gap: 0px;
border-radius: 5px 0px 0px 0px;
border: 1px 0px 0px 0px;
opacity: 0px;

}
p {
    margin-left: 10px;

}
`
export const Listcontainer = styled.div`
display: flex;
flex-direction: ${props => props.$Listcolumn ? 'column' : ''};

`
export const ListEnd = styled.div`
margin-top: 20px;
P{
        color: #006DAB;
        width: 62px;
        padding: 10px;
}
div {
    display: flex;
}
img {
    margin: 5px;
    width: 80px;
    border-radius: 10px;
    
}
`