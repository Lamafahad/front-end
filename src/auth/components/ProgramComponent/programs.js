import React from 'react';
import { getAllProgram , deleteProgramByID } from '../../api';
import Program from './program';
import { Link } from 'react-router-dom';



class Programs extends React.Component {

    componentDidMount() {

    // Show All Programs

    getAllProgram()
            .then((response) => {
                console.log(response.data.programs,"Test")
                this.props.setPrograms(response.data.programs);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Delte Program 

    deleteProgram = (id) => {
        console.log(id);
        console.log(this.props);

        deleteProgramByID(id,this.props.user)
          .then((response) => {
            const newProgramsList = this.props.programs.filter((program) => {
              return program._id !== id;
            });
            this.props.setPrograms(newProgramsList);
          })}
  

    render() {
       let allPrograms = <h2>No Program</h2>;

       if (this.props.programs.length > 0) {
       allPrograms = this.props.programs.map((program, index) => {
       return <Program
       program={program}
       programName =  {program.programName}
       programDetails = {program.programDetails}
       user ={this.props.user}
       id={program._id} 
       
       deleteProgram={this.deleteProgram}
       key={index}/>
     });
    }
    return <div>
      <Link to='/program/AddProgram'> <h3> Add New Program</h3></Link>
     {allPrograms}
      </div>
    }
}
export default Programs;