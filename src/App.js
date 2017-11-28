import React from 'react';

const App = (props) => {
    return (
        <div className="App">
            <h1>{props.cityName}</h1>
            <form action="#">
                <input type="text" placeholder='Enter city name'/>
                <button>Ok</button>
            </form>
            <div className='results'>
                <ul>
                    <li>repeat</li>
                </ul>
            </div>
        </div>
    );
};

export default App;
