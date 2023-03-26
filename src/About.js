import React from "react";
class About extends React.Component
{
    

// constructor()
// {
//     console.warn("call from construtor");
//     console.log();
// }

componentDidMount()
{
    console.warn("props in Did Mount",this.props.Name);
    //this Life Cycle Method updates always after when component Mount, (just like Born)
}


componentDidUpdate()
{
    console.warn("props in Did Update",this.props.Name);
    // ccomponent DidUpdate always runs after some update, after that if You want change something 
    // you can change
}




// constructor()
// {
//     super();
//     console.warn("some construtor");

//     this.state={
//         name:"Arpi Singh",
//         age:23
//     }


// }

// componentDidMount()
// {
//     console.warn("Somehting Did Mount")
// }


// componentDidUpdate()
// {
//     alert("name is updated")
// }

    render()
    {
        return(
            <div>

                <h1> About Us Page</h1>

                {/* <h2>  {this.state.name}</h2>
                <h2>  {this.state.age}</h2>
                

              <button onClick={()=>{this.setState({name:"Kuch bhi change" , age: "kuch jyada hai"})}}>Change State</button> */}




<h2>{this.props.Name}</h2>
            </div>
        )
    }
}

export default About;


// constructor()
// {
//     super();
//     console.warn("some construtor");
// }

// componentDidMount()
// {
    
// }

// componentWillUpdate()
// {

// }

// componentDidUnmount()
// {

// }