import React, { Component, CSSProperties, ReactNode, StyleHTMLAttributes } from 'react';
import Layout from '../components/layaut';
import Search from '../components/search';
import Options from '../components/options';
import ShowContent from '../components/show-content';

class Home extends Component {
    render(): ReactNode {
        return (
            <Layout>
                <Search />
                <div className="container-small content">
                    <Options />
                    <ShowContent />
                    {/* <div style={{ width: '100%' }}>Show Statistics</div> */}
                </div>
            </Layout>
        );
    }
}

export default Home;
