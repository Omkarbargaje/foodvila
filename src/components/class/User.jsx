import React from "react";
// import User2 from "./user2";

class User extends React.Component {
  constructor(props) {  
    super(props);

    this.state = {
      userInfo:{
        name:"dummy",
        location:"dummyLocation",
        contact:"Dummy contact",
      }
    };

    // console.log(`${this.props.name} + child constructor`);


  }

  async componentDidMount()
      {
    // console.log(`${this.props.name} "child componentDidMount"`);
        
        const data = await fetch("https://api.github.com/users/Omkarbargaje");
        const json =await data.json();

        console.log(json);


        this.setState({userInfo:json});



        this.timer=setInterval(()=>{
          console.log("hello omkar")
        },1000);
      }


          componentDidUpdate(){
            // console.log("componentDidUpdate");
          }

          componentWillUnmount(){
            if (this.timer) {
              clearInterval(this.timer);
            }

            console.log("timer cleared");
            // clearInterval(this.timer);
          }

            render() {
              const { name,login ,public_repos,avatar_url} = this.state.userInfo;

              // console.log(`${this.props.name} "child render"`);
          // debugger;
              return (
                <div style={{height:"auto",padding:"20px",width:"500px",border:"1px solid black", display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <img src={avatar_url} alt="" />
                <div>Name : {name}</div>
                <div> loginId: {login}</div>
                <div>public_repos: {public_repos}</div>
                  {/* <User2/> */}
                </ div>
              );
            }
          }

          export default User;
