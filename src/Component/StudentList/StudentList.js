import React from 'react';
import Student from '../../Assets/students/student.svg';
import "./StudentList.css";

const StudentList = ({students}) => {
    return ( <>
        {!students.length && <h4>Loading students list</h4>}
        {students.map(({name, marks}) => {
            return (
                <div className="student_info"> 
                    <div className='icon'><img src={Student}/></div>
                    <div className='name'>{name}</div> 
                    <div className='marks'>{marks}</div> 
                </div>
            )
        })}
    </> );
}
 
export default StudentList;