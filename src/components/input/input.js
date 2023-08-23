import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "../ui/Button/button";
import LoadingSpinner from "../ui/LoadingSpinner/LoadingSpinner";

const Loading = (props) => {
  return (
    <Fragment>
      {
        props.isLoading === "pending" ? (
          <div className="w-full h-screen fixed bg-black bg-opacity-40 z-[200] top-0 left-0">
        <LoadingSpinner
        isLoading={props.isLoading}
        setIsLoading={props.setIsLoading}      
        />
      </div>
        ): ""
      }
    </Fragment>
  )
}



const Input = React.forwardRef(
  (props, ref) => {
    const [formIsValid, setFormIsValid] = useState(true)
  
    const formHandler = (e) => {
      setFormIsValid(true)
      e.preventDefault()
      if (!ref.current.value.includes("@")) {
        setFormIsValid(false)  
        return;
      }
      props.handler()
    }
  
    const emailClass = `border block mt-2 focus:outline-none rounded-lg py-3 px-5 w-full ${!formIsValid ? 'bg-tomato bg-opacity-25 border-tomato' : ""}`
  
    return (
      <Fragment>
        <form
        onSubmit={formHandler}
        >
          <div className="flex text-xs justify-between">
            <label htmlFor="email">Email address</label>
            {
              !formIsValid && <p className={'text-tomato'}>Valid email required</p>
            }
          </div>
          <input 
          type="text"
          // value={email}
          ref={ref}
          className={emailClass}
          placeholder="email@company.com"
          />
          <Button
          >
            Subscribe to monthly newsletter
          </Button>
        </form>
        {
          ReactDOM.createPortal(
            <Loading
            isLoading={props.isLoading}
            setIsLoading={props.setIsLoading}
            />,
            document.getElementById("loading")
          )
        }
      </Fragment>
    )
  }
)

export default Input;