import React, { useState, Fragment, useRef } from "react"
import Check from "../ui/check";
import Success from "../success";
import Input from "../input/input";
import im from "../../assets/images/illustration-sign-up-mobile.svg"
import imgDesktop from "../../assets/images/illustration-sign-up-desktop.svg"
import Container from "../ui/Container";

const Content = (props) => {
  const emailRef = useRef()
  const { content } = props
  const [isLoading, setIsLoading] = useState("inactive")
  const formHandle = (props) => {
    setIsLoading("pending")
    setTimeout(() => {
      setIsLoading("success")
    }, 2000);
  }
  const backHome = () => {
    setIsLoading("inactive")
  }
  return (
    <Fragment>
      {
        isLoading === "inactive" || isLoading === "pending" ? (
          <Container
          className="sm:flex-row-reverse sm:justify-center sm:space-x-4 sm:px-4 max-w-5xl sm:items-center sm:py-4 sm:rounded-[30px] mx-auto my-auto "
          >
            <img src={im} alt="" className="object-cover sm:hidden"/>
            <img 
            src={imgDesktop} 
            alt="" 
            className="object-cover hidden sm:block w-[50%]"
            style={
              {
                margin: 0
              }
            }
            />
            <div className="px-5 py-2 space-y-5 font-normal text-md sm:text-lg">
              <h1 className="text-4xl sm:text-5xl font-bold text-darkSlate">Stay updated!</h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <ul
              className="space-y-3"
              >
                {
                  content.map((elem, i)=>
                    <li className="flex" key={i}>
                      <span 
                      className="mr-3">
                        <Check
                        class="w-5"
                        class1="w-5"
                        />
                      </span>
                      {elem}
                    </li>
                  )
                }
              </ul>
              <Input
              ref={emailRef}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              handler={formHandle}
              />
            </div>
          </Container>
        ): 
        <Success
        email={emailRef.current.value}
        onHomeHandler={backHome}
        />
      }
    </Fragment>
  )
};

export default Content;