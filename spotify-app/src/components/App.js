import '../App.css';
import React, {useEffect} from 'react';
import Login from "./Login"
import {getTokenFromResponse} from "./spotify"
import SpotifyWebApi from 'spotify-web-api-node';
import Player from "./Player"
import { useDataLayerValue } from './DataLayer';

// allowing spotify api to connect with react
const spotify = new SpotifyWebApi()

function App() {
  const [{ user, token }, dispatch]= useDataLayerValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    // gives us the user's token
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        user: _token,
      })

      // giving the access of token to the spotify api
      spotify.setAccessToken(_token)

      // this function gives us the user
      spotify.getMe().then((user) =>{
        dispatch({
          type: "SET_USER",
          user: user,
        })
      })
      // this function gives us the user's playlists
        spotify.getUserPlaylists().then((playlists)=>{
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists, 
          })
        }) 

        spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    } 
  }, [])
  console.log("yeep")
  return (
    <div className="App">
      { token ? 
      (<Player spotify={spotify}/>)
       :
       (<Login/>)}
    </div>
  );
}

export default App;
