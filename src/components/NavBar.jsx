import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'
//import {logo} from '../utils/constants';
import SearchBar  from './SearchBar';


const NavBar = () =>(
    <Stack direction="row" alignItems="center" p={2} 
    sx={{position:'sticky',
    background:'#212120' ,top:0,
    justifyContent:'space-between'}}>
<Link to="/" style={{display:'flex',alignItems:'center'}}>

<a  href="https://icons8.com/icon/vFiqEVJNkgME/quran"></a> <a href="https://icons8.com"></a>
<img width="45" height="45" src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/fc1503/external-quran-islam-and-ramadan-flatart-icons-solid-flatarticons.png" alt="external-quran-islam-and-ramadan-flatart-icons-solid-flatarticons"/>
<div id='coucouTouta'>QuranVerse</div>
</Link>
<SearchBar />
    </Stack>
  )


export default NavBar