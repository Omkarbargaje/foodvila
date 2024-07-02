import React from "react";

class User2 extends React.Component{
    constructor(props){
        super(props);

        console.log("user2 constructor");

    }

componentDidMount(){
    console.log("user2 componentDidMount");
}

    render(){
        console.log("user2 render");
        return(
            <div>user2</div>
        )
    }
}


export default User2;