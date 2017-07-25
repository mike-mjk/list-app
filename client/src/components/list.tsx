/// <reference path="../interfaces.d.ts"/>
import * as React from 'react';
import firebase from '../firebase';
import { Input } from './input';
import ListItem from './list-item';
import * as _ from 'lodash';

let database = firebase.database();
let ref = database.ref('things');


interface Props {

}

export class List extends React.Component<Props, IListState> {
	constructor(props: Props) {
		super(props);

		this.state = { items: [] }
	}

	componentDidMount() {
		ref.on('value', snapshot => {
			console.log('snapshot.val()', snapshot.val())
			this.setState({
				items: snapshot.val()
			});
		});
	}

	remove(key: string) {
		// console.log(key);
		ref.child(key).remove();
		// console.log(ref.getKey());
	}

	renderItems() {
		let { items } = this.state;
		return _.map(items, (item, key: string) => {
			console.log('key', key);
			return <ListItem remove={() => this.remove(key)} key={key} item={item} />
		})
	}

  render() {
    return (
    	<div>
    		<Input />
    		{this.renderItems()}
    	</div>
    )
  }
}