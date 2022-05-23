import { createReducer, createAction } from '@reduxjs/toolkit'

export const logIn = createAction('logIn')
export const setUser = createAction('setUser')
export const updateUser = createAction('updateUser')
export const logOut = createAction('logOut')

const initialState = {
    connected: false,
    JWTtoken: null,
    userData: {},
}

export default createReducer(initialState, (builder) =>
    builder
    .addCase(logIn, (draft, JWTtoken) => { // 
        if (draft.connected === false) {
            draft.connected = true
            draft.JWTtoken = JWTtoken.payload
            return
        }
        if (draft.connected === true) {
            return  
        }
    })
    .addCase(logOut, (draft) => {
        if (draft.connected === true) {
            draft.connected = false
            draft.userData = {}
            draft.JWTtoken = null
            return
        }
        if (draft.connected === false) {
            return
        }
    })
)
