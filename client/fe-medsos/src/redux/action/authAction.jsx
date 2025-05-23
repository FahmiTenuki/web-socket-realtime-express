import { APISERVICE,config } from "../../utils"

export const fecthProfile = (token) => {
    APISERVICE().get('/auth/me', config(token)).then((response) =>{
        dispact({
            type: 'AUTH_PROFILE_SUCCSESS',
            payload: { 
                data: response.data
            }
        })
    })
    .catch((err) =>{
        if(err.response.status === 401) {
            window.location.href = './login'
        }
        dispact({
            type:'AUTH_PROFILR_FAIL',
            payload: {
                data: err.response
            }
        })
    })
}