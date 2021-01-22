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
        this.state = { showText: '...' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: BaseSyntheticEvent): void {
        this.context.setUser(event.target.value);
    }

    render(): ReactNode {
        // const { user, setUser } = useUserInput();

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
                    <h3>@{this.context.user}</h3>
                </div>
            </div>
        );
    }
}

export default Search;
