import { useRef, useEffect } from "react";
import {PopupContainer, PopupInner} from "./style";
import {AiOutlineClose} from 'react-icons/ai'
export default function Popup(props) {


  return (
    props.popup ? (
      <PopupContainer>
        <PopupInner >
          <div className='close'>
            <AiOutlineClose onClick={()=> props.setPopup(false)}/> 
          </div>
          {props.children} 
        </PopupInner>
      </PopupContainer>    
    )
    : ""
  )
}
