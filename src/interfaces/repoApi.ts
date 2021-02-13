export interface RepoApiI {
    id: number;
    name: string;
    private: boolean;
    html_url: string;
    commits_url: string;
    language: string;
    size: number;
    fork: boolean;
}
