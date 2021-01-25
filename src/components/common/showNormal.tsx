import React from 'react';
import { GithubApiI } from '../../interfaces/githubApi';

const Perfil = (props: any) => {
    return (
        <div>
            <h4>
                avatar_url: {props.avatar}
                <img src={props.avatar} alt="" />
            </h4>
        </div>
    );
};

const Blog = (props: any) => {
    return <h4>blog: {props.blog}</h4>;
};

export { Perfil, Blog };
