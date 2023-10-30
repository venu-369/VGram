import './globals.css';
import { Routes, Route } from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import { Home } from './_root/pages';

const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                {/*public routes*/}
                <Route path="/sign-in" element={<SigninForm />} />

                {/*private routes*/}
                <Route index element={<Home />} />
            </Routes>

        </main>
    )
}

export default App
