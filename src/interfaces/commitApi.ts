interface CommitI {
    message: string;
}

export interface CommitApiI {
    sha: string;
    node_id: string;
    commit: CommitI;
}
