import React, {useEffect, useState} from 'react';

import Loader from "../Utility/Loader/Loader";
import Cards from "../Sections/Sections";
import Students from "../Students/Students";
import { getSections } from './Dashboard.helper';
import './Dashboard.css';

const Dashboard = () => {
    const [sections, setSections] = useState([]);
    const [loader, setLoader] = useState(true)
    useEffect( async ()=>{
        try{
            setLoader(true);
            const {sections} = await getSections()
            setSections(sections);
            setLoader(false);

        }catch(error){
            console.error("error====>",error);
        }
    },[]);

    return (<div className='dashboard'>
        <Loader show={loader} type="full"/>
        <div className="dashboard_title">Dashboard</div>
        <div className="dashboard_subtext">Mobile UX/UI Design course</div>
        <Cards sections={sections}/>
        <Students />
    </div>);
}
 
export default Dashboard;