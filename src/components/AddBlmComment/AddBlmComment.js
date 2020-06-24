import React from "react";
import './AddBlmComment.css'

class AddBlmComment extends React.Component {
  state = {
    invalidForm: true,
    formData: { blmComments: '' }
  }

  formRef = React.createRef()

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAddBlmComment(this.state.formData, this.props.history)
  }

  render() {
    return (
      <div className="add-page">
        <div className="add-container">
          <div className="add-label">
            <label>
              <em>Add a Comment</em>&nbsp;
          </label>
          </div>
          <div className="form-container">

         
          <form 
          className="form"
            ref={this.formRef}
            autoComplete='off'
            onSubmit={this.handleSubmit}
          >
            <textarea 
            rows="8" cols="45" 
              className="add-input"
              name="text"
              type="text"
              value={this.state.formData.text}
              onChange={this.handleChange}
            />
             
              <br />
            <button
            className="add"
              type="submit"
              disabled={this.state.invalidForm}
            >+</button>
          </form> 
          </div> 
        </div>
      </div>
    )
  }
}

export default AddBlmComment;