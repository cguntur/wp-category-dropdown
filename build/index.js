/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);







const orderbyOptions = [{
  label: 'Title',
  value: 'title'
}, {
  label: 'Date',
  value: 'date'
}, {
  label: 'Menu Order',
  value: 'menu_order'
}, {
  label: 'Random',
  value: 'rand'
}];
const orderOptions = [{
  label: 'Ascending',
  value: 'asc'
}, {
  label: 'Descending',
  value: 'desc'
}];
var fetchUrlAction = ajaxurl + '/wp-admin/admin-ajax.php?action=wpcd_get_taxonomies_action';
const taxonomyList = [{
  label: 'Categories',
  value: 'category'
}];
wp.apiFetch({
  url: fetchUrlAction
}).then(response => {
  jQuery.each(response, function (key, val) {
    taxonomyList.push({
      label: val.label,
      value: val.name
    });
  });
});
const allTerms = {};
var taxTerms = ajaxurl + '/wp-admin/admin-ajax.php?action=wpcd_get_taxonomy_terms_action';
wp.apiFetch({
  url: taxTerms
}).then(response => {
  jQuery.each(response, function (key, val) {
    if (!allTerms[val.taxonomy]) {
      allTerms[val.taxonomy] = [];
    }
    allTerms[val.taxonomy].push({
      label: val.name,
      value: val.term_id
    });
  });
  console.log(allTerms);
});
const getTerms = taxonomy => {
  if (Array.isArray(allTerms[taxonomy])) {
    return allTerms[taxonomy];
  } else {
    return [{
      label: "<No Categories Found>",
      value: null
    }];
  }
};
const edit = props => {
  const {
    attributes: {
      align,
      orderby,
      order,
      showcount,
      hierarchical,
      hide_empty,
      exclude,
      include,
      default_option_text,
      default_option_sub,
      category
    },
    className,
    setAttributes,
    isSelected
  } = props;
  const setTaxonomy = category => {
    props.setAttributes({
      category,
      exclude: [],
      include: []
    });
  };
  const excludeCategories = exclude => {
    props.setAttributes({
      exclude
    });
  };
  const includeCategories = include => {
    props.setAttributes({
      include
    });
  };
  const inspectorControls = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, {
    key: "inspector"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Category Dropdown Options')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Order By",
    value: orderby,
    options: orderbyOptions,
    onChange: nextValue => setAttributes({
      orderby: nextValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Order",
    value: order,
    options: orderOptions,
    onChange: nextValue => setAttributes({
      order: nextValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show the number of posts in each Category'),
    checked: showcount,
    onChange: nextValue => setAttributes({
      showcount: nextValue
    }),
    help: showcount ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show the number of posts in each category for both parent and child categories', GCSCD_TXT_DOMAIN) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('', GCSCD_TXT_DOMAIN)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show the categories in a hierarchy'),
    checked: hierarchical,
    onChange: nextValue => setAttributes({
      hierarchical: nextValue
    }),
    help: hierarchical ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shows only the parent categories in the first dropdown', GCSCD_TXT_DOMAIN) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shows all the categories in the first dropdown', GCSCD_TXT_DOMAIN)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hide the emtpy categories'),
    checked: hide_empty,
    onChange: nextValue => setAttributes({
      hide_empty: nextValue
    }),
    help: hide_empty ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hides the categories without any posts in parent and child category dropdowns', GCSCD_TXT_DOMAIN) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('All categories are shown in the dropdowns', GCSCD_TXT_DOMAIN)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Categories",
    value: category,
    options: taxonomyList,
    onChange: setTaxonomy
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    multiple: true,
    label: "Exclude Categories",
    value: exclude,
    options: getTerms(category),
    onChange: excludeCategories
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    multiple: true,
    label: "Include Categories",
    value: include,
    options: getTerms(category),
    onChange: includeCategories
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Parent Category Text",
    value: default_option_text,
    onChange: nextValue => setAttributes({
      default_option_text: nextValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Child Category Text",
    value: default_option_sub,
    onChange: nextValue => setAttributes({
      default_option_sub: nextValue
    })
  }))));
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: props.className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1___default()), {
    block: "gcs/wp-category-dropdown",
    attributes: props.attributes
  }), inspectorControls)];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wp"]["serverSideRender"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Block dependencies
 */




//import { dateI18n, format } from '@wordpress/date';
//import { setState } from '@wordpress/compose';

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('gcs/wp-category-dropdown', {
  title: 'WP Category Dropdown',
  icon: 'sort',
  category: 'widgets',
  description: 'This block displays the child categories based on the selected parent category.',
  example: {},
  supports: {
    // Declare support for specific alignment options.
    align: true
  },
  attributes: {
    align: {
      type: 'string',
      default: ''
    },
    orderby: {
      type: 'string',
      default: 'name'
    },
    order: {
      type: 'string',
      default: 'asc'
    },
    showcount: {
      type: 'boolean',
      default: true
    },
    hierarchical: {
      type: 'boolean',
      default: true
    },
    hide_empty: {
      type: 'boolean',
      default: true
    },
    category: {
      type: 'string',
      default: 'category'
    },
    exclude: {
      type: 'array',
      default: []
    },
    include: {
      type: 'array',
      default: []
    },
    default_option_text: {
      type: 'string',
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Parent Category', GCSCD_TXT_DOMAIN)
    },
    default_option_sub: {
      type: 'string',
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Child Category', GCSCD_TXT_DOMAIN)
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save() {
    // Rendering in PHP
    return null;
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map