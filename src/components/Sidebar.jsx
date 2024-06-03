import {Stack} from '@mui/material';

import { useEffect } from 'react';
import { fetchFromAPI2 } from "../utils/fetchFromAPI";
import HomeIcon from '@mui/icons-material/Home';
import customIconWhite from '../assets/cheikhWhite.png';
 
let categories = [
  
  ];
  

const Sidebar = ({selectedCategory,setSelectedCategory}) =>  {
   

    useEffect(() => {
        const fetchResults = async () => {
          const data = await fetchFromAPI2(`/qareea/getAllQorraa`).then
          (
            (res)=>{
             let list=res.data.map((item)=>{
             return({ name: item.reciter_name, icon: <img src={item.picURL} alt="ma famech " width={30} height={30} />, })
           
            })
             categories=[  { name: 'Quran', icon: <HomeIcon />, },...list]
            console.log("hhhhhhhhhhhhhhh",res);
           } 
          );
    
          
       
        };
        fetchResults();
                    });  // [] initial state || rien at each update it applies 
   
   
   return(
   <Stack
   direction="row"
   sx={{
    overflowY:"auto",
    height:{sx:'auto',md:'95%'},
    flexDirection:{md:'column'},
   }}
   >
    {categories.map((category)=>(
        <button className='category-btn' 
        onClick={()=>setSelectedCategory(category.name)}
        style={{background:category.name===selectedCategory && '#FC1503',
        color:'white'
    }}
    key={category.name}>
            <span style={{
                color:category.name===selectedCategory?'white':'red',marginRight:'15px'
            }}>{category.icon} </span>
            
            
            <span  
            
            style={{
                opacity:category.name===selectedCategory?'1':'0.8'

            }} >{category.name} </span>
        </button>
    ))}



   </Stack>)
  }


export default Sidebar