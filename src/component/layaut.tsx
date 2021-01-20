import React, { ReactNode } from 'react';
import Header from './header';

interface PropsLayoutI {
    children: ReactNode;
}

const Layout = (props: PropsLayoutI) => {
    const { children } = props;

    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Layout;
