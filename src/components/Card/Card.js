import React, { useEffect, useState } from 'react';
import './Card.css';
import axios from '../../axios';
import { imgUrl, API_KEY } from '../constants/constant';
import YouTube from 'react-youtube';

function Card(props) {
  const [movie, setmovie] = useState([]);
  const [vidId, setvidId] = useState();
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setmovie(response.data.results);
    });
  }, [props.url]);

  const HandleTrailer = (id) => {
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
      if (response.data.results.length !== 0) {
        setvidId(response.data.results[0]);
      } else {
        alert('trailer not available');
      }
    });
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movie.map((obj) => (
          <img
            onClick={() => HandleTrailer(obj.id)}
            className='poster'
            alt='poster'
            src={`${imgUrl + obj.backdrop_path}`}
          />
        ))}
      </div>
      {vidId && <YouTube opts={opts} videoId={vidId.key} />}
    </div>
  );
}

export default Card;
