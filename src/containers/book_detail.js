import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component  {
  render () {
    if (!this.props.book) {
      return <div> Select a book to receive details</div>
    }
    return (
      <div>
        <h3>Details for:
          {this.props.book.title}
        </h3>
        <p className="text-center text-info">Pages: {this.props.book.pages}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}


export default connect(mapStateToProps)(BookDetail);
