import React from "react";

import { PhotoCard } from "../PhotoCard";

import { List, Item } from './styles'

import { photos } from '../../../api/db.json'

export const ListOfPhotoCard = () => {
  return (
    <List>
      {photos.map((photo, index) => (
        <Item key={photo}>
          <PhotoCard  {...photo}/>
        </Item>
      ))}
    </List>
  );
};
