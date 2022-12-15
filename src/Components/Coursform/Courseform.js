import React from "react";
const Courseform = ({ updateCourse, current, addCourse }) => {
  return (
      <div className="add-form">
        <form onSubmit={addCourse}>
          <input type="text" onChange={(e) => updateCourse(e)}  value={current} />
          <button type="submit" className="add-btn">Add Course</button>
        </form>
      </div>
  );
};
export default Courseform;



