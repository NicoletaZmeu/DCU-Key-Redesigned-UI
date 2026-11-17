import './Registration.css'
import {year4Modules} from '../Registration.js'

function Registration(){
    return(
        <>
            <div className="top">
                <h1 className='title'>Choose your modules</h1>
                <p className='text'>Choose your options, review your list, then continue to the next semester.</p>

                
                <ul className="progress">
                    <li>
                        <span className="step-number">1</span>
                        Semester 1
                    </li>

                    <li>
                        <span className="step-number">2</span>
                        Semester 2
                    </li>

                    <li>
                        <span className="step-number">3</span>
                        Review & Submit
                    </li>
                </ul>

            </div>

            <div className='semester-one'>

                <div className="optional">

                    <div className="secondary-title">Semester 1 · Optional Modules</div>
                    <p className='text'>Choose one optional module.</p>

                    <div className='module-header'>
                        <span>MODULE</span>
                        <span>ECTS</span>
                        <span>SEMESTER</span>
                    </div>

                    {year4Modules
                        .filter((module) => module.type === "Optional" && (module.semester === 1 || module.semester === '1-2'))
                        .map((module) => (
                            <div className="row" key={module.id}>
                                <input type="checkbox" />
                                <span>{module.name}</span>
                                <span>{module.ects}</span>
                                <span>Semester {module.semester}</span>
                            </div>
                    ))}

                </div>

                <div className="final">
                    <h2 className='semester-title'>Final Selection</h2>
                    <div className='module-header-2'>
                        <span>MODULE</span>
                        <span>ECTS</span>
                        <span>SEMESTER</span>
                        <span>TYPE</span>
                    </div>

                    {year4Modules
                        .filter((module) => module.type === "Compulsory" && (module.semester === 1 || module.semester === '1-2'))
                        .map((module) => (
                            <div className="row-2" key={module.id}>
                                <span>✓</span>
                                <span>{module.name}</span>
                                <span>{module.ects}</span>
                                <span>Semester {module.semester}</span>
                                <span>{module.type}</span>
                            </div>
                    ))}

                    <div className='bottom'>
                        <div className='credits'>
                            <p>Total Credits:</p>
                            <p>Total Modules:</p>
                        </div>
                        <button className='next'>Next</button>
                    </div>
                </div>
            </div>


            <div className='semester-two'>
                <div className="optional">
                    <div className="secondary-title">Semester 2 · Optional Modules</div>
                    <p className='text'>Choose two optional modules.</p>

                    <div className='module-header'>
                        <span>MODULE</span>
                        <span>ECTS</span>
                        <span>SEMESTER</span>
                    </div>

                    {year4Modules
                        .filter((module) => module.type === "Optional" && (module.semester === 2 || module.semester === '1-2'))
                        .map((module) => (
                            <div className="row" key={module.id}>
                                <input type="checkbox" />
                                <span>{module.name}</span>
                                <span>{module.ects}</span>
                                <span>Semester {module.semester}</span>
                            </div>
                    ))}

                </div>

                <div className="final">
                    <h2 className='semester-title'>Final Selection</h2>
                    <div className='module-header-2'>
                        <span>MODULE</span>
                        <span>ECTS</span>
                        <span>SEMESTER</span>
                        <span>TYPE</span>
                    </div>

                    {year4Modules
                        .filter((module) => module.type === "Compulsory" && (module.semester === 2 || module.semester === '1-2'))
                        .map((module) => (
                            <div className="row-2" key={module.id}>
                                <span>✓</span>
                                <span>{module.name}</span>
                                <span>{module.ects}</span>
                                <span>Semester {module.semester}</span>
                                <span>{module.type}</span>
                            </div>
                    ))}

                    <div className='bottom'>
                        <div className='credits'>
                            <p>Total Credits:</p>
                            <p>Total Modules:</p>
                        </div>
                        <button className='next'>Next</button>
                    </div>
                </div>     
            </div>

            <div className='review'>
                <div className="final">
                    <h2 className='semester-title'>Final Selection</h2>
                    <div className='module-header-2'>
                        <span>MODULE</span>
                        <span>ECTS</span>
                        <span>SEMESTER</span>
                        <span>TYPE</span>
                    </div>

                    {year4Modules
                        .filter((module) => module.type === "Compulsory")
                        .map((module) => (
                            <div className="row-2" key={module.id}>
                                <span>✓</span>
                                <span>{module.name}</span>
                                <span>{module.ects}</span>
                                <span>Semester {module.semester}</span>
                                <span>{module.type}</span>
                            </div>
                    ))}

                    <div className='bottom'>
                        <div className='credits'>
                            <p>Total Credits:</p>
                            <p>Total Modules:</p>
                        </div>
                        <button className='next'>Next</button>
                    </div>
                </div>  

            </div>
            
        </>
    );
}

export default Registration;