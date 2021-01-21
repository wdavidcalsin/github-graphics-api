import React, { Component, CSSProperties, ReactNode, StyleHTMLAttributes } from 'react';
import Layout from '../component/layaut';
import Search from '../component/search';
import Options from '../component/options';
import ShowContent from '../component/show-content';

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
