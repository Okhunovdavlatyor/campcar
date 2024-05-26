import React from 'react'
import Popup from 'reactjs-popup';
import grid1 from '../assets/Group 2197.png'
import grid2 from '../assets/Group 2198.png'
import grid3 from '../assets/Group 2199.png'
import grid4 from '../assets/Group 2200.png'
const PopupThree = () => {
  return (
    <>
    <Popup
    trigger={<button className="button"><img src={grid1} alt="" />  </button>}
    
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <p> New video </p>
        <div className="content">
        <iframe width="790" height="360" src="https://www.youtube.com/embed/9NpSU-j6eV8?si=MjDefYVhn-VtTFG5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
      </div>
    )}
  </Popup>
  <Popup
    trigger={<button className="button"><img src={grid2} alt="" />  </button>}
    
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <p> New video </p>
        <div className="content">
        <iframe width="790" height="360" src="https://www.youtube.com/embed/9NpSU-j6eV8?si=MjDefYVhn-VtTFG5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
      </div>
    )}
  </Popup>
  <Popup
    trigger={<button className="button"><img src={grid3} alt="" />  </button>}
    
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <p> New video </p>
        <div className="content">
        <iframe width="790" height="360" src="https://www.youtube.com/embed/9NpSU-j6eV8?si=MjDefYVhn-VtTFG5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
      </div>
    )}
  </Popup>
  <Popup
    trigger={<button className="button"><img src={grid4} alt="" />  </button>}
    
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <p> New video </p>
        <div className="content">
        <iframe width="790" height="360" src="https://www.youtube.com/embed/9NpSU-j6eV8?si=MjDefYVhn-VtTFG5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
      </div>
    )}
  </Popup>
  <Popup
    trigger={<button className="button"><img src={grid1} alt="" />  </button>}
    
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <p> New video </p>
        <div className="content">
        <iframe width="790" height="360" src="https://www.youtube.com/embed/9NpSU-j6eV8?si=MjDefYVhn-VtTFG5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
      </div>
    )}
  </Popup>
  <Popup
    trigger={<button className="button"><img src={grid2} alt="" />  </button>}
    
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <p> New video </p>
        <div className="content">
        <iframe width="790" height="360" src="https://www.youtube.com/embed/9NpSU-j6eV8?si=MjDefYVhn-VtTFG5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
      </div>
    )}
  </Popup>
    </>
    
  )
}

export default PopupThree