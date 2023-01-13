import  Axios from  "axios"
import { METHODS, SERVISE_ROUTES } from "../constant"

export function productServise(data){
    return new Promise((resolve,reject)=>{
        let config={
            url:SERVISE_ROUTES.PRODUCTS,
            method:METHODS.GET,
            data,    
        };
        Axios.request(config)
        .then((response)=>{
        return resolve(response);
    }).catch((error)=>{
        return reject(error)
    });
    });
}