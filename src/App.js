import React from "react";
import Courselist from "./Components/Coureselist/Courselist";
import Courseform from "./Components/Coursform/Courseform";
import "./App.css";
class App extends React.Component {
  state = {
    courses: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JAVA" },
      { name: "SASS" },
    ],
    current: "",
  };
  render() {
    //update Course
    const updateCourse = (e) => {
      console.log(e.target.value);
      this.setState({
        current: e.target.value,
      });
    };
    // addCourse
    let addCourse = (e) => {
      e.preventDefault();
      let current = this.state.current;
      let courses = this.state.courses;
      if(current == '') {
      }
      else {
        courses.push({
          name: current,
        });
        this.setState({
          courses: courses,
          current: "",
        });
      }
    };
    // deleteCourse
    let deleteCourse = (index )  => {
      let courses = this.state.courses;
      courses.splice(index, 1);
      this.setState({
        courses: courses,
      });
    };
  // editCourse 
  let editCourse = (index , val) => {
   console.log(index , val)
   let courses = this.state.courses
    courses[index].name = val
    this.setState({
      courses : courses
    })
  }
    const allCourses = this.state.courses.map((course, index) => {
      return <Courselist key={index} details={course} deleteCourse ={deleteCourse} index={index} editCourse ={editCourse} />;
    });
    let courses =  this.state.courses.length
    return (
      <div className="app">
        <h2>Add Courses</h2>
        <Courseform
          updateCourse={updateCourse}
          current={this.state.current}
          addCourse={addCourse}
        />
       <ul>{courses < 1 ? <p className="empty">No Courses  To Show !</p> : allCourses}</ul>
      </div>
    );
  }
}
export default App;




