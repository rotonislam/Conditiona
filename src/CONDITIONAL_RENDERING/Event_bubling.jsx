import React from 'react'







function Event_bubling (){

    const handleClick = (event) => {
        event.stopPropagation();
        console.log("Child Click " +  event )
        
    }

    const onHandleClicked = (event) => {
        console.log("preant_Div" + event)
    }



    return(
        <div className='ParentDiv' onClick={onHandleClicked}>

            <h1>Event Bubling </h1>
            <button onClick={handleClick}>Click me </button>
        </div>
    )

}

export default Event_bubling;