"use client"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { User } from '@prisma/client'
import axios from 'axios'
import React, { useState,useEffect } from 'react'
import SearchResults from './SearchResults'
interface props{
    showSearch:boolean
    userId:string

}

function SearchInput({userId,showSearch}:props) {
    const [searchResults,setSearchResults] = useState<User[]>([])
    const [search,setSearch] = useState<string>()
    useEffect(()=>{
        if(search?.length&&search?.length <= 1)
        {
            axios.post("/api/getSearchResults",{search:search}).then((res)=>{
                setSearchResults(res.data)
            })
        }
        else if(search?.length&&search?.length === 0)
        {
            setSearchResults([])
        } 

    },[search])
  return (
    <div id="search" className="search-box">
        <button id="search" className="btn-search"> <FontAwesomeIcon className='w-7 mx-auto'  icon={faSearch} /></button>
        <input id="search" onChange={(e)=>{setSearch(e.target.value)}} type="text" className="input-search" placeholder="Type to Search..."></input>
     

    </div>
  )
}

export default SearchInput

/*   {  showSearch&&      <SearchResults  userId={userId} search={search} searchResults={searchResults}/>}*/ 