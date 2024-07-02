import User from "../class/User";
import { Component } from "react";

class About extends Component {

constructor(props){
    super(props);

    this.state={
        name:"parent",
    }

    console.log("parent constructor");
}

componentDidMount(){
    console.log("Parent componentDidMount");
}


    render(){
        console.log("Parent render");
        return (
            <div>
            <h1>About {this.state.name}</h1>
            <User name={"Omkar"} location={"pune"} contact={"omkarbargaje.22@gmail.com"}/>

            </div>
        )
    }
}

export default About;