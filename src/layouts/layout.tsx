import React, { ReactNode } from 'react';
import Navbar from '../components/utilities/navbar';

// Definisikan tipe untuk prop anak (children)
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Navbar tetap berada di setiap halaman */}
      <Navbar />
      <main>{children}</main>
      {/* Bisa tambahkan footer di sini */}
      <footer>
        <p>Footer content here</p>
      </footer>
    </div>
  );
};

export default Layout;
