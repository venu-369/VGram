import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'


const queryClient = new QueryClient()l

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}></QueryClientProvider>
    )
}

export default QueryProvider
