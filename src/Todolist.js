import React, { useState } from 'react'

function Todolist() {
  const[activity, setActivity]= useState('');
  const[listData , setlistData]= useState([]);
  function addActivity(){
            // setlistData([...listData,activity])
            // console.log(listData)
            setlistData((listData)=>{
                  const updatedlist =[...listData,activity]
                  console.log(updatedlist)
                  setActivity('');
                  return updatedlist

            })
  }

  function removeActivity(i){
    const updatedlistData = listData.filter((elem , id)=>{
      return i!== id;
    })
    setlistData(updatedlistData);
  }
function removeAll(){
  setlistData([])
}

  return (
    <>
    <div className='container'>

      <div className='header'>TODO LIST</div>
      <input type='text' placeholder='Add Activity' value={activity} onChange={(e) =>setActivity(e.target.value)}/>



    <button onClick={addActivity}>ADD</button>

    <p className='List-heading'> here is your list :{")"}</p>

    {listData!==[] && listData.map((data , i)=>{
      return(
        <>
        <p key={i}>
          
          <div className='listData'> {data}  </div> 
          <div className='btn-position'> <button onClick={()=>removeActivity(i)}>x</button></div>
         
        
          
          </p>
        </>
      )
    })}
    {listData.length>=1 &&
    <button onClick={removeAll}>ALL</button>}
      </div>
      
      </>
  )
}

export default Todolist;


