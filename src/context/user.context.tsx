// import React, { BaseSyntheticEvent, createContext, useContext, useState } from 'react';
import * as React from 'react';
import { GithubApiI } from '../interfaces/githubApi';
import ApiGithub from '../service/github.service';
import { useData } from './data.context';
import { useCommit } from './repo.context';

interface IUserInput {
    user: string;
    setUser: (user: string) => void;
    onSubmitsendUser: (e: React.BaseSyntheticEvent) => void;
}

export const UserInputContext = React.createContext<IUserInput>({} as IUserInput);

const UserInputProvider = ({ children }: any) => {
    const [user, setUser] = React.useState<string>('...');

    const { data, resStatus, setData, setResSatus } = useData();
    const { repoSave } = useCommit();

    const onSubmitsendUser = async (e: React.BaseSyntheticEvent) => {
        e.preventDefault();

        const res = await new ApiGithub().getApi<GithubApiI>(user);
        setData(await res.json());
        setResSatus(await res.status);

        console.log(data);
        console.log(resStatus);
        console.log(await repoSave(data.repos_url));
    };

    return (
        <UserInputContext.Provider
            value={{
                user,
                setUser,
                onSubmitsendUser,
            }}
        >
            {children}
        </UserInputContext.Provider>
    );
};

const useUserInput = () => {
    const { user, setUser, onSubmitsendUser } = React.useContext(UserInputContext);
    return {
        user,
        setUser,
        onSubmitsendUser,
    };
};

export { UserInputProvider, useUserInput };
