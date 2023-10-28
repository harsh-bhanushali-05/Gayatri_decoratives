import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import CategoryCard from "./CategoryCard";
import diyaimg from "./diya.png";
import lgvastra from "./Vastra.png";
import Mvastra from "./MVastra.png";
import rangoliimg from "./rangoli.png";
import vastra from "./ganeshVastra.png";
import mala from "./mala.png";
function CategoryRender() {
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
  ];
  return ( <div>
  <h1></h1>
    <Grid 
      container
      spacing={{ xs: 1, md: 2 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {tasks.map((element, index) => {
        // return <h1> {element.title}</h1>
        return (
          <Grid xs={2} sm={4} md={4} key={index}>
            <div className="cards-container ">
              <CategoryCard
                title={element.title}
                description={element.description}
                image={element.image}
              />
            </div>
          </Grid>
        );
      })}
    </Grid>
    </div>
  );
  //   return <CategoryCard title={title} description={title}></CategoryCard>;
}
export default CategoryRender;
