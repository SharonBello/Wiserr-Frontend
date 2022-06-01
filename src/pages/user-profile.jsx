import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { loadOrders } from '../store/actions/order.actions.js';
import { userService } from '../services/user.service.js';
import { getLoggedinUser } from '../store/actions/user.actions.js';
import { utilService } from '../services/util.service.js';

export const UserProfile = () => {

    const [loggedInUser, setLoggedInUser] = useState(userService.getLoggedinUser())
    const user = useSelector((storeState) => storeState.userModule.loggedInUser)
    let { orders } = useSelector((storeState) => storeState.orderModule)
    const dispatch = useDispatch()

    useEffect(() => {
        let user = { type: 'buyer', fullName: loggedInUser.userName }
        dispatch(loadOrders(loggedInUser))
    }, [orders])


    return (
        <section className='user-profile-layout'>
            <section className='user-profile flex'>
                <div className='profile-left-container'>
                    <div className='profile-img-user flex'>
                        <img className='profile-usr-img' src={user.imgUrl} alt="img" />
                        <h1>userName: {user.userName}</h1>
                    </div>
                </div>
                <div className='profile-right-container'>
                    {(orders) ?
                        <div>
                            <h1>Your orders:</h1>
                            {orders.map(order => <div key={order._id}><h4>{order.gig.description}</h4>
                                <h5>{order.seller.fullName}</h5>
                                <h5>{order.gig.price}</h5>
                                <h5>{utilService.setDateTime(order.createdAt)}</h5>
                                <h5>{utilService.setDateTime(order.deliveryDate)}</h5></div>)}
                        </div> :
                        (<span></span>)}
                </div>
            </section>
        </section>
    )
}