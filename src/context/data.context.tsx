import React, {
    BaseSyntheticEvent,
    createContext,
    useContext,
    useState,
} from 'react';
import { GithubApiI } from '../interfaces/githubApi';
import ApiGithub from '../service/github.service';

interface IData {
    data: GithubApiI;
    setData: (data: GithubApiI) => void;
    resStatus: number;
    setResSatus: (resStatus: number) => void;
}

export const DataContext = createContext<IData>({} as IData);

const DataProvider = ({ children }: any) => {
    const [data, setData] = useState<GithubApiI>({} as GithubApiI);
    const [resStatus, setResSatus] = useState<number>(404);

    return (
        <DataContext.Provider
            value={{
                data,
                resStatus,
                setData,
                setResSatus,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

const useData = () => {
    const { data, resStatus, setData, setResSatus } = useContext(DataContext);
    return {
        data,
        resStatus,
        setData,
        setResSatus,
    };
};

export { DataProvider, useData };
