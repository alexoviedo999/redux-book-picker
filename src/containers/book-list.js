import React, { Component } from 'React';

export default class Booklist extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			)
		});
	}
	render() {
		return (
			<ul clasName="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}
