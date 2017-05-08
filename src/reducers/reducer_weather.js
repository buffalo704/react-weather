/**
 * Created by sso on 5/8/17.
 */
import { FETCH_WEATHER } from '../actions/index';

export default (state = [], action) => {

    switch(action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
            break;
        default:
            return state;
    }

}