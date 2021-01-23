import React, { BaseSyntheticEvent, createContext, useContext, useState } from 'react';
import { GithubApiI } from '../interfaces/githubApi';
import ApiGithub from '../service/github.service';
import { useData } from './data.context';

interface IUserInput {
    user: string;
    setUser: (user: string) => void;
    onSubmitsendUser: (e: BaseSyntheticEvent) => void;
}

export const UserInputContext = createContext<IUserInput>({} as IUserInput);

const UserInputProvider = ({ children }: any) => {
    const [user, setUser] = useState<string>('...');
    const { data, setData } = useData();

    const onSubmitsendUser = async (e: BaseSyntheticEvent) => {
        e.preventDefault();
        const res = await new ApiGithub().getApi<GithubApiI>(user);
        setData(await res.json());
        console.log(data);
    };

    return (
        <UserInputContext.Provider value={{ user, setUser, onSubmitsendUser }}>
            {children}
        </UserInputContext.Provider>
    );
};

const useUserInput = () => {
    const { user, setUser, onSubmitsendUser } = useContext(UserInputContext);
    return { user, setUser, onSubmitsendUser };
};

export { UserInputProvider, useUserInput };
