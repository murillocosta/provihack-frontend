import React from 'react';
import { Section, PhotoContainer, InfoContainer, CompositionContainer, CycleSymbol } from './styles';
// const modelCardPhoto = require('./modelCardPhoto.jpg');

export const ModelCard = () => {
  return (
    <>
      <Section>
        <PhotoContainer>{/* <img src={modelCardPhoto} /> */}</PhotoContainer>
        <InfoContainer>
          <h1>
            calça de alfaiataria
            <br /> off-white jade
          </h1>
          <h3>carmelita</h3>
          <h2>R$ 159,90</h2>
          <p>Calça de alfaiataria confeccionada em tecido ecológico, bolsos faca, cintura alta e dublada.</p>
          <p>
            A Calça Jade passou nas mãos de uma Designer, Modelista e Costureira até chegar aqui, o processo durou em
            média 12 horas para criação da peça. Clássica e atemporal tem uma vida longa pela frente, compondo seu
            guarda-roupa.
          </p>
          <h4>Tamanhos</h4>
          <span>
            <span>36</span>
            <span>38</span>
            <span>40</span>
            <span>46</span>
            <span>48</span>
            <span>50</span>
          </span>
          <CompositionContainer>
            <CycleSymbol className="fa-solid fa-arrows-rotate"></CycleSymbol>
            <div>
              <label htmlFor="composicao">Composição</label>
              <ul name="composicao">
                <li>39% Poliéster reciclado</li>
                <li>36% Viscose reciclado</li>
                <li>25% Linho</li>
              </ul>
            </div>
          </CompositionContainer>
        </InfoContainer>
      </Section>
    </>
  );
};
