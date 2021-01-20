import { GithubApiI } from '../interfaces/githubApi';

class ApiGithub {
    public async getApi<T>(): Promise<T> {
        const response = await fetch('https://api.github.com/users/wdavidcalsin');
        const body = await response.json();
        return body;
    }
}

export default ApiGithub;
