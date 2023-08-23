import Check from "./ui/check";
import Button from "./ui/Button/button";
import Container from "./ui/Container";

const Success = (props) => {
  const backToHome = () => {
    props.onHomeHandler()
  }
  return (
    <Container 
    className="max-w-md px-3 sm:absolute sm:px-9 py-10 text-white rounded-xl mx-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
      <Check
      class="w-20"
      class1="w-16"
      />
      <div className="text-darkSlate space-y-6">
        <h1
        className="text-5xl font-semibold"
        >Thanks for subscribing</h1>
        <p className="">A confirmation email has been sent to <span className="font-bold">{props.email}</span>. Please open it and click the button inside to confirm your subscription</p>
        <Button
          onClick={backToHome}
          >
            Dismiss message
        </Button>
      </div>
    </Container>
  )
}
export default Success;