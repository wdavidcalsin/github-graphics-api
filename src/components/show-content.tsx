import React, { Component, ContextType } from 'react';
import * as ReactDOM from 'react-dom';
import { ChartOptions } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import ApiGithub from '../service/github.service';

import { GithubApiI } from '../interfaces/githubApi';
import { DataContext } from '../context/data.context';
import { Perfil, Blog } from './common/showNormal';
import { ProfileGithub } from './common/profileGithub';

interface Idataset {
    label: string;
    fill: boolean;
    lineTension: number;
    backgroundColor: string;
    borderColor: string;
    borderCapStyle: string;
    borderDash: Array<null>;
    borderDashOffset: number;
    borderJoinStyle: string;
    pointBorderColor: string;
    pointBackgroundColor: string;
    pointBorderWidth: number;
    pointHoverRadius: number;
    pointHoverBackgroundColor: string;
    pointHoverBorderColor: string;
    pointHoverBorderWidth: number;
    pointRadius: number;
    pointHitRadius: number;
    data: Array<number>;
}
interface dataSatictis {
    labels: Array<string>;
    datasets: Array<Idataset>;
}

type MyProps = { props?: undefined };
type MyStates = { data: GithubApiI; dataStatic: dataSatictis };

class ShowContent extends Component<MyProps, MyStates> {
    static contextType = DataContext;
    context!: ContextType<typeof DataContext>;

    constructor(props?: any) {
        super(props);

        this.state = {
            data: {} as GithubApiI,
            dataStatic: {} as dataSatictis,
        };

        // this.apiReturn = this.apiReturn.bind(this);
    }

    // async apiReturn() {}

    async componentDidMount() {
        console.log(typeof this.context.data);
    }

    // displayName: 'LineExample';
    render() {
        const data = {
            labels: ['Red', 'Green', 'Yellow'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
            ],
        };

        const options: ChartOptions = {
            legend: {
                position: 'bottom',
            },
        };

        return (
            <div>
                {Object.keys(this.context.data).length != 0 && this.context.resStatus != 404 ? (
                    <div className="show-content">
                        <h2>Statistics</h2>
                        <ProfileGithub {...this.context.data} />
                        {/* <Perfil avatar={this.context.data.avatar_url} /> */}
                        <Blog blog={this.context.data.blog} />
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
                {/* <h2>Line Example</h2>
                <Pie data={data} options={options} /> */}
            </div>
        );
    }
}

export default ShowContent;
