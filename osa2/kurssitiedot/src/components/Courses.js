import React from "react";

const Courses = (props) => {
  const { courses } = props;
  const header = (props) => <h2>{props.name}</h2>;

  const total = (props) => {
    let initialValue = 0;
    return props.parts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.exercises,
      initialValue
    );
  };

  const part = (props) => {
    return (
      <>
        {props.name} {props.exercises}
      </>
    );
  };

  const content = (props) => {
    return (
      <>
        {props.parts.map((course) => (
          <p key={course.id}>{part(course)}</p>
        ))}
      </>
    );
  };

  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <div key={course.id} course={course}>
          {header(course)}
          {content(course)}
          <p>
            <b>total of {total(course)} exercises</b>
          </p>
        </div>
      ))}
    </>
  );
};

export default Courses;
