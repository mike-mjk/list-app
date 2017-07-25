/// <reference path="../interfaces.d.ts"/>
import * as React from 'react';
import firebase from '../firebase';

interface Props {

}

let database = firebase.database();
let ref = database.ref('things');

export class Input extends React.Component<Props, IInputState> {
	constructor(props: Props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = { term: '' }
	}

	handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log(this.state.term);
		ref.push(this.state.term);
	}
  render() {
      return (
      	<form onSubmit={this.handleSubmit}>
      		<input onChange={event => this.setState({ term: event.target.value })} />
      	</form>
      )
  }
}