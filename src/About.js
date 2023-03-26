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
    console.warn("props",this.props.Name);
}


componentDidUpdate()
{
    console.warn("props",this.props.Name);
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