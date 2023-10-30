import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
    const isAuthenticated = false;
    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
            ) : (
                <>
                    <section className='flec flex-1 justify-center items-center felx-col py-10'>
                        <Outlet />
                    </section>
                </>
            )}
        </>
    )
}

export default AuthLayout
