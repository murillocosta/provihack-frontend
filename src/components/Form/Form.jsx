/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

class Form extends Component {
  state = {
    nome: '',
    email: '',
    senha: '',
  };

  handleSubmit = (e) => {
    e.preventDefault()

    let { name } = this.state;


    console.log('funcionou', name)
  }

  handleInputChange = (e) => {
    this.setState({
      nome: e.target.value,
    });
  };

  render() {
    const { nome } = this.state;
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>
            qual seu nome?
            <input onChange={this.handleInputChange} type={'text'} placeholder={'nome'}></input>
          </label>
          <label>
            email
            <input type={'email'} placeholder={'email'}></input>
          </label>
          <label>
            senha
            <input type={'password'} placeholder={'senha'}></input>
          </label>

          <button type={'submit'}></button>
        </form>
        <h3> {nome} </h3>
      </section>
    );
  }
}

export default Form;
