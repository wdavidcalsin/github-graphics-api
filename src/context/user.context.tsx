import React, { createContext, useContext, useState } from 'react';

interface IUserInput {
    user: string;
    setUser: (user: string) => void;
}

export const UserInputContext = createContext<IUserInput>({} as IUserInput);

const UserInputProvider = ({ children }: any) => {
    const [user, setUser] = useState<string>('...');

    return (
        <UserInputContext.Provider value={{ user, setUser }}>{children}</UserInputContext.Provider>
    );
};

const useUserInput = () => {
    const { user, setUser } = useContext(UserInputContext);
    return { user, setUser };
};

export { UserInputProvider, useUserInput };
