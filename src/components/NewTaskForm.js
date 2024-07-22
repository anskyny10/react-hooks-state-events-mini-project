import { useState } from "react";

function NewTaskForm( { categories, onTaskFormSubmit } ) {

  const [formData, setFormData] = useState({
    text: "",
    category: categories[0]
  });

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({ text: "", category: categories[0] });
  }
  
  function handleInputChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [key]: value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text"
        name="text"
        value={formData.text} 
        onChange={handleInputChange}
        />
      </label>
      <label>
        Category
        <select 
        name="category"
        value={formData.category}
        onChange={handleInputChange}
        >
          <option>{categories[1]}</option>
          <option>{categories[2]}</option>
          <option>{categories[3]}</option>
          <option>{categories[4]}</option>
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
