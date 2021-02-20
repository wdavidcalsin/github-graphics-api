import React, { ReactNode } from 'react';

import { DataProvider } from './context/data.context';
import { ThemeProvider } from './context/theme.context';
import { UserInputProvider } from './context/user.context';
import { RepoProvider } from './context/repo.context';
import { CommitProvider } from './context/commit.context';
import RouterIndex from './router/router';

import Home from './page/home';

const App = () => {
    return (
        <ThemeProvider>
            <DataProvider>
                <CommitProvider>
                    <RepoProvider>
                        <UserInputProvider>
                            <RouterIndex />
                        </UserInputProvider>
                    </RepoProvider>
                </CommitProvider>
            </DataProvider>
        </ThemeProvider>
    );
};

export default App;
