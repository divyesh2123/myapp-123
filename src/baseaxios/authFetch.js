import axios from "axios";

let p  = JSON.parse(localStorage.getItem("token"));
console.log(p);
const authFetch = axios.create({

    //read url from file
    baseURL:"https://real-pear-fly-kilt.cyclic.app",
    headers:{

        'Authorization' : "Bearer " + p?.jwtToken ,
        'Content-Type' : "application/json"


    }
    
})

export default authFetch;