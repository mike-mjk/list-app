import * as React from 'react';
import firebase from '../firebase';

let database = firebase.database();
let ref = database.ref('things');

interface Props {
	item: string,
	remove: any
}

class ListItem extends React.Component<Props, null> {

	render() {
		return (
			<li>{this.props.item} <i onClick={this.props.remove} className="material-icons">delete</i></li>
		)
	}
}

export default ListItem;