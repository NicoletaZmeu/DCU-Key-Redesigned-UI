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

                <div className="semester-one">Semester 1 · Optional Modules</div>
                <div className="semester-two">Semester 2 · Optional Modules</div>
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
                <h2>Final Selection</h2>

            </div>
        </>
    );
}

export default Registration;