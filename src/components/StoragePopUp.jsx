import React, { useRef } from 'react'
import useClickOutside from 'use-click-outside-close';

function StoragePopUp({setLocal}) {

    const getFromStorageItem = JSON.parse(localStorage.getItem('Detay'));
    const ref = useRef();

   useClickOutside(ref,()=> setLocal(false))

    return (

        <div className='Storage-pop-up'>

            <div ref={ref} className="card " style={{ width: '35rem' }}  >

                <img src={getFromStorageItem.imageUrl} className="card-img-top" alt={getFromStorageItem.deviceName} />
                <div className="card-body">
                    <h4 className="card-title">Sercair</h4>
                    <h5 className="card-title">{getFromStorageItem.deviceName}</h5>
                    <p className="card-text">{getFromStorageItem.desc}</p>
                    <div className='percent'>%50 İNDİRİM</div>
                </div>
            </div>
        </div>
    )
}

export default StoragePopUp