import diyaimg from "../diya.png";
import lgvastra from "../Vastra.png";
import Mvastra from "../MVastra.png";
import rangoliimg from "../rangoli.png";
import vastra from "../ganeshVastra.png";
import "./Categorystyles.css";
import mala from "../mala.png";
import CategoryCard from "./CategoryCard";
function CatRender() {
  const tasks = [
    {
      title: "Diya",
      description: "Decorated Teracotta diya ",
      image: diyaimg,
    },
    {
      title: "Laxmi Ganesh vastra",
      description: "Designer Laxmi Ganesh vastra for idols and temple decor",
      image: lgvastra,
    },
    {
      title: "Matarani vastra",
      description: "Designer Matarani vastra for puja and Magarshish Puja",
      image: Mvastra,
    },
    {
      title: "Rangoli",
      description:
        "Acrylic rangoli for home and temple decor best replacement to traditional powder rangoli",
      image: rangoliimg,
    },
    {
      title: "Ganapati Khesh",
      description:
        "Ganapati vastra for idols, used for idol during Ganesh Chaturthi",
      image: vastra,
    },
    {
      title: "Mala for Idols/Frames",
      description: "Moti malas for temple and home",
      image: mala,
    },
  ]; // contains all the category names  /  a brief description of each category
  return (<div>
      <h2 className="cat">Category</h2>
      <div className="allCat">
        <h1>
          {tasks.map((element, index) => {
            return (
              <CategoryCard
                title={element.title}
                description={element.description}
                image={element.image}
              />
            );
          })}
        </h1>
      </div>
    </div>
  );
}
export default CatRender;
