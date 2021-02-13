import { DataMain } from './dataMain.service';

import { RepoApiI } from '../interfaces/repoApi';
import { CommitApiI } from '../interfaces/commitApi';
import { TypeOfTag } from 'typescript';
class Repos {
    public dataRepo: Array<RepoApiI>;
    public dataCommit: Array<CommitApiI>;

    constructor() {
        this.dataRepo = [];
        this.dataCommit = [];
    }

    public async getApiRepo<TR extends Array<RepoApiI>>(reposUrl: string) {
        const res = await new DataMain().fetchGetData<TR>(reposUrl);
        this.dataRepo = res;

        return res;
    }

    public async getApiCommit<TC>(commits_url: string) {
        const commit = commits_url.replace('{/sha}', '');
        const response = await fetch(commit);
        const res = await response.json();

        return res;
    }
}

export default Repos;
