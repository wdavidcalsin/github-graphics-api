import React, { createContext, useContext, useState } from 'react';

interface ICommitProvider {
    commit: Array<any>;
    setCommit: (commit: any) => any;
}

export const CommitContext = createContext<ICommitProvider>(
    {} as ICommitProvider,
);

const CommitProvider = ({ children }: any) => {
    const [commit, setCommit] = useState([]);

    return (
        <CommitContext.Provider value={{ commit, setCommit }}>
            {children}
        </CommitContext.Provider>
    );
};

const useCommit = () => {
    const context: ICommitProvider = useContext(CommitContext);
    return context;
};

export { CommitProvider, useCommit };
