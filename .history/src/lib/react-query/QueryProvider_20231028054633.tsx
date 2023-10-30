import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}></QueryClientProvider>
    )
}

export default QueryProvider
