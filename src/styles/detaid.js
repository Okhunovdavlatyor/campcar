import styled from 'styled-components';
import det1 from '../assets/image 6.png'
export const Button = styled.div`
display: flex;

button{
    margin: 10px;
    width: 181.5px;
height: 50.01px;
top: 471.1px;
left: 501.14px;
gap: 0px;
border-radius: 10px;
opacity: 0px;
font-size: 16px;
cursor: pointer;


}

`
export const Flexwrap = styled.div`
display: flex;
//flex-direction: column;
padding: 0px 50px 0px 70px;
img {
    width: 726px;
}
`
export const Rightwrapper = styled.div`
display: flex;
flex-direction:column;
flex: 1;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
border-radius: 10px;
padding: 20px 10px;
`
export const Space = styled.div`
display: flex;
justify-content: space-between;
border-bottom: ${props=>props.$main ? '1px solid #37373780' : ''};
margin-bottom: ${props=>props.$main ? '20px' : ''};
padding: 8px;
`
export const LeftWrapper = styled.div`
display: flex;
flex: 1;

`

export const Flexwrapper = styled.div`
display: flex;
flex-direction: column;

margin-top: 63px;
padding: 0px 10%;
`
export const Flex = styled.div`
display: flex;
flex: 1; 

flex-direction: column;
justify-content: end;
img{
    width: 683px;
}
h1{
    font-family: Montserrat;
font-size: 35px;
font-weight: 600;
line-height: 42.67px;
text-align: left;
margin-top: 70px;

}
p{
    font-family: Montserrat;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
margin-top: 30px;
}
`
export const Boxwrapper = styled.div`
display: flex;

`

export const Column = styled.div`
display: flex;
flex: 1;
flex-direction: column;
justify-content: start;

h1{
    font-family: Montserrat;
font-size: 35px;
font-weight: 600;
line-height: 42.67px;
text-align: left;
margin-top: 70px;

}
p{
    font-family: Montserrat;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
margin-top: 30px;
}

`

export const Margin = styled.div`
display: flex;
flex: 1;
flex-direction: column;
justify-content: center;
align-items: center;


h1{
    font-family: Montserrat;
font-size: 35px;
font-weight: 600;
line-height: 42.67px;
text-align: left;
margin-top: 70px;

}
p{
    font-family: Montserrat;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
margin-top: 30px;
}
`