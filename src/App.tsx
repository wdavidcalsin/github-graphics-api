import React from 'react';
import { Bar } from 'react-chartjs-2';
import ApiGithub from './service/github.service';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40],
        },
    ],
};

class App extends React.Component {
    async componentDidMount() {
        const res: any = await new ApiGithub().getApi();
        console.log(res.avatar_url);
    }

    render() {
        return (
            <>
                <Bar
                    data={data}
                    width={100}
                    height={300}
                    options={{ maintainAspectRatio: false }}
                />
                <div>
                    <h3>Willian david calsin borda</h3>
                    <p>Programer for the Typescrip and javascript</p>
                </div>
            </>
        );
    }
}

export default App;
