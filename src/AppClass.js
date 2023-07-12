  import { Component } from "react";
  import "./App.css"
  
class AppClass extends Component{
  
    render(){
      return (
          <div className="App">
              <h3>Kalvium Gallery - Class Component</h3>
              <div className="image">
                  {this.props.imageData.map((ele) => {
                      return <img src={ele.img} alt="elephant" key={ele.id} />;
                  })}
              </div>
          </div>
      );
    }
    
  }

  export default AppClass