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
    width: 626px;
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
`
export const Flex = styled.div`


display: flex;
flex-direction: ${props=>props.$first ? 'column': ''};
//align-items: center;
padding: ${props=>props.$first ? '50px 80px' : ''};
flex: 1;

h1 {
    margin-bottom: 20px;
    font-family: Montserrat;
font-size: 35px;
font-weight: 600;
line-height: 42.67px;
text-align: left;

}
p{
    font-family: Montserrat;
font-size: 26px;
font-weight: 400;
line-height: 24px;
text-align: left;

}
img{
    width: fit-content;
}
`
export const Boxwrapper = styled.div`
display: flex;
`