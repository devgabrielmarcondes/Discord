import React from "react";

import { Container, Role, User, Avatar, NameDesc } from "./styles";

interface UserProps {
  nickname: string;
  description: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, description, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <NameDesc>
        <strong>{nickname}</strong>
        <p>{description}</p>
      </NameDesc>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 5</Role>
      <UserRow nickname="xi_red" description="eae menó" />
      <UserRow nickname="Icorno" description="Eu sou corno cara" isBot />
      <UserRow nickname="JaaJmal" description="eae menozada" />
      <UserRow nickname="Leticiasass" description="kapakapa" />
      <UserRow nickname="Vini+Cius" description="opa hehe" />

      <Role>Offline - 12</Role>
      <UserRow nickname="Dark0Master11" description="sou um botkkk" isBot />
      <UserRow nickname="anxoety" description="sugar daddy" />
      <UserRow nickname="Fulanin" description="kapakapa" />
      <UserRow nickname="Fulanin" description="kapakapa" />
      <UserRow nickname="Fulanin" description="kapakapa" />
      <UserRow nickname="Fulanin" description="kapakapa" />
      <UserRow nickname="Fulanin" description="kapakapa" />
      <UserRow nickname="Fulanin" description="kapakapa" />
      <UserRow nickname="Fulanin" description="kapakapa" />
      <UserRow nickname="Fulanin" description="kapakapa" />
      <UserRow nickname="Fulanin" description="kapakapa" />
      <UserRow nickname="Fulanin" description="kapakapa" />
    </Container>
  );
};

export default UserList;
