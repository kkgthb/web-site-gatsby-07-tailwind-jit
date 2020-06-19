import React from "react"

import Task from './task.js';

export default function SectionTaskList(props) {
  const alternatingClassNames = ['task-odd', 'task-even']; // Per https://stackoverflow.com/a/45467474
  const tasks = props.section.accomplishments;
  const taskItems = tasks.map((taskToDo, index) =>
	<Task taskDetail={taskToDo} alternatingClassName={alternatingClassNames[index % alternatingClassNames.length]} />
  );
  return (
    <div className="task-list">    
	  {taskItems}
	</div>
  )
}