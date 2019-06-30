import React,{Component} from 'react'
import './Card.css'
import MasterCard from './images/MasterCard-6.gif'
import SmartChip from './images/chip-card.png'

class Card extends Component{
    constructor(){
        super()
        this.state={
            serialN:"",
            validDate: "",
            cardHolder: ""
        }
        
    }
    
    splitNumber = (number) => {
        let arr = []
        for(let i=0;i<=number.length-1;i+=4){
            arr.push(number.slice(i,i+4))
            console.log('arr.join=',arr.join(" "))
        }
    
            return arr.join(' ')
       
    }
    
    // splitDate = (number) => {
    //     let arr = [] 
    //     for(let i=0;i<=number.length-1;i+=2){
    //         if(Number(number.slice(0,2)) < 13){
    //         arr.push(number.slice(i,i+2))
    //         console.log('arr.join=',arr.join(" "))
    //         }
    //     }
    //         return arr.join('/')
    // }
    splitDate = (number) => {
        let arr = [] 
        for(let i=0;i<=number.length-1;i+=2){
      
            arr.push(number.slice(i,i+2))
            console.log('arr.join=',arr.join(" "))
            
        }
            return arr.join('/')
    }
   
    

    changeSerialN=(event)=>{
        if(!event.target.value.match(/^[a-zA-Z]+$/) && (event.target.value.length<20)){
            event.target.value=event.target.value.replace(/[ ]/g,'')
        this.setState({
            serialN: event.target.value
        })
        }
    }


    changevalidDate=(event)=>{
        
        
        if(!event.target.value.match(/^[a-zA-Z]+$/) && (event.target.value.length<=5)){
            
            if (((event.target.value.slice(0,2)!=="00")&& (Number(event.target.value.slice(0,2))<13) &&(Number(event.target.value.slice(0,1))<2)) || event.target.value.slice(0,2)==="" ){
                
                    this.setState({
                    validDate: event.target.value.replace(/[/]/g,'')
                    })
                
            }
           
        }
           
       

    }

    changecardHold  = (event) => {
        if(!event.target.value.match(/^\d+$/) && (event.target.value.length<9)){
            this.setState({
                cardHolder: event.target.value.toUpperCase()
            })
            }
           
    }

    render(){
        return(
         <div>
            <div className="MyCard">
            <div className="Container">
                <h1 className="title">CREDIT CARD</h1>
  
                <img src={SmartChip} className="smart-chip" alt="visa"/>
                

                <div className="Card-Number"><h1 >{this.splitNumber(this.state.serialN.padEnd(16, '*'))}</h1></div>
                <div className="Card-Body">
                    
                    <div className="Card-Info">
                        
                        <div className="Ref"> 
                            <h1>5422</h1>
                            <div className="Card-Valid">
                                <p>VALID <br/>THRU</p>
                                <i className="fas fa-caret-right"></i>
                                <div className="Card-Date">
                                     <p>MONTH/YEAR</p>
                                    <h1>{this.splitDate(this.state.validDate.padEnd(4, '*'))}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="Card-Holder">
                            <h2>{this.state.cardHolder.padEnd(8, '*')}</h2>
                        </div>
                     </div>
                     <div className="Card-ref">
                     <img src={MasterCard} className="monetic" alt="MasterCard"/>
                     </div>
                   </div>
               </div>
             </div>

             <div className="data-input">
                <input type="text" value={this.splitNumber((this.state.serialN))} placeholder="Serial Number" className="data " name="serialNumber" onChange={(event)=>this.changeSerialN(event)}/>
                <input type="text" value={this.splitDate((this.state.validDate))} placeholder="Validation Date" className="data serial-number" name="validationDate" onChange={(event)=>this.changevalidDate(event)}/>
                <input type="text" value={this.state.cardHolder} placeholder="Card Holder" className="data serial-number" name="cardHolder" onChange={(event)=>this.changecardHold(event)}/>

             </div>
           </div>
        )
    }




   
}
export default Card


