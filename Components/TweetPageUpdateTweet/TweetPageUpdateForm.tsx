import React from 'react'

interface props{
    Title: string
    setTitle: React.Dispatch<React.SetStateAction<string>>
    Category: string
    setCategory: React.Dispatch<React.SetStateAction<string>>
    Text: string
    setText: React.Dispatch<React.SetStateAction<string>>
}

function TweetPageUpdateForm({Category,Text,Title,setCategory,setText,setTitle}:props) {
  return (
    <div className='TweetUpdateForm flex items-center justify-around p-2 flex-col'>


            <div className='w-2/3 h-32 my-9 flex justify-around items-center flex-col' >
            <label className='text-lg text-white font-semibold' >Title</label>
            <input value={Title}  onChange={(e)=>{setTitle(e.target.value)}}  className='font-medium w-64  text-center h-8 rounded-md ' type="text" ></input>
        </div>


        <div className='w-2/3 h-32 my-9 flex justify-around items-center flex-col' >
            <label className='text-lg text-white  font-semibold' >On wich period is tweet focused</label>
            <select value={Category}   onChange={(e)=>{setCategory(e.target.value)}}className='font-medium w-64 h-8 text-center  rounded-md  ' id="country" name="country">
                <option>Category</option>
                <option value="Afghanistan">Pax Romana</option>
                <option value="Aland Islands">Dark Ages</option>
                <option value="Albania">Middle Ages</option>
                <option value="Algeria">Age of Reformation</option>
                <option value="American Samoa">Age of Absolutism</option>
                <option value="American Samoa">Age of Revolutions</option>
                <option value="American Samoa">The Great Wars</option>
                <option value="American Samoa">Modern History</option>
            </select>
        </div>

        <div className='w-2/3 my-9 flex  items-center flex-col' >
            <label  className='text-lg  text-white  my-4 font-semibold'>Content of Tweet</label>
            <textarea  value={Text} onChange={(e)=>{setText(e.target.value)}}  maxLength={1110} className='rounded-md  text-center   font-medium px-3 border-2 w-96 h-48 resize-none '></textarea>
        </div>  


    </div>
  )
}

export default TweetPageUpdateForm