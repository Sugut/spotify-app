import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import{useDataLayerValue} from "./DataLayer"

function Header() {
  const [{ user }, dispatch]= useDataLayerValue();

  return (
    <div className='header'>
        <div className='header_left'>
          <SearchIcon/>
          <input
          placeholder='Search for Artists,Songs or POdcasts'
          type="text"/>
        </div>
        <div className='header-right'>
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header