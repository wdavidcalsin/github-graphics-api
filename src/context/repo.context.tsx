import React, { createContext, useContext, useEffect, useState } from 'react';
import { GithubApiI } from '../interfaces/githubApi';

import { RepoApiI } from '../interfaces/repoApi';

import Repos from '../service/repos.service';
import { useData } from './data.context';

interface IRepo {
    repo: Array<any>;
    setRepo: (repo: any) => void;
    repoSave: (repo_url: string) => any;
}

export const RepoContext = createContext<IRepo>({} as IRepo);

const RepoProvider = ({ children }: any) => {
    // const { data } = useData();

    const [repo, setRepo] = useState([]);

    const repoSave = async (repo_url: string) => {
        const repoData = await new Repos().getApiRepo<RepoApiI>(repo_url);
        return repoData;
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

const useCommit = () => {
    const { repo, setRepo, repoSave } = useContext(RepoContext);
    return {
        repo,
        setRepo,
        repoSave,
    };
};

export { RepoProvider as CommitProvider, useCommit };
