/// <reference path="../interfaces.d.ts"/>
import * as React from 'react';
import firebase from '../firebase';
import * as classNames from 'classnames';

let database = firebase.database();
let ref = database.ref('things');

interface Props {
	item: string,
	remove: any
}

class ListItem extends React.Component<Props, IListItemState> {
	constructor(props: Props) {
		super(props);

		this.state = {completed: false}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({completed: !this.state.completed})
	}

	render() {
		let hideCheck = classNames({hide: !this.state.completed});
		let hideCheckBox = classNames({hide: this.state.completed});
		let lineThrough = classNames({'line-through': this.state.completed})
		return (
			<li 
				className={`collection-item ${lineThrough}`}>{this.props.item}
				<i 
					className={`material-icons checkbox ${hideCheckBox}`}
					onClick={this.handleClick}>check_box_outline_blank
				</i>
				<i 
					className={`material-icons check ${hideCheck}`}
					onClick={this.handleClick}>check
				</i>
				<i onClick={this.props.remove} className="material-icons trash">delete</i>
			</li>
		)
	}
}

export default ListItem;