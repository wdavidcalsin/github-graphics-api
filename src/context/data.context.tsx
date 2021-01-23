import React, { BaseSyntheticEvent, createContext, useContext, useState } from 'react';
import { GithubApiI } from '../interfaces/githubApi';
import ApiGithub from '../service/github.service';

interface IData {
    data: GithubApiI;
    setData: (data: GithubApiI) => void;
}

export const DataContext = createContext<IData>({} as IData);

const DataProvider = ({ children }: any) => {
    const [data, setData] = useState<GithubApiI>({} as GithubApiI);

    return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

const useData = () => {
    const { data, setData } = useContext(DataContext);
    return { data, setData };
};

export { DataProvider, useData };
