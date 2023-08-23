import button from "./button.module.css"

const Button = (props) =>{
  return (
    <button
    onClick={props.onClick}
    className={"py-3 px-5 w-full bg-darkSlate mt-4 rounded-md text-white text-sm md:text-base focus:outline-none " + button.button__gradient}
    >
      {props.children}
    </button>
  )
}

export default Button;