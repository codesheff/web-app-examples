import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const handleSearchSubmit = (e) => {
  // e is an event
  e.preventDefault()
  console.log(e.target[0].value)
}

// On video they changed this to arrow function notation
// i.e. const App = () => {..the function..}
function App() {
  return (
    <div>
      <Header title="Images Gallery"></Header>

      <Search handleSubmit={handleSearchSubmit}/>
   
    </div>
  );
}

export default App;
