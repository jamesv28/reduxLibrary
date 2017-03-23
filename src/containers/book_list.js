import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
         onClick={() => this.props.selectBook(book) }
         className="list-group-item"
         key={book.title} > {book.title} </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
} // end of class


function mapStateToProps(state) {
  //  Whatever is returned here will go to this.props

  return {
    books: state.books
  }
}

//  anything returned from this function will return as props in the booksList container
function mapDispatchToProps(dispatch) {
  //  when the action selectBook is called, we pass this function to all our reducers
  return bindActionCreators( { selectBook: selectBook }, dispatch);
  //  this is what bindActionCreator is doing calling selectBook and then telling it to dispatch
}

// proomote needs to go from component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
