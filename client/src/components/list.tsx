/// <reference path="../interfaces.d.ts"/>
import * as React from 'react';
import firebase from '../firebase';
import { Input } from './input';
import ListItem from './list-item';
import * as _ from 'lodash';
import ReactModal from 'react-modal';

let database = firebase.database();
let ref = database.ref('things');


interface Props {

}

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export class List extends React.Component<Props, IListState> {
	constructor(props: Props) {
		super(props);
		console.log('modal', ReactModal)
		this.state = { 
			items: null,
			modalIsOpen: false
		}
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

	}

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed. 
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
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
			// alert("Whoa, there! Don't delete this one until you have done it! Try adding something else if you want to test the delete functionality.");
			this.openModal();
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
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2>Oh No! You've made a mistake!</h2>
          <div>Don't delete this item until you have done it.</div>
					<div style={{width:'100%', height:'0', paddingBottom:'75%', position:'relative'}}><iframe src="https://giphy.com/embed/3oEhmK0nn0gbplhY6Q" width="100%" height="100%" style={{position:'absolute'}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/3oEhmK0nn0gbplhY6Q">via GIPHY</a></p>
          <button onClick={this.closeModal}>close</button>
        </ReactModal>
 


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
       // <Modal
       //    isOpen={this.state.modalIsOpen}
       //    onAfterOpen={this.afterOpenModal}
       //    onRequestClose={this.closeModal}
       //    style={customStyles}
       //    contentLabel="Example Modal"
       //  >
 
       //    <h2>Hello</h2>
       //    <button onClick={this.closeModal}>close</button>
       //    <div>I am a modal</div>
       //  </Modal>