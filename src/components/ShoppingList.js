import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

class ShoppingList extends React.Component {

}

const mapStateToProps = (state) => {
    console.log("ShoppingList - mapStateToProps", state);
    return {
        list:state.list
    }
}

export default connect(mapStateToProps)(ShoppingList);