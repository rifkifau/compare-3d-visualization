/*global define,location */
/*jslint sloppy:true */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
  //Default configuration settings for the application. This is where you'll define things like a bing maps key,
  //default web map, default app color theme and more. These values can be overwritten by template configuration settings and url parameters.
  "appid": "",
 // "webmap": "18f5afcaed8d47d0a36526b850f14f5e",
 //Urutan --> Landsat, Aster, Sentinel, Hillshade
  //VE-1 "webmaps": ["bf7a09cdc1ff4faeb3bace83727b7dff", "a78044189b9e4231826d83f5fa2921b7", "dcfa6d077e2c4e94a63adcce10036c07", "44913849cf4648259fb0aa42dc9419c4"],
  //VE-5 "webmaps": ["70e1340c22534dc8a7b53907f652e2fe", "2ae86ecfc7214b1cabfb8e7a8fcb1e47", "533e488338b74c1c8c3f0250d0899273", "4efe86a01a4e459a93014f5c24e8254c"],
  "webmaps": ["18dacc84d9cf41cf9f256031929dc023", "166a49b5109248f4a2770975fac5ec22", "774a3ec2edeb4e13be3da7f289001d2d", "e788d1b3d0b84c0db1ca0fbf701f32e2"],
  
//DATA WEBMAPS ID
// ++++++++++++++++++++LANDSAT8+++++++++++++++++++++
//##Red-Cyan
//==VE1 > bf7a09cdc1ff4faeb3bace83727b7dff
//==VE3 > 18dacc84d9cf41cf9f256031929dc023
//==VE5 > 70e1340c22534dc8a7b53907f652e2fe
//##Green-Magenta
//==VE1 > 2cb129346f384d25b4571ca9eaa24870
//==VE3 > ed7ca8b76129474292028fbd644acad2
//==VE5 > f39366af2e5a41848539c1302494930d
//##Amber-Blue
//==VE1 > fee282e9d56d46e08c005b6a00a7aba0
//==VE3 > d23cd7ce8423491c8cf60713d59a29a3
//==VE5 > 0884f58fbefa456fa54b1320475bf072

//+++++++++++++++++++ASTER+++++++++++++++++++++++++
//##Red-Cyan
//==VE1 > a78044189b9e4231826d83f5fa2921b7
//==VE3 > 166a49b5109248f4a2770975fac5ec22
//==VE5 > 2ae86ecfc7214b1cabfb8e7a8fcb1e47
//##Green-Magenta
//==VE1 > 0a1741d15b54493897d72fe7ab675166
//==VE3 > f1135b01c9134ff58506e145556ff325
//==VE5 > 1d3569691b524f99a7c5f608e4f9b418
//##Amber-Blue
//==VE1 > 79431c8110c3432f93b8df406fb4efb6
//==VE3 > d525cdd977eb457cb85c5d4f86b64ac5
//==VE5 > 00cd553cee254cceb6a02ab68008f893

//++++++++++++++++++++SENTINEL2A+++++++++++++++++++
//##Red-Cyan
//==VE1 > dcfa6d077e2c4e94a63adcce10036c07
//==VE3 > 774a3ec2edeb4e13be3da7f289001d2d
//==VE5 > 533e488338b74c1c8c3f0250d0899273
//##Green-Magenta
//==VE1 > ab11c779f45749b4b27c4845f2543ccb
//==VE3 > fdec82d11912469d99bf33985fb38b50
//==VE5 > 1970c2fb79924955bae935c37d52d455
//##Amber-Blue
//==VE1 > fe6c806f525847ae8683f87c6dcb7da0
//==VE3 > 86cb2cc9cb974d02984945716b79a966
//==VE5 > 72b61ae1406e4e0a8f25ad36d4306428

//+++++++++++++++++HILLSHADE PALSAR++++++++++++++++
//==VE1 > 44913849cf4648259fb0aa42dc9419c4
//==VE3 > e788d1b3d0b84c0db1ca0fbf701f32e2
//==VE5 > 4efe86a01a4e459a93014f5c24e8254c
  
  "oauthappid": null, //"AFTKRmv16wj14N3z",
  //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
  //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
  "proxyurl": "",
  "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
  //Defaults to arcgis.com. Set this value to your portal or organization host name.
  "sharinghost": location.protocol + "//" + "www.arcgis.com",
  "title": "Komparasi Visualisasi 3 Dimensi",
  "description": "Perbandingan visualisasi 3D antara citra anaglyph (tiga macam skala) dengan tampilan hillshade.",
  "showTitleAndDescription": true,
  "openPanelOnLoad": true,
  "home": true,
  // This is an option added so that developers working with the
  // hosted version of the application can apply custom styles
  // not used in the download version.
  "customstyle": null,
  "theme_color": "#575757",
  "theme_bg_color": "#d3d3d3",
  "bodyBg": "#fff",
  "bodyColor": "#333",
  //when true will auto sync to the first map
  "sync": true,
  "auto_sync": true,
  "search": false,
  "searchExtent": true,
  //If your applcation needs to edit feature layer fields set this value to true. When false the map will
  //be dreated with layers that are not set to editable which allows the FeatureLayer to load features optimally.
  "editable": false,
  "helperServices": {
    "geometry": {
      "url": null
    },
    "printTask": {
      "url": null
    },
    "elevationSync": {
      "url": null
    },
    "geocode": [{
      "url": null
    }]
  }
});
