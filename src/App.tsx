import React, { ReactNode } from 'react';
import { DataProvider } from './context/data.context';
import { UserInputProvider } from './context/user.context';
import Home from './page/home';

class App extends React.Component {
    render(): ReactNode {
        return (
            <DataProvider>
                <UserInputProvider>
                    <Home />
                </UserInputProvider>
            </DataProvider>
        );
    }
}

export default App;
