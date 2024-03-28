import React, {useState, useEffect} from 'react'
import MovieService from '../services/MovieService'
import { useHistory, useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import NavBar from './NavBar';
import './crud.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { height } from '@mui/system';
import { hover } from '@testing-library/user-event/dist/hover';

const AddMovie = () => {
    const [filmname, setFilmname] = useState('')
    const [year, setYear] = useState('')
    const [filmactor, setFilmactor] = useState('')
    const [filmmaker, setFilmmaker] = useState('')
    const [language, setLanguage] = useState('')
    const[description, setDescription] = useState('')
    const[link, setLink] = useState('')
    const[genre, setGenre] = useState('')
    const[runtime, setRuntime] = useState('')
    const[rating, setRating] = useState('')
    const[image, setImage] = useState('')
    const[height, setHeight] = useState('')
    const[width, setWidth] = useState('')
    const[img1, setImg1] = useState('')
    const[img2, setImg2] = useState('')
    const[img3, setImg3] = useState('')
    const[date, setDate] = useState('')
    const [value, setValue] = React.useState('');
    const history = useHistory();
    const {id}=useParams();


    const saveOrUpdateMovies = (e) =>{
        e.preventDefault();

    const movies ={filmname, year, filmactor, filmmaker, language, description, link, genre, runtime, rating, date, image, height, width,img1,img2,img3}
    
    if(id){
      MovieService.updateMovie(id, movies).then((response) =>{
      history.push('/new');
      
      }).catch(error =>{
        console.log(error);
      })
    }
    else{
      
      MovieService.createMovie(movies).then((response) => {
    
        console.log(response.data)
        history.push('/new');
    
        }).catch(error => {
            console.log(error)
        })
        }
    }

  
  useEffect(() => {
  MovieService.getMovieById(id).then((response) =>{
    setFilmname(response.data.filmname)
    setYear(response.data.year)
    setFilmactor(response.data.filmactor)
    setFilmmaker(response.data.filmmaker)
    setLanguage(response.data.language)
    setDescription(response.data.description)
    setLink(response.data.link)
    setGenre(response.data.genre)
    setRuntime(response.data.runtime)
    setRating(response.data.rating)
    setDate(response.data.date)
    setImage(response.data.image)
    setHeight(response.data.height)
    setWidth(response.data.width)
    setImg1(response.data.img1)
    setImg2(response.data.img2)
    setImg3(response.data.img3)

  }).catch(error =>{
    console.log(error)
  })
  }, [])
  const myStyle={
    backgroundImage:"url('addbg5.jpg')",
        height:'120vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
  }
  
  const title=()=>{
    if(id){
      return <div className="text-center">UPDATE</div>
    }
    else{
      return <div className="text-center">ADD</div>
    }

    
  }
  
  
  return (
    <div style={{backgroundColor:"#0d131f" }}>
    {
      title()
    }<br></br>
    <div>
    <div className="boxx"  style={{marginTop:"-100px",display: "inline-flex"}}>
    
            <div style={{marginTop:"10px"}}>
            
              <div >
              <form style={{display:"inline-flex"}}>
                <div className='addbox1'>
                <label className='ibox'>Movie Name :&emsp;&emsp;</label>
              <label className='ibox'>Year :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;</label>
              <label className='ibox'>Actor :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;</label>
              <label className='ibox'>Film Maker :&emsp;&emsp;&emsp;&nbsp;&nbsp;</label>
              <label className='ibox'>Language :&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;</label>
              <label className='ibox'>Link :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;</label>
              <label className='ibox'>Genre :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;</label>
              <label className='ibox'>Runtime:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;</label>
              <label className='ibox'>Description :&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><br></br>
              <label className='ibox'>Release Date :&emsp;&emsp;&nbsp;&nbsp;</label><br></br>
              <label className="ibox">Rating : </label><br></br>
              <label className='ibox'>Image URL/Name : </label><br></br>
              <label className='ibox'>Height and Width : </label><br></br>
              <label className='ibox'>Image URL/Name : </label><br></br>
              <label className='ibox'>Image URL/Name : </label><br></br>
              <label className='ibox'>Image URL/Name : </label><br></br>
                </div>
              <div className='addbox2'>
              <input style={{marginTop:"10px"}} className="inputbox" type ="text" placeholder='Movie Name' name="name" value={filmname} onChange={(e) => setFilmname(e.target.value)}></input>
              <input style={{marginTop:"15px"}} className="inputbox" type ="number" placeholder='Year' name="year" value={year} onChange={(e) => setYear(e.target.value)}></input>
              <input style={{marginTop:"15px"}} className="inputbox" type ="text" placeholder='Actor' name="actor" value={filmactor} onChange={(e) => setFilmactor(e.target.value)}></input>
              <input style={{marginTop:"15px"}} className="inputbox" type ="text" placeholder='Film Maker' name="director" value={filmmaker} onChange={(e) => setFilmmaker(e.target.value)}></input>
              <input style={{marginTop:"15px"}} className="inputbox" type ="text" placeholder='Language' name="language" value={language} onChange={(e) => setLanguage(e.target.value)}></input>
              <input style={{marginTop:"15px"}} className="inputbox" type ="text" placeholder='Link' name="link" value={link} onChange={(e) => setLink(e.target.value)}></input>
              <input style={{marginTop:"15px"}} className="inputbox" type ="text" placeholder='Genre' name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}></input>
              <input style={{marginTop:"15px"}} className="inputbox" type ="text" placeholder='Runtime' name="runtime" value={runtime} onChange={(e) => setRuntime(e.target.value)}></input>
              <input style={{marginTop:"15px"}} className="inputbox" type ="text" placeholder="Description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
              <input style={{marginTop:"15px"}} className="inputbox" type ="text" placeholder='Date' name="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
              <Box  sx={{ '& > legend': { mt: 2 },}}/>
              <Stack spacing={1}>
              <Rating style={{marginTop:"15px"}} name="half-rating"  defaultValue={2.5} precision={0.5} value={rating} onChange={(e) => {setRating(e.target.value);}}/>
              </Stack>
              <input style={{marginTop:"10px"}} className="inputbox" type ="text" autoComplete="on" placeholder="Image URL/Name" name="image" value={image} onChange={(e) => setImage(e.target.value)}></input><br></br>
              <input style={{marginTop:"15px"}} className="dimension-button" type ="text" placeholder="Height" name="height" value={height} onChange={(e) => setHeight(e.target.value)}></input>&emsp;&emsp;
              <input style={{marginTop:"15px"}} className="dimension-button" type ="text" placeholder="Width" name="width" value={width} onChange={(e) => setWidth(e.target.value)}></input>
              <input style={{marginTop:"10px"}} className="inputbox" type ="text" autoComplete="on" placeholder="Image URL/Name" name="img1" value={img1} onChange={(e) => setImg1(e.target.value)}></input><br></br>
              <input style={{marginTop:"10px"}} className="inputbox" type ="text" placeholder="Image URL/Name" name="img2" value={img2} onChange={(e) => setImg2(e.target.value)}></input><br></br>
              <input style={{marginTop:"10px"}} className="inputbox" type ="text" placeholder="Image URL/Name" name="img3" value={img3} onChange={(e) => setImg3(e.target.value)}></input><br></br>
              
              <br></br><br></br>
              <button className="buttonbox"  style={{marginTop:"-200px", marginLeft: "-100px"}} onClick = {(e) => saveOrUpdateMovies(e)}>SUBMIT</button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <Link to="/new" style={{marginLeft:"10px", textDecoration: "none" , color: "black" }}><button className='buttonbox'>CANCEL</button></Link>
              </div>
              </form> 
              </div>
              </div>
        </div>
    </div><br></br><br></br><br></br>
    </div>
  )
}

export default AddMovie
