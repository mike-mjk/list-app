# To-Do List built with Firebase, TypeScript, Materialize, and React

Thanks for checking out the readme!

## What's cool about this?

### It's built with Firebase and TypeScript, which I had never used before this.

It was cool to work with TypeScript for the first time. There were a few interesting bits in figuring out TypeScript.

1. Figuring out that the event argument in my SubmitHandler needed to be of type React.SyntheticEvent<HTMLFormElement> was my first TypeScript difficulty. I solved it with some Google searches.

2. I used the react-modal package (Have you found the modal, yet?) which has problems with the type definition so I had to modify directly. https://stackoverflowfeeds.blogspot.com/2017/06/solved-typescript-problems-importing.html

3. But modifying that directly caused a problem when pushing to heroku because heroku uses the unmodified version. So I had to figure out how declare the module manually.

### Attention to detail.

Obviously, this is just a simple To-Do List app, but there are a few design elements that make it nice to use.

1. Delete Icon shows up on hover only which provides the functionality you need without cluttering up the list as you read it.

2. The functionality of checking things off of the list without deleting them is nice to have.

3. For items that go beyond one line the checkbox stays vertically centered.

4. It is responsive for all device widths.

5. EASTER EGGS. Did you try deleting the interview?
