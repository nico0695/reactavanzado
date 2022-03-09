import React, { useState, useEffect } from "react";

import { Category } from "../Category";

import { List, Item } from "./styles";

function useCategoriesData() {
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window
      .fetch("https://petgram-serverrr-nico0695.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading
        ? <Item key={'asd'}>
            <Category/>
          </Item>
        : categories.map((category, index) => (
            <Item key={category}>
              <Category {...category} />
            </Item>
          ))}
    </List>
  );

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
