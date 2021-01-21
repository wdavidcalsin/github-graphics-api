import React, { BaseSyntheticEvent, Component, ReactNode } from 'react';
import SeacrhImg from '../assets/img/search.png';

type MyProps = { props?: any };
type MyStates = { showText: string };

class Search extends Component<MyProps, MyStates> {
    constructor(props?: any) {
        super(props);
        this.state = { showText: '...' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: BaseSyntheticEvent) {
        this.setState({ showText: event.target.value });
    }

    render(): ReactNode {
        return (
            <div className="search">
                <div className="container-small fx fx-jcc fx-dc">
                    <h2>Github Profile User</h2>
                    <form action="" className="fx fx-jcc">
                        <input type="text" onChange={this.handleChange} placeholder="@example" />
                        <button>
                            <img src={SeacrhImg} alt="" />
                        </button>
                    </form>
                    <h3>@{this.state.showText}</h3>
                </div>
            </div>
        );
    }
}

export default Search;
