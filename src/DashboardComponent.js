import './style/moviecard.css';
import MovieCard from './MovieCard';
import {Streaming,Tv,Rent,Theaters,Popular} from './Constants';

const DashboardComponent = () => {
    return (
    <>
   <div style={{marginTop:"80px",marginBottom:"100px"}}>
    <MovieCard Streaming={Streaming} Tv={Tv} Rent={Rent} Theaters={Theaters} Popular={Popular} heading="What's Popular"/>
    </div>
   <div style={{marginTop:"60px",marginBottom:"100px"}}>
    <MovieCard Streaming={Streaming} Tv={Tv}  Popular={Popular} heading="Free to Watch"/>
    </div></>
    )
}

export default DashboardComponent