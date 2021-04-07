import Button from "@atlaskit/button";
import React from "react";
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";
export default function Todo({ item, onCheckBtnClick }) {
  return (
    <>
      {
        <ButtonStyled
          isComplete={item.isComplete}
          shouldFitContainer
          iconAfter={
            !item.isComplete && (
            <span className="check-icon" onClick={()=>onCheckBtnClick(item.id)}>
              <CheckIcon primaryColor="#20e3b2" />
            </span>
            )
          }
        >
          {item.name}
        </ButtonStyled>
      }
    </>
  );
}

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;

  &,
  &:hover {
    ${(p) =>
      p.isComplete &&
      css`
        text-decoration: line-through;
      `}
    &:hover {
      .check-icon {
        display: inline-block;
      }
    }
  }

  .check-icon {
    display: none;
    &:hover {
      background-color: #e2e2e2e2;
      border-radius: 3px;
    }
  }
`;
