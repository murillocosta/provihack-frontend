/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ImgMain,
  ImgSobreNos,
  ImgRecycled,
  Container,
  Container2,
  Container3,
  Container4,
  CompaniesInfo,
  Button,
  BemVindo,
  TxtConsumo,
  H2Styled,
  DivImgs,
  ParLato,
} from './styles';
import womanbw1 from '../../img/womanb1.png';
import womanbw2 from '../../img/womanb2.png';
import womanbw3 from '../../img/womanb3.png';
import womancolor1 from '../../img/womancolor1.jpg';
import womancolor2 from '../../img/womancolor2.jpg';
import womancolor3 from '../../img/womancolor3.jpg';
import openarms from '../../img/openarms.png'
import { ModelCard } from '../../components/ModelCard';

export const Main = () => {
  return (
    <>
      <ImgMain id="inicio">
        <Container>
          <BemVindo>BEM-VINDX A ECO PARTILHAR!</BemVindo>
          <TxtConsumo>
            Democratizando o <br /> consumo sustentável
          </TxtConsumo>
          <Button href="/#sobrenos">Saiba mais sobre essa iniciativa</Button>
        </Container>
      </ImgMain>

      <Container2 id="texto2">
        <ImgRecycled />
        <div>
          <h1>Você sabe como sua roupa é feita?</h1>
          <ParLato>
            Na Eco Partilhar, nós somos <strong>100% transparentes quanto o processo de produção</strong> das peças que
            selecionamos. Isso porque a gente se preocupa com os impactos causados pela segunda maior causadora da
            poluição no mundo: <strong>a indústria da moda.</strong>
          </ParLato>

          <ParLato>
            Com a missão de ser uma <strong>alternativa viável</strong> à indústria do fast fashion,a Eco Partilhar
            nasce com o objetivo de <strong>fomentar o consumo consciente de moda.</strong>
          </ParLato>

          <ParLato>
            Queremos auxiliar as pessoas a tomarem decisões mais pensadas, e mostrar que{' '}
            <strong>é possível consumir de forma mais sustentável de maneira acessível</strong> e tão simples como
            comprar de grandes marcas.
          </ParLato>
        </div>
      </Container2>

      <Container>
        <section>
          <h3>
            Transforme seu estilo de forma sustentável
            <br />
            Aqui você pode consumir de forma consciente
          </h3>

          <div>
            <div>
              <i className="fa-solid fa-recycle fa-4x" />
              <p>
                Roupas confeccionadas <br /> de forma consciente e<br /> sustentável
              </p>
            </div>
            <div>
              <i className="fa-solid fa-users fa-4x" />
              <p>
                Moda democrática, que
                <br /> cabe em todos os bolsos
              </p>
            </div>
            <div>
              <i className="fa-solid fa-hand-holding-heart fa-4x" />
              <p>
                Peças cuidadosamente
                <br /> selecionadas que você vai
                <br /> guardar por um bom tempo
              </p>
            </div>
          </div>

          <aside>
            <DivImgs>
              <img src={openarms} />
              <h2>Vista a mudança que quer ver no mundo</h2>
            </DivImgs>
          </aside>
        </section>
      </Container>

      <Container3>
        <H2Styled>
          Confira as marcas que nós selecionamos para trazer a<br /> moda eco-friendly mais perto de você
        </H2Styled>

        <CompaniesInfo id="iniciativas">
          <h4>Studio eco</h4>

          <p>
            A Studio eco visa o desenvolvimento de modelos palpáveis de sustentabilidade para roupas femininas dentro do
            mercado de moda brasileira.
          </p>
        </CompaniesInfo>

        <DivImgs>
          <img src={womanbw1} />
          <img src={womanbw2} />
          <img src={womanbw3} />
        </DivImgs>

        <CompaniesInfo>
          <h4>Pano Social</h4>

          <p>
            A Pano Social é uma marca que utiliza peças usadas e faz o restauro e styling, dando uma vida completamente
            nova às peças. Com um tom jovem e energético, o projeto utiliza conceitos da moda circular para revolucionar
            o fashion na periferia.
          </p>
        </CompaniesInfo>

        <DivImgs>
          <img src={womancolor1} />
          <img src={womancolor2} />
          <img src={womancolor3} />
        </DivImgs>
      </Container3>
      <H2Styled>O que você vai encontrar por aqui?</H2Styled>
      <ModelCard />

      <ImgSobreNos id="sobrenos">
        <Container4>
          <div>
            <h2>Sobre a Eco Partilhar</h2>
            <p>Somos 100% transparentes quanto ao processo de produção das peças que selecionamos. Isso porque a gente se preocupa com os impactos causados pela segunda maior causadora de poluição socioambiental do mundo: <strong>a indústria da moda.</strong></p>

            <h2>Nossa Missão</h2>
            <p>Ser uma alternativa viável à moda ecológica e apoiar pequenas marcas sustentáveis com o objetivo de fomentar o consumo consciente de roupas. Queremos auxiliar as pessoas a tomarem decisões mais pensadas, e mostrar que é possível consumir de forma sustentável e acessível de forma tão simples quanto comprar de grandes marcas.</p>
          </div>
        </Container4>
      </ImgSobreNos>
    </>
  );
};
