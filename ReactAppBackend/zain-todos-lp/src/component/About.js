
import '../css/About.css';
import { useState } from 'react';



const About = () => {
    // only modifies once
    const [currPage, setCurrPage] = useState(() => 0)
    const templates = [

        <div className='page intro'>
            <h2>Introduction</h2>
            <p>This app is your master do what it says to you. <br />beautiful design and easy UX.</p>
        </div>
        ,

        <div className='page feature'>
            <h2>App feature</h2>
            <p>You can save delete search your todos. <br />This app have Auto reading for you, when your busy.And it has Live searching!</p>
        </div>
        ,

        <div className='page privacy'>
            <h2>Zain's Privacy Policy</h2>
            <p>We Zain would not use your Info nor sell it. <br />You agree that this aplication belongs to Zain Syed Shah, and that you woud not harm our copyrights<br />You agree that We reserved the All kinds of copyrights for this aplication.</p>
        </div>

    ];
    // scrole event
    function changePage(e) {
        console.log(e.target.className)
        let n = e.target.className
        if (n === '') {
            console.log("passed1");
            return;
        }
        if (n === 'fill') {
            console.log("passed2");
            return;
        }
        if (currPage >= 2) {
            setCurrPage(0);
            console.log(currPage, "0");
            return;

        } else if (currPage === 0) {
            setCurrPage(1);
            console.log(currPage, "1");
            return;

        } else if (currPage === 1) {
            setCurrPage(2);
            console.log(currPage, "2");
            return;

        }
    }
    function changePageTo(page = null) {
        if (page !== currPage) {
            setCurrPage(page);
            console.log(currPage)

        }
    }
    return (
        <div className="about-area" onClick={(e) => changePage(e)}>

            <div className='about' >
                {templates[currPage]}
                <ul className="page-map">
                    <li onClick={() => changePageTo(0)} className={currPage === 0 ? "fill" : ""}>1</li>
                    <li onClick={() => changePageTo(1)} className={currPage === 1 ? "fill" : ""}>2</li>
                    <li onClick={() => changePageTo(2)} className={currPage === 2 ? "fill" : ""}>3</li>


                </ul>
            </div >



        </div>

    );
}

export default About;