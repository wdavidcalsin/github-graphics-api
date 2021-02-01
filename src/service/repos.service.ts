class Repos {
    // constructor() {
    //     this.getApiRepo = this.getApiRepo.bind(this);
    //     this.getApiCommit = this.getApiCommit.bind(this);
    // }

    public async getApiRepo<TR>(reposUrl: string) {
        const response = await fetch(reposUrl);
        const res = await response.json();

        console.log(res);
    }

    public async getApiCommit<TC>(commits_url: string) {
        const commit = commits_url.replace('{/sha}', '');
        const response = await fetch(commit);

        return response;
    }
}

export default Repos;
