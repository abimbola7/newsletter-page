const Container = props => {
  return (
    <div className={"flex flex-col space-y-5 bg-white transition-all duration-300 ease-in-out " + props.className}>
      { props.children }
    </div>
  )
};

export default Container;