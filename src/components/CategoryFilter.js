import { useState } from "react";

function CategoryFilter( { categories, onFilter } ) {
  // console.log(categories);

  const [selectedButton, setSelectedButton] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category, index) => {
    if (category === selectedCategory) {
      return;
    }
    setSelectedButton(index);
    setSelectedCategory(category);
    onFilter(category);
  };

  // const filteredCategory = categories.filter(
  //   category => {
  //     return (category.phase === phaseState || phaseState === 0)
  //   }
  // );

  return (
    <div className="categories">
      <h5>Category filters</h5>
        <button key={categories[0]} onClick={() => handleCategoryClick(categories[0], 0)} className={selectedButton === 0 ? "selected" : ""}>{categories[0]}</button>
				<button key={categories[1]} onClick={() => handleCategoryClick(categories[1], 1)} className={selectedButton === 1 ? "selected" : ""}>{categories[1]}</button>
				<button key={categories[2]} onClick={() => handleCategoryClick(categories[2], 2)} className={selectedButton === 2 ? "selected" : ""}>{categories[2]}</button>
				<button key={categories[3]} onClick={() => handleCategoryClick(categories[3], 3)} className={selectedButton === 3 ? "selected" : ""}>{categories[3]}</button>
				<button key={categories[4]} onClick={() => handleCategoryClick(categories[4], 4)} className={selectedButton === 4 ? "selected" : ""}>{categories[4]}</button>
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
