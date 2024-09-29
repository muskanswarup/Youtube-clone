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
        // "Cooking",
        // "Learn",
        // "Emmie",
        // "HealthyGamer",
        // "Bacon",
        // "Cheese",
        // "Sandwich",
        // "Honeybadger"
        
        
    ];

  return (
    <div  className='hidden md:block md:overflow-x-auto ' >
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
