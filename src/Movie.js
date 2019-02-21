import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'

function Movie({title, poster,genres, synopsis}){
         return(
           <div classname="Movie">
            <div className="Moive__Column">
                 <MoviePoster poster={poster} alt = {title}/>

            </div>
              <div className="Movie__Column">
                 <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre,index) => <MovieGenre genre={genre} key ={index}/>)}
                 </div>

                   <div className ="Movie__Synopsis">
               <LinesEllipsis
                text={synopsis}
                maxLine='2'
                ellipsis=' ...'
                trimRight
                basedOn='letters'
                />
                   </div>
                </div>
            </div>
            )
      }


function MovieGenre({genre}){

   return(
      <span className="Movie__Genre">{genre} </span>
   )
}

function MoviePoster ({poster,alt}){

  return(
  <img src={poster} alt ={alt} calssName="Movie__Poster"/>
   )
}


Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes= {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
   genre: PropTypes.string.isRequired
}

export default Movie;
