import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { editProgramById } from '../../api'
// import messages from '../../auth/messages'
class EditProgram extends Component {
    constructor() {
        super()
        this.state = {
            programName: '',
            programDetails: ''
        }
    }
    componentDidMount() {
        const { info } = this.props.location.state
        console.log(this.props);
        let programName = info.programName
        let programDetails = info.programDetails
        let id = info._id
        this.setState({
            programName, programDetails, id
        })
    }
    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })
    onEditProgram = event => {
        event.preventDefault()
        const { alert, history, user } = this.props
        editProgramById(this.state, this.props.user)
            .then((response) => { })
            // .then(() => alert(messages.editProgramSuccess, 'success'))
            .then(() => history.push('/programs'))
            .catch(error => {
                console.log(error)
                this.setState({
                    programName: '',
                    programDetails: ''
                })
                // alert(messages.editProgramFailure, 'danger')
            })
    }
    render() {
        const { programName, programDetails,  } = this.state
        return (
            <form className='auth-form' onSubmit={this.onEditProgram}>
                <h3>Edit A Program</h3>
                <label htmlFor="ProgramName">Program Name</label>
                <input
                    required
                    name="programName"
                    value={programName}
                    type="programName"
                    placeholder="ProgramName"
                    onChange={this.handleChange}
                />
                <label htmlFor="ProgramDetails">Program Details</label>
                <input
                    required
                    name="programDetails"
                    value={programDetails}
                    type="programDetails"
                    placeholder="ProgramDetails"
                    onChange={this.handleChange}
                />
                <button type="submit">ADD Program</button>
            </form>
        )
    }
}
export default EditProgram;