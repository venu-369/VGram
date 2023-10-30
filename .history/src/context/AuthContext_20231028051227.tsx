import { IContextType } from '@/types'
import { createContext, useContext, useEffect, useState } from 'react'

export const INTITAL_USER = {
    id: '',
    name: '',
    username: '',
    email: '',
    emageUrl: '',
    bio: ''

}

const INTITAL_STATE = {
    user: INTITAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => { },
    setIsAuthenticated: () => { },
    checkAutheUser: async () => false as boolean,

}

const AuthContext = createContext<IContextType>(INTITAL_STATE);

const AuthContext = () => {
    return (
        <div>

        </div>
    )
}

export default AuthContext
