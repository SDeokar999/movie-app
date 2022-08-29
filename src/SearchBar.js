import './style/SearchBar.css';
import MovieCard from './MovieCard';
import {Streaming,Tv,Rent,Theaters,Popular} from './Constants';
import spiders1 from './images/spiders1.png';
const SearchBar = () => {
    return (
    <div className="Searchbox">
    <div className="searchcardbox">
    <img src={spiders1} className="imagess" alt="movie" />
    <h2>Welcome.</h2>
    <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
    <form class="example" action="/action_page.php">
      <input type="text" placeholder="Search for a movie,tv show,person.." name="search"/>
      <button type="submit">Search</button>
    </form>
    </div>
</div>
    )
}

export default SearchBar;