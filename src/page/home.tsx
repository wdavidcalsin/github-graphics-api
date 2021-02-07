import React, { Component, ContextType, ReactNode } from 'react';

import Layout from '../components/layaut';
import Search from '../components/search';
import Options from '../components/options';
import ShowContent from '../components/show-content';

import { useTheme } from '../context/theme.context';

const Home = () => {
    const { theme } = useTheme();
    return (
        <div className="home" data-theme={theme ? 'sun' : 'moon'}>
            <Layout>
                <div className="container-small content">
                    <Search />
                    <div className="fx">
                        <Options />
                        <ShowContent />
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Home;
