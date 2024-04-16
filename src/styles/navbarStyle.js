import { Link } from "react-router-dom"
import styled from "styled-components"
import motorbg from '../assets/bg.png'
export const Container = styled.div`
display: flex;
padding: 10px 15px;
`

export const Logocont = styled.div`
display: flex;
flex: 1;
justify-content: center;
align-items: center;
`
export const Middlecont = styled.div`
display: flex;
flex: 5;
justify-content: space-around;
align-items: center;
p {
    cursor: pointer;
}
`
export const Endcont = styled.div`
display: flex;
flex: 1;
justify-content: end;
align-items: center;
img {
    margin-right: 10px;
    cursor: pointer;
}
p {
    cursor: pointer;
}
`
export const NavLink = styled(Link)`
color: black;
font-weight: 600;
text-decoration: none;
`
export const Bgwrap = styled.div`
background-image: url(${motorbg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 500px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
h1{
    font-size: 70px;
}
h2{
    font-size: 35px;
}
`