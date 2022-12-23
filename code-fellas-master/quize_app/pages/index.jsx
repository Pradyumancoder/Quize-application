import Home2 from "../components/home";

function Home() {
  return (
    <>
      <div style={{backgroundColor:"purple", alignItems:"center", justifyContent:"center", textAlign:"center", display:"flex", padding:"30px", height:"700px",backgroundImage: `url("https://t3.ftcdn.net/jpg/03/23/12/42/360_F_323124237_SfGqpttZqU2mrMm61VPSWA2tKvc95l9O.jpg")`, backgroundSize:"cover"}}>
        <Home2 />
      </div>
    </>
  );
}

export default Home;
