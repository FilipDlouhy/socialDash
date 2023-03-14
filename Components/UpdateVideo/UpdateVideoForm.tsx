import React from 'react'

interface props{
    Description:string
    setDescription: React.Dispatch<React.SetStateAction<string>>
    setVideoNew: React.Dispatch<React.SetStateAction<any>>
    Category:string
    setCategory: React.Dispatch<React.SetStateAction<string>>
    setVideoNewFile: React.Dispatch<React.SetStateAction<any>>

}

function UpdateVideoForm({setVideoNewFile,Category,Description,setCategory,setDescription,setVideoNew}:props) {
  return (
    <div className='w-1/2 h-full flex flex-col items-center justify-center'>
    <div className='w-3/6 h-4/6  ChatDeleteBtn flex flex-col justify-around items-center'>
       <div className='w-2/3 h-32 my-9 flex justify-around items-center flex-col' >
          <label  className='text-2xl font-semibold text-white'>Video Description</label>
          <textarea onChange={(e)=>{setDescription(e.target.value)}} value={Description}  maxLength={200} className='text-center text-lg resize-none  my-2 font-medium w-96 h-28 rounded-md bg-white ' ></textarea>
       </div>
       <div className='w-2/3 h-32 my-9 flex justify-around items-center flex-col' >
          <label  className='text-2xl font-semibold text-white'>Video Category</label>
          <select onChange={(e)=>{setCategory(e.target.value)}}  value={Category}  className=' my-4 text-center font-medium font w-64 h-9 rounded-md bg-white '  >
             <option>Category</option>
             <option value="Sport">Sport</option>
             <option value="Computer Science">Computer Science</option>
             <option value="Mathematics">Mathematics</option>
             <option value="History">History</option>
             <option value="Politics">Politics</option>
             <option value="Other">Other</option>
          </select>
       </div>
       <div className='w-2/3 h-32 text-white my-9 flex justify-around items-center flex-col' >
          <label  className='text-2xl  font-semibold'>Choose an Video</label>
          <input onChange={(e)=>{
            {
                const files = e.target.files;
                if (files && files[0]) {
                    setVideoNewFile(files[0])

                    setVideoNew(URL.createObjectURL(files[0]));
                }
            }
          }} className='my-4 custom-file-input3'  type="file"/>
       </div>
    </div>
 </div>
  )
}

export default UpdateVideoForm