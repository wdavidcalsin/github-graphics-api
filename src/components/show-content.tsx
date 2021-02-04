import React, { Component, ContextType } from 'react';
import * as ReactDOM from 'react-dom';

import { GithubApiI } from '../interfaces/githubApi';
import { RepoApiI } from '../interfaces/repoApi';

import { DataContext } from '../context/data.context';

import { Blog } from './common/showNormal';
import { ProfileGithub } from './common/profileGithub';
import { RepoContext } from '../context/repo.context';

import Repos from '../service/repos.service';

type MyProps = { props?: undefined };
type MyStates = { data: GithubApiI };

class ShowContent extends Component<MyProps, MyStates> {
    static repoxtType = RepoContext;
    contextRepo!: ContextType<typeof RepoContext>;

    static contextType = DataContext;
    context!: ContextType<typeof DataContext>;

    constructor(props?: any) {
        super(props);

        this.state = {
            data: {} as GithubApiI,
        };
    }

    // componentDidMount() {
    //     if (Object.entries(this.context.data).length != 0) {
    //         new Repos().getApiRepo<RepoApiI>(this.context.data.repos_url);
    //     }
    // }

    // componentDidUpdate() {
    //     if (Object.entries(this.context.data).length != 0) {
    //         new Repos().getApiRepo<RepoApiI>(this.context.data.repos_url);
    //     }
    // }

    render() {
        return (
            <div>
                {Object.keys(this.context.data).length != 0 && this.context.resStatus != 404 ? (
                    <div className="show-content">
                        <h2>Statistics</h2>
                        <ProfileGithub {...this.context.data} />
                        <Blog blog={this.context.data.blog} />
                        <h4>company: {this.context.data.company}</h4>
                        <h4>created at: {this.context.data.created_at}</h4>
                        <h4>email: {this.context.data.email}</h4>
                        <h4>events url: {this.context.data.events_url}</h4>
                        <h4>followers: {this.context.data.followers}</h4>
                        <h4>followers url: {this.context.data.followers_url}</h4>
                        <h4>following: {this.context.data.following}</h4>
                    </div>
                ) : (
                    <div>No hay datos todavia</div>
                )}
            </div>
        );
    }
}

export default ShowContent;
