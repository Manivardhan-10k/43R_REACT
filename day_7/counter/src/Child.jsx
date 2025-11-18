import React  from "react";



class Child extends React.Component{

    render(){
        return (
            <div>

                <p>value recieved from parent :{this.props.data["user"]} </p>
                <p>counter value : {this.props.data["count"]}</p>

            </div>
        )
    }
} 

export default Child