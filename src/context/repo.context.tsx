import React, { createContext, useContext, useEffect, useState } from 'react';
import { RepoApiI } from '../interfaces/repoApi';

interface IRepo {
    repo: Array<RepoApiI>;
    setRepo: (repo: any) => void;
}

export const RepoContext = createContext<IRepo>({} as IRepo);

const RepoProvider = ({ children }: any) => {
    const [repo, setRepo] = useState([]);

    // const repoSave = async (repo_url: string) => {
    //     const repoData = await new Repos().getApiRepo<RepoApiI>(repo_url);
    //     console.log(repoData);
    // };

    return (
        <RepoContext.Provider
            value={{
                repo,
                setRepo,
            }}
        >
            {children}
        </RepoContext.Provider>
    );
};

const useRepo = () => {
    const { repo, setRepo } = useContext(RepoContext);
    return {
        repo,
        setRepo,
    };
};

export { RepoProvider as CommitProvider, useRepo };
