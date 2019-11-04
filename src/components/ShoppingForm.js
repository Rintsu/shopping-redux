import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

class ShoppingForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            type:"",
            count:0,
            price:0,
            total:0
        }
    }

    change = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
   }

   submit = (event) => {
       event.preventDefault();
       let item = {
           id:0,
           type:this.state.type,
           price:this.state.price,
           count:this.state.count,
           total:this.state.total
       }
       this.props.dispatch({
           action:"ADD_TO_LIST",
           item:item
       })
       this.setState({
           type:"",
           price:0,
           count:0,
           total:0
       })
   }
}

export default connect() (ShoppingForm);