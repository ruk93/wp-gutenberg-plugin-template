!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=wp.i18n.__,l=wp.element.Fragment,i=window.wp.editor.InspectorControls,o=wp.components,u=o.PanelBody,a=o.TextControl,c=function(e){var t=e.attributes,n=e.setAttributes,o=t.variable1;return wp.element.createElement(l,null,wp.element.createElement(i,null,wp.element.createElement(u,{title:r("Panel Title","sidebar-panel-title"),initialOpen:!0},wp.element.createElement(a,{label:"Example input field",value:o,onChange:function(e){n({variable1:e})}}))),wp.element.createElement("div",null,"Preview in editor ",JSON.stringify(t)))},p=function(e){return wp.element.createElement("div",null,"Rendered Preview : ",JSON.stringify(e))},f=wp.i18n.__;(0,wp.blocks.registerBlockType)("vendor/plugin-name",{title:f("Plugin Title"),icon:"lock",category:"common",supports:{html:!1},attributes:{variable1:{default:"initial value"}},edit:c,save:p})}]);