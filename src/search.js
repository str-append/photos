import React, { useState } from "react";
import './search.css';
function Search() {
  const [q, setq] = useState(null);
  const [datapp, setdatapp] = useState([]);
  var [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(2);

  function getInput(event) {
    console.log(event.target.value);
    setq(event.target.value);
  }

  // var page = 1;
  // var totalPage = 2;
  async function fetc(query) {
    await fetch(
      `https://api.unsplash.com/search/photos/?query="${query}"&order_by="relevant"&per_page=15&page=${page}&fit=clip&w=350&h=300&client_id=aZ5WeB5jpT64nUQVDTkUHnUgghIWigceyvrsC5rlnDU`
    )
      .then((response) => response.json())
      .then((data) => {
        setTotalPage(data.total_pages)
        // totalPage = data.total_pages
        setdatapp(data.results);
        console.log(page);
        console.log(totalPage);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function showPhoto() {
    fetc(q);
    if (page < totalPage) {
    setPage(page + 1);   // used it here since setstate queues the value and not change immediately
    }
    console.log(page);
  }

  function loadMore() {
    if (page < totalPage) {
      console.log(page);
      setPage(page + 1);
      // page=page+1;
      console.log(page);
      console.log(totalPage);
      fetc(q);
      console.log(page);
      console.log(totalPage);
      console.log("clicked in if");
      console.log(datapp);
    }
    console.log("clicked");
  }
  function prevPage() {
    if (page >= 2) {
      console.log(page);
      setPage(page - 1);
      // page--;
      console.log("clicked in if");
      console.log(page);
      console.log(totalPage);
      
      fetc(q);
      console.log(datapp);
    }
    console.log("clicked");
  }


  return (
    <div className="main">
      <div className="searchBar">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search Images</span> &nbsp;
        </label>
        <input type="text" id="header-search" placeholder="Search Images" name="s" onChange={getInput} />
        &nbsp;
        <button onClick={showPhoto} className="btn">Search</button>
      </div>
      <div className="container">

        {/*  <div className="photoViewer">
          
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
        </div> */}
        {/* <div className="photoViewer" style={{ "disply": "inline-block" }}>
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
        */}


        {
          datapp.map((pics) => (
            <div className="photoViewer">
              <img src={pics.urls.small} alt=" " width="350px" height="300px" ></img>
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
      <div className="pages">
        <div className="nextPage">
          <button onClick={loadMore} className="btn">Next Page</button>
        </div>
        <div className="previousPage">
          <button onClick={prevPage} className="btn">Previous Page</button>
        </div>
      </div>
    </div>
  );
}
export default Search;
