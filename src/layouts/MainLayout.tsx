import {Outlet} from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function MainLayout()
{
    return(
        <div className="min-h-screen flex flex-col bg-background text-on-background">
            <Header />

                <main className="flex-grow w-full">
                    <Outlet />
                </main>

            <Footer />
        </div>
    )
}