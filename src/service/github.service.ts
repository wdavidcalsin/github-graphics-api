import { GithubApiI } from '../interfaces/githubApi';

class ApiGithub {
    public async getApi<T>(user: string) {
        const response = await fetch(`https://api.github.com/users/${user}`);
        // const body = await response.json();
        // const status = await response.status;
        // console.log(response);
        return response;
    }
}

export default ApiGithub;
