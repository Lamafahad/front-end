import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link, Redirect } from 'react-router-dom'
import { editProgramById } from '../../api'


class EditProgram extends Component{
    constructor() {
        super()
        this.state = {
            programName: '',
            programDetails: ''
        }
    }
    componentDidMount(){
        const {info} = this.props.location.state
    this.setState({
        programName: info.programName,
        programDetails: info.programDetails,
        })
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
      })
    
      onUpdateProduct = event => {
        event.preventDefault()
    
        const { alert, history, user } = this.props
        editProgramById( this.state, this.props.user )
         
        .then((response) => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
            this.setState({
                programName: '',
                programDetails: ''
            })
            alert('There is a problem');
        })
}
render() {
    const { programName, programDetails} = this.state
    console.log(this.props);
    
    return (
        <form className='auth-form' onSubmit={this.onUpdateProgram}>
            <h3>Edit A Program</h3>
            <label htmlFor="program-name">Program Name</label>
            <input
                required
                name="programName"
                    value={programName}
                    type="programName"
                    placeholder="Program Name"
                onChange={this.handleChange}
            />
            <label htmlFor="description">Details</label>
            <input
                required
                name="programDetails"
                value={programDetails}
                type="programDetails"
                placeholder="programDetails"
                onChange={this.handleChange}
            />

            <button type="submit">Confirm Changes</button>
        </form>
    )
}
}
export default EditProgram;