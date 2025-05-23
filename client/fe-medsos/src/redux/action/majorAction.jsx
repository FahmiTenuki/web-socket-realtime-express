import { APISERVICE,config } from "../../utils"

export const fetchMajor = () => {
     
    APISERVICE().get('/major').then((response) =>{
        dispact({
            type: 'MAJOR_SUCCSESS',
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
            type:'MAJOR_FAIL',
            payload: {
                data: err.response
            }
        })
    })
}