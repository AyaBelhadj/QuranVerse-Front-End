import axios from 'axios';
const  BASE_URL2='https://youtube-v31.p.rapidapi.com'
const  BASE_URL='http://localhost:5700'
export const axiosInstance = axios.create(
  {  baseURL:BASE_URL,
    
    headers: {'X-Custom-Header': 'foobar'}}
  );

 const options = {
   
    params: {
      url:BASE_URL2,
      maxResults: '114'
    },
    headers: {
      'X-RapidAPI-Key': '42bf4f536dmsh753d99f8846af42p1548ddjsn5e18e4a2262b',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI=async(url)=>{
    const {data}=await axios.get(`${BASE_URL2}/${url}`,options);
    return data;

  }
  
  export const fetchFromAPI2=async(url)=>{
    const {data}=await  axiosInstance.get(`${BASE_URL}${url}`);
    return data;

  }
  