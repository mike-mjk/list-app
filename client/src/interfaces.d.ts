interface IInputState {
	term: string
}

interface IListState {
	items: Array<string>,
	modalIsOpen: boolean
}

interface IListItemState {
	completed: boolean
}