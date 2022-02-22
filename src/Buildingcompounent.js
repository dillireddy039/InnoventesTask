import React, { Component } from 'react'
import {faUser, faBed ,faChild, faCircleMinus ,faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
export class Buildingcompounent extends Component {
    constructor(props) {
        super(props)
        this.state = {
           rooms:0,
           adult:0,
           children:0,
           availableCount:0,
           perRoomCount:4,
        }
    }
    validation =async (action,type)=>{
        if( action ==="ROOM" && this.state.rooms < 4 && type==="PLUS"){
          await this.setState({rooms:this.state.rooms+1, availableCount:this.state.availableCount+this.state. perRoomCount})
      }
        if(action ==="ROOM" && this.state.rooms >0 && type==="MINUS"){
          await this.setState({rooms:this.state.rooms-1, availableCount:this.state.availableCount-this.state. perRoomCount})
         }
         if(action ==="ADULT" &&this.state.rooms>=1&& this.state.adult < this.state.availableCount && type==="PLUS" &&this.state.availableCount !=this.state.children &&  this.state.availableCount !=this.state.adult+ this.state.children ){
          await this.setState({adult:this.state.adult+1})
        }
        if(action ==="ADULT" && this.state.adult >0 && type==="MINUS" ){
          await this.setState({adult:this.state.adult-1})
        }
         if(action ==="CHILDREN" && this.state.children  < this.state.availableCount && type==="PLUS" && this.state.availableCount!=this.state.adult+ this.state.children ){
         await this.setState({children:this.state.children+1})
        } 
         if(action ==="CHILDREN" && this.state.children >0 && type==="MINUS"){
          await this.setState({children:this.state.children-1})
        }
  }
  render() {   
    return (
     <div >
       <table className="table table-bordered">
         <tbody className="text-primary">
           <tr>
             <div  className='item'>
               <div>
                <FontAwesomeIcon className='margin-right' icon={faBed}/>ROOMS
               </div>
              <div className="value" >
              <button id='btn' className={this.state.rooms === 0?"btn-disable":"" }><FontAwesomeIcon onClick={(()=>this.validation("ROOM","MINUS"))} className="text-danger " icon={faCircleMinus} /> </button>{this.state.rooms}
              <button id='btn' ><FontAwesomeIcon  onClick={()=>this.validation( "ROOM","PLUS")} icon={faCirclePlus}/></button>
              </div>
             </div>
           </tr>
           <tr>
            <div className='item'>
             <div>
              <FontAwesomeIcon className='margin-right' icon={faUser}/>ADULTS
             </div>
             <div className="value">
             <button id='btn' className={this.state.adult === 0?"btn-disable":"" }><FontAwesomeIcon  onClick={(()=>this.validation("ADULT","MINUS"))} className="text-danger " icon={faCircleMinus}/></button>
                {this.state.adult}
                <button id='btn' className={this.state.adult ==this.state.availableCount?"btn-disable":"" }><FontAwesomeIcon  onClick={(()=>this.validation("ADULT","PLUS"))} icon={faCirclePlus}/></button>
              </div>
            </div>
           </tr>
           <tr>
            <div className='item'>
             <div>
              <FontAwesomeIcon className='margin-right' icon={faChild} />CHILDRENS
             </div>
             <div className='value'> 
             <button id='btn' className={this.state.children === 0 ?"btn-disable":"" }><FontAwesomeIcon  onClick={(()=>this.validation("CHILDREN","MINUS"))} className="text-danger " icon={faCircleMinus}/></button>
              {this.state.children}
              <button id='btn' className={this.state.rooms === 0 ?"btn-disable":"" }><FontAwesomeIcon onClick={(()=>this.validation("CHILDREN","PLUS"))} icon={faCirclePlus}/></button>
             </div>
           </div>
           </tr>
         </tbody>
       </table>
     </div>
    )
  }
}
export default Buildingcompounent