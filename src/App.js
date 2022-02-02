import React, { useState, useEffect } from 'react';
import './style.css';
// import Clock from './clock';
import Part from './Part';
// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//       <MediaList name="Mark" />
//       <Clock date={new Date()} />
//     </div>
//   );
// }

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('banana');

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    // console.log(`You clicked ${count} times`);
  });

  return (
    <div>
      <h2>HOOK</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br />
      <input
        type="text"
        value={fruit}
        onChange={evt => setFruit(evt.target.value)}
      />
      FRUIT: {fruit}
    </div>
  );
}

export default class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      student: {
        name: 'Unknow'
      },

      lstNumb: [1, 2, 3, 4]
    };

    // This binding is necessary to make `this` work in the callback
    this.changeText = this.changeText.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  changeText() {
    this.setState({
      student: {
        name: 'Terry'
      }
    });
  }

  changeTextWithoutBinding = () => {
    this.setState({
      student: {
        name: 'Assange'
      }
    });
  };

  changeTextWithParams(val, evt) {
    this.setState({
      student: {
        name: val
      }
    });
    console.log('changeTextWithParams: ', evt);
  }

  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <MediaList name="Mark" />
        <hr />

        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        {/* <Clock date={new Date()} /> */}
        <hr />

        <RegisterForm title="Register" student={this.state.student} />

        <div>
          <p>
            <button onClick={this.changeText}>Change Text</button>
          </p>
          <p>
            <button onClick={this.changeTextWithoutBinding}>
              Change Text Without Binding
            </button>
          </p>
          <p>
            <button onClick={e => this.changeTextWithParams('ABC', e)}>
              Change Text With Parameter
            </button>
          </p>
        </div>

        <RegisterInfo title="Register" student={this.state.student} />
        <hr />

        <LoginControll />
        <hr />
        <NumberList numbers={this.state.lstNumb} />

        <hr />
        <NameForm />

        <hr />
        <Books />

        <hr />
        <Example />
      </div>
    );
  }
}

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.title} Form</h2>
        <p>
          Name: <input type="text" value={this.props.student.name} readOnly />
        </p>
      </div>
    );
  }
}

class RegisterInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.title} Information</h2>
        <p>Name: {this.props.student.name}</p>
      </div>
    );
  }
}

class LoginControll extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: true
    };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = (
        <LogoutButton
          onClick={this.handleLogoutClick}
          changeValue={this.handleLogoutClick}
        />
      );
    } else {
      button = (
        <LoginButton
          onClick={this.handleLoginClick}
          changeValue={this.handleLoginClick}
        />
      );
    }
    return (
      <div>
        <Greetings isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}

function LoginScreen() {
  return <h1>Welcome To Website</h1>;
}

function LogoutScreen() {
  return <h1>See Ya Again</h1>;
}

function Greetings(props) {
  const isLoggedIn = props.isLoggedIn;
  return <div>{isLoggedIn ? <LoginScreen /> : <LogoutScreen />}</div>;
}

function LoginButton(props) {
  return <button onClick={props.changeValue}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.changeValue}>Logout</button>;
}

function MediaList(props) {
  return (
    <div className="shopping-list">
      <h1>Shopping List for {props.name}</h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
      </ul>
    </div>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map(numb => (
        <ListItem key={numb.toString()} value={numb} />
      ))}
    </ul>
  );
}

function ListItem(props) {
  return <li>{props.value}</li>;
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    alert(this.state.value + ' Submited !!!!');
    this.setState({ value: '' });
  }

  render() {
    return (
      <div>
        <h2>FORM </h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      newBook: {
        title: '',
        description: '123'
      }
    };
  }

  renderBooks = books =>
    books.map((book, index) => {
      // console.log(book);
      return (
        <div key={index}>
          <h1>{book.title}</h1>
          <p>{book.description}</p>
          <input
            value={book.title}
            onChange={e => this.handleEditBook(e.target.value, index)}
          />
        </div>
      );
    });

  handleEditBook = (value, editIndex) => {
    const { books } = this.state;
    const newBooks = books.map((book, index) => {
      if (index === editIndex) {
        book.title = value;
      }
      return book;
    });
    this.setState({ books: newBooks });
  };

  handleAdd = e => {
    const { newBook } = this.state;
    newBook.title = e.target.value;
    this.setState({ newBook: newBook });
  };

  handleSubmit = () => {
    const { newBook, books } = this.state;
    books.push({
      title: newBook.title,
      description: newBook.description
    });
    console.log(books);
    this.setState({ books });
  };

  onChangeText = description => {
    const { newBook } = this.state;
    newBook.description = description;
    this.setState({ newBook });
  };

  render() {
    const { books, newBook } = this.state;
    return (
      <div className="App">
        <h2>BOOKS</h2>
        <br />
        <span>Title:</span>
        <input value={newBook.title} onChange={this.handleAdd} />
        <Part book={newBook} onChangeText={this.onChangeText} />
        <button onClick={this.handleSubmit}>Add</button>
        <hr />
        SHOW:
        {newBook.description}
        {this.renderBooks(books)}
      </div>
    );
  }
}
