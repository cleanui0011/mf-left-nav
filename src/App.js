import React from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AutoGraph, Cake } from "@mui/icons-material";
import {
  FormGroup,
  FormControlLabel,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  ButtonGroup,
  Button,
} from "@mui/material";

import { useStore } from 'Shell/store'

import "./App.scss";

export default function (props) {
  const { menuList, itemClickHandler } = props
  const { menuData, setMenuSelected } = useStore()

  const handleMenuClick = (item) => {
    console.log('arun3 left menu', item)
    const event = new CustomEvent('menuSelect', { detail: item, bubbles: true, isTrusted: true})
    window.dispatchEvent(event);
  }

  console.log('arun3 left menu list form parent', menuList )
  
  return (
    <div className="left-nav-menu">
       <div>
          <svg xmlns="http://www.w3.org/2000/svg" id="R_logo" data-name="R logo" width="45" height="37" viewBox="0 0 32 26.254">
            <path id="Path_22" data-name="Path 22" d="M20.743,1.884c2.492,0,4.5,10.9,4.5,24.335h3.607C28.853,11.736,25.224,0,20.743,0c-2.557,0-4.831,3.519-6.317,9.035C12.94,3.519,10.667,0,8.109,0,3.628,0,0,11.736,0,26.219H3.607c0-13.439,2.011-24.335,4.5-24.335s4.5,10.056,4.5,22.473h3.607c0-12.417,2.033-22.473,4.525-22.473" fill="#efc23b"/>
            <path id="Path_23" data-name="Path 23" d="M136.572,111.413h.177c.141,0,.283,0,.283-.177,0-.141-.106-.141-.212-.141h-.212v.318Zm-.141-.46h.389c.248,0,.354.106.354.283s-.106.248-.283.283l.283.46H137l-.283-.424h-.177v.424h-.177v-1.025Zm.354,1.273a.743.743,0,1,0-.707-.743.7.7,0,0,0,.707.743m0-1.627a.9.9,0,0,1,.884.884.875.875,0,0,1-.884.884.9.9,0,0,1-.884-.884.854.854,0,0,1,.884-.884" transform="translate(-105.668 -86.114)" fill="#efc23b"/>
          </svg> <span className="brandName">McDonald’s</span>
        </div>

        <div> 
          <h2>Props Menu List </h2>
        </div>

        <ul className="menu-items">
          { menuList?.map((item, index) => (
            <li key={index} className="menu-item" onClick={() => handleMenuClick(item)}>{item}</li>
          ))}
        </ul>
      
        <div> 
          <h2> Global Store Menu </h2>
        </div>

        <ul className="menu-items">
          {
            menuData?.menuList?.map((item, index) => (
              <li key={index} className="menu-item" onClick={() => setMenuSelected(item)}>{item}</li>
            ))
          }
        </ul>

        <div> 
          <h2> Local Store Menu </h2>
        </div>

        <ul className="menu-items">
          <li key='parentId' className="menu-item" onClick={() => itemClickHandler('Help')}> Help </li>
        </ul>
    </div>
  );
};