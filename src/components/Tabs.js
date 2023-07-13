import React, { useState } from 'react'

function Tabs() {
    const contentList = [
        "This is the content for Tab 1.",
        "This is the content for Tab 2.",
        "This is the content for Tab 3."
    ]
    const [content ,setContent] = useState(contentList[0]);

    const handleClick = (index) => {
        setContent(contentList[index])
    }
  return (
    <div>
        <ul>
            <li onClick={() => handleClick(0)}>Tab 1</li>
            <li onClick={() => handleClick(1)}>Tab 2</li>
            <li onClick={() => handleClick(2)}>Tab 3</li>
        </ul>

        <p>{content}</p>
    </div>
  )
}

export default Tabs;