import React from 'react'

const TagList = () => {

    const tags = [
        "All",
        "JavaScript",
        "Java",
        "FreeCodeCamp",
        "Songs",
        "Mixes",
        "Programming",
        "Tips",
        "DIY",
        "Novel",
        
    ];

  return (
    <div  className=' mt-20'>
        {
            tags.map((tagName , index) => {
                return(
                    <button className='bg-gray-200 rounded-lg font-medium px-3 py-1 ml-2' key='index'>{tagName}</button>
                )
            })
        }
    </div>
  )
}

export default TagList;
