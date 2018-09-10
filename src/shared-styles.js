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
      font-size:20px;
      border-bottom:1px solid black;
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
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
