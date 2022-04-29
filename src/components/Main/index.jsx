/* eslint-disable prettier/prettier */
import React from 'react';
import { ImgMain, ImgRecycled, Container, Container2, Button, BemVindo, TxtConsumo } from './styles';

export const Main = () => {
  return (
    <>
    <ImgMain>
    <Container>
        <BemVindo>BEM-VINDO AO ECO PARTILHAR!</BemVindo>
        <TxtConsumo>Promovendo o consumo <br /> sustentável</TxtConsumo>
        <Button>
          Saiba mais sobre essa iniciativa
        </Button>
      </Container>
    </ImgMain>

    <Container2>
    <ImgRecycled />
    <div>
      <h1>Você sabe como sua roupa é feita?</h1>
      <p>Circularidade e reciclagem têxtil | A cada dia, toneladas de &quot;lixo têxtil&quot; são jogadas em aterros sanitários. O  desperdício ainda está na moda: &quot;estima-se que as perdas nas várias fases da etapa de fabricação de camisetas estão na ordem de 50% para o algodão, 31% para a poliamida e 29% para o poliéster. Em todos os casos, a etapa com maior perda é a confecção (corte e costura) – responsável por 25%&quot;, diz o relatório. Nesse contexto, a economia circular se apresenta como uma das alternativas para acabar com o problema. O relatório define o conceito de moda circular como &quot;intimamente relacionado com um sistema de produção e consumo de ciclo fechado, que tem como base a reciclagem, reparação e reutilização dos materiais e insumos utilizados durante todo o processo produtivo por diversas vezes.&quot;</p>
    </div>
    </Container2>


    </>
  );
};
