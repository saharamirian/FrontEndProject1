import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemList extends Component {
    render () {
return <div>ItemList</div>
    }
}
    const mapStateToProps = (state) => {
        return {items : state.items};
}

export default connect (mapStateToProps) (ItemList);

