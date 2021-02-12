import { DataMain } from './dataMain.service';

class Repos {
    public async getApiRepo<TR>(reposUrl: string) {
        const response = await fetch(reposUrl);
        const res = await response.json();

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
