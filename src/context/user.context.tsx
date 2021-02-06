// import React, { BaseSyntheticEvent, createContext, useContext, useState } from 'react';
import * as React from 'react';
import { GithubApiI } from '../interfaces/githubApi';
import ApiGithub from '../service/github.service';
import { useData } from './data.context';

interface IUserInput {
    user: string;
    setUser: (user: string) => void;
    onSubmitsendUser: (e: React.BaseSyntheticEvent) => void;
}

export const UserInputContext = React.createContext<IUserInput>({} as IUserInput);

const UserInputProvider = ({ children }: any) => {
    const [user, setUser] = React.useState<string>('...');

    const { setData, setResSatus } = useData();

    const onSubmitsendUser = async (e: React.BaseSyntheticEvent) => {
        e.preventDefault();

        const res = await new ApiGithub().getApi<GithubApiI>(user);
        setData(await res.json());
        setResSatus(await res.status);

        // if (Object.entries(data).length != 0) {
        //     const resRepo = await new Repos().getApiRepo<RepoApiI>(data.repos_url);
        //     setRepo(resRepo);
        //     // console.log(resRepo);
        //     // repoMain(resRepo);
        //     // console.log(repo);
        // }
        // console.log(data);
        // console.log(resStatus);
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
