
import React, {useState} from 'react'
import styles from './StudentAttendance.module.css'

function StudentAttendance() {
  const [studentName, setStudentName]=useState('');
  const [students, setStudents]=useState([]);
  const  handleChange=(e)=>{
    setStudentName(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!studentName.trim()) return

    const newStudent={
      id:Date.now(),
      name:studentName,
      status:'Present'
    }
    setStudents([...students,newStudent])
    console.log(students);
    setStudentName('')
  }
  const toggleBtn=(id)=>{
    const toggleStudent = students.map((student)=> 
    (student.id===id)? {...student,status:student.status==='Absent'? 'Present':'Absent'}
    : student
    )
    setStudents(toggleStudent)
  }
    const editBtn=(id,newName)=>{
      const editedStudent=students.map((student)=> 
        (student.id===id)? {...student, name:newName} : student
      )
      setStudents(editedStudent)
  }
     const deleteBtn=(id)=>{
      const deleted= students.filter ((student)=>student.id!==id)
      setStudents(deleted)
  }
  return (

    <div>
      <form onSubmit={handleSubmit}>
      Student Attendance Form 
      <br></br>
    <input className='add' name='text' 
    placeholder='Enter Student Name Here'
    type='text' value={studentName} 
    onChange={handleChange}/>

    <button className={styles.addBtn} type='submit'>Add Student</button>
      </form>
      <ul className='attendenceList'>
        {students.map((student)=>
        
        <li key={student.id}>
         
          <span>
          <b>{student.name}</b>- <h3>{student.status}</h3>
          </span>
          <div>
          <button className= {styles.btn} 
          onClick={ ()=>toggleBtn(student.id)}>Toggle Attendence
          </button>

          <button className= {styles.btn} 
          onClick={()=>{
            const newName = prompt('Please Enter a new Student Name:');
            if(newName)
            editBtn(student.id,newName)}}>Edit Student
          </button>

          <button className= {styles.btn} 
          onClick={ ()=>deleteBtn(student.id)}>Delete
          </button>
          </div>
        </li>)
        }
        
      </ul>
    </div>
  )
}


export default StudentAttendance