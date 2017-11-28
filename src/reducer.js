import Immutable from 'immutable';

const initialState =  Immutable.fromJS({
    cityName: 'Kharkiv'
});

export const reducer = (state = initialState, action) => {
     return state;
};