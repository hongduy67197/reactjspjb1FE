import axios from "axios";
import React from "react";
import Header from "../../../Components/Header/header";
import "./khohangchinhsua.css";
import { useState, useEffect } from "react";
import "./product.css";

function Chinhsua(props) {
  const [count, setcount] = useState(1);
  const [data, setdata] = useState([]);
  const [tieudiem, settieudiem] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3150/admin/categories")
      .then(function (response) {
        setdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  var modelarr = [];
  function chooseCategory(id) {
    document.querySelector(".chonloai1").style.background = "pink";
    document.querySelector(".chonloai1").style.color = "black";
    document.querySelector(".chonloai1").style.border = "2px solid black";
    setcount(1);
    document.querySelector(".boxoption2").style.display = "none";
    document.querySelector(".chonloai2").innerHTML = "Dòng sản phẩm";
    axios
      .get(`http://localhost:3150/admin/categories/${id}`)
      .then(function (response) {
        document.querySelector(
          ".chonloai1"
        ).innerHTML = `${response.data.categoriesName}`;
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get(`http://localhost:3150/admin/productcode/list`)
      .then(function (response) {
        response.data.map(function (value, index) {
          if (value.idCategories[0] == id) {
            modelarr.push(value);
            props.setmodel(modelarr);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    props.changesign();
  }
  function onoption() {
    document.querySelector(".chonloai1").style.background = "rgb(255, 52, 85)";
    document.querySelector(".chonloai1").style.color = "white";
    document.querySelector(".chonloai1").style.borderRadius = "10px";
    document.querySelector(".boxoption3").style.display = "none";
    setcount(count + 1);
    if (count % 2 !== 0) {
      document.querySelector(".boxoption2").style.display = "block";
    }
    if (count % 2 == 0) {
      document.querySelector(".boxoption2").style.display = "none";
      document.querySelector(".chonloai1").style.background = "pink";
      document.querySelector(".chonloai1").style.color = "black";
    }
  }
  function onmodel() {
    document.querySelector(".boxoption3").style.display = "block";
    document.querySelector(".chonloai2").style.background = "rgb(255, 52, 85)";
    document.querySelector(".chonloai2").style.color = "white";
    document.querySelector(".chonloai2").style.borderRadius = "10px";
    setcount(count + 1);
    if (count % 2 !== 0) {
      document.querySelector(".boxoption3").style.display = "block";
    }
    if (count % 2 == 0) {
      document.querySelector(".boxoption3").style.display = "none";
      document.querySelector(".chonloai2").style.background = "pink";
      document.querySelector(".chonloai2").style.color = "black";
    }
  }
  function takemodel(id) {
    settieudiem(id);
    console.log(id);
    setcount(1);
    axios
      .get(`http://localhost:3150/admin/productcode/${id}`)
      .then(function (response) {
        document.querySelector(
          ".chonloai2"
        ).innerHTML = `${response.data.productName}`;
        document.querySelector(
          ".productType"
        ).value = `${response.data.productType}`;
        document.querySelector(
          ".performanceProduct"
        ).value = `${response.data.performanceProduct}`;
        document.querySelector(
          ".cameraProduct"
        ).value = `${response.data.cameraProduct}`;
        document.querySelector(
          ".specialFeatures"
        ).value = `${response.data.specialFeatures}`;
        document.querySelector(".design").value = `${response.data.design}`;
        document.querySelector(".panel").value = `${response.data.panel}`;
      })
      .catch(function (error) {
        console.log(error);
      });
    document.querySelector(".boxoption3").style.display = "none";
    document.querySelector(".chonloai2").style.background = "pink";
    document.querySelector(".chonloai2").style.color = "black";
    document.querySelector(".chonloai2").style.border = "2px solid black";
  }
  function clearupdate() {
    document.querySelector(".chonloai1").innerHTML = "Tên hãng";
    document.querySelector(".chonloai2").innerHTML = `Dòng sản phẩm`;
    document.querySelector(".productType").value = ``;
    document.querySelector(".performanceProduct").value = ``;
    document.querySelector(".cameraProduct").value = ``;
    document.querySelector(".specialFeatures").value = ``;
    document.querySelector(".design").value = ``;
    document.querySelector(".panel").value = ``;
  }
  function update() {
    console.log(tieudiem);
    var productType = document.querySelector(".productType").value;
    var performanceProduct = document.querySelector(
      ".performanceProduct"
    ).value;
    var cameraProduct = document.querySelector(".cameraProduct").value;
    var productType = document.querySelector(".specialFeatures").value;
    var design = document.querySelector(".design").value;
    var panel = document.querySelector(".panel").value;
    axios
      .put(`http://localhost:3150/admin/productcode/${tieudiem}`, {
        productType: productType,
        performanceProduct: performanceProduct,
        cameraProduct: cameraProduct,
        specialFeatures: productType,
        design: design,
        panel: panel,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    clearupdate();
  }
  function onoptionlist() {
    document.querySelector(".boxoption4list").style.display = "none";
    document.querySelector(".chonloai1list").style.background =
      "rgb(255, 52, 85)";
    document.querySelector(".chonloai1list").style.color = "white";
    document.querySelector(".chonloai1list").style.borderRadius = "10px";
    document.querySelector(".boxoption3list").style.display = "none";
    setcount(count + 1);
    if (count % 2 !== 0) {
      document.querySelector(".boxoption2list").style.display = "block";
    }
    if (count % 2 == 0) {
      document.querySelector(".boxoption2list").style.display = "none";
      document.querySelector(".chonloai1list").style.background = "pink";
      document.querySelector(".chonloai1list").style.color = "black";
    }
  }
  function chooseCategorylist(id) {
    document.querySelector(".chonloai1list").style.background = "pink";
    document.querySelector(".chonloai1list").style.color = "black";
    document.querySelector(".chonloai1list").style.border = "2px solid black";
    setcount(1);
    document.querySelector(".boxoption2list").style.display = "none";
    document.querySelector(".chonloai2list").innerHTML = "Dòng sản phẩm";
    axios
      .get(`http://localhost:3150/admin/categories/${id}`)
      .then(function (response) {
        document.querySelector(
          ".chonloai1list"
        ).innerHTML = `${response.data.categoriesName}`;
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get(`http://localhost:3150/admin/productcode/list`)
      .then(function (response) {
        response.data.map(function (value, index) {
          if (value.idCategories[0] == id) {
            modelarr.push(value);
            props.setmodel(modelarr);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    props.changesign();
  }
  function onmodellist() {
    document.querySelector(".boxoption3list").style.display = "block";
    document.querySelector(".boxoption4list").style.display = "none";
    document.querySelector(".chonloai2list").style.background =
      "rgb(255, 52, 85)";
    document.querySelector(".chonloai2list").style.color = "white";
    document.querySelector(".chonloai2list").style.borderRadius = "10px";
    setcount(count + 1);
    if (count % 2 !== 0) {
      document.querySelector(".boxoption3list").style.display = "block";
    }
    if (count % 2 == 0) {
      document.querySelector(".boxoption3list").style.display = "none";
      document.querySelector(".chonloai2list").style.background = "pink";
      document.querySelector(".chonloai2list").style.color = "black";
    }
  }
  var listarr = [];
  function takemodellist(id) {
    setcount(1);
    axios
      .get(`http://localhost:3150/admin/productcode/${id}`)
      .then(function (response) {
        document.querySelector(
          ".chonloai2list"
        ).innerHTML = `${response.data.productName}`;
      })
      .catch(function (error) {
        console.log(error);
      });
    document.querySelector(".boxoption3list").style.display = "none";
    document.querySelector(".chonloai2list").style.background = "pink";
    document.querySelector(".chonloai2list").style.color = "black";
    document.querySelector(".chonloai2list").style.border = "2px solid black";
    axios
      .get("http://localhost:3150/admin/product/list")
      .then(function (response) {
        response.data.map(function (value, index) {
          if (value.idProductCode._id == id) {
            listarr.push(value);
            props.setlistdt(listarr);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    props.changesign();
  }
  function picklistdt() {
    setcount(1);
    document.querySelector(".boxoption4list").style.display = "block";
    document.querySelector(".chonloai3list").style.background =
      "rgb(255, 52, 85)";
    document.querySelector(".chonloai3list").style.color = "white";
    document.querySelector(".chonloai3list").style.borderRadius = "10px";
    setcount(count + 1);
    if (count % 2 !== 0) {
      document.querySelector(".boxoption4list").style.display = "block";
    }
    if (count % 2 == 0) {
      document.querySelector(".boxoption4list").style.display = "none";
      document.querySelector(".chonloai3list").style.background = "pink";
      document.querySelector(".chonloai3list").style.color = "black";
    }
  }
  function takedtoption() {}
  return (
    <div>
      <Header></Header>
      <div className="chinhsua">
        <div className="action">
          <button className="suadong">Dòng sản phẩm</button>
          <button className="suadt">Sản phẩm</button>
        </div>
        <div className="updatecode">
          <div className="pickupdate">
            Chọn hãng:
            <div className="boxoption">
              <p className="chonloai1" onClick={onoption}>
                Tên hãng
              </p>
            </div>
            <div className="boxoption2">
              {data.map(function (value, index) {
                return (
                  <p
                    onClick={() => chooseCategory(value._id)}
                    className="optionupdate"
                    key={index}
                  >
                    {value.categoriesName}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="pickupdate">
            Dòng sản phẩm:
            <div className="boxoption">
              <p className="chonloai2" onClick={onmodel}>
                Dòng sản phẩm
              </p>
            </div>
            <div className="boxoption3">
              {props.model.map(function (value, index) {
                return (
                  <p
                    onClick={() => takemodel(value._id)}
                    className="optionupdate"
                    key={index}
                  >
                    {value.productName}
                  </p>
                );
              })}
            </div>
          </div>
          <span>
            Loại sản phẩm:
            <input
              className="productType"
              name="productType"
              placeholder="Loại sản phẩm"
              type="text"
            />
          </span>
          <span>
            Hiệu năng:
            <input
              placeholder="Hiệu năng"
              className="performanceProduct"
              name="performanceProduct"
              type="text"
            />
          </span>
          <span>
            Cụm Camera:
            <input
              className="cameraProduct"
              name="cameraProduct"
              placeholder="Cụm Camera"
              type="text"
            />
          </span>
          <span>
            Tính năng đặc biệt:
            <input
              className="specialFeatures"
              name="specialFeatures"
              placeholder="Tính năng đặc biệt"
              type="text"
            />
          </span>
          <span>
            Thiết kế:
            <input
              className="design"
              placeholder="Thiết kế"
              type="text"
              name="design"
            />
          </span>
          <span>
            Màn hình:
            <input
              className="panel"
              name="panel"
              placeholder="Màn hình"
              type="text"
            />
          </span>
          <div className="addbut">
            <button onClick={update}>Update</button>
            <button onClick={clearupdate}>Clear</button>
          </div>
        </div>
        <div className="updatelist">
          <div className="pickupdatelist">
            Chọn hãng:
            <div className="boxoptionlist">
              <p className="chonloai1list" onClick={onoptionlist}>
                Tên hãng
              </p>
            </div>
            <div className="boxoption2list">
              {data.map(function (value, index) {
                return (
                  <p
                    onClick={() => chooseCategorylist(value._id)}
                    className="optionupdatelist"
                    key={index}
                  >
                    {value.categoriesName}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="pickupdatelist">
            Dòng sản phẩm:
            <div className="boxoptionlist">
              <p className="chonloai2list" onClick={onmodellist}>
                Dòng sản phẩm
              </p>
            </div>
            <div className="boxoption3list">
              {props.model.map(function (value, index) {
                return (
                  <p
                    onClick={() => takemodellist(value._id)}
                    className="optionupdatelist"
                    key={index}
                  >
                    {value.productName}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="pickupdatelist">
            Chọn cấu hình:
            <div className="boxoptionlist">
              <p className="chonloai3list" onClick={picklistdt}>
                Cấu hình
              </p>
            </div>
            <div className="boxoption4list">
              {props.listdt.map(function (value, index) {
                return (
                  <p
                    onClick={() => takedtoption(value._id)}
                    className="optionupdatelist"
                    key={index}
                  >
                    {value.idProductCode.productName +
                      " " +
                      value.ram +
                      " " +
                      value.rom +
                      " " +
                      value.color}
                  </p>
                );
              })}
            </div>
          </div>
          <span>
            Loại sản phẩm:
            <input
              className="productType"
              name="productType"
              placeholder="Loại sản phẩm"
              type="text"
            />
          </span>
          <span>
            Hiệu năng:
            <input
              placeholder="Hiệu năng"
              className="performanceProduct"
              name="performanceProduct"
              type="text"
            />
          </span>
          <span>
            Cụm Camera:
            <input
              className="cameraProduct"
              name="cameraProduct"
              placeholder="Cụm Camera"
              type="text"
            />
          </span>
          <span>
            Tính năng đặc biệt:
            <input
              className="specialFeatures"
              name="specialFeatures"
              placeholder="Tính năng đặc biệt"
              type="text"
            />
          </span>
          <span>
            Thiết kế:
            <input
              className="design"
              placeholder="Thiết kế"
              type="text"
              name="design"
            />
          </span>
          <span>
            Màn hình:
            <input
              className="panel"
              name="panel"
              placeholder="Màn hình"
              type="text"
            />
          </span>
          <div className="addbut">
            <button>Update</button>
            <button>Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chinhsua;
