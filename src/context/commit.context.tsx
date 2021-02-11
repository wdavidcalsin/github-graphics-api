import React, { createContext, useContext, useState } from 'react';

interface ICommitProvider {
    commit: Array<any>;
    setCommit: (commit: any) => any;
}

export const CommitContext = createContext<ICommitProvider>({} as ICommitProvider);

const weekdays = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
];

const CommitProvider = ({ children }: any) => {
    const [commit, setCommit] = useState([]);

    // const weekdaysOrdered = (dayId: number) => {

    // };

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
