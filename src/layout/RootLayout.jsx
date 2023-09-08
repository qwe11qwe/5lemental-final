import NavBar from '@/components/navBar/NavBar';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <NavBar/>
    </>
  );
}