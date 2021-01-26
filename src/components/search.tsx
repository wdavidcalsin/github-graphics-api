import React, { BaseSyntheticEvent, Component, ContextType, ReactNode } from 'react';
import SeacrhImg from '../assets/img/search.png';
import { UserInputContext, UserInputProvider, useUserInput } from '../context/user.context';

type MyProps = { props?: undefined };
type MyStates = { showText: string };

class Search extends Component<MyProps, MyStates> {
    static contextType = UserInputContext;
    context!: ContextType<typeof UserInputContext>;

    constructor(props?: any) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: BaseSyntheticEvent): void {
        this.context.setUser(event.target.value);
    }

    render(): ReactNode {
        return (
            <div className="search">
                <div className=" fx fx-jcc fx-dc">
                    <h2>Github Profile User</h2>
                    <form action="" className="fx fx-jcc" onSubmit={this.context.onSubmitsendUser}>
                        <input type="text" onChange={this.handleChange} placeholder="Username" />
                        <button type="submit">
                            <img src={SeacrhImg} alt="" />
                        </button>
                    </form>
                    <h3>@{this.context.user}</h3>
                </div>
            </div>
        );
    }
}

export default Search;
