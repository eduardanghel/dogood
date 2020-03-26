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
