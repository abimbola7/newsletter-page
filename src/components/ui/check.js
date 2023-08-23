import React from "react"
import check from "../../assets/images/icon-list.svg"

const Check = (props) => {
  return (
    <div className={"overflow-hidden rounded-full h-full " + props.class}>
      <img src={check} className={props.class1} alt=""/>
    </div>
  )
}

export default Check;