import './Results.css'

const results = [
    {
        code: "CSC1031",
        name: "Computer Programming 4",
        mark: 85,
        result: "Passed"
    },
    {
        code: "CSC1020",
        name: "Systems Analysis",
        mark: 78,
        result: "Passed"
    },
    {
        code: "CSC1018",
        name: "Logic",
        mark: 72,
        result: "Passed"
    },
    {
        code: "CSC1040",
        name: "Full Stack Development",
        mark: 68,
        result: "Passed"
    },
    {
        code: "CSC1028",
        name: "Probability & Statistics",
        mark: 73,
        result: "Passed"
    },
    {
        code: "CSC1037",
        name: "Introduction to DevOps",
        mark: 38,
        result: "Needs attention"
    }
];


function Results(){
    return(
        <>
            <div className='top'>
                <h1 className='title'>Your Results</h1>
            </div>

            <div className="details">
                <p className='secondary-title'>Module results</p>
                <div className='header'>
                    <span>CODE</span>
                    <span>MODULE NAME</span>
                    <span>MARK</span>
                    <span>RESULT</span>
                </div>

                {results.map((module) => (
                    <div className="result-row" key={module.code}>
                        <span>{module.code}</span>
                        <span>{module.name}</span>
                        <span>{module.mark}%</span>

                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{
                                    width: `${module.mark}%`,
                                    backgroundColor: module.mark >= 40 ? '#287448' : '#B03A3A'
                                }}
                            />
                        </div>

                        <span>{module.result}</span>
                    </div>
                ))}

                <div className='info'>
                    <div>
                        <p className='text-2'>AVERAGE GRADE</p>
                        <p className='num'>69%</p>
                    </div>
                    <div>
                        <p className='text-2'>MODULES PASSED</p>
                        <p className='num'>5/6</p>
                    </div>
                </div>

            </div>

            

        </>
        
    );
}

export default Results;