class Repos {
    public async getApiRepo<TR>(reposUrl: string) {
        const response = await fetch(reposUrl);
        const res = await response.json();


        return res;
        // console.log(res);
        // console.log(reposUrl);

    }

    public async getApiCommit<TC>(commits_url: string) {
        const commit = commits_url.replace('{/sha}', '');
        const response = await fetch(commit);

        return response;
    }
}

export default Repos;
