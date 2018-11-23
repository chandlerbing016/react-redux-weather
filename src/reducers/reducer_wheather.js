import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            const data = action.payload.data;
            if(data) {
                // ... take items inside this array and concat with data in new array
                state = [ data, ...state ];
            }
    }
    return state;
}