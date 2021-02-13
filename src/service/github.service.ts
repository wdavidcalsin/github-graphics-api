import { GithubApiI } from '../interfaces/githubApi';
import { DataMain } from './dataMain.service';

class ApiGithub {
    public async getApi<T>(user: string) {
        const response = new DataMain().fetchGet(`https://api.github.com/users/${user}`);
        return response;
    }
}

export default ApiGithub;
