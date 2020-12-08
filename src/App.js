// import logo from './logo.svg';
import './App.css';
import React from "react";
// import components that we are using
// import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import employees from "./employees.json";
import EmployeeCard from "./components/EmployeeCard";
import Axios from "axios";

// app function and will return JSX;
// this is the markup for the component
// function App() {
// return (
//   // <div className="App">
//   //   <header className="App-header">
//   //     <img src={logo} className="App-logo" alt="logo" />
//   //     <p>
//   //       Edit <code>src/App.js</code> and save to reload.
//   //     </p>
//   //     <a
//   //       className="App-link"
//   //       href="https://reactjs.org"
//   //       target="_blank"
//   //       rel="noopener noreferrer"
//   //     >
//   //       Learn React
//   //     </a>
//   //   </header>
//   // </div>
// );

class App extends React.Component {

  constructor(props) {
    super(props);

    // Setting this.state.employees to the json array
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    Axios.get("https://randomuser.me/api/?results=10")
      .then(res => {
        const employees = res.data.results;
        this.setState({ employees });
        console.log("employees array " + employees);
      });
  }

  showOnlyThisEmployee = index => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const employees = this.state.employees.filter(employee => employee.id !== id);
    const employees = this.state.employees.splice(index, 1);
    console.log("we want to show only user number " + index);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    console.log("we are trying to delete user at index " + id);
    const employees = this.state.employees.filter((employee, index) => index !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  sortEmployees = () => {
    console.log("sorting employees by first name");
    const employees = this.state.employees.sort(function (a, b) {
      if (a.name.first < b.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });

    console.log(employees);
    this.setState({ employees });
  }

  filterNationalities = nat => {
    console.log("filtering employees from the same nationality");
    const employees = this.state.employees.filter((element) => {
      if (element.nat === nat) {
        return true;
      } else {
        return false;
      }
    })
    console.log(employees);
    this.setState({ employees });
  }

  render() {

    return (
      <div className="container">

        <Wrapper>
          <Title>Employees List</Title>
          {this.state.employees.map((employee, i) => (
            <EmployeeCard
              removeEmployee={this.removeEmployee}
              showOnlyThisEmployee={this.showOnlyThisEmployee}
              sortEmployees={this.sortEmployees}
              filterNationalities={this.filterNationalities}
              id={i}
              name={employee.name.first}
              lastName={employee.name.last}
              image={employee.picture.medium}
              email={employee.email}
              phone={employee.phone}
              location={employee.nat}
            />
          ))}
        </Wrapper>

      </div>
    );
  }
}

// class based render
// equivalent to the function based approach above
// class App extends React.Component{
//   render(){
//     <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
//   }
// }

export default App;
