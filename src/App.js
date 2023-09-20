import React, { Component } from 'react';
import './App.css';
import NewsList from './NewsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      result: '',
      showNewsModal: false, // Estado para controlar la visibilidad del modal de noticias
      news: [ // Simulación de noticias
        {
          title: 'Noticia 1',
          content: 'Esta es la primera noticia.',
        },
        {
          title: 'Noticia 2',
          content: 'Esta es la segunda noticia.',
        },
        {
          title: 'Noticia 3',
          content: 'Esta es la tercera noticia.',
        },
      ],
    };
  }

  handleInput = (value) => {
    this.setState({ input: this.state.input + value });
  }

  clearInput = () => {
    this.setState({ input: '', result: '' });
  }

  calculateResult = () => {
    try {
      const result = eval(this.state.input);
      this.setState({ result });
    } catch (error) {
      this.setState({ result: 'Error' });
    }
  }

  // Método para alternar la visibilidad del modal
  toggleNewsModal = () => {
    this.setState((prevState) => ({
      showNewsModal: !prevState.showNewsModal,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Calculadora Cuántica</h1>
        <div className="calculator">
          <div className="display">
            <input type="text" value={this.state.input} readOnly />
            <span className="result" data-testid="result">{this.state.result}</span>
          </div>
          <div className="buttons">
            <button onClick={() => this.handleInput('7')}>7</button>
            <button onClick={() => this.handleInput('8')}>8</button>
            <button onClick={() => this.handleInput('9')}>9</button>
            <button onClick={this.clearInput}>C</button>
                      <div className="row">
            <button onClick={() => this.handleInput('4')}>4</button>
            <button onClick={() => this.handleInput('5')}>5</button>
            <button onClick={() => this.handleInput('6')}>6</button>
            <button onClick={() => this.handleInput('+')}>+</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleInput('1')}>1</button>
            <button onClick={() => this.handleInput('2')}>2</button>
            <button onClick={() => this.handleInput('3')}>3</button>
            <button onClick={() => this.handleInput('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleInput('0')}>0</button>
            <button onClick={() => this.handleInput('*')}>*</button>
            <button onClick={() => this.handleInput('/')}>/</button>
            <button onClick={this.calculateResult}>=</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleInput('Math.sin(')}>sin(</button>
            <button onClick={() => this.handleInput('Math.cos(')}>cos(</button>
            <button onClick={() => this.handleInput('Math.tan(')}>tan(</button>
            <button onClick={() => this.handleInput(')')}>)</button>
          </div>
          </div>
        </div>
        <button onClick={this.toggleNewsModal}>Ver Noticias</button>

        {this.state.showNewsModal && (
          <div className="news-modal">
            <div className="news-modal-content">
              <h2>Últimas Noticias</h2>
              <NewsList news={this.state.news} />
              <button onClick={this.toggleNewsModal}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;