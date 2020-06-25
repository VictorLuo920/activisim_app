import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as blmCommentsService from "../../utils/blmCommentsService";
import './EditBlmComment.css';

class EditBlmComment extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            invalidForm: false,
            formData: ''
        }
    }

    formRef = React.createRef()

    handleSubmit = e => {
        console.log("word")
        e.preventDefault()
        this.props.handleUpdateBlmComment(this.state.formData)
        this.props.history.push('/blmcommentspage')
    }

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value }
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    async componentDidMount() {
        const foundBlmComment = await blmCommentsService.findNewBlmComment(this.props.match.params.id)
        console.log(foundBlmComment)
        this.setState({
            formData: foundBlmComment
        })
    }

    render() {
        return (
            <>
                <div className="">
                    <div className="">
                        <div className="">
                            <header>Edit Line</header>
                        </div>
                        <div>
                            <form
                                ref={this.formRef}
                                autoComplete='off'
                                onSubmit={this.handleSubmit}>
                                <textarea
                                    rows="8" cols="45"
                                    name='text'
                                    type='text'
                                    value={this.state.formData.text}
                                    onChange={this.handleChange}
                                    required>
                                </textarea>
                                <button
                                    type='submit'
                                    disabled={this.state.invalidForm}
                                >Update
                                </button>
                            </form>
                            <div>
                                <p
                                    className="delete"
                                    onClick={() => this.props.handleDeleteBlmComment(this.props.match.params.id, this.props.history)}
                                >Delete
                                </p>
                                <p><Link to='/blmcommentspage'>Cancel</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default EditBlmComment;