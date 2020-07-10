import React from "react";
import { ProductGeneral } from "../../interfaces";
import styled from "styled-components";
import CustomButton from "../ui-kits/custom-button/custom-button.ui";
import Router from "next/router";

type Props = {
  data: ProductGeneral;
  key: number;
};

const CardItem = ({ data, key }: Props) => {
  const { imgUrl, name, price, productId } = data;
  const nameStrimmed = name.substring(0, 20).toUpperCase();

  return (
    <CollectionItemContainer>
      <BackgroundImage
        className="image"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      />
      <CollectionFooterContainer>
        <NameContainer>{nameStrimmed}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted>Add to cart</AddButton>
      <br />
    </CollectionItemContainer>
  );
};

export default CardItem;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const ViewButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.div`
  width: 80%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 20%;
  text-align: right;
`;
