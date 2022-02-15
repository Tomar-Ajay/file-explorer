import React from 'react';
// import {Link} from "react-router-dom";
import styles from "./Right.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { FiSun, FiSettings } from 'react-icons/fi';
import { GrAddCircle } from 'react-icons/gr';
import { ReactComponent as Logo } from '../../svg/logo.svg';
import LockModal from '../Modal/LockModal';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';


export default function Right(){
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div>
                <form className={styles.formno} styles={{ left: "30px" }}>
                    <input className={styles.inputno} type="search" placeholder="Search..."/>
                </form>
                </div>
                <div className={styles.mode}>
                    <div className={styles.space1}>
                        <Dropdown style={{ top: "50px"}}>
                            <Dropdown.Toggle style={{ color: "blue", fontSize: "20px", lineHeight: "28px", textAlign: "center", backgroundColor: "white" }} id="dropdownc">
                            <FiSun />
                            &nbsp;
                            Light Mode
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Light Mode</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Dark Mode</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Custom Mode</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div  className={styles.space1}>
                        <Dropdown style={{ top: "50px"}}>
                            <Dropdown.Toggle className="btn-light" data-toggle="dropdown" style={{ color: "black", fontSize: "20px", lineHeight: "28px", textAlign: "center", backgroundColor: "white" }} id="dropdownc">
                            <GrAddCircle />
                            &nbsp;
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">New File</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">New Folder</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div  className={styles.space}>
                        <Dropdown style={{ top: "50px"}}>
                            <Dropdown.Toggle className="btn-light" style={{ color: "black", fontSize: "20px", lineHeight: "28px", textAlign: "center", backgroundColor: "white" }} id="dropdownc">
                            <FiSettings />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Light Mode</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Dark Mode</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Custom Mode</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                {/* <input type="search" size="4" className={styles.inputBox} placeholder="<FiSearch />Search files and folders" ></input> */}
            </div>
            <div style={{ paddingLeft: "50px", top: "50px", position: "relative"}}>
                <Breadcrumb >
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <hr/>
        </div>
)}