import { Outlet } from 'react-router'

import MainMenu from './MainMenu'

export default function DefaultLayout() {
    return (
        <>

            <header className="logo">
                <h1>Logo</h1>
                <MainMenu />
            </header>
            <main>
                <Outlet />

            </main>

            <footer>
                Copiright 2024
            </footer>


        </>
    )
}