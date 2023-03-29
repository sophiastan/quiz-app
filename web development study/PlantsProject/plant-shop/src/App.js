// import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilterPlants] = useState(plants);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setPlants(users));
  }, []);

  useEffect(() => {
    const newFilteredPlants = plants.filter((plant) => {
      return plant.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterPlants(newFilteredPlants);
  }, [plants, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString); 
    // set search field doesn't trigger render, it's when searchField value state changes
  };

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange} 
        placeholder='search monsters'
      />
      <CardList plants={filteredPlants} />
    </div>
  );
};

// CLASS COMPONENT 
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       plants: [],
//       searchField: ''
//     };
//     console.log('constructor');
//   }

//   componentDidMount() {
//     console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { plants: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         ))
//   }

//   onSearchChange = (event) => {
//     console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField }
//     });
//   }

//   render() {
//     console.log('render');

//     const { plants, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredPlants = plants.filter((plant) => {
//       return plant.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox 
//           className='monsters-search-box'
//           onChangeHandler={onSearchChange} 
//           placeholder='search monsters'
//         />
//         <CardList plants={filteredPlants} />
//       </div>
//     );
//   }
// }
export default App;
