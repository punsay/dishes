import React, { Component } from 'react';
import './dish.css'

class Dish extends Component {


    render() {
        return (
            <React.Fragment>

                <div onClick={this.displayInfo} className="dishContainer">
                    {this.props.DishObject.name}
                </div>
            </React.Fragment>
        );
    }

    displayInfo=()=>{
        console.log(this.props.DishObject.name);
        console.log(this.props.DishObject.Energy);
        console.log(this.props.DishObject.price);

    };
}

export default Dish;