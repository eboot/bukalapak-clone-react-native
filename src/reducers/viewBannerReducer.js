import { REQUEST_DATA_BANNER, REQUEST_DATA_BANNER_SUCCESS, REQUEST_DATA_BANNER_FAILURE } from "../actions/types";

export const INITIAL_STATE = {
    data: undefined,
    isFetching: false,
    error: false
}

export const request = (state, action) => {
    return {
        data: undefined,
        isFetching: true,
        error: false
    }
}

export const success = (state, action) => {
    return {
        data: action.data,
        isFetching: false,
        error: false
    }
}

export const failure = (state, action) => {
    return {
        data: action.errData,
        isFetching: false,
        error: true
    }
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_DATA_BANNER:
            return request(state, action)
        case REQUEST_DATA_BANNER_SUCCESS:
            return success(state, action)
        case REQUEST_DATA_BANNER_FAILURE:
            return failure(state, action)
        default:
            return state
    }
}