import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./ProSidebar.css";
import { Link, Router } from "react-router-dom";
import { BiPlusCircle } from "react-icons/bi";

function ProSide() {
  return (
    <>
      <ProSidebar className="Calendar">
        <Menu iconShape="square" className="menu-bar">
          <div className="profile container">
            <div>
              <img src="/img/boys-haircuts-95.jpg" className="img-profile" />
            </div>
            <div>
              <span className="text-profile">god morning</span>
              <br />
              <span className="text-profile2">Netel</span>
            </div>
          </div>
          <div className="MenuItem-top  ">
            <div className="button-task ">
              <div>
                <BiPlusCircle className="PlusCircle" />
              </div>
              <div className="button-text">
                add a task
                <Link to="/about" />
              </div>
            </div>

            <div for="vehicle1" className="item-in-la">
              <MenuItem>
                <input
                  type="radio"
                  name="fav_language"
                  value="HTML"
                  className="item-in-la"
                />
                Wireframe for contact page
              </MenuItem>
            </div>

            <br />
            <div for="vehicle1" className="item-in-la">
              <MenuItem className="menu-iteem">
                {" "}
                <input
                  type="radio"
                  name="fav_language"
                  value="HTML"
                  className="item-in-la"
                />
                Book Rerurn Ticket
                    <div className="tody">tody</div>
              </MenuItem>
            </div>
            <br />
              <MenuItem>
                {" "}
                <input
                  type="radio"
                  name="fav_language"
                  value="caa"
                  className="item-in-la"
                />
                Buy Anniver sary Gift
                <div className="days">3 days ago</div>
              </MenuItem>
            <br />
              <MenuItem>
                {" "}
               
                  <input
                    type="radio"
                    name="fav_language"
                    value="HTML"
                    className="item-in-la"
                  />
               
                Pay Electricity Bill
              </MenuItem><br/>
              
          </div>

          <SubMenu className="SubMenu-Down" title="completed">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>
              Component 2 <Link to="/about" />
            </MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </>
  );
}

export default ProSide;
