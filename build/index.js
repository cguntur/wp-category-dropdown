/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);







var orderbyOptions = [{
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
var orderOptions = [{
  label: 'Ascending',
  value: 'asc'
}, {
  label: 'Descending',
  value: 'desc'
}];
var fetchUrlAction = wpAjax.wpurl + '/wp-admin/admin-ajax.php?action=wpcd_get_taxonomies_action';
var taxonomyList = [{
  label: 'Categories',
  value: 'category'
}];
wp.apiFetch({
  url: fetchUrlAction
}).then(function (response) {
  jQuery.each(response, function (key, val) {
    taxonomyList.push({
      label: val.label,
      value: val.name
    });
  });
});
/*
const TaxonomyListSelectControl = withState( {
    //size: '50%',
    category: 'category'
} )( ( { category, setState } ) => (
    <SelectControl
        label="Categories"
        value={ category }
        options={ taxonomyList }
        onChange={ ( category ) => { setState( { category } )
            //setTerms(category),
            //console.log(category)
        } }
    />
) );
*/
//wp.data.select('core').getEntityRecords('taxonomy', 'category');

var allTerms = {}; // const taxonomyTerms = [
//     {label: "Loading...", value: null}
// ];

var taxTerms = wpAjax.wpurl + '/wp-admin/admin-ajax.php?action=wpcd_get_taxonomy_terms_action';
wp.apiFetch({
  url: taxTerms
}).then(function (response) {
  //setTimeout(() => {
  jQuery.each(response, function (key, val) {
    if (!allTerms[val.taxonomy]) {
      allTerms[val.taxonomy] = [];
    }

    allTerms[val.taxonomy].push({
      label: val.name,
      value: val.term_id
    });
  });
  console.log(allTerms); //}, 30000);
});
/*
const TaxonomyTermsSelectControl = withState( {
    //size: '50%',
    category: 'category'
} )( ( { category, exclude, setState } ) => (
    <SelectControl
        multiple
        label="Exclude Categories"
        value={ exclude }
        options={setTerms(category)}
        onChange={ ( exclude ) => { setState( { exclude } ) } }
    />
) );
*/

/*const TaxonomyTermsSelectControl = (withSelect( function( select, props ) {
    return {
        taxonomyTerms: select( 'core' ).getEntityRecords( 'taxonomy', 'category' ),
    }
} )) ( function( props ) {

});*/

/*
wp.apiFetch({path: "/wp/v2/categories?per_page=100"}).then(posts => {
    taxonomyTerms.length = 0;
    jQuery.each( posts, function( key, val ) {
        taxonomyTerms.push({label: val.name, value: val.slug});
    });
}).catch( 

);
*/

var getTerms = function getTerms(taxonomy) {
  /*if(taxonomy == "category"){
      taxonomy = "categories";
  }else if(taxonomy == "post_tag"){
      taxonomy = "tags";
  }
  var taxTerms = wpAjax.wpurl+'/wp-admin/admin-ajax.php?action=wpcd_get_taxonomy_terms_action&taxonomy='+taxonomy;
  console.log(taxTerms);
  wp.apiFetch({url: taxTerms}).then(response => {
      taxonomyTerms.length = 0;
      jQuery.each( response, function( key, val ) {
          taxonomyTerms.push({label: val.name, value: val.term_id});
      });
      console.log(taxonomyTerms);
  }).catch( 
  
  )
  //return taxonomyTerms;
  */
  if (Array.isArray(allTerms[taxonomy])) {
    return allTerms[taxonomy];
  } else {
    return [{
      label: "<No Categories Found>",
      value: null
    }];
  }
};

var edit = function edit(props) {
  var _props$attributes = props.attributes,
      align = _props$attributes.align,
      orderby = _props$attributes.orderby,
      order = _props$attributes.order,
      showcount = _props$attributes.showcount,
      hierarchical = _props$attributes.hierarchical,
      hide_empty = _props$attributes.hide_empty,
      exclude = _props$attributes.exclude,
      include = _props$attributes.include,
      default_option_text = _props$attributes.default_option_text,
      default_option_sub = _props$attributes.default_option_sub,
      category = _props$attributes.category,
      className = props.className,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected;

  var setTaxonomy = function setTaxonomy(category) {
    props.setAttributes({
      category: category,
      exclude: [],
      include: []
    });
  };

  var excludeCategories = function excludeCategories(exclude) {
    props.setAttributes({
      exclude: exclude
    });
  };

  var includeCategories = function includeCategories(include) {
    props.setAttributes({
      include: include
    });
  };

  var inspectorControls = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], {
    key: "inspector"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Category Dropdown Options')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: "Order By",
    value: orderby,
    options: orderbyOptions,
    onChange: function onChange(nextValue) {
      return setAttributes({
        orderby: nextValue
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: "Order",
    value: order,
    options: orderOptions,
    onChange: function onChange(nextValue) {
      return setAttributes({
        order: nextValue
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Show the number of posts in each Category'),
    checked: showcount,
    onChange: function onChange(nextValue) {
      return setAttributes({
        showcount: nextValue
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Show the categories in a hierarchy'),
    checked: hierarchical,
    onChange: function onChange(nextValue) {
      return setAttributes({
        hierarchical: nextValue
      });
    },
    help: hierarchical ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Shows only the parent categories in the first dropdown', 'wpcd') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Shows all the categories in the first dropdown', 'wpcd')
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Hide the emtpy categories'),
    checked: hide_empty,
    onChange: function onChange(nextValue) {
      return setAttributes({
        hide_empty: nextValue
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: "Categories",
    value: category,
    options: taxonomyList,
    onChange: setTaxonomy
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    multiple: true,
    label: "Exclude Categories",
    value: exclude,
    options: getTerms(category),
    onChange: excludeCategories
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    multiple: true,
    label: "Include Categories",
    value: include,
    options: getTerms(category),
    onChange: includeCategories
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: "Parent Category Text",
    value: default_option_text,
    onChange: function onChange(nextValue) {
      return setAttributes({
        default_option_text: nextValue
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: "Child Category Text",
    value: default_option_sub,
    onChange: function onChange(nextValue) {
      return setAttributes({
        default_option_sub: nextValue
      });
    }
  }))));
  return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: props.className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1___default.a, {
    block: "gcs/wp-category-dropdown",
    attributes: props.attributes
  }), inspectorControls)];
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Block dependencies
 */





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('gcs/wp-category-dropdown', {
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
      default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Parent Category', 'wpcd')
    },
    default_option_sub: {
      type: 'string',
      default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Child Category', 'wpcd')
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    // Rendering in PHP
    return null;
  }
});

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/date":
/*!***************************************!*\
  !*** external {"this":["wp","date"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["date"]; }());

/***/ }),

/***/ "@wordpress/editor":
/*!*****************************************!*\
  !*** external {"this":["wp","editor"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/server-side-render":
/*!***************************************************!*\
  !*** external {"this":["wp","serverSideRender"]} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["serverSideRender"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map