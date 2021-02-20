import { DataMain } from './dataMain.service';

import { RepoApiI } from '../interfaces/repoApi';
import { CommitApiI } from '../interfaces/commitApi';
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

        this.dataRepo.map((i) => {
            if (i.private == false && i.fork == false)
                this.getApiCommit<CommitApiI>(i.commits_url);
        });

        // console.log(this.dataCommit);

        return res;
    }

    public async getApiCommit<TC extends CommitApiI>(commits_url: string) {
        const commit = commits_url.replace('{/sha}', '');
        const res = await new DataMain().fetchGetData<TC>(commit);
        console.log(res);
        // this.dataCommit = [...this.dataCommit, res];
    }
}

export default Repos;
