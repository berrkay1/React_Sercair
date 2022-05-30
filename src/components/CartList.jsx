import React, { useEffect } from 'react'
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetApi } from '../redux/cartSlice';
import Loading from './Loading';
import Error from './Error';


function CartList() {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);
    const status = useSelector(state => state.cart.status);
    const error = useSelector(state => state.cart.error);


    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchGetApi())
        }


    }, [dispatch])

    if (status === 'failed') {
        return <Error message={error} />
    }


    return (

        <>
            {status === 'loading' && <Loading/>}

            <ul className='cartList' style={{ listStyle: 'none' }}>
                {

                    cart.map((item, index) => (
                        <li key={index}>
                            <CartItem item={item} id={index} />
                        </li>
                    ))
                }
            </ul>
        </>

    )
}

export default CartList