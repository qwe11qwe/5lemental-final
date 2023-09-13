import NavBar from '@/components/navBar/NavBar';
import Heading from '@/components/Heading';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <Heading />
      <main>
        <Outlet />
      </main>
      <NavBar />
    </>
  );
}
