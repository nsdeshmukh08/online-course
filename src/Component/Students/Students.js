import React, {useState, useEffect} from 'react';

import StudentList from "../StudentList/StudentList";
import { getStudents } from "./Students.helper";
import './Students.css';

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect( async ()=>{
        try{
            const {students} = await getStudents()
            setStudents(students.sort((a,b)=> a.marks-b.marks));
        }catch(error){
            console.error("error====>",error);
        }
    },[]);

    const sortStudentList = (e) =>{
        const filter = e.target.value;
        if(filter === 'Decending'){
            setStudents([...students.sort((a,b)=> b.marks-a.marks)]);
        }else{
            setStudents([...students.sort((a,b)=> a.marks-b.marks)]);
        }
    }

    return (
    <div className="students">
        <div className="students_header">
            <div className="students_title">Students by average mark</div>
            <div className="students_filter">
                <select className="select" onChange={sortStudentList}>
                    <option value="Asending">Asending</option>
                    <option value="Decending">Decending</option>
                </select>
            </div>
        </div>
        <hr/>
        <div className="student_list">
            <StudentList students={students}/>
        </div>
       
    </div>);
}
 
export default Students;