import React, { ReactNode } from 'react';

import { DataProvider } from './context/data.context';
import { ThemeProvider } from './context/theme.context';
import { UserInputProvider } from './context/user.context';

import Home from './page/home';

class App extends React.Component {
    render(): ReactNode {
        return (
            <ThemeProvider>
                <DataProvider>
                    <UserInputProvider>
                        <Home />
                    </UserInputProvider>
                </DataProvider>
            </ThemeProvider>
        );
    }
}

export default App;
