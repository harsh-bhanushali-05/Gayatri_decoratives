import Axios from "axios";
import { useForm } from "react-hook-form";
import "../components/AddProdStyles.css";
function AddProd() {
  const { register, handleSubmit } = useForm({});

  function onSubmit(data,event) {
    event.preventDefault();
    console.log(data);
    // Axios.post("/",{method:"POST",body:JSON.stringify(data)});
    const jsonData = JSON.stringify(data);

    Axios.post("/API/Products/", jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    window.location.reload();
  }

  return (
    <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Title (required)</label>
        <input type="text" {...register("title")} />
      </div>
      <div className="form-group">
        <label>Description (required)</label>
        <input type="text" {...register("description")} />
      </div>
      <div className="form-group">
        <label>Image 1 (required)</label>
        <input type="text" {...register("img1")} />
      </div>
      <div className="form-group">
        <label>Image 2 (required)</label>
        <input type="text" {...register("img2")} />
      </div>
      <div className="form-group">
        <label>Image 3</label>
        <input type="text" {...register("img3")} />
      </div>
      <div className="form-group">
        <label>Image 4</label>
        <input type="text" {...register("img4")} />
      </div>
      <div className="form-group">
        <label>Image 5</label>
        <input type="text" {...register("img5")} />
      </div>
      <div className="form-group">
        <label>MRP (required)</label>
        <input type="number" {...register("mpr")} />
      </div>
      <div className="form-group">
        <label>Price (required)</label>
        <input type="number" {...register("price")} />
      </div>
      <div className="form-group">
        <label>Amazon Buy Link (required)</label>
        <input type="text" {...register("buyLink")} />
      </div>
      <div className="form-group">
        <label>Quantity (required)</label>
        <input type="number" {...register("quantity")} />
      </div>
      <div className="form-group">
        <label>Category</label>
        <select {...register("category")}>
          <option value="Diya">Diya</option>
          <option value="Laxmi Ganesh vastra">Laxmi Ganesh vastra</option>
          <option value="Matarani vastra">Matarani vastra</option>
          <option value="Rangoli">Rangoli</option>
          <option value="Ganapati Khesh">Ganapati Khesh</option>
          <option value="Mala for Idols/Frames">Mala for Idols/Frames</option>
        </select>
      </div>

      <input type="submit" value="Submit" />
    </form>
  );
}
export default AddProd;
