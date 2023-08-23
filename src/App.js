import logo from './logo.svg';
import './App.css';
import Content from './components/Content/Content';

function App() {
  const content = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more"
  ]
  return (
    <div className="">
      <Content
      content={content}
      />
    </div>
  );
}

export default App;
