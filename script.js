TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "thumbnailUrl": "media/video_EFBDFA6F_C892_6A47_41D7_8D5683208248_t.jpg",
  "label": "Floor Plan",
  "video": {
   "height": 1680,
   "mp4Url": "media/video_EFBDFA6F_C892_6A47_41D7_8D5683208248.mp4",
   "class": "VideoResource",
   "width": 2986
  },
  "width": 2986,
  "id": "video_EFBDFA6F_C892_6A47_41D7_8D5683208248",
  "loop": false,
  "height": 1680,
  "class": "Video",
  "scaleMode": "fit_inside"
 },
 {
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "class": "VideoPlayer",
  "buttonPause": {
   "borderSize": 0,
   "mode": "toggle",
   "width": 57.35,
   "horizontalAlign": "center",
   "height": 53.3,
   "borderRadius": 0,
   "paddingRight": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "minHeight": 0,
   "shadow": false,
   "id": "IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1167"
   },
   "verticalAlign": "middle",
   "transparencyActive": false,
   "paddingTop": 0,
   "paddingLeft": 0
  },
  "buttonRestart": {
   "borderSize": 0,
   "mode": "push",
   "width": 68,
   "horizontalAlign": "center",
   "height": 66,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "borderRadius": 0,
   "paddingRight": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "minHeight": 0,
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1195"
   },
   "verticalAlign": "middle",
   "transparencyActive": false,
   "paddingTop": 0,
   "paddingLeft": 0
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_DEA7ED43_C78E_EFBF_41DD_65232F4B8DB4",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DEA7ED43_C78E_EFBF_41DD_65232F4B8DB4_t.jpg",
  "mapLocations": [
   {
    "x": 1720.34,
    "y": 1195.59,
    "class": "PanoramaMapLocation",
    "angle": 127.59,
    "map": {
     "class": "Map",
     "fieldOfViewOverlayInsideOpacity": 0.21,
     "id": "map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314",
     "fieldOfViewOverlayInsideColor": "#0066CC",
     "initialZoomFactor": 1,
     "height": 1603,
     "fieldOfViewOverlayOutsideColor": "#006600",
     "minimumZoomFactor": 0.5,
     "width": 3281,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 781,
        "class": "ImageResourceLevel",
        "width": 1600,
        "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314.png"
       },
       {
        "height": 390,
        "class": "ImageResourceLevel",
        "width": 800,
        "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_lq.png",
        "grayscale": true
       }
      ]
     },
     "thumbnailUrl": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_t.png",
     "label": "Sweet Dreams Rendering transparent1",
     "maximumZoomFactor": 1.2,
     "overlays": [
      {
       "id": "overlay_D8C5EBB6_C7B2_EAD9_41D3_6EE30E55BED2",
       "map": {
        "offsetY": 0,
        "x": 1675.4,
        "width": 90,
        "y": 1150.62,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_0_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 1675.34,
        "y": 1150.59,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_0.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_E782B980_C7B1_96B8_41A3_F93523806B0E",
       "map": {
        "offsetY": 0,
        "x": 1403.21,
        "width": 90,
        "y": 822.06,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_1_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 1403.09,
        "y": 822.01,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_1.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_D8FBA93B_C7B1_B7CF_41B9_E38DEBAD2A44",
       "map": {
        "offsetY": 0,
        "x": 874.87,
        "width": 90,
        "y": 1050.65,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_2_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 874.75,
        "y": 1050.46,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_2.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_D8190E8C_C7B6_6AC9_41D1_EC8D6D4EC007",
       "map": {
        "offsetY": 0,
        "x": 906.16,
        "width": 90,
        "y": 368.25,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_3_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 906.07,
        "y": 368.13,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_3.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_E752395E_C7B6_9649_41E4_A44FE91538AA",
       "map": {
        "offsetY": 0,
        "x": 1212.1,
        "width": 90,
        "y": 593.01,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_4_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 1211.96,
        "y": 592.91,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_4.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_D841D510_C7B6_BFD9_41E7_D53189FDD75C",
       "map": {
        "offsetY": 0,
        "x": 1212.56,
        "width": 90,
        "y": 264.71,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_5_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 1212.44,
        "y": 264.65,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_5.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_E7832914_C7B7_97D8_41BD_ADF71C1560A6",
       "map": {
        "offsetY": 0,
        "x": 1574.88,
        "width": 90,
        "y": 362.32,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_6_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 1574.74,
        "y": 362.14,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_6.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_D8CF165C_C7B7_FA49_41E3_D49F99FB7230",
       "map": {
        "offsetY": 0,
        "x": 1434.86,
        "width": 90,
        "y": 128.43,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_7_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 9)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 1434.74,
        "y": 128.33,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_7.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_E7FB7353_C7B7_9A5F_41D3_7E785DC139CC",
       "map": {
        "offsetY": 0,
        "x": 2221.07,
        "width": 90,
        "y": 306.4,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_8_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 11)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 2220.87,
        "y": 306.29,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_8.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_E706F8BD_C7B6_B6C8_41D1_6925197C00EE",
       "map": {
        "offsetY": 0,
        "x": 2192.88,
        "width": 90,
        "y": 1025.75,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_9_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 12)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 2192.82,
        "y": 1025.61,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_9.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "id": "overlay_D826FC1A_C7B6_EDC9_41C4_DCFC5E9C4670",
       "map": {
        "offsetY": 0,
        "x": 2271.97,
        "width": 90,
        "y": 608.7,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_10_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 13)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 2271.85,
        "y": 608.66,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314_HS_10.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      }
     ],
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "fieldOfViewOverlayRadiusScale": 0.12
    }
   }
  ],
  "label": "Entry",
  "vfov": 180,
  "hfovMax": 132,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_DEA7ED43_C78E_EFBF_41DD_65232F4B8DB4_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_DEA7ED43_C78E_EFBF_41DD_65232F4B8DB4_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_DEA7ED43_C78E_EFBF_41DD_65232F4B8DB4.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "buttonZoomOut": {
   "toolTipShadowVerticalLength": 0,
   "borderSize": 0,
   "toolTipBorderSize": 1,
   "toolTipOpacity": 1,
   "toolTipPaddingLeft": 6,
   "toolTipFontFamily": "Arial",
   "toolTipDisplayTime": 600,
   "mode": "push",
   "width": 66.65,
   "horizontalAlign": "center",
   "height": 74,
   "toolTipTextShadowOpacity": 0,
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingTop": 4,
   "toolTipShadowHorizontalLength": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "borderRadius": 0,
   "toolTipTextShadowBlurRadius": 3,
   "paddingRight": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowSpread": 0,
   "toolTip": "Zoom Out",
   "class": "IconButton",
   "toolTipShadowOpacity": 1,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipPaddingBottom": 4,
   "minHeight": 0,
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1207"
   },
   "verticalAlign": "middle",
   "transparencyActive": false,
   "toolTipBorderColor": "#767676",
   "toolTipFontColor": "#606060",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "toolTipFontWeight": "normal",
   "toolTipFontSize": 12,
   "paddingTop": 0,
   "paddingLeft": 0,
   "toolTipPaddingRight": 6
  },
  "viewerArea": "this.MainViewer",
  "gyroscopeEnabled": true,
  "buttonPause": "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
  "buttonPlayLeft": {
   "borderSize": 0,
   "mode": "push",
   "width": 68.3,
   "horizontalAlign": "center",
   "height": 65.95,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "borderRadius": 0,
   "paddingRight": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "minHeight": 0,
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1196"
   },
   "verticalAlign": "middle",
   "transparencyActive": false,
   "paddingTop": 0,
   "paddingLeft": 0
  },
  "buttonPlayRight": {
   "borderSize": 0,
   "mode": "push",
   "width": 74.6,
   "horizontalAlign": "center",
   "height": 65.3,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "borderRadius": 0,
   "paddingRight": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "minHeight": 0,
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1198"
   },
   "verticalAlign": "middle",
   "transparencyActive": false,
   "paddingTop": 0,
   "paddingLeft": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_rotation",
  "preloadEnabled": false,
  "buttonZoomIn": {
   "toolTipShadowVerticalLength": 0,
   "borderSize": 0,
   "toolTipBorderSize": 1,
   "toolTipOpacity": 1,
   "toolTipPaddingLeft": 6,
   "toolTipFontFamily": "Arial",
   "toolTipDisplayTime": 600,
   "mode": "push",
   "width": 68.7,
   "horizontalAlign": "center",
   "height": 72.65,
   "toolTipTextShadowOpacity": 0,
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingTop": 4,
   "toolTipShadowHorizontalLength": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "borderRadius": 0,
   "toolTipTextShadowBlurRadius": 3,
   "paddingRight": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowSpread": 0,
   "toolTip": "Zoom In",
   "class": "IconButton",
   "toolTipShadowOpacity": 1,
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipPaddingBottom": 4,
   "minHeight": 0,
   "shadow": false,
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1208"
   },
   "verticalAlign": "middle",
   "transparencyActive": false,
   "toolTipBorderColor": "#767676",
   "toolTipFontColor": "#606060",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "toolTipFontWeight": "normal",
   "toolTipFontSize": 12,
   "paddingTop": 0,
   "paddingLeft": 0,
   "toolTipPaddingRight": 6
  },
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "viewerArea": "this.MapViewer",
  "class": "MapPlayer",
  "buttonZoomOut": "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
  "buttonZoomIn": "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
 },
 {
  "id": "panorama_DEA7ED43_C78E_EFBF_41DD_65232F4B8DB4_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 50.62,
   "pitch": -18.03
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -118.97,
     "path": "longest",
     "pitchSpeed": 26.68,
     "yawSpeed": 52.6,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 1.06
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "thumbnailUrl": "media/video_EF8F2BD0_C893_AA59_41E0_6F44AA98ACA4_t.jpg",
  "label": "Drone Vid1",
  "video": {
   "height": 1680,
   "mp4Url": "media/video_EF8F2BD0_C893_AA59_41E0_6F44AA98ACA4.mp4",
   "class": "VideoResource",
   "width": 2986
  },
  "width": 2986,
  "id": "video_EF8F2BD0_C893_AA59_41E0_6F44AA98ACA4",
  "loop": false,
  "height": 1680,
  "class": "Video",
  "scaleMode": "fit_inside"
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_CE4CBCBC_C531_81CB_41E4_74BC6B1BF667",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CE4CBCBC_C531_81CB_41E4_74BC6B1BF667_t.jpg",
  "mapLocations": [
   {
    "x": 1448.09,
    "y": 867.01,
    "class": "PanoramaMapLocation",
    "angle": 191.57,
    "map": "this.map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314"
   }
  ],
  "label": "Living Room",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CE4CBCBC_C531_81CB_41E4_74BC6B1BF667_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_CE4CBCBC_C531_81CB_41E4_74BC6B1BF667_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_CE4CBCBC_C531_81CB_41E4_74BC6B1BF667.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "id": "panorama_CE4CBCBC_C531_81CB_41E4_74BC6B1BF667_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -130.12,
   "pitch": -5.31
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 103.18,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": -4
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 41,
  "frameDisplayTime": 7000,
  "id": "panorama_CEDDDD2B_C572_80CD_41CC_E2EC683BA7EE",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CEDDDD2B_C572_80CD_41CC_E2EC683BA7EE_1_t.jpg",
  "mapLocations": [
   {
    "x": 919.75,
    "y": 1095.46,
    "class": "PanoramaMapLocation",
    "angle": 124.18,
    "map": "this.map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314"
   }
  ],
  "label": "Bedroom 1",
  "vfov": 180,
  "hfovMax": 180,
  "frameTransitionTime": 1500,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CEDDDD2B_C572_80CD_41CC_E2EC683BA7EE_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_CEDDDD2B_C572_80CD_41CC_E2EC683BA7EE_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_CEDDDD2B_C572_80CD_41CC_E2EC683BA7EE_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CEDDDD2B_C572_80CD_41CC_E2EC683BA7EE_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_CEDDDD2B_C572_80CD_41CC_E2EC683BA7EE_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_CEDDDD2B_C572_80CD_41CC_E2EC683BA7EE_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "id": "panorama_CEDDDD2B_C572_80CD_41CC_E2EC683BA7EE_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 130,
   "class": "PanoramaCameraPosition",
   "yaw": -136.98,
   "pitch": -1.69
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 23.97,
     "path": "shortest",
     "pitchSpeed": 36.31,
     "yawSpeed": 71.95,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": 3.03
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 60,
  "frameDisplayTime": 7000,
  "id": "panorama_D06CA27D_C54F_8144_41C9_1A0090F643E1",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_D06CA27D_C54F_8144_41C9_1A0090F643E1_1_t.jpg",
  "mapLocations": [
   {
    "x": 951.07,
    "y": 413.13,
    "class": "PanoramaMapLocation",
    "angle": -164.76,
    "map": "this.map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314"
   }
  ],
  "label": "Bedroom 2",
  "vfov": 180,
  "hfovMax": 150,
  "frameTransitionTime": 1500,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_D06CA27D_C54F_8144_41C9_1A0090F643E1_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_D06CA27D_C54F_8144_41C9_1A0090F643E1_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_D06CA27D_C54F_8144_41C9_1A0090F643E1_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_D06CA27D_C54F_8144_41C9_1A0090F643E1_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_D06CA27D_C54F_8144_41C9_1A0090F643E1_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_D06CA27D_C54F_8144_41C9_1A0090F643E1_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "id": "panorama_D06CA27D_C54F_8144_41C9_1A0090F643E1_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 130,
   "class": "PanoramaCameraPosition",
   "yaw": 134.21,
   "pitch": -2.96
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -42.81,
     "path": "shortest",
     "pitchSpeed": 34.17,
     "yawSpeed": 67.65,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": -4.47
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 60,
  "frameDisplayTime": 2000,
  "id": "panorama_CCF51E98_C796_AAC8_41CC_7FB743DC420A",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CCF51E98_C796_AAC8_41CC_7FB743DC420A_1_t.jpg",
  "mapLocations": [
   {
    "x": 1256.96,
    "y": 637.91,
    "class": "PanoramaMapLocation",
    "angle": 170.33,
    "map": "this.map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314"
   }
  ],
  "label": "Utility/Hallway",
  "vfov": 180,
  "hfovMax": 150,
  "frameTransitionTime": 700,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CCF51E98_C796_AAC8_41CC_7FB743DC420A_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_CCF51E98_C796_AAC8_41CC_7FB743DC420A_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_CCF51E98_C796_AAC8_41CC_7FB743DC420A_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CCF51E98_C796_AAC8_41CC_7FB743DC420A_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_CCF51E98_C796_AAC8_41CC_7FB743DC420A_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_CCF51E98_C796_AAC8_41CC_7FB743DC420A_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "id": "panorama_CCF51E98_C796_AAC8_41CC_7FB743DC420A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -83.44,
   "pitch": 3.05
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -2.98,
     "path": "shortest",
     "pitchSpeed": 21.33,
     "yawSpeed": 41.85,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": -2.97
    },
    {
     "targetYaw": 82.11,
     "path": "shortest",
     "pitchSpeed": 32.03,
     "yawSpeed": 63.35,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": -2.14
    },
    {
     "targetYaw": 169.52,
     "path": "shortest",
     "pitchSpeed": 27.75,
     "yawSpeed": 54.75,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": -1.8
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_C9185D1B_C793_AFCF_41A8_953406A33754",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_C9185D1B_C793_AFCF_41A8_953406A33754_t.jpg",
  "mapLocations": [
   {
    "x": 1257.44,
    "y": 309.65,
    "class": "PanoramaMapLocation",
    "angle": 169.58,
    "map": "this.map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314"
   }
  ],
  "label": "Bathroom 2",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C9185D1B_C793_AFCF_41A8_953406A33754_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_C9185D1B_C793_AFCF_41A8_953406A33754_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_C9185D1B_C793_AFCF_41A8_953406A33754.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "id": "panorama_C9185D1B_C793_AFCF_41A8_953406A33754_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.49,
   "pitch": -7.88
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -32.72,
     "path": "shortest",
     "pitchSpeed": 28.82,
     "yawSpeed": 56.9,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": -40.05
    },
    {
     "targetYaw": -1.48,
     "path": "shortest",
     "pitchSpeed": 27.75,
     "yawSpeed": 54.75,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": -5.98
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 60,
  "frameDisplayTime": 4000,
  "id": "panorama_CB60620C_C791_95C8_41D8_15735327B902",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CB60620C_C791_95C8_41D8_15735327B902_1_t.jpg",
  "mapLocations": [
   {
    "x": 1619.74,
    "y": 407.14,
    "class": "PanoramaMapLocation",
    "angle": 148.33,
    "map": "this.map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314"
   }
  ],
  "label": "Kitcken",
  "vfov": 180,
  "hfovMax": 131,
  "frameTransitionTime": 800,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CB60620C_C791_95C8_41D8_15735327B902_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_CB60620C_C791_95C8_41D8_15735327B902_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_CB60620C_C791_95C8_41D8_15735327B902_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CB60620C_C791_95C8_41D8_15735327B902_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_CB60620C_C791_95C8_41D8_15735327B902_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_CB60620C_C791_95C8_41D8_15735327B902_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "id": "panorama_CB60620C_C791_95C8_41D8_15735327B902_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 123,
   "class": "PanoramaCameraPosition",
   "yaw": 74.02,
   "pitch": -4.29
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -157.15,
     "path": "longest",
     "pitchSpeed": 23.47,
     "yawSpeed": 46.15,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": -5.64
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_CA419CE7_C791_EE78_41E1_A27C7E3D7115",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CA419CE7_C791_EE78_41E1_A27C7E3D7115_t.jpg",
  "mapLocations": [
   {
    "x": 1479.74,
    "y": 173.33,
    "class": "PanoramaMapLocation",
    "angle": 333.65,
    "map": "this.map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314"
   }
  ],
  "label": "Backyard",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CA419CE7_C791_EE78_41E1_A27C7E3D7115_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_CA419CE7_C791_EE78_41E1_A27C7E3D7115_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_CA419CE7_C791_EE78_41E1_A27C7E3D7115.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "id": "panorama_CA419CE7_C791_EE78_41E1_A27C7E3D7115_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -65.17,
   "pitch": -6.91
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 180,
     "path": "longest",
     "pitchSpeed": 24.54,
     "yawSpeed": 48.3,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": 2.66
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "thumbnailUrl": "media/video_E419F4E4_C88E_9E79_41E4_4BA6D9D66EF5_t.jpg",
  "label": "Drone Vid2",
  "video": {
   "height": 1680,
   "mp4Url": "media/video_E419F4E4_C88E_9E79_41E4_4BA6D9D66EF5.mp4",
   "class": "VideoResource",
   "width": 2986
  },
  "width": 2986,
  "id": "video_E419F4E4_C88E_9E79_41E4_4BA6D9D66EF5",
  "loop": false,
  "height": 1680,
  "class": "Video",
  "scaleMode": "fit_inside"
 },
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 60,
  "frameDisplayTime": 6000,
  "id": "panorama_CB41572B_C792_7BCF_41D6_7CDC63F3F1A8",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CB41572B_C792_7BCF_41D6_7CDC63F3F1A8_1_t.jpg",
  "mapLocations": [
   {
    "x": 2265.87,
    "y": 351.29,
    "class": "PanoramaMapLocation",
    "angle": 119.89,
    "map": "this.map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314"
   }
  ],
  "label": "Laundry Room",
  "vfov": 180,
  "hfovMax": 120,
  "frameTransitionTime": 900,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CB41572B_C792_7BCF_41D6_7CDC63F3F1A8_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_CB41572B_C792_7BCF_41D6_7CDC63F3F1A8_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_CB41572B_C792_7BCF_41D6_7CDC63F3F1A8_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CB41572B_C792_7BCF_41D6_7CDC63F3F1A8_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_CB41572B_C792_7BCF_41D6_7CDC63F3F1A8_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_CB41572B_C792_7BCF_41D6_7CDC63F3F1A8_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "id": "panorama_CB41572B_C792_7BCF_41D6_7CDC63F3F1A8_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -21.27,
   "pitch": -2.33
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 146.24,
     "path": "shortest",
     "pitchSpeed": 26.68,
     "yawSpeed": 52.6,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": -2.97
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 60,
  "frameDisplayTime": 7000,
  "id": "panorama_CB2CF6A0_C78E_BAF9_41BB_297386C9C762",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CB2CF6A0_C78E_BAF9_41BB_297386C9C762_1_t.jpg",
  "mapLocations": [
   {
    "x": 2237.82,
    "y": 1070.61,
    "class": "PanoramaMapLocation",
    "angle": -36.3,
    "map": "this.map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314"
   }
  ],
  "label": "Master Bedroom",
  "vfov": 180,
  "hfovMax": 120,
  "frameTransitionTime": 1500,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CB2CF6A0_C78E_BAF9_41BB_297386C9C762_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_CB2CF6A0_C78E_BAF9_41BB_297386C9C762_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_CB2CF6A0_C78E_BAF9_41BB_297386C9C762_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CB2CF6A0_C78E_BAF9_41BB_297386C9C762_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_CB2CF6A0_C78E_BAF9_41BB_297386C9C762_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_CB2CF6A0_C78E_BAF9_41BB_297386C9C762_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "id": "panorama_CB2CF6A0_C78E_BAF9_41BB_297386C9C762_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.92,
   "pitch": -0.72
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -107.76,
     "path": "shortest",
     "pitchSpeed": 28.82,
     "yawSpeed": 56.9,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": -9.8
    },
    {
     "targetYaw": 45.4,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": -0.65
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 60,
  "frameDisplayTime": 8000,
  "id": "panorama_CB0EEA80_C7B1_AAB9_4181_4169AB051FF8",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CB0EEA80_C7B1_AAB9_4181_4169AB051FF8_1_t.jpg",
  "mapLocations": [
   {
    "x": 2316.85,
    "y": 653.66,
    "class": "PanoramaMapLocation",
    "angle": 136.62,
    "map": "this.map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314"
   }
  ],
  "label": "Master Bath",
  "vfov": 180,
  "hfovMax": 120,
  "frameTransitionTime": 2000,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CB0EEA80_C7B1_AAB9_4181_4169AB051FF8_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_CB0EEA80_C7B1_AAB9_4181_4169AB051FF8_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_CB0EEA80_C7B1_AAB9_4181_4169AB051FF8_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CB0EEA80_C7B1_AAB9_4181_4169AB051FF8_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_CB0EEA80_C7B1_AAB9_4181_4169AB051FF8_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_CB0EEA80_C7B1_AAB9_4181_4169AB051FF8_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "id": "panorama_CB0EEA80_C7B1_AAB9_4181_4169AB051FF8_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 39.33,
   "pitch": -1.51
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -175.95,
     "path": "longest",
     "pitchSpeed": 26.68,
     "yawSpeed": 52.6,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": 6.49
    },
    {
     "targetYaw": 116.14,
     "path": "shortest",
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": -23.68
    },
    {
     "targetYaw": 25.49,
     "path": "longest",
     "pitchSpeed": 26.68,
     "yawSpeed": 52.6,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": 0.03
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "thumbnailUrl": "media/video_EF8C2856_C893_9659_41E7_CCBC39984F6D_t.jpg",
  "label": "Drone Vid3",
  "video": {
   "height": 1680,
   "mp4Url": "media/video_EF8C2856_C893_9659_41E7_CCBC39984F6D.mp4",
   "class": "VideoResource",
   "width": 2986
  },
  "width": 2986,
  "id": "video_EF8C2856_C893_9659_41E7_CCBC39984F6D",
  "loop": false,
  "height": 1680,
  "class": "Video",
  "scaleMode": "fit_inside"
 },
 {
  "thumbnailUrl": "media/video_EF8E94E7_C893_9E47_41E5_C746243E5AA4_t.jpg",
  "label": "Panoramic",
  "video": {
   "height": 1680,
   "mp4Url": "media/video_EF8E94E7_C893_9E47_41E5_C746243E5AA4.mp4",
   "class": "VideoResource",
   "width": 2986
  },
  "width": 2986,
  "id": "video_EF8E94E7_C893_9E47_41E5_C746243E5AA4",
  "loop": false,
  "height": 1680,
  "class": "Video",
  "scaleMode": "fit_inside"
 },
 {
  "thumbnailUrl": "media/video_E4B1CF0A_C896_6BC9_41E0_AE349BD6DBC1_t.jpg",
  "label": "Closing",
  "video": {
   "height": 1080,
   "mp4Url": "media/video_E4B1CF0A_C896_6BC9_41E0_AE349BD6DBC1.mp4",
   "class": "VideoResource",
   "width": 1920
  },
  "width": 1920,
  "id": "video_E4B1CF0A_C896_6BC9_41E0_AE349BD6DBC1",
  "loop": false,
  "height": 1080,
  "class": "Video",
  "scaleMode": "fit_inside"
 },
 {
  "thumbnailUrl": "media/album_E3FEF111_C892_97DB_41E0_0C7B130B63DC_t.png",
  "label": "Photo Album",
  "id": "album_E3FEF111_C892_97DB_41E0_0C7B130B63DC",
  "class": "PhotoAlbum",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_E3FEF111_C892_97DB_41E0_0C7B130B63DC_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_E3FEF111_C892_97DB_41E0_0C7B130B63DC_0_t.png",
      "label": "27x40 - Sweet Dreams",
      "duration": 5000,
      "width": 1189,
      "id": "album_E3FEF111_C892_97DB_41E0_0C7B130B63DC_0",
      "height": 939,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_E3FEF111_C892_97DB_41E0_0C7B130B63DC_0.png",
         "class": "ImageResourceLevel"
        }
       ]
      }
     },
     "camera": {
      "duration": 5000,
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1
      },
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "x": "0.75",
       "class": "PhotoCameraPosition",
       "y": "0.62",
       "zoomFactor": 1.1
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_E3FEF111_C892_97DB_41E0_0C7B130B63DC_1_t.png",
      "label": "Sweet Dreams",
      "duration": 5000,
      "width": 3532,
      "id": "album_E3FEF111_C892_97DB_41E0_0C7B130B63DC_1",
      "height": 1726,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_E3FEF111_C892_97DB_41E0_0C7B130B63DC_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      }
     },
     "camera": {
      "duration": 5000,
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1
      },
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "x": "0.59",
       "class": "PhotoCameraPosition",
       "y": "0.33",
       "zoomFactor": 1.1
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_E3FEF111_C892_97DB_41E0_0C7B130B63DC_2_t.png",
      "label": "Sweet Dreams2",
      "duration": 5000,
      "width": 3281,
      "id": "album_E3FEF111_C892_97DB_41E0_0C7B130B63DC_2",
      "height": 1603,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_E3FEF111_C892_97DB_41E0_0C7B130B63DC_2.png",
         "class": "ImageResourceLevel"
        }
       ]
      }
     },
     "camera": {
      "duration": 5000,
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1
      },
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "x": "0.33",
       "class": "PhotoCameraPosition",
       "y": "0.46",
       "zoomFactor": 1.1
      }
     }
    }
   ]
  }
 },
 {
  "class": "PhotoAlbumPlayer",
  "buttonPause": "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
  "id": "MainViewerPhotoAlbumPlayer",
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "viewerArea": "this.MainViewer"
 },
 "this.album_E3FEF111_C892_97DB_41E0_0C7B130B63DC_0",
 "this.album_E3FEF111_C892_97DB_41E0_0C7B130B63DC_1",
 "this.album_E3FEF111_C892_97DB_41E0_0C7B130B63DC_2",
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_EFBDFA6F_C892_6A47_41D7_8D5683208248",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F87683F8_C891_9A49_41D4_4D433390C2BA, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_F87683F8_C891_9A49_41D4_4D433390C2BA",
    "media": "this.panorama_DEA7ED43_C78E_EFBF_41DD_65232F4B8DB4",
    "camera": "this.panorama_DEA7ED43_C78E_EFBF_41DD_65232F4B8DB4_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_EF8F2BD0_C893_AA59_41E0_6F44AA98ACA4",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F87743F9_C891_9A4B_41E4_448BAC591252, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_F87743F9_C891_9A4B_41E4_448BAC591252",
    "media": "this.panorama_CE4CBCBC_C531_81CB_41E4_74BC6B1BF667",
    "camera": "this.panorama_CE4CBCBC_C531_81CB_41E4_74BC6B1BF667_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F877A3F9_C891_9A4B_41E7_4C7F9065936D, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "id": "PanoramaPlayListItem_F877A3F9_C891_9A4B_41E7_4C7F9065936D",
    "media": "this.panorama_CEDDDD2B_C572_80CD_41CC_E2EC683BA7EE",
    "camera": "this.panorama_CEDDDD2B_C572_80CD_41CC_E2EC683BA7EE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F877F3F9_C891_9A4B_41DB_8789B71860E7, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "id": "PanoramaPlayListItem_F877F3F9_C891_9A4B_41DB_8789B71860E7",
    "media": "this.panorama_D06CA27D_C54F_8144_41C9_1A0090F643E1",
    "camera": "this.panorama_D06CA27D_C54F_8144_41C9_1A0090F643E1_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F87053F9_C891_9A4B_41E7_CA932C70E379, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "id": "PanoramaPlayListItem_F87053F9_C891_9A4B_41E7_CA932C70E379",
    "media": "this.panorama_CCF51E98_C796_AAC8_41CC_7FB743DC420A",
    "camera": "this.panorama_CCF51E98_C796_AAC8_41CC_7FB743DC420A_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F870A3F9_C891_9A4B_41D9_C353A9EB1094, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_F870A3F9_C891_9A4B_41D9_C353A9EB1094",
    "media": "this.panorama_C9185D1B_C793_AFCF_41A8_953406A33754",
    "camera": "this.panorama_C9185D1B_C793_AFCF_41A8_953406A33754_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F870E3FA_C891_9A49_41D0_948D63287361, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "id": "PanoramaPlayListItem_F870E3FA_C891_9A49_41D0_948D63287361",
    "media": "this.panorama_CB60620C_C791_95C8_41D8_15735327B902",
    "camera": "this.panorama_CB60620C_C791_95C8_41D8_15735327B902_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F87143FA_C891_9A49_41C6_A9114BF7268A, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_F87143FA_C891_9A49_41C6_A9114BF7268A",
    "media": "this.panorama_CA419CE7_C791_EE78_41E1_A27C7E3D7115",
    "camera": "this.panorama_CA419CE7_C791_EE78_41E1_A27C7E3D7115_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_E419F4E4_C88E_9E79_41E4_4BA6D9D66EF5",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F871D3FA_C891_9A49_41DA_26A64479E6B0, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "id": "PanoramaPlayListItem_F871D3FA_C891_9A49_41DA_26A64479E6B0",
    "media": "this.panorama_CB41572B_C792_7BCF_41D6_7CDC63F3F1A8",
    "camera": "this.panorama_CB41572B_C792_7BCF_41D6_7CDC63F3F1A8_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F87223FA_C891_9A49_41DD_505395D81F8A, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "id": "PanoramaPlayListItem_F87223FA_C891_9A49_41DD_505395D81F8A",
    "media": "this.panorama_CB2CF6A0_C78E_BAF9_41BB_297386C9C762",
    "camera": "this.panorama_CB2CF6A0_C78E_BAF9_41BB_297386C9C762_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F87293FA_C891_9A49_41DF_B28C3AAAD7CE, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "id": "PanoramaPlayListItem_F87293FA_C891_9A49_41DF_B28C3AAAD7CE",
    "media": "this.panorama_CB0EEA80_C7B1_AAB9_4181_4169AB051FF8",
    "camera": "this.panorama_CB0EEA80_C7B1_AAB9_4181_4169AB051FF8_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_EF8C2856_C893_9659_41E7_CCBC39984F6D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_EF8E94E7_C893_9E47_41E5_C746243E5AA4",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_E4B1CF0A_C896_6BC9_41E0_AE349BD6DBC1",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true)"
   },
   {
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_E3FEF111_C892_97DB_41E0_0C7B130B63DC",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "thumbnaillist5245_playlist",
  "items": [
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_EFBDFA6F_C892_6A47_41D7_8D5683208248",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DEA7ED43_C78E_EFBF_41DD_65232F4B8DB4",
    "camera": "this.panorama_DEA7ED43_C78E_EFBF_41DD_65232F4B8DB4_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_EF8F2BD0_C893_AA59_41E0_6F44AA98ACA4",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CE4CBCBC_C531_81CB_41E4_74BC6B1BF667",
    "camera": "this.panorama_CE4CBCBC_C531_81CB_41E4_74BC6B1BF667_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CEDDDD2B_C572_80CD_41CC_E2EC683BA7EE",
    "camera": "this.panorama_CEDDDD2B_C572_80CD_41CC_E2EC683BA7EE_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D06CA27D_C54F_8144_41C9_1A0090F643E1",
    "camera": "this.panorama_D06CA27D_C54F_8144_41C9_1A0090F643E1_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CCF51E98_C796_AAC8_41CC_7FB743DC420A",
    "camera": "this.panorama_CCF51E98_C796_AAC8_41CC_7FB743DC420A_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C9185D1B_C793_AFCF_41A8_953406A33754",
    "camera": "this.panorama_C9185D1B_C793_AFCF_41A8_953406A33754_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CB60620C_C791_95C8_41D8_15735327B902",
    "camera": "this.panorama_CB60620C_C791_95C8_41D8_15735327B902_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CA419CE7_C791_EE78_41E1_A27C7E3D7115",
    "camera": "this.panorama_CA419CE7_C791_EE78_41E1_A27C7E3D7115_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 10)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_E419F4E4_C88E_9E79_41E4_4BA6D9D66EF5",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.thumbnaillist5245_playlist, 10, 11)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CB41572B_C792_7BCF_41D6_7CDC63F3F1A8",
    "camera": "this.panorama_CB41572B_C792_7BCF_41D6_7CDC63F3F1A8_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 11, 12)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CB2CF6A0_C78E_BAF9_41BB_297386C9C762",
    "camera": "this.panorama_CB2CF6A0_C78E_BAF9_41BB_297386C9C762_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 12, 13)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CB0EEA80_C7B1_AAB9_4181_4169AB051FF8",
    "camera": "this.panorama_CB0EEA80_C7B1_AAB9_4181_4169AB051FF8_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 13, 14)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_EF8C2856_C893_9659_41E7_CCBC39984F6D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.thumbnaillist5245_playlist, 14, 15)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_EF8E94E7_C893_9E47_41E5_C746243E5AA4",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.thumbnaillist5245_playlist, 15, 16)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_E4B1CF0A_C896_6BC9_41E0_AE349BD6DBC1",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.thumbnaillist5245_playlist, 16, 17)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true)"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_E3FEF111_C892_97DB_41E0_0C7B130B63DC",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 17, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist"
 },
 "this.map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314",
 {
  "class": "PlayList",
  "id": "playList_F875B3F8_C891_9A49_41DF_18127D3A97DE",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_F875C3F8_C891_9A49_41E2_235F7C91DDB8",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_D5E10AB0_C7B2_AAD9_41E6_3B9987BEE314",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "data": {
   "label": "Pulled off the highway, down a pine-line"
  },
  "class": "MediaAudio",
  "id": "audio_D2EBF24E_C7B1_9A49_41E7_D92CAAEDFD41",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_D2EBF24E_C7B1_9A49_41E7_D92CAAEDFD41.mp3",
   "oggUrl": "media/audio_D2EBF24E_C7B1_9A49_41E7_D92CAAEDFD41.ogg"
  }
 },
 {
  "data": {
   "label": "We built our dreams on timber bones,"
  },
  "class": "MediaAudio",
  "id": "audio_E4AC33E4_C892_7A78_41D7_5812DD213506",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_E4AC33E4_C892_7A78_41D7_5812DD213506.mp3",
   "oggUrl": "media/audio_E4AC33E4_C892_7A78_41D7_5812DD213506.ogg"
  }
 }
], "children": [
 {
  "borderSize": 0,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "toolTipPaddingLeft": 6,
  "playbackBarBorderColor": "#AAAAAA",
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBorderColor": "#AAAAAA",
  "toolTipPaddingTop": 4,
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "progressLeft": 10,
  "playbackBarBottom": 10,
  "borderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "paddingRight": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowOpacity": 1,
  "paddingBottom": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "minHeight": 50,
  "shadow": false,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarBorderRadius": 4,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipFontColor": "#606060",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipFontSize": 12,
  "paddingTop": 0,
  "progressBarBorderRadius": 4,
  "playbackBarOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "toolTipShadowVerticalLength": 0,
  "progressHeight": 20,
  "paddingLeft": 0,
  "progressBottom": 1,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBackgroundOpacity": 1,
  "progressBorderRadius": 4,
  "toolTipShadowHorizontalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadShadow": true,
  "transitionMode": "blending",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "transitionDuration": 500,
  "progressBarBorderSize": 1,
  "playbackBarHeadHeight": 30,
  "playbackBarLeft": 0,
  "playbackBarRight": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBorderSize": 2,
  "progressBarBorderColor": "#000000",
  "playbackBarProgressBorderRadius": 0,
  "class": "ViewerArea",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "minWidth": 100,
  "progressBarBackgroundColorDirection": "vertical",
  "top": 80,
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingBottom": 4,
  "progressOpacity": 1,
  "bottom": 89,
  "id": "MainViewer",
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressRight": 10,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipBorderColor": "#767676",
  "toolTipFontStyle": "normal",
  "toolTipBorderRadius": 3,
  "playbackBarHeight": 20,
  "playbackBarHeadWidth": 6,
  "toolTipFontWeight": "normal",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "left": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarBorderSize": 2,
  "playbackBarBackgroundOpacity": 1,
  "right": 0,
  "progressBarOpacity": 1,
  "toolTipBorderSize": 1
 },
 {
  "borderSize": 0,
  "scrollBarVisible": "always",
  "backgroundColor": [
   "#000000"
  ],
  "itemMaxHeight": 1000,
  "horizontalAlign": "center",
  "itemThumbnailShadowBlurRadius": 20,
  "selectedItemLabelFontWeight": "bold",
  "borderRadius": 5,
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "itemHeight": 120,
  "selectedItemLabelFontColor": "#FFFF00",
  "backgroundColorRatios": [
   0
  ],
  "itemThumbnailShadowOpacity": 0.93,
  "paddingBottom": 0,
  "itemVerticalAlign": "middle",
  "shadow": false,
  "minHeight": 0,
  "playList": "this.thumbnaillist5245_playlist",
  "backgroundOpacity": 0.2,
  "itemMaxWidth": 1000,
  "itemLabelTextDecoration": "none",
  "itemLabelFontWeight": "normal",
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontSize": 18,
  "itemThumbnailHeight": 70,
  "itemThumbnailScaleMode": "fit_outside",
  "maxHeight": 800,
  "paddingLeft": 0,
  "itemPaddingBottom": 3,
  "paddingTop": 0,
  "itemBorderSize": 2,
  "itemPaddingTop": 3,
  "scrollBarColor": "#FFFFFF",
  "itemLabelGap": 6,
  "itemThumbnailShadowVerticalLength": 15,
  "itemLabelFontFamily": "Verdana",
  "itemPaddingRight": 3,
  "itemLabelFontColor": "#FFFFFF",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "itemMinHeight": 50,
  "itemBorderColor": "#0000FF",
  "scrollBarWidth": 10,
  "itemThumbnailBorderRadius": 5,
  "itemWidth": 150,
  "class": "ThumbnailGrid",
  "scrollBarMargin": 2,
  "minWidth": 0,
  "itemMode": "normal",
  "itemHorizontalAlign": "center",
  "top": "23.76%",
  "maxWidth": 800,
  "itemThumbnailShadowHorizontalLength": 1,
  "bottom": "21.14%",
  "itemThumbnailShadow": true,
  "id": "thumbnaillist5245",
  "itemBorderRadius": 10,
  "verticalAlign": "middle",
  "itemOpacity": 1,
  "itemThumbnailOpacity": 1,
  "itemLabelFontStyle": "normal",
  "itemBackgroundColor": [],
  "data": {
   "name": "ThumbnailList28173"
  },
  "itemThumbnailShadowSpread": 1,
  "itemThumbnailWidth": 136,
  "itemPaddingLeft": 3,
  "gap": 0,
  "left": "79.99%",
  "right": "0.26%",
  "itemMinWidth": 50,
  "itemLabelPosition": "bottom",
  "scrollBarOpacity": 0.5,
  "itemBackgroundColorRatios": []
 },
 {
  "creationPolicy": "inAdvance",
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": 447.35,
    "horizontalAlign": "center",
    "fontSize": 40,
    "height": "100%",
    "textDecoration": "none",
    "borderRadius": 0,
    "text": "Tempo/Sweet Dreams",
    "paddingRight": 0,
    "fontFamily": "Arial",
    "fontStyle": "normal",
    "class": "Label",
    "fontWeight": "bold",
    "minWidth": 30,
    "paddingBottom": 0,
    "minHeight": 16,
    "shadow": false,
    "id": "label4056",
    "backgroundOpacity": 0,
    "data": {
     "name": "Label28174"
    },
    "verticalAlign": "middle",
    "fontColor": "#666666",
    "paddingTop": 0,
    "paddingLeft": 0
   },
   {
    "borderSize": 0,
    "horizontalAlign": "left",
    "itemBackgroundColorRatios": [],
    "itemPaddingTop": 3,
    "scrollBarColor": "#FFFFFF",
    "itemLabelGap": 8,
    "width": "0.522%",
    "itemThumbnailShadowBlurRadius": 8,
    "height": 82.5,
    "selectedItemLabelFontWeight": "bold",
    "itemThumbnailShadowVerticalLength": 3,
    "itemPaddingRight": 3,
    "itemLabelFontColor": "#FFFFFF",
    "itemLabelFontFamily": "Arial",
    "borderRadius": 5,
    "itemThumbnailShadowColor": "#000000",
    "paddingRight": 20,
    "scrollBarWidth": 10,
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailShadowOpacity": 0.57,
    "selectedItemLabelFontColor": "#FFCC00",
    "itemThumbnailBorderRadius": 5,
    "class": "ThumbnailList",
    "itemVerticalAlign": "middle",
    "scrollBarMargin": 2,
    "minWidth": 1,
    "itemHorizontalAlign": "center",
    "paddingBottom": 10,
    "layout": "horizontal",
    "itemMode": "normal",
    "itemOpacity": 1,
    "minHeight": 1,
    "shadow": false,
    "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B",
    "itemThumbnailShadowHorizontalLength": 3,
    "playList": "this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
    "backgroundOpacity": 0,
    "itemBorderRadius": 0,
    "verticalAlign": "top",
    "itemThumbnailShadow": true,
    "rollOverItemLabelFontWeight": "bold",
    "itemLabelTextDecoration": "none",
    "itemLabelFontWeight": "normal",
    "itemThumbnailOpacity": 1,
    "itemBackgroundOpacity": 0,
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailWidth": 100,
    "data": {
     "name": "ThumbnailList35762"
    },
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 75,
    "scrollBarOpacity": 0.5,
    "itemLabelFontStyle": "normal",
    "itemThumbnailScaleMode": "fit_outside",
    "gap": 13,
    "itemThumbnailShadowSpread": 1,
    "paddingLeft": 20,
    "itemPaddingBottom": 3,
    "paddingTop": 10,
    "itemBackgroundColor": [],
    "scrollBarVisible": "rollOver",
    "itemLabelPosition": "bottom",
    "itemPaddingLeft": 3
   }
  ],
  "overflow": "scroll",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "gap": 6,
  "horizontalAlign": "center",
  "height": 92,
  "width": "100%",
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "paddingRight": 0,
  "scrollBarWidth": 10,
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "layout": "horizontal",
  "class": "Container",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "paddingBottom": 0,
  "minHeight": 1,
  "shadow": false,
  "backgroundOpacity": 0.3,
  "data": {
   "name": "Container29432"
  },
  "verticalAlign": "middle",
  "bottom": "0%",
  "left": "0%",
  "paddingTop": 0,
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false
 },
 {
  "borderSize": 0,
  "horizontalAlign": "center",
  "height": "5.455%",
  "width": "12.315%",
  "borderRadius": 0,
  "paddingRight": 0,
  "url": "skin/Image_306F4727_273A_95B3_41B2_3DF89EEDBF85.png",
  "paddingBottom": 0,
  "class": "Image",
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "top": "0.05%",
  "maxWidth": 1467,
  "minHeight": 1,
  "id": "Image_306F4727_273A_95B3_41B2_3DF89EEDBF85",
  "backgroundOpacity": 0,
  "data": {
   "name": "Wave Logo"
  },
  "verticalAlign": "middle",
  "shadow": false,
  "left": "0%",
  "paddingTop": 0,
  "maxHeight": 817,
  "paddingLeft": 0
 },
 {
  "borderSize": 0,
  "horizontalAlign": "center",
  "height": "5.227%",
  "width": "37.772%",
  "borderRadius": 0,
  "paddingRight": 0,
  "url": "skin/Image_3E29962B_272E_B7B3_4191_F996EF0F95BB.png",
  "click": "this.openLink(\"http://mtviewhomes.com\", \"_blank\")",
  "paddingBottom": 0,
  "class": "Image",
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "top": "0.18%",
  "cursor": "hand",
  "maxWidth": 1700,
  "minHeight": 1,
  "id": "Image_3E29962B_272E_B7B3_4191_F996EF0F95BB",
  "backgroundOpacity": 0,
  "data": {
   "name": "MTViewhomes"
  },
  "verticalAlign": "middle",
  "shadow": false,
  "left": "5.44%",
  "paddingTop": 0,
  "maxHeight": 186,
  "paddingLeft": 0
 },
 {
  "borderSize": 0,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "toolTipPaddingLeft": 6,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "progressBorderColor": "#AAAAAA",
  "toolTipPaddingTop": 4,
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "progressLeft": 10,
  "playbackBarBottom": 0,
  "borderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "paddingRight": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowOpacity": 1,
  "paddingBottom": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "minHeight": 1,
  "shadow": false,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarBorderRadius": 4,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipFontColor": "#606060",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipFontSize": 12,
  "paddingTop": 0,
  "paddingLeft": 0,
  "playbackBarProgressBorderSize": 0,
  "toolTipShadowVerticalLength": 0,
  "progressBarBorderRadius": 4,
  "progressHeight": 20,
  "playbackBarOpacity": 1,
  "progressBottom": 2,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBackgroundOpacity": 1,
  "progressBorderRadius": 4,
  "toolTipShadowHorizontalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadShadow": true,
  "transitionMode": "blending",
  "width": "30.81%",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "transitionDuration": 500,
  "progressBarBorderSize": 1,
  "playbackBarHeadHeight": 30,
  "height": "27.5%",
  "playbackBarLeft": 0,
  "playbackBarRight": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBorderSize": 2,
  "progressBarBorderColor": "#000000",
  "playbackBarProgressBorderRadius": 0,
  "class": "ViewerArea",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "minWidth": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "top": "0.69%",
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingBottom": 4,
  "progressOpacity": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "id": "MapViewer",
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressRight": 10,
  "playbackBarHeight": 20,
  "toolTipBorderColor": "#767676",
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadWidth": 6,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 2,
  "right": "0.11%",
  "progressBarOpacity": 1,
  "toolTipBorderSize": 1
 },
 {
  "creationPolicy": "inAdvance",
  "borderSize": 0,
  "children": [
   {
    "creationPolicy": "inAdvance",
    "borderSize": 0,
    "children": [
     {
      "toolTipShadowVerticalLength": 0,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "toolTipOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipFontFamily": "Arial",
      "toolTipDisplayTime": 600,
      "mode": "toggle",
      "width": 62,
      "horizontalAlign": "center",
      "height": 70,
      "toolTipTextShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowHorizontalLength": 0,
      "borderRadius": 0,
      "toolTipTextShadowBlurRadius": 3,
      "paddingRight": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowSpread": 0,
      "class": "IconButton",
      "toolTipShadowOpacity": 1,
      "iconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75.png",
      "minWidth": 0,
      "toolTip": "Mute",
      "pressedIconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75_pressed.png",
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipPaddingBottom": 4,
      "minHeight": 0,
      "shadow": false,
      "id": "IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button49930"
      },
      "verticalAlign": "middle",
      "transparencyActive": true,
      "toolTipBorderColor": "#767676",
      "toolTipFontColor": "#606060",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTipFontWeight": "normal",
      "toolTipFontSize": 12,
      "paddingTop": 0,
      "paddingLeft": 0,
      "toolTipPaddingRight": 6
     },
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
     "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
     "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
    ],
    "overflow": "hidden",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "scrollBarVisible": "rollOver",
    "width": 682.8,
    "horizontalAlign": "center",
    "height": 124.73,
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "paddingRight": 0,
    "scrollBarWidth": 10,
    "backgroundColorRatios": [
     0
    ],
    "backgroundColorDirection": "vertical",
    "layout": "horizontal",
    "class": "Container",
    "scrollBarMargin": 2,
    "minWidth": 468,
    "paddingBottom": 0,
    "minHeight": 20,
    "shadow": false,
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "backgroundOpacity": 1,
    "data": {
     "name": "Container1194"
    },
    "verticalAlign": "middle",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "gap": 10,
    "paddingLeft": 0,
    "contentOpaque": false
   }
  ],
  "overflow": "scroll",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "gap": 10,
  "horizontalAlign": "left",
  "height": "9.875%",
  "width": "29.721%",
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "paddingRight": 0,
  "scrollBarWidth": 10,
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "layout": "horizontal",
  "class": "Container",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "paddingBottom": 0,
  "minHeight": 1,
  "shadow": false,
  "id": "Container_F8F9DBC7_C892_EA47_41C8_59B175B2C35B",
  "backgroundOpacity": 0.3,
  "data": {
   "name": "Container27252"
  },
  "verticalAlign": "top",
  "bottom": "0.05%",
  "left": "5.67%",
  "paddingTop": 0,
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false
 }
], 
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "overflow": "visible",
 "start": "this.playAudioList([this.audio_D2EBF24E_C7B1_9A49_41E7_D92CAAEDFD41, this.audio_E4AC33E4_C892_7A78_41D7_5812DD213506]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_F875C3F8_C891_9A49_41E2_235F7C91DDB8.set('selectedIndex', 0)",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "vrPolyfillScale": 0.88,
 "horizontalAlign": "left",
 "height": "100%",
 "width": "100%",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getKey": function(key){  return window[key]; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); }
 },
 "paddingBottom": 0,
 "class": "Player",
 "minHeight": 20,
 "shadow": false,
 "id": "rootPlayer",
 "data": {
  "name": "Player28156"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "contentOpaque": false
})