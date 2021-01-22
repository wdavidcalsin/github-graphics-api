import React, { Component } from 'react';
import ApiGithub from '../service/github.service';
import { GithubApiI } from '../interfaces/githubApi';

type MyProps = { props?: undefined };
type MyStates = { data: GithubApiI };

class ShowContent extends Component<MyProps, MyStates> {
    private user: string;

    constructor(props?: any) {
        super(props);
        this.user = 'yonycalsin';

        this.state = {
            data: {} as GithubApiI,
        };

        this.apiReturn = this.apiReturn.bind(this);
    }

    async apiReturn() {
        return await new ApiGithub().getApi<GithubApiI>(this.user);
    }

    async componentDidMount() {
        this.setState({ data: await this.apiReturn() });
        // this.apiReturn();
        console.log(this.state.data);
    }

    render() {
        return (
            <div className="show-content">
                <h2>Statistics</h2>
                <div>Mostar:</div>
                <h4>
                    avatar_url: {this.state.data.avatar_url}
                    <img src={this.state.data.avatar_url} alt="" />
                </h4>
                <h4>blog: {this.state.data.blog}</h4>
                <h4>company: {this.state.data.company}</h4>
                <h4>created at: {this.state.data.created_at}</h4>
                <h4>email: {this.state.data.email}</h4>
                <h4>events url: {this.state.data.events_url}</h4>
                <h4>followers: {this.state.data.followers}</h4>
                <h4>followers url: {this.state.data.followers_url}</h4>
                <h4>following: {this.state.data.following}</h4>
                <h4>gists url: {this.state.data.gists_url}</h4>
                <h4>gravatar id: {this.state.data.gravatar_id}</h4>
                <h4>hireable: {this.state.data.hireable}</h4>
                <h4>html_url: {this.state.data.html_url}</h4>
                <h4>id: {this.state.data.id}</h4>
                <h4>location: {this.state.data.location}</h4>
                <h4>login: {this.state.data.login}</h4>
                <h4>name: {this.state.data.name}</h4>
            </div>
        );
    }
}

export default ShowContent;
