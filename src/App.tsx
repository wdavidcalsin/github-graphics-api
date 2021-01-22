import React, { ReactNode } from 'react';
import { UserInputProvider } from './context/user.context';
import Home from './page/home';

class App extends React.Component {
    render(): ReactNode {
        return (
            <UserInputProvider>
                <Home />
            </UserInputProvider>
        );
    }
}

export default App;
