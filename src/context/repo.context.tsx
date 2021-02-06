import React, { createContext, useContext, useEffect, useState } from 'react';
import { RepoApiI } from '../interfaces/repoApi';

interface IRepo {
    repo: Array<RepoApiI>;
    setRepo: (dataRepo: any) => void;
    repoMain: () => void;
}

export const RepoContext = createContext<IRepo>({} as IRepo);

const RepoProvider = ({ children }: any) => {
    const [repo, setRepo] = useState<any>([]);

    const repoMain = () => {
        console.log('david');
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
    const { repo, setRepo, repoMain } = React.useContext(RepoContext);
    return {
        repo,
        setRepo,
        repoMain,
    };
};

export { RepoProvider, useRepo };
