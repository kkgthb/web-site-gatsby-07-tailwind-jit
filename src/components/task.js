import React from "react"

export default function Task(props) {
  let checkboxSymbol;
  if (props.taskDetail.done) {
	checkboxSymbol = '✓';
  } else {
	checkboxSymbol = 'X';
  }
  const classes = `task ${props.alternatingClassName}`
  return (
    <div className={classes}>
	  <b>{checkboxSymbol}</b>
	  {' '}
	  <b>{props.taskDetail.task}</b>
	  { props.taskDetail.how && 
  	    <i>{' '}{props.taskDetail.how}</i>
	  }
    </div>
  )
}