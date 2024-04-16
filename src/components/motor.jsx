import React from 'react'
import { Btn, Btnwrap, CardCont, Carwap, Catalogwraper, Container, Filterwrap, ItemLeft, ItemRight, ItemWraper, Listwrap, Wrapper } from '../styles/motorStyle';
import { Bgwrap } from '../styles/navbarStyle';
import { campcar } from '../mockdate/mockdata';
import Group from '../assets/Group 2300.png'
const MotorComponent = () => {
    const date = campcar.maindata;
    console.log('date', date); 
    const dateLength = date.length;
    console.log('data:', date.length);
  return (
    <Container>
        <Bgwrap>
            <p>Home/Motors</p>
            <h2>Our ranges</h2>
            <h1>Motors</h1>
        </Bgwrap>
        <Wrapper>
            <Listwrap>
               
            </Listwrap>
            <Catalogwraper>
                <ItemWraper>
                    <ItemLeft>
                        <p>Item </p>
                        <p style={{color: '#006DAB'}}>{dateLength}</p>
                    </ItemLeft>
                    <ItemRight>
                        <p>Sort by</p>
                        <input type="text" placeholder='Select'/>
                        <input type="text" placeholder='60' style={{width: 60}}/>
                        <img src={Group} alt="group-img" />
                    </ItemRight>
                </ItemWraper>
                <Carwap>
                {
                    date.map ((value, key)=>{
                        return <CardCont key={key}>
                            <img src={value.car.photo} alt="" />
                            <h1>{value.car.name || 'nodate'}</h1>
                            <p>{value.car.company || 'nodate'}</p>
                            <h2>{value.car.cost}</h2>
                            <Btnwrap>
                            <Btn>Order</Btn>
                            <Btn>Compare</Btn>
                            </Btnwrap>
                           
                        </CardCont>

                        
                    })
                }
                </Carwap>
            </Catalogwraper>
        </Wrapper>
    </Container>
  )
}

export default MotorComponent;