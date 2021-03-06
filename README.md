# React-quotations
basic exercises to start coding in React.js
## To begin with
In the current directory of the projet, type the following commands:
1. `npm install`. This command will create de *node_modules* directory containing all packages you need
1. `npm run server`. This command is a shortcut to start the *Node.js* server. The message *Server started at 3000* should appear on your terminal
1. In a new tab, `npm run client`. This command is a shortcut to launch *Webpack* in development mode. It creates the 2 bundles you need to start the app (have a look at *index.html*)
1. In a web browser type `http://localhost:3000`
## Access the exercises solutions
In `client/main.jsx` file, you see a list of lines beginning with `import Root`. Only one line can be (and must be) uncommented.
In each `client/partXX.jsx` file, a solution is proposed for exercises proposed in [Lecoutre's pages](http://www.cril.univ-artois.fr/~lecoutre/#/courses)
- **part01.jsx**: *Managing a component state with React*. Exercises 1, 2 & 3.
- **part02.jsx**: *Composition of React components*. In *Root* class, two versions of the `render()` method are presented. The first one in the classical way, the second one by using the [JavaScript spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- **part03.jsx**: *Managing Several Quotes*
- **part04.jsx**: *Additionnal Functionalities*. Solutions for exercises 1 & 2 are proposed in this part: 
  - Add a form for inserting a new quote to the array.
  - Replace the methods incrementIndex and decrementIndex by a unique method.
- **part05.jsx**: Here are solutions for exercises 3 and 5. Note that exercise 5 is a refinement of exercise 4.
- **part06.jsx**: *??????*. Render all the quotes in a *HTML* list. A click event on a quote triggers removing it from the list.
- **part07.jsx**: *??????*. Create a new class *Form* to manage the form and use it in the *Root* class. 
