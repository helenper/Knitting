import React from 'react';
import Navbar from '../NavBar/Navbar';

type LayoutType = {
    children?: any;
};

const Layout: React.FC<LayoutType> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};
export default Layout;
