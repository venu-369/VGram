import { IContextType } from '@/types'
import { createContext, useContext, useEffect, useState } from 'react'

export const INITIAL_USER = {
    id: '',
    name: '',
    username: '',
    email: '',
    emageUrl: '',
    bio: ''

}

const INITIAL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => { },
    setIsAuthenticated: () => { },
    checkAutheUser: async () => false as boolean,

}

const AuthContext = createContext<IContextType>(INITIAL_STATE);

const AuthProvider = () => {
    return (
        <div>

        </div>
    )
}

export default AuthContext
