import React from 'react'
import Popup from 'reactjs-popup';
import { Flex, FlexWrap, Flexcolm } from '../styles/sign';
const SignComp = () => {
  return (
    <>
   <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Modal Title </div>
        <div className="content">
        <h1>Sign in</h1>
         <Flex>
            <h>Email</h>
            <input type="text" placeholder='Your email' />
            <h>Password</h>
            <input type="text" placeholder='Your Password' />
            <FlexWrap>
                <div style={{display:'flex'}}>
                    <input type="checkbox" name="" id="" />
                    Keep me logged in
                </div>
                Forget your 
            </FlexWrap>
         </Flex>
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
         
        
        
         </>
    )}
 
  
  


export default SignComp