import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, connect } from 'react-redux';
import store from './store'

const appConnector = (component) => {
    const mapStateToProps = state => ({
        cityName: state.get('cityName')
    });
    const mapDispatchToProps = {};
    return connect(mapStateToProps, mapDispatchToProps)(component);
};

const ConnectedApp = appConnector(App);

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedApp />
    </Provider>,
    document.getElementById('root')
);
