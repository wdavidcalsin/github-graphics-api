class ApiGithub {
    async getApi(): Promise<JSON> {
        const response = await fetch('https://api.github.com/users/wdavidcalsin');
        return await response.json();
    }
}

export default ApiGithub;
