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
		if (this.state.term) {
			ref.push(this.state.term);
		}
		this.setState({ term: '' })
	}
  render() {
      return (
      	<form className="col s12" onSubmit={this.handleSubmit}>
      		<input value={this.state.term} onChange={event => this.setState({ term: event.target.value })} />
      	</form>
      )
  }
}