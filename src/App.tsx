import React, { ReactNode } from 'react';

import { DataProvider } from './context/data.context';
import { ThemeProvider } from './context/theme.context';
import { UserInputProvider } from './context/user.context';
import { RepoProvider } from './context/repo.context';

import Home from './page/home';

const App = () => {
    return (
        <ThemeProvider>
            <DataProvider>
                <RepoProvider>
                    <UserInputProvider>
                        <Home />
                    </UserInputProvider>
                </RepoProvider>
            </DataProvider>
        </ThemeProvider>
    );
};

export default App;
