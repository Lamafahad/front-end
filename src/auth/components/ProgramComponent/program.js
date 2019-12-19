import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { editProgramById } from '../../api';
class Program extends React.Component {

    deleteProgram = (e) => {
        e.preventDefault();
        console.log(this.props.id);
        this.props.deleteProgram(this.props.id);
    };

    setProgramId = (e) => {
        e.preventDefault();
        this.props.setProgramId(this.props.id);
    };

    render() {
        return (
            <div className='program'>
                <h2>{this.props.programName}</h2>
                <p>
                    {this.props.programDetails}
                </p>
                <a className="btn bg-danger bttn" href="/" onClick={this.deleteProgram}> Delete </a>
                <Link className="btn bg-danger bttn"
                        to={{
                            pathname: "/programs/editprogram",
                           
                            state: { info: this.props.program }
                        }}
                        >
                             Edit </Link>
            </div>
        );
    }
}

export default Program;