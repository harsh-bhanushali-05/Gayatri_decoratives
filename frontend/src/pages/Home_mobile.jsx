import mobile from "../mobile2.png";
import CatRender from "../components/Mobile/CatRender";
function Home_mobile(){
    return <div> 
    <div
          className="background"
          style={{ backgroundImage: `url(${mobile})` }}
        ></div>
        <div className="cover"></div>
        <CatRender />
    </div>
}
export default Home_mobile;