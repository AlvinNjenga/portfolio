import Home from "./components/Home";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="container w-full max-w-screen-lg min-h-screen absolute top-0 left-[50%] -translate-x-[50%] px-4 py-0 overflow-hidden">
      <Navigation />
      <Home />
    </div>
  )                  
}

export default App;