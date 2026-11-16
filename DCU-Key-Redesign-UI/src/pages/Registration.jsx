import './Registration.css'

const modules = [
    {
        id: 1,
        name: "User Interface Design & Implementation",
        ects: 10,
        semester: 1
    },
    {
        id: 2,
        name: "Operating Systems",
        ects: 10,
        semester: 1
    },
    {
        id: 3,
        name: "Introduction to Databases",
        ects: 10,
        semester: 1
    },
    {
        id: 4,
        name: "Software Testing",
        ects: 10,
        semester: 1
    }
];

const finalModules = [
    {
        id: 1,
        name: "Computability & Complexity",
        ects: 10,
        semester: "1-2",
        type: "Compulsory"
    },
    {
        id: 2,
        name: "Computer Networks 2",
        ects: 10,
        semester: 1,
        type: "Compulsory"
    },
    {
        id: 3,
        name: "OO Analysis & Design",
        ects: 10,
        semester: 1,
        type: "Compulsory"
    },
    {
        id: 4,
        name: "Prompt Engineering and LLM-Based Agents",
        ects: 10,
        semester: 1,
        type: "Compulsory"
    },
    {
        id: 5,
        name: "User Interface Design & Implementation",
        ects: 10,
        semester: 1,
        type: "Optional"
    }
];

function Registration(){
    return(
        <>
            <div className="top">
                <h1 className='title'>Choose your modules</h1>
                <p className='text'>Choose your options, review your list, then continue to the next semester.</p>

                
                <ol className="progress">
                    <li>Semester 1</li>
                    <li>Semester 2</li>
                    <li>Review & Submit</li>
                    <li className='last'>Semester Year</li>
                </ol>

            </div>

            <div className="optional">

                <div className="secondary-title">Semester 1 · Optional Modules</div>
                {/* <div className="semester-two">Semester 2 · Optional Modules</div> */}
                <p className='text'>Choose two optional modules.</p>

                <div className='module-header'>
                    <span>MODULE</span>
                    <span>ECTS</span>
                    <span>SEMESTER</span>
                </div>

                {modules.map((module) => (
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

                {finalModules.map((module) => (
                    <div className="row-2" key={module.id}>
                        <span>✓</span>
                        <span>{module.name}</span>
                        <span>{module.ects}</span>
                        <span>
                            {module.semester === "1-2"
                                ? "Semesters 1–2"
                                : `Semester ${module.semester}`}
                        </span>
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
        </>
    );
}

export default Registration;