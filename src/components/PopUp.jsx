import React, { useRef } from 'react'
import useClickOutside from 'use-click-outside-close';

function PopUp({ item, setModal }) {

  const ref = useRef();

  useClickOutside(ref, ()=>setModal(false) );

  return (
    <div className='pop-up'>
      <div ref={ref} className="card " style={{ width: '35rem' }}  >
        <img src={item.imageUrl} className="card-img-top" alt={item.deviceName} />
        <div className="card-body">
          <h4 className="card-title">Sercair</h4>
          <h5 className="card-title">{item.deviceName}</h5>
          <p className="card-text">{item.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default PopUp