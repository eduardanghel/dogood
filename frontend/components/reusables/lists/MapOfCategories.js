{/**
MapOfCategories is a Hashmap used to access all Events filtered by category 
It uses AllCategories as Key and CategoriesOfCauses as Value
*/}

import HashMap from 'hashmap';

import categoriesArrays from './AllCategories.js';
import categories from './CategoriesOfCauses.js';

function createMap() {
  var map = new HashMap();

  for (let i = 0; i < categories.length; i++) {
    map.set(categories[i], categoriesArrays[i]);
  }

  return map;
}

export default createMap();
