import React, {
    BaseSyntheticEvent,
    Component,
    ContextType,
    ReactNode,
} from 'react';
import SeacrhImg from '../assets/img/search.png';
import {
    UserInputContext,
    UserInputProvider,
    useUserInput,
} from '../context/user.context';

type MyProps = { props?: undefined };
type MyStates = { showText: string };

const Search = () => {
    const { user, setUser, onSubmitsendUser } = useUserInput();

    const handleChange = (event: BaseSyntheticEvent): void => {
        setUser(event.target.value);
    };

    return (
        <div className="search">
            <div className=" fx fx-jcc fx-dc">
                <h2>Github Profile User</h2>
                <form
                    action=""
                    className="fx fx-jcc"
                    onSubmit={onSubmitsendUser}
                >
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Username"
                    />
                    <button type="submit">
                        <img src={SeacrhImg} alt="" />
                    </button>
                </form>
                <h3>@{user}</h3>
            </div>
        </div>
    );
};

export default Search;
