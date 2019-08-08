import React from "react";
import styled from "styled-components";

const RawHTMLContainer = styled.div``;

const RawHTML = ({ html }) => (
  <RawHTMLContainer dangerouslySetInnerHTML={{ __html: html }} />
);

export default RawHTML;
