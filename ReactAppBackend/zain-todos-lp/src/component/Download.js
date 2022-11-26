import { Link } from 'react-router-dom';
import { useState } from 'react';
import AppZip from '../appzip/app.zip';
import '../css/Download.css';


const Download = () => {
    const [currPage, setCurrPage] = useState(() => 0)
    const templates = [

        <div className='page agreement'>
            <h2>agreement</h2>
            <p>you agree to our <Link to="/">Privacy Policy</Link></p>
            <h3 className='btn' onClick={() => setCurrPage(1)}>Agree</h3>
        </div>
        ,

        <div className='page downloadInfo'>
            <h2>download</h2>
            <p>Enjoy and use it efficiently all for your sake ❤️_❤️.</p>
            <h3 className='btn'><a href={AppZip}>Download</a></h3>
        </div>
    ];
    return (
        <div className='download'>
            {templates[currPage]}

        </div>
    );
}

export default Download;