import HashMap from 'hashmap';
import categoriesArrays from './AllCategories';
import categories from './CategoriesOfCauses';

function createMap() {
  var map = new HashMap();

  for (let i = 0; i < categories.length; i++) {
    map.set(categories[i], categoriesArrays[i]);
  }

  return map;
}

export default createMap();
