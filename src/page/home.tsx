import React, { Component, ContextType, ReactNode } from 'react';

import Layout from '../components/layaut';
import Search from '../components/search';
import Options from '../components/options';
import ShowContent from '../components/show-content';

import { ThemeContext } from '../context/theme.context';

class Home extends Component {
    static contextType = ThemeContext;
    context!: ContextType<typeof ThemeContext>;

    render(): ReactNode {
        return (
            <div className="home" data-theme={this.context.theme ? 'sun' : 'moon'}>
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
    }
}

export default Home;
