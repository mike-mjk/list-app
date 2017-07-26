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

		this.state = { items: null }
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
		if(key === '-Kq-oBNM04vEMVJrZPBR' || key === '-Kq-oDsnA3XxHSxYT_Dw') {
			alert("Whoa, there! Don't delete this one until you have done it! Try adding something else if you want to test the delete functionality.");
		}
		else {
			console.log('key', key, typeof key)
			ref.child(key).remove();
		}
	}

	renderItems() {
		let { items } = this.state;
		if (!items) {
			return null
		}
		let stuff = _.map(items, (item, key: string) => {
			console.log('key', key);
			return <ListItem remove={() => this.remove(key)} key={key} item={item} />
		})
		return <ul className="collection">{stuff}</ul>
	}

  render() {
    return (
    	<div>
	    	<div className="container">
	    		<div className="row">
	    			<div className="col xl6 offset-xl3 l8 offset-l2 m10 offset-m1 s12  box dark-primary-color">
	    				<h2>To-Do List</h2>
			    		<Input />
			    		{this.renderItems()}
	    			</div>
	    		</div>
	    	</div>
	  		<footer>
	  			<div>Dominic, check out the ReadMe.</div>
	  			<div>
	    			<a href="https://github.com/mike-mjk/list-app" target="_blank">
	    				<i className="fa fa-github fa-lg github" aria-hidden="true"></i>
	    			</a>
	  			</div>
	  		</footer>
    	</div>
    )
  }
}