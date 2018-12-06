# React-quotations
basic exercises to start coding in React.js
## To begin with
In the current directory of the projet, type the following commands:
1. `npm install`. This command will create de *node_modules* directory containing all packages you need
1. `npm run server`. This command is a shortcut to start the *Node.js* server. The message *Server started at 3000* should appear on your terminal
1. In a new tab, `npm run client`. This command is a shortcut to launch *Webpack* in development mode. It creates the 2 bundles you need to start the app (have a look at *index.html*)
1. In a web browser type `http://localhost:3000`
## Access the exercises solutions
In `client/main.jsx` file, you see a list of lines beginning with `import Root`. Uncomment only the line you want to execute.
Each `client/partXX.jsx` file proposes a solution of some exercises proposed in [Lecoutre's pages](http://www.cril.univ-artois.fr/~lecoutre/#/courses)
- **part01.jsx**: *managing a component state with React*. Exercises 1 to 3.
- **part02.jsx**: *Composition of React components*. In *Root* class, two versions of the `render()` method are presented. The first one in the classical way, whereas the second one is using the [JavaScript spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- **part03.jsx**:*Managing Several Quotes*
- **part04.jsx**:*Additionnal Functionalities*. The two first exercises are solved in this part : 
  - Add a form for inserting a new quote to the array.
  - Replace the methods incrementIndex and decrementIndex by a unique method.
- **part05.jsx**: the three next exercises. Note that the solution of the second exercise does not appear because the third exercise is a refinement of the second one.
- **part06.jsx**: *??????*. Render all the quotes in a *HTML* list. A click event on a quote triggers removing it from the list.
- **part07.jsx**: *??????*. Create a new class *Form* to manage the form and use it in the *Root* class. 
