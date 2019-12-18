import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { addProgram } from '../../api'
import messages from '../../messages'

class AddProgram extends Component {
    constructor() {
        super()
        this.state = {
            programName: '',
            programDetails: ''
        }
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    onaddProgram = event => {
        event.preventDefault()
        const { alert, history, setUser } = this.props
        addProgram(this.state, this.props.user)
            .then(res => {})
            .then(() => alert(messages.addProgramSuccess, 'success'))
            .then(() => history.push('/programs'))
            .catch(error => {
                console.error(error)
                this.setState({ programName: '', programDetails: ''})
                alert(messages.addProgramFailure, 'danger')
            })
    }

    render() {
        const { programName, programDetails} = this.state
        return (
            <form className='auth-form' onSubmit={this.onaddProgram}>
                <h3>Add Program</h3>
                <label htmlFor="programName">Program Name</label>
                <input
                    required
                    name="programName"
                    value={programName}
                    type="programName"
                    placeholder="Program Name"
                    onChange={this.handleChange}
                />
                <label htmlFor="programDetails">Details</label>
                <input
                    required
                    name="programDetails"
                    value={programDetails}
                    type="programDetails"
                    placeholder="programDetails"
                    onChange={this.handleChange}
                />
                <button type="submit">Add Program</button>
            </form>
        )
    }
}
export default withRouter(AddProgram);
