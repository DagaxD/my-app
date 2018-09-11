/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .card {
        margin: 24px;
        padding: 16px;
        color: #000;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
      }

      .delete-button{
        color: #f64f4f;
        padding: 2px;
        font-size: 15px;
        background-color:#00000000;
        margin:5px;
        border:0px;
        
    }
    .edit-button{
      color: #223df6;
      padding: 2px;
      font-size: 15px;
      background-color:#00000000;
      margin:5px;
      border:0px;
    }
    .weaterbutton{
      padding: 2px;
      font-size: 20px;
      background-color:white;
      border-radius: 11px 11px 11px 11px;
      margin:5px;
      border:0px;
      opacity:0.3;
    }
    .weather{
      
      padding: 20px;
      font-size: 20px;
      background-color:#bedeff;
      margin:5px;
      width:200px;
      border-radius: 11px 11px 11px 11px;
      box-shadow: 7px 6px 20px -3px rgba(0,0,0,0.67);
    }

    .helpchosen{
     position: absolute;
    top: 40%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%); 
    padding:20px;
    }

    .helpchosenicon{
      position: absolute;
     top: 20%;
     left: 50%;
     margin-right: -50%;
     transform: translate(-50%, -50%); 
     font-size:60px;
     }

    .paperitem:hover{
      cursor:pointer;
    }
    .paperlistbox{
      border:1px dotted black;
    }

    .weather:hover{
      background-color:#F0F0FF;
      transform: scale(1.1);
      background:back pulse;}

    .delete-button:hover{
      cursor:pointer;
    }
    .edit-button:hover{
      cursor:pointer;
    }
  .frame-go{
    margin:10px;
    color:blue;
    font-size:20px;
  }
  .frame-dont-go{
    margin:10px;
    color:red;
    font-size:20px;
  }

  paper-spinner.multi {
    --paper-spinner-layer-1-color: var(--paper-purple-500);
    --paper-spinner-layer-2-color: var(--paper-cyan-500);
    --paper-spinner-layer-3-color: var(--paper-blue-grey-500);
    --paper-spinner-layer-4-color: var(--paper-amber-500);
  }

  .inputbox{
    margin:30px 0px 10px 0px; 
    width:400px;
    border:0px;
    border-bottom: 1px solid black;
  }
  .inputbox:active{
    box-shadow: 0px 6px 5px -3px rgba(30,54,189,1);
  }
  
  .shoppinglist{
    background-color:#f5f13a80;
    padding:10px;
    width:400px;
    box-shadow: 7px 6px 20px -3px rgba(0,0,0,0.67);
    
  }

  .tooltip {
    position: relative;
    display: inline-block;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 400px;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    position: absolute;
    z-index: 1;
    bottom: 80%;
    left: 50%;
    margin-left: -60px;

    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}

.flip-box {
  background-color: transparent;
  width: 1155px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
  border-radius: 11px 11px 11px 11px;
  box-shadow: 7px 6px 20px -3px rgba(0,0,0,0.67);
  margin-top:20px;
}

.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 11px 11px 11px 11px;
      box-shadow: 7px 6px 20px -3px rgba(0,0,0,0.67);
}

.flip-box:hover .flip-box-inner {
  transform: rotateX(180deg);
}

.flip-box-front, .flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 11px 11px 11px 11px;
      box-shadow: 7px 6px 20px -3px rgba(0,0,0,0.67);
}

.flip-box-front {
  background-color: #1786e7;
  color: black;
  font-size:20px;
}

.flip-box-back {
  background: dodgerblue;
  color: white;
  transform: rotateX(180deg);
  font-size:20px;
}


    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
