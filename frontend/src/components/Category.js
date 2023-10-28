import "./CatergoryStyles.css";
import CategoryRender from "./CategoryRender";
function Category() {
  return (
    <div className="solve">
      <center className="gradient">
        <h1 className="heading" id="category-section">
          {" "}
          Category
        </h1>
        <CategoryRender></CategoryRender>
      </center>
    </div>
  );
}
export default Category;
