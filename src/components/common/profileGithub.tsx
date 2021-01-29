import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { BiTimeFive } from 'react-icons/bi';
import { BiLinkExternal } from 'react-icons/bi';
import { ImProfile } from 'react-icons/im';

import { GithubApiI } from '../../interfaces/githubApi';

// interface IProps extends GithubApiI {}

const ProfileGithub = (props: any) => {
    return (
        <div className="profile fx fx-jcc">
            <div className="avatar fx fx-aic">
                <img className="avatarImg" src={props.avatar_url} alt="" />
            </div>
            <div className="list-item">
                <ul>
                    <li>
                        <CgProfile />
                        <span>typsih ({props.name})</span>
                    </li>
                    <li>
                        <RiGitRepositoryLine />
                        <span>39 public repos</span>
                    </li>
                    <li>
                        <BiTimeFive />
                        <span>Joined GitHub 6 years ago</span>
                    </li>
                    <li>
                        <BiLinkExternal />
                        <span>Telenor Digital</span>
                    </li>
                    <li>
                        <ImProfile />
                        <a href="/">
                            <span>View Profile in Github</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export { ProfileGithub };
