import Button from "@mui/base/Button";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import "./TitleStyles.css";
function Title(props) {
  const percent = Math.round(((props.mrp - props.price) / props.mrp) * 100);
  return (
    <center className="aka">
      <h1>{props.title}</h1>
      <h2 className="line-through"></h2>
      <Grid
        container
        rowSpacing={1}
        columns={{ xs: 4, sm: 8, md: 18 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid md={1}></Grid>
        <Grid md={1}>
          <h2>
            <p className="percent">-{percent}%</p>
          </h2>
        </Grid>
        <Grid md={2}></Grid>
        <Grid md={1}>
          <h2>
            <p className="price">
              <strong>₹{props.price}</strong>
            </p>
          </h2>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columns={{ xs: 4, sm: 8, md: 18 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid md={1}></Grid>
        <Grid md={4}>
          <h4 className="MRPStylec">
            M.R.P. <span className="mrp-line">₹{props.mrp}</span>
          </h4>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columns={{ xs: 4, sm: 8, md: 18 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid md={1}></Grid>
        <Grid md={6}>
          <h4 className="MRPStyle loc">Inclusive of all taxes</h4>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columns={{ xs: 4, sm: 8, md: 18 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid md={1}></Grid>
        <Grid md={15} className="loc">
          Product Description:
        </Grid>
      </Grid>
      <h4>{props.description}</h4>
      <a className="buyit " href={props.buyLink}>
        <button className="buyit">
          {" "}
          <h2>
            Buy it on Amazon <i class="fa-brands aaa fa-amazon"></i>
          </h2>
        </button>
      </a>
    </center>
  );
}
export default Title;
