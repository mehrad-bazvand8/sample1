import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./ProSidebar.css";
import { Link, Router } from "react-router-dom";
import { BiPlusCircle } from "react-icons/bi";
import Todolist from "./TodoList";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ProSide() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }





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
              <div className="button-text" onClick={openModal}>
                add a task
                <Link to="/" />
                <Modal
                  isOpen={modalIsOpen}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  
                  <form>
                    <Todolist/>
                  </form>
                </Modal>
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
            </MenuItem>
            <br />
          </div>

          <SubMenu className="SubMenu-Down" title="completed">
          </SubMenu>
        </Menu>
      </ProSidebar>
     
    </>
  );
}

export default ProSide;
