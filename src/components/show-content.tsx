import React, { useEffect } from 'react';

import { ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { DataContext, useData } from '../context/data.context';
import { RepoContext } from '../context/repo.context';
import { GithubApiI } from '../interfaces/githubApi';
import { RepoApiI } from '../interfaces/repoApi';
import Repos from '../service/repos.service';
import { timeFormat } from './common/profileGithub';
import { Blog } from './common/showNormal';

type MyProps = { props?: undefined };
type MyStates = { data: GithubApiI };

// interface ChartDataModified extends ChartData {
//     datasets?: [
//         {
//             theme?: () => void
//          }
//     ];
// }

const dataLine: ChartData = {
    labels: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
    datasets: [
        {
            label: 'commits',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderWidth: 1,
            radius: 4,
            cubicInterpolationMode: 'monotone',
            steppedLine: false,
            data: [3, 6, 4, 10, 15, 1, 2],
        },
    ],
};

const optionsChart: ChartOptions = {
    onClick: (element, dataAtClick: any) => {
        if (dataAtClick?.length != 0) console.log(dataAtClick[1]);
    },
    legend: {
        display: true,
        position: 'top',

        labels: {
            boxWidth: 80,
            fontColor: 'black',
        },
    },
    layout: {
        padding: {
            left: 50,
            right: 0,
            top: 0,
            bottom: 0,
        },
    },
};

const ShowContent = () => {
    const { data, resStatus } = useData();

    return (
        <div>
            {Object.keys(data).length != 0 && resStatus != 404 ? (
                <>
                    <Line
                        width={500}
                        height={300}
                        data={dataLine}
                        options={optionsChart}
                    />
                </>
            ) : (
                <div>No hay datos todavia</div>
            )}
        </div>
    );
};

export default ShowContent;
