import './style/moviecard.css';
import React,{useState,useEffect} from 'react';


const MovieCard = ({Streaming,Tv,Rent,Theaters,Popular,heading}) => {
const[selectedChannel,setSelectedChannel]=useState([Streaming]);
const[selectedList,setSelectedList]=useState([Popular]);
const[selectedValue,setSelectedValue]=useState('Streaming');
useEffect(()=>{
setSelectedChannel(Streaming);
setSelectedList(Popular);
setSelectedValue('Streaming')}
,[])
    return (
        <div className="moivecardbox">
            <div className='moivecardboxheader'>
                <div className='moivecardboxheader1'>
                    <div className='moivecardboxheader12'>{heading}</div>
                    <div className='moivecardboxheader13'>
                        <div className={selectedValue==="Streaming"?'moivecardboxheader13items':'moivecardboxheader13itemsother'} onClick={()=>{setSelectedChannel(Streaming);setSelectedValue('Streaming')}}>Streaming</div>
                        <div className={selectedValue==="Tv"?'moivecardboxheader13items':'moivecardboxheader13itemsother'} onClick={()=>{setSelectedChannel(Tv);setSelectedValue('Tv')}}>On TV</div>
                      {Rent!==undefined?<div className={selectedValue==="Rent"?'moivecardboxheader13items':'moivecardboxheader13itemsother'} onClick={()=>{setSelectedChannel(Rent);setSelectedValue('Rent')}}>For Rent</div>:null}
                        {Theaters!==undefined?<div className={selectedValue==="Theaters"?'moivecardboxheader13items':'moivecardboxheader13itemsother'} onClick={()=>{setSelectedChannel(Theaters);setSelectedValue('Theaters')}}>In Theaters</div>:null}
                    </div>
                </div>
                <div className='moivecardboxheader1'></div>
            </div>
            <div className='moivecardboxfooter scrollmenu'>
            {selectedChannel.map((list)=>{
            return(
                <div className='moivecardboxfootersubbox'>
                    <div className='moivecardboxfootersubboximage'>
                        <img src={list.picture} className="images" alt="movie" />
                    </div>
                     <div className='moivecardboxfootersubboxheading'>
                        <div className="movierating">{list.rating}%</div>
                    </div>
                    <div className='moivecardboxfootersubboxheadingtitle'>{list.title}
                    </div>
                    <div className='moivecardboxfootersubboxdate'>{list.date}</div>
                </div>
            )})
            }
            </div>
        </div>
    )
}

export default MovieCard