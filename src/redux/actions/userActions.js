import {actionTypes} from '../../actionTypes'

export const storeLoggedInUserDetails = userDetails =>({
    type:actionTypes.UPDATE_LOGIN_DETAILS,
    payload:userDetails
})

