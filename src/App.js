import React, {useState} from "react";
// import { Dropdown } from "rsuite";
// import { Card, CardGroup } from "react-bootstrap";





import './style.css';
import data from "./TemplateData.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  
  const onChange= (event) => {
      setSearchTerm(event.target.value);
      }
  

  return (
    <>
      <div className="templateContainer">
        <div className="dropdown">

          <select  title="categories..." className="dropdown"  onChange={onChange}>
              <option value="categories">All</option>
              <option value="gaming" >gaming</option >
              <option value = "electronics" >Electronics</option>
              <option value ="mobile"  >Mobile</option>
              <option value = "audio accessories"  >Audio</option>
              <option value = "camera"  >Cameras</option>
          </select>


          {/* <Dropdown color="blue"  title="categories..." className="dropdown"  onChange={onChange}>
              <Dropdown.Item value="categories">All</Dropdown.Item>
              <Dropdown.Item value="gaming" >gaming</Dropdown.Item >
              <Dropdown.Item value = "electronics" >Electronics</Dropdown.Item>
              <Dropdown.Item value ="mobile"  >Mobile</Dropdown.Item>
              <Dropdown.Item value = "audio accessories"  >Audio</Dropdown.Item>
              <Dropdown.Item value = "camera"  >Cameras</Dropdown.Item>
          </Dropdown> */}
        </div>
        <div className="template_Container">
          {
            data
              // eslint-disable-next-line array-callback-return
              .filter((val) => {
                if(searchTerm === ""){
                  return val
                }else if(val.category.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                          <h3>{val.title}</h3>
                          <p className="price">${val.price}</p>


                      {/* <CardGroup>
                      <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={val.image} />
                          <Card.Body>
                            <Card.Title>{val.title}</Card.Title>
                            <Card.Text>
                              ${val.price}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </CardGroup> */}

                  </div>
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default App;
