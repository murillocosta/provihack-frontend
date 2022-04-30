/* eslint-disable prettier/prettier */
import React from 'react';
import { ImgMain, ImgRecycled, Container, Container2, Button, BemVindo, TxtConsumo } from './styles';

export const Main = () => {
  return (
    <>
    <ImgMain>
    <Container id={'inicio'}>
        <BemVindo>BEM-VINDX A ECO PARTILHAR!</BemVindo>
        <TxtConsumo>Democratizando o <br /> consumo sustentável</TxtConsumo>
        <Button>
          Saiba mais sobre essa iniciativa
        </Button>
      </Container>
    </ImgMain>

    <Container2 id={'texto2'}>
    <ImgRecycled />
    <div>
      <h1>Você sabe como sua roupa é feita?</h1>
      <p>Na Eco Partilhar, nós somos <strong>100% transparentes quanto o processo de produção</strong> das peças que selecionamos. Isso porque a gente se preocupa com os impactos causados pela segunda maior causadora da poluição no mundo: <strong>a indústria da moda.</strong></p>

      <p>Com a missão de ser uma <strong>alternativa viável</strong> à indústria do fast fashion,a Eco Partilhar nasce com o objetivo de <strong>fomentar o consumo consciente de moda.</strong></p>

      <p>Queremos auxiliar as pessoas a tomarem decisões mais pensadas, e mostrar que <strong>é possível consumir de forma mais sustentável de maneira acessível</strong> e tão simples como comprar de grandes marcas.</p>
    </div>
    </Container2>
    <Container className='transforme'>
      <h3>Transforme seu estilo de forma sustentável!<br/>
        Aqui você pode consumir de forma consciente</h3>
        <div><div><i></i><p>Roupas confeccionadas de forma consciente e sustentável</p></div>
        <div><i></i><p>Moda democrática, que cabe em todos os bolsos</p></div>
        <div><i></i><p>Peças cuidadosamente selecionadas que você vai guardar por um bom tempo</p></div></div>
    </Container>
    </>
  );
};
