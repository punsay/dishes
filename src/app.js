import React, { Component } from 'react';
import './app.css';
import Dish from "./dish";

class App extends Component {

    state={
        existingDishes:{
            A:{name:'Paneer Roll',Energy:'Energy '+20,price:'Price '+20},
            B:{name:'Sandwich',Energy:'Energy '+ 35,price:'Price '+ 35},
            C:{name:'Kurkure',Energy:'Energy '+55,price:'Price '+250}
        },
        newdishCounter:0

    };
    createDish=()=>{
        this.state.newdishCounter+=1;
        let newDishObjectName='newDish'+this.state.newdishCounter;
        this.state.existingDishes[newDishObjectName]={name:'Masala Dosa',Energy:'Energy '+45,price:'Price '+50};
        this.setState({})
    };

    render() {


        return (

            <div className='container'>
                <h1>Menu</h1>
                <div className="App">

                    {this.state.existingDishes && Object.keys(this.state.existingDishes).map(function(detail, id) {
                        return <Dish key={id} DishObject={this.state.existingDishes[detail]}/>;
                    }.bind(this))}
                </div>
                <button onClick={()=>{this.createDish('newDish')}}>Add New Dish</button>

            </div>
        );

    }
}

export default App;
