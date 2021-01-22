import { GithubApiI } from '../interfaces/githubApi';

class ApiGithub {
    public async getApi<T>(user: string): Promise<T> {
        const response = await fetch(`https://api.github.com/users/${user}`);
        const body = await response.json();
        return body;
    }
}

export default ApiGithub;
