import React from 'react';

const Options = (): JSX.Element => {
    return (
        <div className="options">
            <h2>Options</h2>
            <form action="">
                <label>
                    Willian Calsin
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label>
                    Yoni Calsin
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label>
                    Yilmer Calsin
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label>
                    Matilde Borda
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label>
                    Salomon Calsin
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </form>
        </div>
    );
};

export default Options;
