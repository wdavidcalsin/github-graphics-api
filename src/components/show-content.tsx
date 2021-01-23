import React, { Component, ContextType } from 'react';
import ApiGithub from '../service/github.service';
import { GithubApiI } from '../interfaces/githubApi';
import { DataContext } from '../context/data.context';

type MyProps = { props?: undefined };
type MyStates = { data: GithubApiI };

class ShowContent extends Component<MyProps, MyStates> {
    static contextType = DataContext;
    context!: ContextType<typeof DataContext>;

    constructor(props?: any) {
        super(props);

        this.state = {
            data: {} as GithubApiI,
        };

        // this.apiReturn = this.apiReturn.bind(this);
    }

    // async apiReturn() {}

    async componentDidMount() {
        console.log(typeof this.context.data);
    }

    render() {
        return (
            <div>
                {Object.keys(this.context.data).length != 0 ? (
                    <div className="show-content">
                        <h2>Statistics</h2>
                        <div>Mostar:</div>
                        <h4>
                            avatar_url: {this.context.data.avatar_url}
                            <img src={this.context.data.avatar_url} alt="" />
                        </h4>
                        <h4>blog: {this.context.data.blog}</h4>
                        <h4>company: {this.context.data.company}</h4>
                        <h4>created at: {this.context.data.created_at}</h4>
                        <h4>email: {this.context.data.email}</h4>
                        <h4>events url: {this.context.data.events_url}</h4>
                        <h4>followers: {this.context.data.followers}</h4>
                        <h4>followers url: {this.context.data.followers_url}</h4>
                        <h4>following: {this.context.data.following}</h4>
                        <h4>gists url: {this.context.data.gists_url}</h4>
                        <h4>gravatar id: {this.context.data.gravatar_id}</h4>
                        <h4>hireable: {this.context.data.hireable}</h4>
                        <h4>html_url: {this.context.data.html_url}</h4>
                        <h4>id: {this.context.data.id}</h4>
                        <h4>location: {this.context.data.location}</h4>
                        <h4>login: {this.context.data.login}</h4>
                        <h4>name: {this.context.data.name}</h4>
                    </div>
                ) : (
                    <div>No hay datos todavia</div>
                )}
            </div>
        );
    }
}

export default ShowContent;
