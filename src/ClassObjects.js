import React,{useState} from 'react'

function ClassObjects() {
  let [publish,setPublish]= useState();
class Book {
   constructor(name, date){
      this.name=name;
      this.date=date;
    }
   publish(){
   
    console.log(`published by ${this.name}, ${this.date}`)
    return `published by ${this.name}, ${this.date}`
  }
}
 const booklists= {
  auhtor: 'juang ho',
  date: 2025,
  theme: 'frontend Development'
 }
 console.log(booklists);
 console.log(booklists.theme);

const obj = { name: "Rayhan", age: 25 };
for (let key in obj) {
  console.log( key, obj[key]);
}

function handleCLick(){
  const BookChild= new Book('rayhan', 2025);
setPublish(BookChild.publish());
}
  return (
    <div>ClassObjects<br></br>
      <button onClick={handleCLick} className='click-btn'>Click here</button>
    <p>{publish}</p>
    </div>
  )
  
}

export default ClassObjects