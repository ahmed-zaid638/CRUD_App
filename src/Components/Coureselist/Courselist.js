import React, { Component, Fragment } from "react";
class Courselist extends Component {
  state = {
    isEdit : false
  }
 // Toggle forms 
 toggler = ()=> {
  let {isEdit} =  this.state
   this.setState({
    isEdit : !isEdit
   })
 }
  // Normal form 
  renderForm = () =>{
    return ( <li>
    <span>{this.props.details.name}</span>
    <button type="button" onClick={() => this.toggler()}>Edit</button>
    <button onClick={(index) => this.props.deleteCourse(index)}> Delete </button>
   </li>)
  }
  // updateCourse
  updateCourse = (e) => {
    let index = this.props.index
    e.preventDefault()
    this.props.editCourse(index, this.input.value)
    this.toggler()
    console.log("tested")
  }
 // edited form 
 editedForm =  () => {
  return ( 
       <form onSubmit={this.updateCourse}>
        <input type="text" defaultValue= {this.props.details.name}  ref={(val) => this.input = val}/>
        <button type="submit"  className="update-btn">Update Course</button>
      </form>
  )
 }
  render() {
    return (
      <Fragment key={this.props.index}>
        {this.state.isEdit ? this.editedForm() : this.renderForm()}
      </Fragment>
    );
  }
}
export default Courselist;


