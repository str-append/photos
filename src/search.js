import React, {
  useEffect,
  useState
} from "react";
import './search.css';
import loadervideo from "./assets/videos/loader.mp4"
import imageofaise from "./assets/images/img1.jpeg"
function Search() {
  const [q, setq] = useState("");
  const [datapp, setdatapp] = useState([]);
  var [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [loader, setloader] = useState(false);
  const [isfirst, setfirst] = useState(true);
  function getInput(event) {
    // console.log(event.target.value);
    setq(event.target.value);
  }

  // var page = 1;
  // var totalPage = 2;
  async function fetc(query) {
    setloader(true);
    const a = process.env.REACT_APP_API_BASE_URL + `?query="${query}"&order_by="relevant"&per_page=19&page=${page}&fit=clip&w=350&h=300&client_id=` + process.env.REACT_APP_CLIENT_ID
    await fetch(
        // `https://api.unsplash.com/search/photos/?query="${query}"&order_by="relevant"&per_page=19&page=${page}&fit=clip&w=350&h=300&client_id=aZ5WeB5jpT64nUQVDTkUHnUgghIWigceyvrsC5rlnDU`
        a
      ).then((response) => response.json())
      .then((data) => {
        setTotalPage(data.total_pages)
        setdatapp(data.results);
        setloader(false);
        // console.log(page);
        // console.log(totalPage);
        // console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(()=>{
    if(page===1)
    {
      setfirst(false);
      fetc(q);
    }
    
  },[page])
  // useEffect(()=>{
  //   showPhoto()
  // },[q]);

  async function showPhoto() {
    setPage(1);
    setTotalPage(1);
    // console.log("run showphoto")
    if(page===1)
    {
      setfirst(false);
      // console.log("show photo ",q);
      fetc(q);
    }
    // if (page < totalPage) {
    //   setPage(page + 1); // used it here since setstate queues the value and not change immediately
    // }
    // console.log(page);
  }

  function loadMore() {
    if (page < totalPage)
    {
      // console.log(page);
      setPage(++page); 
      //not page++
      // page=page+1;
      // console.log(page);
      // console.log(totalPage);
      fetc(q);
      // console.log(page);
      // console.log(totalPage);
      // console.log("clicked in if");
      // console.log(datapp);
    }
    console.log("clicked");
  }

  function prevPage() {
    if (page > 1) {
      // console.log(page);
      setPage(--page);
      // page--;
      // console.log("clicked in if");
      // console.log(page);
      // console.log(totalPage);
      fetc(q);
      // console.log(datapp);
    }
    // console.log("clicked");
  }
  

  function randomimage(){
    setq("random")
    // console.log("random image ",q);
    // var but = document.getElementById("showphoto")
    // but.click();
    
    if(q==="random")
    {
      // console.log("radnom if ",q)
      
      showPhoto()
    }
    
  }
  function moonimage(){
    setq("moon")
    // var but = document.getElementById("showphoto")
    // but.click();
    if(q==="moon")
    {
      showPhoto();
    }
    
  }
  function treesimage(){
    // var inp = document.getElementsByName("s");
    // inp.value = "trees";
    
    
    setq("trees")
    // var but = document.getElementById("showphoto")
    // but.click();
    if(q==="trees")
    {
      showPhoto();
    }
    
  }
  const homej = ()=>{
    setfirst(true);
  }

  // const internetStatus =()=>{
  //   var status = window.navigator.onLine;
  //   console.log(status);
  //   if(status===false)
  //   {
  //     setconnected(false);
  //   }
  //   return status
  // }
  // useEffect(()=>{
  //     internetStatus()
  //     if(isConnected ===false)
  //     return <div>No internet</div>
  // },[]);
  return ( 
    <>
  <div className="main" >
    <div className="navbar" >
      <nav>
        <ul>
          <li style = {{float: "left"}} onClick={()=>{homej()}}> <b > Phosh </b> </li >
          <li>< button onClick={()=>{randomimage()}}> Random Image </button> </li >
          <li><button onClick={()=>{moonimage()}}> Moon </button> </li >
          <li> <button onClick={()=>{treesimage()}}> Trees </button> </li >
        </ul> 
      </nav > 
    </div> 
    <div className = "searchBar" >
      <label htmlFor = "header-search" >
      <span className = "visually-hidden" > Search Images </span> &nbsp; </label > 
      <input type = "text" id = "header-search" placeholder = "Search Images" name = "s" onChange = {getInput} /> 
      &nbsp; 
      <button onClick = {()=>{showPhoto()}} className = "btn" id="showphoto" > Search </button> 
    </div> 
    {isfirst?<img src={imageofaise} width="100%" style={{maxHeight:"350px", objectFit:"cover"}}  alt="home"></img>:
    <div>
      {loader ? <video loop autoPlay style = {{width: "100px",borderRadius: "13px"}}> <source src = {loadervideo}/> </video> :
        <div className = "container" >
        {
          /*  <div className="photoViewer">
                    
                    <img src="/images2/img1.jpg" alt=" " width="200px"></img>
                    <div className="card_overlay">
                      <div className="card__header">
                    <p>Description any lorem ipsum</p>
                    </div>
                    </div>
                  </div>
                  <div className="photoViewer">
                    <img src="/images2/img2.jpg" alt=" " width="200px"></img>
                    <p>Description any lorem ipsum</p>
                  </div>
                  <div className="photoViewer" style={{ "disply": "inline-block" }}>
                    <img src="/images2/img3.jpg" alt=" " width="200px" className="card_image"></img>
                    <p>Description any lorem ipsum</p>
                  </div>
                  <div className="photoViewer" style={{ "disply": "inline-block" }}>
                    <img src="/images2/img4.jpg" alt=" " width="200px" className="card_image"></img>
                    <p>Description any lorem ipsum</p>
                  </div>
                  <div className="photoViewer" style={{ "disply": "inline-block" }}>
                    <img src="/images2/img5.jpg" alt=" " width="200px" className="card_image"></img>
                    <p>Description any lorem ipsum</p>
                  </div>
                  <div className="photoViewer" style={{ "disply": "inline-block" }}>
                    <img src="/images2/img6.jpg" alt=" " width="200px" className="card_image"></img>
                    <p>Description any lorem ipsum</p>
                  </div>
                  <div className="photoViewer" style={{ "disply": "inline-block" }}>
                    <img src="/images2/img7.jpg" alt=" " width="200px" className="card_image"></img>
                    <p>Description any lorem ipsum</p>
                  </div> */
        } {
          /* <div className="photoViewer" style={{ "disply": "inline-block" }}>
                    <img src="/images2/img8.jpg" alt=" " width="200px"></img>
                    <p>Description any lorem ipsum</p>
                  </div>
                  <div className="photoViewer" style={{ "disply": "inline-block" }}>
                    <img src="/images2/img9.jpg" alt=" " width="200px"></img>
                    <p>Description any lorem ipsum</p>
                  </div>
                  <div className="photoViewer" style={{ "disply": "inline-block" }}>
                    <img src="/images2/img10.jpg" alt=" " width="200px"></img>
                    <p>Description any lorem ipsum</p>
                  </div>
                  <div className="photoViewer" style={{ "disply": "inline-block" }}>
                    <img src="/images2/img11.jpg" alt=" " width="200px"></img>
                    <p>Description any lorem ipsum</p>
                  </div>
                  <div className="photoViewer" style={{ "disply": "inline-block" }}>
                    <img src="/images2/img12.jpg" alt=" " width="200px"></img>
                    <p>Description any lorem ipsum</p>
                  </div>
                  <div className="photoViewer" style={{ "disply": "inline-block" }}>
                    <img src="/images2/img13.jpg" alt=" " width="200px"></img>
                    <p>Description any lorem ipsum</p>
                  </div>
                  <div className="photoViewer" style={{ "disply": "inline-block" }}>
                    <img src="/images2/img100.jpg" alt=" " width="200px" height="300px"></img>
                    <p>Description any lorem ipsum</p>
                  </div>
                  <div className="photoViewer" style={{ "disply": "inline-block" }}>
                    <img src="/images2/img1.jpg" alt=" " width="200px"></img>
                    <p>Description any lorem ipsum</p>
                  </div>
                  <div className="photoViewer" style={{ "disply": "inline-block" }}>
                    <img src="/images2/img2.jpg" alt=" " width="200px"></img>
                    <p>Description any lorem ipsum</p>
                  </div>
                  <div className="photoViewer" style={{ "disply": "inline-block" }}>
                    <img src="/images2/img1.jpg" alt=" " width="200px"></img>
                    <p>Description any lorem ipsum</p> 
                  </div>
                  */
        }


        {
          datapp.map((pics) => (
            <div className="photoViewer">
              <a href={pics.links.download} target="_blank" rel="noopener noreferrer">
                <img src={pics.urls.small} alt=" " width="350px" height="300px" ></img>
              </a>
              <div className="card_overlay">
                <div className="card__header">
                  <a href={pics.user.portfolio_url} target="_blank" rel="noreferrer" ><img className="uploader_image" src={pics.user.profile_image.medium} alt="uploader"></img></a>
                  <p>{pics.alt_description}</p>
                </div>
              </div>
            </div>
          ))
        }
        </div>
      } 
      
      {page!==0 ?
        <div className = "pages" >
          <p>{page}/{totalPage}</p>
          <div className = "previousPage" >
            <button onClick = {prevPage} className = "btn" > Previous Page </button> 
          </div> 
          <div className = "nextPage" >
            <button onClick = {loadMore} className = "btn" > Next Page </button> 
          </div> 
        </div>
        : null
      } 
      </div>}
      <div className="footer">
      <footer>
        
        Made with ♥
      </footer>
    </div>
    </div >
    
  </>
  );
}
export default Search 