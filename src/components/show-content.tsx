import React, { Component, ContextType } from 'react';

import { ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { DataContext, useData } from '../context/data.context';
import { RepoContext } from '../context/repo.context';
import { GithubApiI } from '../interfaces/githubApi';
import { RepoApiI } from '../interfaces/repoApi';
import Repos from '../service/repos.service';
import { ProfileGithub } from './common/profileGithub';
import { Blog } from './common/showNormal';

type MyProps = { props?: undefined };
type MyStates = { data: GithubApiI };

const dataLine: ChartData = {
    labels: [
        'Domingo',
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
    ],
    datasets: [
        {
            label: 'commits',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            weight: 1000000,

            data: [65, 59, 80, 81, 56, 55, 40],
        },
    ],
};

const optionsChart: ChartOptions = {
    // responsive: true,

    legend: {
        align: 'center',
        fullWidth: true,
    },
};

const ShowContent = () => {
    const { data, resStatus } = useData();

    return (
        <div>
            {Object.keys(data).length != 0 && resStatus != 404 ? (
                <Line width={500} data={dataLine} options={optionsChart} />
            ) : (
                <div>No hay datos todavia</div>
            )}
        </div>
    );
};

export default ShowContent;
