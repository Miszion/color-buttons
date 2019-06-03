import React from "react"
import "./button.css"

class SquareButton extends React.Component
{

    constructor(props){
    super(props);


    this.state = {
        position: props.position
    }


}






    render(){
       return <span className="square" onClick = {this.onButtonPress} style = {{backgroundColor: this.props.color}}></span>
    }




}

export default SquareButton