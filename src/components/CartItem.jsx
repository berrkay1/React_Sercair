import React, { useEffect, useState } from 'react'
import PopUp from './PopUp';
import StoragePopUp from './StoragePopUp';



function CartItem({ item }) {

    const [modal, setModal] = useState(false);
    const [local,setLocal] = useState(false)


    const handlePopUp = () => {
         setModal(true)
         setLocal(false)
         localStorage.setItem('Detay', JSON.stringify(item));
    };



    useEffect(()=>{
        setLocal(true)
    },[])

   
    return (
        <>
           
            <div className="card" >
                <img src={item.imageUrl} className="card-img-top" alt={item.deviceName} />
                <div className="card-body">
                    <h5 className="card-title">Sercair</h5>
                    <p className="card-text">{item.deviceName}</p>
                    <button onClick={handlePopUp } className="btn btn-primary">Detay</button>
                </div>
            </div>
            {modal && <PopUp setModal={setModal} item={item}/>}
            {(localStorage.length === 1 && local) && <StoragePopUp setLocal={setLocal} />}
        </>
    )
}

export default CartItem