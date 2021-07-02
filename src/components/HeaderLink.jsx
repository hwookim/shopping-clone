import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.a`
  display: flex;
  align-items: center;
  margin: auto 5px;
  padding: 0 5px;
  color: white;

  &:hover {
    margin: auto 4px;
    border: 1px solid white;
    text-decoration: none;
    cursor: pointer;
  }

  &:visited {
    color: white;
  }
`;

export default function HeaderLink({ href, children, className }) {
  return (
    <Container href={href} className={className}>
      {children}
    </Container>
  );
}

HeaderLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
