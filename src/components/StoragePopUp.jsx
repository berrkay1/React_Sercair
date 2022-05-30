import React from 'react'


function StoragePopUp() {

    
    
    const getStorageItem = JSON.parse(localStorage.getItem('Detay'));
    

    return (

        <div className='Storage-pop-up'>

            <div  className="card " style={{ width: '35rem' }}  >

                <img src={getStorageItem.imageUrl} className="card-img-top" alt={getStorageItem.deviceName} />
                <div className="card-body">
                    <h4 className="card-title">Sercair</h4>
                    <h5 className="card-title">{getStorageItem.deviceName}</h5>
                    <p className="card-text">{getStorageItem.desc}</p>
                    <div className='percent'>%50 İNDİRİM</div>
                </div>
            </div>
        </div>
    )
}

export default StoragePopUp