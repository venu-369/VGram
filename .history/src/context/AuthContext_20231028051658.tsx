import { IContextType, IUser } from '@/types'
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
    checkAuthUser: async () => false as boolean,

}

const AuthContext = createContext<IContextType>(INITIAL_STATE);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUser>(INITIAL_USER);
    return (
        <div>

        </div>
    )
}

export default AuthContext
