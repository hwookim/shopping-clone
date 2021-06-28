import React from "react";
import styled from "styled-components";

import LINK_LISTS from "../constants/link";

const Container = styled.nav`
  display: flex;
  width: 100%;
  padding: 40px 0;
  justify-content: center;
  background-color: #232f3e;
`;

const LinkList = styled.div`
  margin: 0 50px;
`;

const LinkListTitle = styled.div`
  margin: 14px 0;
  font-size: 1.2em;
  font-weight: bold;
`;

const LinkListItem = styled.a`
  display: block;
  margin-bottom: 10px;
  color: white;

  &:visited {
    color: white;
  }
`;

export default function FooterNav() {
  return (
    <Container>
      {LINK_LISTS.map(({ title, items }) => (
        <LinkList key={title}>
          <LinkListTitle>{title}</LinkListTitle>
          <ul>
            {items.map((item) => (
              <li key={item}>
                <LinkListItem href="/">{item}</LinkListItem>
              </li>
            ))}
          </ul>
        </LinkList>
      ))}
    </Container>
  );
}
