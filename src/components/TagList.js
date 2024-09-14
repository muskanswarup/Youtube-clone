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
        "Gaming",
        "Cuisines",
        "Dinners",
        "Words",
        "Recent",
        "Psychology",
        "Computer Hardware",
        "Watched",
        "Live",
        "Strategies"
    ];

  return (
    <div  className=' '>
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
