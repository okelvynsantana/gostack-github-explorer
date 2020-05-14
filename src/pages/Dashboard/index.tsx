import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImage from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios do Github </Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="#teste">
          <img
            src="https://avatars3.githubusercontent.com/u/51325709?s=460&u=9044667aba33eeb52271953478e2ea0a7f74a0d8&v=4"
            alt="Kelvyn Santana"
          />
          <div>
            <strong>kelvynsantana/github-explorer</strong>
            <p>Exercício criado durante o bootcamp RocketSeat</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#teste">
          <img
            src="https://avatars3.githubusercontent.com/u/51325709?s=460&u=9044667aba33eeb52271953478e2ea0a7f74a0d8&v=4"
            alt="Kelvyn Santana"
          />
          <div>
            <strong>kelvynsantana/github-explorer</strong>
            <p>Exercício criado durante o bootcamp RocketSeat</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#teste">
          <img
            src="https://avatars3.githubusercontent.com/u/51325709?s=460&u=9044667aba33eeb52271953478e2ea0a7f74a0d8&v=4"
            alt="Kelvyn Santana"
          />
          <div>
            <strong>kelvynsantana/github-explorer</strong>
            <p>Exercício criado durante o bootcamp RocketSeat</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
