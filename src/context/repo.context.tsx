import React, { createContext, useContext, useEffect, useState } from 'react';
import { RepoApiI } from '../interfaces/repoApi';
import Repos from '../service/repos.service';

interface IRepo {
    repo: Array<RepoApiI>;
    setRepo: (repo: any) => void;
    repoSave: (repo_url: string) => void;
}

export const RepoContext = createContext<IRepo>({} as IRepo);

const RepoProvider = ({ children }: any) => {
    const [repo, setRepo] = useState([]);

    const repoSave = async (repo_url: string) => {
        const repoData = await new Repos().getApiRepo<RepoApiI>(repo_url);
        console.log(repoData);
    };

    return (
        <RepoContext.Provider
            value={{
                repo,
                setRepo,
                repoSave,
            }}
        >
            {children}
        </RepoContext.Provider>
    );
};

const useRepo = () => {
    const { repo, setRepo, repoSave } = useContext(RepoContext);
    return {
        repo,
        setRepo,
        repoSave,
    };
};

export { RepoProvider as CommitProvider, useRepo };
