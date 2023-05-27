import React from 'react';
import { Link } from 'react-router-dom';
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './CategoryPreview.style';
import { ProductCard } from '../product-card/ProductCard';

export const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title} className="title">{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
