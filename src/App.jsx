import { useState } from "react";
import Title from "./Title";
import menu from "./data"
import Menu from "./Menu";
import Categories from "./Categories";

// const tempCategories =  menu.map((item)=> item.category)
// const tempSet = new Set(tempCategories)
// const tempItems = [`All`,...tempSet]
// console.log(tempItems);

const allCategories = [`All`,...new Set(menu.map((item)=> item.category))]

const App = () => {

 const [menuItems, setMenuItems] = useState(menu)
 const [categories, setCategories] = useState(allCategories)
  
 const filterItems = (category)=>{
if(category === "All")
{
  setMenuItems(menu)
  return;
}

  const newItems = menu.filter((item)=> item.category === category )
 setMenuItems(newItems)
}
  return <main>
    <section className="menu">
      <Title text="CHRIS BISTRO MENU" />
      <Categories categories={categories}  filterItems={filterItems} /> 
      <Menu items={menuItems} />
    </section>
    </main>;
};
export default App;
