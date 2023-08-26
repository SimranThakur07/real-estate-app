import { createAction, createReducer } from "@reduxjs/toolkit";

export const rootReducer = createReducer({isAuthenticated: false}, {
    signin: (state) => {
        state.isAuthenticated = true
    },
    logout: (state) => {
        state.isAuthenticated = false
    }
})

export const signin = createAction("signin");

export const logout = createAction("logout")