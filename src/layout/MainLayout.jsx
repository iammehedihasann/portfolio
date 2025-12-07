import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { Children } from 'react';

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
export default MainLayout;
