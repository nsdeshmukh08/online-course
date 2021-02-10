import React from 'react';
import LoaderGif from "../../../Assets/loader.gif";
import './Loader.css';

const Loader = ({type, show}) => {
    const loaderClass = type === 'full' ? "loader_full" : 'loader'
    return ( show && (<div className={loaderClass}>
        <div  className="spinner_container"><img className="spinner" src={LoaderGif}/> Loading ...</div>
    </div> ));
}
 
export default Loader;