import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImg from "../assets/profile.png";
import { darkThemeColor } from "../utils";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 3rem;
`;
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Avatar = styled.img`
  height: 5rem;
  border-radius: 6rem;
  margin-top: 20%;
`;
const Name = styled.h1`
  color: white;
  font: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;
const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;
const Link = styled.li`
  margin-left: 10%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;
const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a{
      color:white;
      text-decoration:none;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImg} />
        <Name>Naveen</Name>
        <Badge content="Pro Level" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <RiHomeLine />
            <h3>Dashboard</h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3>Attendace</h3>
          </Link>
          <Link>
            <RiHomeLine />
            <h3>Apply For Leave</h3>
          </Link>
        </Links>
        <ContactContainer>
          <span>Having trouble ? </span>
          <a href="#">Contact us</a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
};

export default Sidebar;