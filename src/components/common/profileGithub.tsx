import React from 'react';

import { CgProfile } from 'react-icons/cg';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { BiTimeFive } from 'react-icons/bi';
import { ImProfile } from 'react-icons/im';
import { FaRegBuilding } from 'react-icons/fa';

import { GithubApiI } from '../../interfaces/githubApi';

const timeFormat = (date: string) => {
    const dateCreate = new Date(date);
    const dateCurrent = new Date();

    return -(dateCreate.getFullYear() - dateCurrent.getFullYear());
};

const ProfileGithub = (props: GithubApiI) => {
    return (
        <div className="profile fx fx-jcc">
            <div className="avatar fx fx-aic">
                <img className="avatarImg" src={props.avatar_url} alt="" />
            </div>
            <div className="list-item">
                <ul>
                    <li>
                        <CgProfile />
                        <span>
                            {props.name} (@{props.login})
                        </span>
                    </li>
                    <li>
                        <RiGitRepositoryLine />
                        <span>{props.public_repos} public repos</span>
                    </li>
                    <li>
                        <BiTimeFive />
                        <span>Joined GitHub {timeFormat(props.created_at)} years ago</span>
                    </li>
                    <li>
                        <FaRegBuilding />
                        <span>{props.company ? props.company : 'No Company'}</span>
                    </li>
                    <li>
                        <ImProfile />
                        <a href={props.html_url}>
                            <span>View Profile in Github</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export { ProfileGithub };
