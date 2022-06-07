import { orderService } from '../../services/order.service.js'
import { socketService } from '../../services/socket.service.js'

export function loadOrders(loggedInUser, typeOf) {
    // console.log('loggedInUser', loggedInUser)
    // console.log('typeOf',typeOf )
    return async dispatch => {
        try {
            const orders = await orderService.query(loggedInUser, typeOf)
        
            
            const action = { type: 'SET_ORDERS', orders }
            dispatch(action)
        } catch (err) {
            console.error('Cannot load orders:', err)
        }
    }
}


export function onSaveOrder(gigId, loggedinUser) {
    return async (dispatch) => {
        try {
            const order = await orderService.saveOrder(gigId, loggedinUser)
            
            const action = { type: 'SET_ORDER', order }
            dispatch(action)
            return order
        } catch (err) {
            console.log('Cannot save order:', err)
        }
    }
}


export function onUpdateOrder(order) {
    
    return async (dispatch) => {
        try {
            await orderService.updateOrder(order)
            const action = { type: 'SET_ORDER', order }
            dispatch(action)
        } catch (err) {
            console.log('Cannot update order', err)
        }
    }
}


export function addOrder(order,loggedInUser){
    return async (dispatch) => {
        try {
            const action = { type: 'ADD_ORDER', order }
            dispatch(action)
        } catch (err) {
            console.log('Cannot update order', err)
        }
    }
}