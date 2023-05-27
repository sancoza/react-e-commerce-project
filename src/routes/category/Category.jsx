import React from 'react';
import './Category.style.scss';
import { useContext, useState, useEffect, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { ProductCard } from '../../components/product-card/ProductCard';
import { useParams } from 'react-router-dom';
export const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment> 
     <h2 className='category-title'>{category.toUpperCase()}</h2>
         <div className="category-container">
  
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
    </Fragment>
 
  );
};
