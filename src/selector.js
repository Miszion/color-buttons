import React from "react"
import "./button.css"
import Tone from "tone"
import SquareButton from "./SquareButton"
class Selector extends React.Component
{

    changeMusic()
    {
        let synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
        let soundArray = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"]
        let soundArray2 = ["E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5"]
        let soundArray3 = ["G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5"]

        let randomNumber = Math.floor(Math.random() * (soundArray.length));

        synth.triggerAttackRelease([soundArray[randomNumber], soundArray2[randomNumber] ,soundArray3[randomNumber]], "16n");


    }

    onDragMouse()
    {

        if (this.state.clicked === true)
        {
            clearInterval(this.state.interval);
            this.setState({
                clicked: false
            })
        }
        else
        {

            this.setState(
                {
                    clicked: true,
                    interval: setInterval(() => {


                    if (this.state.direction === 1 && this.state.position >= 300){
                        this.setState({
                            direction: -1
                        })
                    }
                    else if (this.state.direction === -1 && this.state.position <= -150){
                        this.setState({
                            direction: 1
                        })
                    }

                    this.setState({
                        position : this.state.position + (this.state.direction * 2)
                    })

                    if (this.state.position === -100){
                        this.changeMusic();
                        this.changeColor("one");
                    }
                    else if (this.state.position === -80){
                        this.changeMusic();
                        this.changeColor("two");
                    }
                    else if (this.state.position === 80){
                        this.changeMusic();
                        this.changeColor("three");
                    }
                    else if (this.state.position === 200){
                        this.changeMusic();
                        this.changeColor("four");
                    }

        }
        
        , 4)})
    }
}

    constructor(props)
    {
        super(props)

        this.state ={
            position : props.position,
            direction: 1,
            mainColor: "red",
            clicked: false,
            interval: null
        }

        this.onDragMouse = this.onDragMouse.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(number){

        let colorArray = ["red", "darkcyan", "goldenrod", "slategrey", "rebeccapurple", "plum", "sandybrown", "pink"]
        let randomNumber = Math.floor(Math.random() * (colorArray.length));
    

        switch(number)
        {
        case "one" :
            while (colorArray[randomNumber] === (this.state.color1)){
                randomNumber = Math.floor(Math.random() * (colorArray.length));    
            }
            
            let color = colorArray[randomNumber]
            this.setState({
                color1: color,
                mainColor: color
            })
         break;
        case "two":
            while (colorArray[randomNumber] === (this.state.color2)){
                randomNumber = Math.floor(Math.random() * (colorArray.length));    
            }
            
            let color2 = colorArray[randomNumber]
            this.setState({
                color2: color2,
                mainColor: color2
            })
            break;
        case "three":
            while (colorArray[randomNumber] === (this.state.color3)){
                randomNumber = Math.floor(Math.random() * (colorArray.length));    
            }
            
            let color3 = colorArray[randomNumber]
            this.setState({
                    color3: color3,
                    mainColor: color3
                })
            break;
        case "four":
            while (colorArray[randomNumber] === (this.state.color4)){
                randomNumber = Math.floor(Math.random() * (colorArray.length));    
            }
            
            let color4 = colorArray[randomNumber]
            this.setState({
                color4: color4,
                mainColor: color4
            })
            break;
         default:
            break;
        }
    
    }


    render()
    {
        return(
        <div id = "overAll">
        	<div id = "contentA">
        		<div id = "buttonBlock">
        			<SquareButton color= {this.state.color1 || "goldenrod"} ></SquareButton>
        			<SquareButton color={this.state.color2 || "red"}></SquareButton>
        			<SquareButton color= {this.state.color3 || "slategrey"}></SquareButton>
        			<SquareButton color = {this.state.color4 || "darkcyan"}></SquareButton>
       			 </div>
       		</div>
        	<div id = "contentB">
        		<div id = "selectorblock">
        			<div className = "selecting" onClick = {this.onDragMouse} style = {{marginLeft : this.state.position + "px" || this.props.position + "px" , backgroundColor : this.state.mainColor }}> </div>
     			</div>
        	</div>
        </div>
        );
    }


}

export default Selector;