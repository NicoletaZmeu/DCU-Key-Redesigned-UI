import './Registration.css'
import {year4Modules} from '../Registration.js'
import {useState} from 'react'

function Registration(){

    const [step, setStep] = useState(1);
    const [selectedModules, setSelectedModules] = useState([]);

    const handleCheckbox = (id) => {
        const module = year4Modules.find((module) => module.id === id);

        const limit = module.semester === 1 ? 1 : 2;

        const selectedInSemester = selectedModules.filter((selectedId) => {
            const selectedModule = year4Modules.find(
                (module) => module.id === selectedId
            );

            return selectedModule.semester === module.semester;
        });

        if (selectedModules.includes(id)) {
            setSelectedModules(selectedModules.filter((moduleId) => moduleId !== id));
        }
        else if (selectedInSemester.length < limit) {
            setSelectedModules([...selectedModules, id]);
        }
    };


    const semester1Modules = year4Modules.filter((module) =>
        (module.semester === 1 || module.semester === "1-2") &&
        (module.type === "Compulsory" || selectedModules.includes(module.id))
    );

    const semester2Modules = year4Modules.filter((module) =>
        (module.semester === 2 || module.semester === "1-2") &&
        (module.type === "Compulsory" || selectedModules.includes(module.id))
    );

    const finalModules = semester2Modules.length + semester1Modules.length;

    const semester1Credits = semester1Modules.reduce(
        (total, module) => total + module.ects,
        0
    );
    const semester2Credits = semester2Modules.reduce(
        (total, module) => total + module.ects,
        0
    );

    const finalCredits = semester1Credits + semester2Credits;


    const semester1Selected = selectedModules.filter((id) =>
        year4Modules.find((module) => module.id === id)?.semester === 1
    ).length;

    const semester2Selected = selectedModules.filter((id) =>
        year4Modules.find((module) => module.id === id)?.semester === 2
    ).length;


    return(
        <>
            {(step === 1 || step === 2 || step === 3) && (
                <div className="top">
                    <h1 className='title'>Choose your modules</h1>
                    <p className='text'>Choose your options, review your list, then continue to the next semester.</p>

                    <div className='progress-container'>
                        <ul className="progress">
                            <li className={step === 1 ? 'active' : ''}>
                                <span className='step-number'>1</span>
                                Semester 1
                            </li>

                            <li className={step === 2 ? 'active' : ''}>
                                <span className='step-number'>2</span>
                                Semester 2
                            </li>

                            <li className={step === 3 ? 'active' : ''}>
                                <span className='step-number'>3</span>
                                Review & Submit
                            </li>
                        </ul>
                        <span className='last-item'>Year 4 · {step === 1 ? "Semester 1" : step === 2 ? "Semester 2" : "Review"}</span>

                    </div>
                    
                </div>
            )}
            


            {step === 1 && (
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
                            .filter((module) =>
                                module.type === "Optional" &&
                                (module.semester === 1 || module.semester === "1-2")
                            )
                            .map((module) => (
                                <div className="row" key={module.id}>
                                    <input 
                                        type="checkbox" 
                                        checked={selectedModules.includes(module.id)}
                                        onChange={()=> handleCheckbox(module.id)}
                                    />
                                    <span className='x'>{module.name}</span>
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
                                    <span >✓</span>
                                    <span className='x'>{module.name}</span>
                                    <span>{module.ects}</span>
                                    <span>Semester {module.semester}</span>
                                    <span>{module.type}</span>
                                </div>
                        ))}

                        <div className='bottom'>
                            <div className='credits'>
                                <p>Total Credits: {semester1Credits}/60</p>
                                <p>Total Modules: {semester1Modules.length}/6</p>
                            </div>
                            <button 
                            className='next' 
                            disabled={semester1Selected !== 1}
                            onClick={() => setStep(2)}
                            >
                                Next</button>
                        </div>
                    </div>
                </div>


            )}
            


            {step == 2 && (
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
                            .filter((module) =>
                                module.type === "Optional" &&
                                (module.semester === 2 || module.semester === "1-2")
                            )
                            .map((module) => (
                                <div className="row" key={module.id}>
                                    <input 
                                        type="checkbox" 
                                        checked={selectedModules.includes(module.id)}
                                        onChange={()=> handleCheckbox(module.id)}
                                    />
                                    <span className='x'>{module.name}</span>
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
                                    <span className='x'>{module.name}</span>
                                    <span>{module.ects}</span>
                                    <span>Semester {module.semester}</span>
                                    <span>{module.type}</span>
                                </div>
                        ))}

                        <div className='bottom'>
                            <div className='credits'>
                                <p>Total Credits: {semester2Credits}/40</p>
                                <p>Total Modules: {semester2Modules.length}/5</p>
                            </div>
                            <button 
                                className='next' 
                                onClick={() => setStep(3)}
                                disabled={semester2Selected !== 2}
                                >
                                    Next</button>
                        </div>
                    </div>     
                </div>
            )}


            {step === 3 && (
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
                            .filter((module) => module.type === "Compulsory" || selectedModules.includes(module.id))
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
                                <p>Total Credits: {finalCredits}/100</p>
                                <p>Total Modules: {finalModules}/11</p>
                            </div>
                            <div className='bottom1'>
                                <button className='next' onClick={() => setStep(4)}>Approve</button>
                            </div>
                        </div>

                    </div>  
                </div>
            )}

            {step === 4 && (
                <>
                    <div className='end'>
                        <div className='top'>
                            <p className='title'>Thank you, your modules have been registered!</p>
                            <p className='text'>A confirmation email will be sent to your student email.</p>
                        </div>
                    </div>                 
                </>
            )}
                        
        </>
    );
}

export default Registration;