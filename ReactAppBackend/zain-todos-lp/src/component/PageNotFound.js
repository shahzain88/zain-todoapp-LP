
import '../css/PageNotFound.css';



const PageNotFound = () => {

    const accessing_area = window.location.href;

    return (
        <div className="PageNotFound-area">

            <div className='PageNotFound' >
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>you want to access {accessing_area} </p>
                <p>You can't get to somewhere with dose not exist.</p>

            </div >



        </div>

    );
}

export default PageNotFound;