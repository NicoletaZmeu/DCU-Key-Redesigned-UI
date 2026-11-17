import './Results.css'
import {useParams, useSearchParams} from 'react-router-dom'
import { results } from '../Results.js';


function Results({selectedCourse}){


    const {year, semester} = useParams();

    const selectedResults = results.find(
        (item) =>
            item.year === Number(year) &&
            item.semester === Number(semester)
    );

    const modules = selectedResults?.modules || [];

    const averageGrade = modules.length > 0
        ? Math.round(
            modules.reduce((total, module) => total + module.mark, 0) / modules.length
        )
        : 0;

    const modulesPassed = modules.filter(
        (module) => module.result === "Passed"
    ).length;
    

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

                {selectedResults && selectedCourse && (
                    <>
                        {selectedResults.modules.map((module) => (
                            <div className="result-row" key={module.code} style={{backgroundColor: module.mark < 40 ? '#ffebea' : ''}}>
                                <span style={{fontWeight:400}}>{module.code}</span>
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

                                    <span style={{color: module.mark >= 40? '#287448' : '#B03A3A'}}>{module.result}</span>
                            </div>
                        ))}

                        <div className='info'>
                            <div>
                                <p className='text'>AVERAGE GRADE</p>
                                <p className='grade'>{averageGrade}%</p>
                            </div>
                            <div>
                                <p className='text'>MODULES PASSED</p>
                                <p className='grade'>{modulesPassed} / {modules.length}</p>
                            </div>
                        </div>
                    </>
                )}



            </div>

            

        </>
        
    );
}

export default Results;