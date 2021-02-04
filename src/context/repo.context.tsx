import React, { createContext, useContext, useEffect, useState } from 'react';
import { RepoApiI } from '../interfaces/repoApi';

interface IRepo {
    repo: Array<RepoApiI>;

    setRepo: (repo: any) => void;

    repoMain: (dataRepo: Array<RepoApiI>) => void;

}

export const RepoContext = createContext<IRepo>({} as IRepo);

const RepoProvider = ({ children }: any) => {
    const [repo, setRepo] = useState<Array<RepoApiI>>([]);


    const repoMain = async (dataRepo: Array<RepoApiI>) => {
        setRepo(await dataRepo);
    };

    return (
        <RepoContext.Provider
            value={{
                repo,
                setRepo,

                repoMain,

            }}
        >
            {children}
        </RepoContext.Provider>
    );
};

const useRepo = () => {

    const { repo, setRepo, repoMain } = useContext(RepoContext);
    return {
        repo,
        setRepo,
        repoMain,

    };
};

export { RepoProvider, useRepo };
