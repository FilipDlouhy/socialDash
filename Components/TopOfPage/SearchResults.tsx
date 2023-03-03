import { User } from '@prisma/client'
import React from 'react'
import SearchResult from './SearchResult'
interface props{
    searchResults:User[],
    search:string | undefined
}
function SearchResults({search,searchResults}:props) {
  return (
    <div className='SearchResults'>
            {searchResults?.map((searchedUser)=>{
                if(search&& searchedUser.userName.toLocaleLowerCase().includes(search?.toLocaleLowerCase()))
                {
                  return <SearchResult searchedUser={searchedUser}/>       
                }
            })}
    </div>
  )
}

export default SearchResults