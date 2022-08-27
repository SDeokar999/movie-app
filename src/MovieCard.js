import './style/moviecard.css';
import thor from './images/thor.jpg';
import lightyear from './images/lightyear.jpg';
import ExtraordinaryAttorneyWoo from './images/ExtraordinaryAttorneyWoo.jpg';
import halo from './images/halo.jpg';
import gameofthrones from './images/gameofthrones.jpg';
import theboys from './images/theboys.jpg';
import theprincess from './images/theprincess.jpg';


const MovieCard = () => {
    return (
        <div className="moivecardbox">
            <div className='moivecardboxheader'>
                <div className='moivecardboxheader1'>
                    <div className='moivecardboxheader12'>What's Popular</div>
                    <div className='moivecardboxheader13'>
                        <div className='moivecardboxheader13items'>Streaming</div>
                        <div className='moivecardboxheader13itemsother'>On TV</div>
                        <div className='moivecardboxheader13itemsother'>For Rent</div>
                        <div className='moivecardboxheader13itemsother'>In Theatersss</div>
                    </div>
                </div>
                <div className='moivecardboxheader1'></div>
            </div>
            <div className='moivecardboxfooter'>
                <div className='moivecardboxfootersubbox'>
                    <div className='moivecardboxfootersubboximage'>
                        <img src={halo} className="images" alt="movie" />
                    </div>
                    {/* <div className='moivecardboxfootersubboxheading'>
                        <div className="movierating">85%</div>
                    </div> */}
                    <div className='moivecardboxfootersubboxheading'>Halo
                    </div>
                    <div className='moivecardboxfootersubboxdate'>June 29, 2022</div>
                </div>
                <div className='moivecardboxfootersubbox'>
                    <div className='moivecardboxfootersubboximage'>
                        <img src={ExtraordinaryAttorneyWoo} className="images" alt="movie" />
                    </div>
                    <div className='moivecardboxfootersubboxheading'>Extraordinary Woo</div>
                    <div className='moivecardboxfootersubboxdate'>April 12, 2022</div>
                </div>
                <div className='moivecardboxfootersubbox'>
                    <div className='moivecardboxfootersubboximage'>
                        <img src={lightyear} className="images" alt="movie" />
                    </div>
                    <div className='moivecardboxfootersubboxheading'>Light year</div>
                    <div className='moivecardboxfootersubboxdate'>June 30, 2022</div>
                </div>
                <div className='moivecardboxfootersubbox'>
                    <div className='moivecardboxfootersubboximage'>
                        <img src={gameofthrones} className="images" alt="movie" />
                    </div>
                    <div className='moivecardboxfootersubboxheading'>Game Of Thrones</div>
                    <div className='moivecardboxfootersubboxdate'>May 10, 2022</div>
                </div>
                <div className='moivecardboxfootersubbox'>
                    <div className='moivecardboxfootersubboximage'>
                        <img src={theboys} className="images" alt="movie" />
                    </div>
                    <div className='moivecardboxfootersubboxheading'>The Boys</div>
                    <div className='moivecardboxfootersubboxdate'>Feb 25, 2022</div>
                </div>
                <div className='moivecardboxfootersubbox'>
                    <div className='moivecardboxfootersubboximage'>
                        <img src={theprincess} className="images" alt="movie" />
                    </div>
                    <div className='moivecardboxfootersubboxheading'>The Princess</div>
                    <div className='moivecardboxfootersubboxdate'>June 29, 2022</div>
                </div>
                <div className='moivecardboxfootersubbox'>
                    <div className='moivecardboxfootersubboximage'>
                        <img src={thor} className="images" alt="movie" />
                    </div>
                    <div className='moivecardboxfootersubboxheading'>Thor</div>
                    <div className='moivecardboxfootersubboxdate'>Mar 20, 2022</div>
                </div>

            </div>
        </div>
    )
}

export default MovieCard