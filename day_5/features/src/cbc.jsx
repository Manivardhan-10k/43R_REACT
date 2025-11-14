import { Component } from "react";

export class Classbasedcomp extends Component{

    constructor(){
        super()
        this.state={
            username:"manivardhan",
            color:"blue"
        }
    }

    render(){//loading the content in the browser
        return(
<p style={{color:this.state.color}}>
    this is the content from class based comp created by {this.state.username}
</p>        )
    }
    

}


//obj instance of a class 
//objects are real entities 
//constructor --> it is a special method initialize variable 



//state -> it holds information about the component


// class Compname extends Component{
//     constructor(){
//         super()
//         this.state={

//         }
//     }




//     render(){
//         return(jsx)
//     }

// }


//variable {}
//style  --{{}}
