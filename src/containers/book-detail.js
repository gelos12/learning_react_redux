import React , { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
    render() {
        return (
            <div className="col-lg-6">
                <h1>Book Detail for:</h1>
                <p>{this.props.book.title}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        book : state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);