import axios from "axios";
export default axios.create({
    baseURL:'https://instagrocer.ca/igadmin/api',
  //  params:{},
    
    headers:{
        "content-type": "application/json",
        }
})