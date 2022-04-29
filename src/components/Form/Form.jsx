/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Button, ButtonCenter, StyledForm, StyledData, StyledRadio, Line } from './styles'

class Form extends Component {

  state = {
    nome: '',
    email: '',
    senha: '',
};

  handleSubmit = (e) => {
    e.preventDefault()

    const { nome, email, password } = this.state;

    nome;
    email;
    password;

    console.log('funcionou', nome, email, password)
  }



  handleNameChange = (e) => {
    this.setState({
      nome: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };


  render() {

    return (
      <section>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledData>
            qual seu nome?
          </StyledData>
          <input name='inputName' onChange={this.handleNameChange} type='text'></input>
          <StyledData>
            email
          </StyledData>
          <input name='inputEmail' onChange={this.handleEmailChange} type='email'></input>
          <StyledData>
            senha
          </StyledData>
          <input name='inputPassword' onChange={this.handlePasswordChange} type='password'></input>
          <StyledData>
            me interesso por roupas
          </StyledData>

          <StyledRadio>
          <input type='radio' id='femininas' name='inputRadio'  onChange={this.handleRadioChange} value='femininas' />
          <label htmlFor='femininas'>femininas</label>
          <input type='radio' id='masculinas' name='inputRadio' onChange={this.handleRadioChange} value='masculinas' />
          <label htmlFor='masclinas'>masculinas</label>
          </StyledRadio>

          <Line />

          <input type='checkbox' id='aceite' name=''
          <ButtonCenter>
            <Button type='submit'>criar conta</Button>
          </ButtonCenter>

        </StyledForm>
      </section>
    );
  }
}



export default Form;
