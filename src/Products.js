import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import './Products.css';
import productList from './utils/productList';
import availabilityList from './utils/availabilityList';
import iron from './image/iron.png';
import water_purifier from './image/puri.png';
import cook_top from './image/cook_top.png';
import hair_appliance from './image/hair_appliances.png';
import hand_blender from './image/hand_blender.png';
import home_theater from './image/home_theater.png';
import JMG from './image/JMG.png';
import microwave from './image/microwave.png';
const Products = () => {
  const [message, setMessage] = useState(null);
  const [product, setProduct] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const handleSubmit = event => {
    event.preventDefault();
    const result = availabilityList.filter(products =>
      products.includes(product)
    );
    if (result.length === 0) {
      setMessage(
        `No result found for ${product} Call +91-XXXXXXXXX for more information!`
      );
    } else {
      setMessage(`Yes! We have ${product} Visit us soon!`);
    }
  };
  return (
    <>
      <div class='row'>
        <div class='col-sm-12' id='product-heading-box'>
          <h2>OUR PRODUCTS</h2>
        </div>
      </div>
      <div class='row' id='product-intro-box'>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
      </div>
      <div class='row' id='search-box'>
        <div class='col-sm-4'></div>
        <div class='col-sm-4'>
          <form onSubmit={handleSubmit}>
            <Autosuggest
              inputProps={{
                placeholder: 'Search Product List',
                autoComplete: 'off',
                name: 'product',
                id: 'product',
                value: product,
                onChange: (event, { newValue }) => {
                  setProduct(newValue);
                }
              }}
              suggestions={suggestions}
              onSuggestionsFetchRequested={({ value }) => {
                if (!value) {
                  setSuggestions([]);
                  return;
                } else {
                  const result = productList.filter(products =>
                    products.includes(value)
                  );
                  setSuggestions(result.map(product => product));
                }
              }}
              onSuggestionsClearRequested={() => {
                setSuggestions([]);
              }}
              onSuggestionSelected={(event, { suggestion, method }) => {
                if (method === 'enter') {
                  event.preventDefault();
                }
                setProduct(suggestion);
                const availability = availabilityList.filter(products =>
                  products.includes(product)
                );
                if (availability.length !== 0) {
                  setMessage(`Yes! We have ${suggestion} Visit us soon :)`);
                } else {
                  setMessage(
                    `No result found for ${suggestion}! Call +91-8755789922 for more information!`
                  );
                }
              }}
              getSuggestionValue={suggestions => suggestions}
              renderSuggestion={suggestions => <span>{suggestions}</span>}
            />
          </form>
        </div>
        <div class='col-sm-4'>{message}</div>
      </div>
      <hr></hr>
      <div class='row'>
        <div class='col-sm-12' id='gallery-heading-box'>
          <h4>PRODUCT RANGE</h4>
        </div>
      </div>
      <div class='row' id='product-gallery'>
        <div class='col-sm-3' id='photo-div'>
          <img src={iron} class='img-thumbnail' alt='Iron' width='90%' />
        </div>
        <div class='col-sm-3' id='photo-div'>
          <img
            src={water_purifier}
            class='img-thumbnail'
            alt='Water purifier'
            width='90%'
          />
        </div>
        <div class='col-sm-3' id='photo-div'>
          <img
            src={hair_appliance}
            class='img-thumbnail'
            alt='Hair appliance'
            width='90%'
          />
        </div>
        <div class='col-sm-3' id='photo-div'>
          <img
            src={home_theater}
            class='img-thumbnail'
            alt='Home theater'
            width='90%'
          />
        </div>
      </div>
      <div class='row' id='product-gallery'>
        <div class='col-sm-3' id='photo-div'>
          <img
            src={hand_blender}
            class='img-thumbnail'
            alt='Hand Blender'
            width='90%'
          />
        </div>
        <div class='col-sm-3' id='photo-div'>
          <img
            src={microwave}
            class='img-thumbnail'
            alt='Microwave'
            width='90%'
          />
        </div>
        <div class='col-sm-3' id='photo-div'>
          <img src={JMG} class='img-thumbnail' alt='JMG' width='90%' />
        </div>
        <div class='col-sm-3' id='photo-div'>
          <img
            src={cook_top}
            class='img-thumbnail'
            alt='Cook Top'
            width='90%'
          />
        </div>
      </div>
    </>
  );
};

export default Products;
