
const init = {
    load: true,
    data: [],
    message: null,
    err: null
}

const majorReducer = (state = init, action) => {
    switch (action?.type) {
        case 'MAJOR_INIT':
            return init
        case 'MAJO_SUCCESS':
            return{
                ...state,
                user: action?.payload?.data
            }
        case 'MAJOR_FAIL':
            return {
                ...state,
                err: action?.payload?.error
            }
        default:
            return state
    }
}

export default majorReducer