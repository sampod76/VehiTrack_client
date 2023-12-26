"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rc-dropdown";
exports.ids = ["vendor-chunks/rc-dropdown"];
exports.modules = {

/***/ "(ssr)/./node_modules/rc-dropdown/lib/Dropdown.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-dropdown/lib/Dropdown.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar _interopRequireDefault = (__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"(ssr)/./node_modules/@babel/runtime/helpers/interopRequireDefault.js\")[\"default\"]);\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"(ssr)/./node_modules/@babel/runtime/helpers/extends.js\"));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"(ssr)/./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"(ssr)/./node_modules/@babel/runtime/helpers/slicedToArray.js\"));\nvar _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"(ssr)/./node_modules/@babel/runtime/helpers/objectWithoutProperties.js\"));\nvar _trigger = _interopRequireDefault(__webpack_require__(/*! @rc-component/trigger */ \"(ssr)/./node_modules/@rc-component/trigger/lib/index.js\"));\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"(ssr)/./node_modules/classnames/index.js\"));\nvar _ref = __webpack_require__(/*! rc-util/lib/ref */ \"(ssr)/./node_modules/rc-util/lib/ref.js\");\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar _useAccessibility = _interopRequireDefault(__webpack_require__(/*! ./hooks/useAccessibility */ \"(ssr)/./node_modules/rc-dropdown/lib/hooks/useAccessibility.js\"));\nvar _Overlay = _interopRequireDefault(__webpack_require__(/*! ./Overlay */ \"(ssr)/./node_modules/rc-dropdown/lib/Overlay.js\"));\nvar _placements = _interopRequireDefault(__webpack_require__(/*! ./placements */ \"(ssr)/./node_modules/rc-dropdown/lib/placements.js\"));\nvar _excluded = [\"arrow\", \"prefixCls\", \"transitionName\", \"animation\", \"align\", \"placement\", \"placements\", \"getPopupContainer\", \"showAction\", \"hideAction\", \"overlayClassName\", \"overlayStyle\", \"visible\", \"trigger\", \"autoFocus\", \"overlay\", \"children\", \"onVisibleChange\"];\nfunction Dropdown(props, ref) {\n  var _children$props;\n  var _props$arrow = props.arrow,\n    arrow = _props$arrow === void 0 ? false : _props$arrow,\n    _props$prefixCls = props.prefixCls,\n    prefixCls = _props$prefixCls === void 0 ? 'rc-dropdown' : _props$prefixCls,\n    transitionName = props.transitionName,\n    animation = props.animation,\n    align = props.align,\n    _props$placement = props.placement,\n    placement = _props$placement === void 0 ? 'bottomLeft' : _props$placement,\n    _props$placements = props.placements,\n    placements = _props$placements === void 0 ? _placements.default : _props$placements,\n    getPopupContainer = props.getPopupContainer,\n    showAction = props.showAction,\n    hideAction = props.hideAction,\n    overlayClassName = props.overlayClassName,\n    overlayStyle = props.overlayStyle,\n    visible = props.visible,\n    _props$trigger = props.trigger,\n    trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,\n    autoFocus = props.autoFocus,\n    overlay = props.overlay,\n    children = props.children,\n    onVisibleChange = props.onVisibleChange,\n    otherProps = (0, _objectWithoutProperties2.default)(props, _excluded);\n  var _React$useState = _react.default.useState(),\n    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),\n    triggerVisible = _React$useState2[0],\n    setTriggerVisible = _React$useState2[1];\n  var mergedVisible = 'visible' in props ? visible : triggerVisible;\n  var triggerRef = _react.default.useRef(null);\n  var overlayRef = _react.default.useRef(null);\n  var childRef = _react.default.useRef(null);\n  _react.default.useImperativeHandle(ref, function () {\n    return triggerRef.current;\n  });\n  var handleVisibleChange = function handleVisibleChange(newVisible) {\n    setTriggerVisible(newVisible);\n    onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(newVisible);\n  };\n  (0, _useAccessibility.default)({\n    visible: mergedVisible,\n    triggerRef: childRef,\n    onVisibleChange: handleVisibleChange,\n    autoFocus: autoFocus,\n    overlayRef: overlayRef\n  });\n  var onClick = function onClick(e) {\n    var onOverlayClick = props.onOverlayClick;\n    setTriggerVisible(false);\n    if (onOverlayClick) {\n      onOverlayClick(e);\n    }\n  };\n  var getMenuElement = function getMenuElement() {\n    return /*#__PURE__*/_react.default.createElement(_Overlay.default, {\n      ref: overlayRef,\n      overlay: overlay,\n      prefixCls: prefixCls,\n      arrow: arrow\n    });\n  };\n  var getMenuElementOrLambda = function getMenuElementOrLambda() {\n    if (typeof overlay === 'function') {\n      return getMenuElement;\n    }\n    return getMenuElement();\n  };\n  var getMinOverlayWidthMatchTrigger = function getMinOverlayWidthMatchTrigger() {\n    var minOverlayWidthMatchTrigger = props.minOverlayWidthMatchTrigger,\n      alignPoint = props.alignPoint;\n    if ('minOverlayWidthMatchTrigger' in props) {\n      return minOverlayWidthMatchTrigger;\n    }\n    return !alignPoint;\n  };\n  var getOpenClassName = function getOpenClassName() {\n    var openClassName = props.openClassName;\n    if (openClassName !== undefined) {\n      return openClassName;\n    }\n    return \"\".concat(prefixCls, \"-open\");\n  };\n  var childrenNode = /*#__PURE__*/_react.default.cloneElement(children, {\n    className: (0, _classnames.default)((_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.className, mergedVisible && getOpenClassName()),\n    ref: (0, _ref.supportRef)(children) ? (0, _ref.composeRef)(childRef, children.ref) : undefined\n  });\n  var triggerHideAction = hideAction;\n  if (!triggerHideAction && trigger.indexOf('contextMenu') !== -1) {\n    triggerHideAction = ['click'];\n  }\n  return /*#__PURE__*/_react.default.createElement(_trigger.default, (0, _extends2.default)({\n    builtinPlacements: placements\n  }, otherProps, {\n    prefixCls: prefixCls,\n    ref: triggerRef,\n    popupClassName: (0, _classnames.default)(overlayClassName, (0, _defineProperty2.default)({}, \"\".concat(prefixCls, \"-show-arrow\"), arrow)),\n    popupStyle: overlayStyle,\n    action: trigger,\n    showAction: showAction,\n    hideAction: triggerHideAction,\n    popupPlacement: placement,\n    popupAlign: align,\n    popupTransitionName: transitionName,\n    popupAnimation: animation,\n    popupVisible: mergedVisible,\n    stretch: getMinOverlayWidthMatchTrigger() ? 'minWidth' : '',\n    popup: getMenuElementOrLambda(),\n    onPopupVisibleChange: handleVisibleChange,\n    onPopupClick: onClick,\n    getPopupContainer: getPopupContainer\n  }), childrenNode);\n}\nvar _default = /*#__PURE__*/_react.default.forwardRef(Dropdown);\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtZHJvcGRvd24vbGliL0Ryb3Bkb3duLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDZCQUE2Qiw0SkFBK0Q7QUFDNUYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZix1Q0FBdUMsbUJBQU8sQ0FBQyw4RkFBZ0M7QUFDL0UsOENBQThDLG1CQUFPLENBQUMsNEdBQXVDO0FBQzdGLDZDQUE2QyxtQkFBTyxDQUFDLDBHQUFzQztBQUMzRix1REFBdUQsbUJBQU8sQ0FBQyw4SEFBZ0Q7QUFDL0csc0NBQXNDLG1CQUFPLENBQUMsc0ZBQXVCO0FBQ3JFLHlDQUF5QyxtQkFBTyxDQUFDLDREQUFZO0FBQzdELFdBQVcsbUJBQU8sQ0FBQyxnRUFBaUI7QUFDcEMsb0NBQW9DLG1CQUFPLENBQUMsd0dBQU87QUFDbkQsK0NBQStDLG1CQUFPLENBQUMsZ0dBQTBCO0FBQ2pGLHNDQUFzQyxtQkFBTyxDQUFDLGtFQUFXO0FBQ3pELHlDQUF5QyxtQkFBTyxDQUFDLHdFQUFjO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsK0ZBQStGO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JjLWRyb3Bkb3duL2xpYi9Ecm9wZG93bi5qcz9mMWQ0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIpKTtcbnZhciBfdHJpZ2dlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkByYy1jb21wb25lbnQvdHJpZ2dlclwiKSk7XG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcbnZhciBfcmVmID0gcmVxdWlyZShcInJjLXV0aWwvbGliL3JlZlwiKTtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3VzZUFjY2Vzc2liaWxpdHkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hvb2tzL3VzZUFjY2Vzc2liaWxpdHlcIikpO1xudmFyIF9PdmVybGF5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9PdmVybGF5XCIpKTtcbnZhciBfcGxhY2VtZW50cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGxhY2VtZW50c1wiKSk7XG52YXIgX2V4Y2x1ZGVkID0gW1wiYXJyb3dcIiwgXCJwcmVmaXhDbHNcIiwgXCJ0cmFuc2l0aW9uTmFtZVwiLCBcImFuaW1hdGlvblwiLCBcImFsaWduXCIsIFwicGxhY2VtZW50XCIsIFwicGxhY2VtZW50c1wiLCBcImdldFBvcHVwQ29udGFpbmVyXCIsIFwic2hvd0FjdGlvblwiLCBcImhpZGVBY3Rpb25cIiwgXCJvdmVybGF5Q2xhc3NOYW1lXCIsIFwib3ZlcmxheVN0eWxlXCIsIFwidmlzaWJsZVwiLCBcInRyaWdnZXJcIiwgXCJhdXRvRm9jdXNcIiwgXCJvdmVybGF5XCIsIFwiY2hpbGRyZW5cIiwgXCJvblZpc2libGVDaGFuZ2VcIl07XG5mdW5jdGlvbiBEcm9wZG93bihwcm9wcywgcmVmKSB7XG4gIHZhciBfY2hpbGRyZW4kcHJvcHM7XG4gIHZhciBfcHJvcHMkYXJyb3cgPSBwcm9wcy5hcnJvdyxcbiAgICBhcnJvdyA9IF9wcm9wcyRhcnJvdyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkYXJyb3csXG4gICAgX3Byb3BzJHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICBwcmVmaXhDbHMgPSBfcHJvcHMkcHJlZml4Q2xzID09PSB2b2lkIDAgPyAncmMtZHJvcGRvd24nIDogX3Byb3BzJHByZWZpeENscyxcbiAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lLFxuICAgIGFuaW1hdGlvbiA9IHByb3BzLmFuaW1hdGlvbixcbiAgICBhbGlnbiA9IHByb3BzLmFsaWduLFxuICAgIF9wcm9wcyRwbGFjZW1lbnQgPSBwcm9wcy5wbGFjZW1lbnQsXG4gICAgcGxhY2VtZW50ID0gX3Byb3BzJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gJ2JvdHRvbUxlZnQnIDogX3Byb3BzJHBsYWNlbWVudCxcbiAgICBfcHJvcHMkcGxhY2VtZW50cyA9IHByb3BzLnBsYWNlbWVudHMsXG4gICAgcGxhY2VtZW50cyA9IF9wcm9wcyRwbGFjZW1lbnRzID09PSB2b2lkIDAgPyBfcGxhY2VtZW50cy5kZWZhdWx0IDogX3Byb3BzJHBsYWNlbWVudHMsXG4gICAgZ2V0UG9wdXBDb250YWluZXIgPSBwcm9wcy5nZXRQb3B1cENvbnRhaW5lcixcbiAgICBzaG93QWN0aW9uID0gcHJvcHMuc2hvd0FjdGlvbixcbiAgICBoaWRlQWN0aW9uID0gcHJvcHMuaGlkZUFjdGlvbixcbiAgICBvdmVybGF5Q2xhc3NOYW1lID0gcHJvcHMub3ZlcmxheUNsYXNzTmFtZSxcbiAgICBvdmVybGF5U3R5bGUgPSBwcm9wcy5vdmVybGF5U3R5bGUsXG4gICAgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgX3Byb3BzJHRyaWdnZXIgPSBwcm9wcy50cmlnZ2VyLFxuICAgIHRyaWdnZXIgPSBfcHJvcHMkdHJpZ2dlciA9PT0gdm9pZCAwID8gWydob3ZlciddIDogX3Byb3BzJHRyaWdnZXIsXG4gICAgYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgIG92ZXJsYXkgPSBwcm9wcy5vdmVybGF5LFxuICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgb25WaXNpYmxlQ2hhbmdlID0gcHJvcHMub25WaXNpYmxlQ2hhbmdlLFxuICAgIG90aGVyUHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMi5kZWZhdWx0KShwcm9wcywgX2V4Y2x1ZGVkKTtcbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IF9yZWFjdC5kZWZhdWx0LnVzZVN0YXRlKCksXG4gICAgX1JlYWN0JHVzZVN0YXRlMiA9ICgwLCBfc2xpY2VkVG9BcnJheTIuZGVmYXVsdCkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICB0cmlnZ2VyVmlzaWJsZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgc2V0VHJpZ2dlclZpc2libGUgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuICB2YXIgbWVyZ2VkVmlzaWJsZSA9ICd2aXNpYmxlJyBpbiBwcm9wcyA/IHZpc2libGUgOiB0cmlnZ2VyVmlzaWJsZTtcbiAgdmFyIHRyaWdnZXJSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYobnVsbCk7XG4gIHZhciBvdmVybGF5UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKG51bGwpO1xuICB2YXIgY2hpbGRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYobnVsbCk7XG4gIF9yZWFjdC5kZWZhdWx0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRyaWdnZXJSZWYuY3VycmVudDtcbiAgfSk7XG4gIHZhciBoYW5kbGVWaXNpYmxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlVmlzaWJsZUNoYW5nZShuZXdWaXNpYmxlKSB7XG4gICAgc2V0VHJpZ2dlclZpc2libGUobmV3VmlzaWJsZSk7XG4gICAgb25WaXNpYmxlQ2hhbmdlID09PSBudWxsIHx8IG9uVmlzaWJsZUNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25WaXNpYmxlQ2hhbmdlKG5ld1Zpc2libGUpO1xuICB9O1xuICAoMCwgX3VzZUFjY2Vzc2liaWxpdHkuZGVmYXVsdCkoe1xuICAgIHZpc2libGU6IG1lcmdlZFZpc2libGUsXG4gICAgdHJpZ2dlclJlZjogY2hpbGRSZWYsXG4gICAgb25WaXNpYmxlQ2hhbmdlOiBoYW5kbGVWaXNpYmxlQ2hhbmdlLFxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIG92ZXJsYXlSZWY6IG92ZXJsYXlSZWZcbiAgfSk7XG4gIHZhciBvbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgdmFyIG9uT3ZlcmxheUNsaWNrID0gcHJvcHMub25PdmVybGF5Q2xpY2s7XG4gICAgc2V0VHJpZ2dlclZpc2libGUoZmFsc2UpO1xuICAgIGlmIChvbk92ZXJsYXlDbGljaykge1xuICAgICAgb25PdmVybGF5Q2xpY2soZSk7XG4gICAgfVxuICB9O1xuICB2YXIgZ2V0TWVudUVsZW1lbnQgPSBmdW5jdGlvbiBnZXRNZW51RWxlbWVudCgpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX092ZXJsYXkuZGVmYXVsdCwge1xuICAgICAgcmVmOiBvdmVybGF5UmVmLFxuICAgICAgb3ZlcmxheTogb3ZlcmxheSxcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgYXJyb3c6IGFycm93XG4gICAgfSk7XG4gIH07XG4gIHZhciBnZXRNZW51RWxlbWVudE9yTGFtYmRhID0gZnVuY3Rpb24gZ2V0TWVudUVsZW1lbnRPckxhbWJkYSgpIHtcbiAgICBpZiAodHlwZW9mIG92ZXJsYXkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBnZXRNZW51RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIGdldE1lbnVFbGVtZW50KCk7XG4gIH07XG4gIHZhciBnZXRNaW5PdmVybGF5V2lkdGhNYXRjaFRyaWdnZXIgPSBmdW5jdGlvbiBnZXRNaW5PdmVybGF5V2lkdGhNYXRjaFRyaWdnZXIoKSB7XG4gICAgdmFyIG1pbk92ZXJsYXlXaWR0aE1hdGNoVHJpZ2dlciA9IHByb3BzLm1pbk92ZXJsYXlXaWR0aE1hdGNoVHJpZ2dlcixcbiAgICAgIGFsaWduUG9pbnQgPSBwcm9wcy5hbGlnblBvaW50O1xuICAgIGlmICgnbWluT3ZlcmxheVdpZHRoTWF0Y2hUcmlnZ2VyJyBpbiBwcm9wcykge1xuICAgICAgcmV0dXJuIG1pbk92ZXJsYXlXaWR0aE1hdGNoVHJpZ2dlcjtcbiAgICB9XG4gICAgcmV0dXJuICFhbGlnblBvaW50O1xuICB9O1xuICB2YXIgZ2V0T3BlbkNsYXNzTmFtZSA9IGZ1bmN0aW9uIGdldE9wZW5DbGFzc05hbWUoKSB7XG4gICAgdmFyIG9wZW5DbGFzc05hbWUgPSBwcm9wcy5vcGVuQ2xhc3NOYW1lO1xuICAgIGlmIChvcGVuQ2xhc3NOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBvcGVuQ2xhc3NOYW1lO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1vcGVuXCIpO1xuICB9O1xuICB2YXIgY2hpbGRyZW5Ob2RlID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKChfY2hpbGRyZW4kcHJvcHMgPSBjaGlsZHJlbi5wcm9wcykgPT09IG51bGwgfHwgX2NoaWxkcmVuJHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY2hpbGRyZW4kcHJvcHMuY2xhc3NOYW1lLCBtZXJnZWRWaXNpYmxlICYmIGdldE9wZW5DbGFzc05hbWUoKSksXG4gICAgcmVmOiAoMCwgX3JlZi5zdXBwb3J0UmVmKShjaGlsZHJlbikgPyAoMCwgX3JlZi5jb21wb3NlUmVmKShjaGlsZFJlZiwgY2hpbGRyZW4ucmVmKSA6IHVuZGVmaW5lZFxuICB9KTtcbiAgdmFyIHRyaWdnZXJIaWRlQWN0aW9uID0gaGlkZUFjdGlvbjtcbiAgaWYgKCF0cmlnZ2VySGlkZUFjdGlvbiAmJiB0cmlnZ2VyLmluZGV4T2YoJ2NvbnRleHRNZW51JykgIT09IC0xKSB7XG4gICAgdHJpZ2dlckhpZGVBY3Rpb24gPSBbJ2NsaWNrJ107XG4gIH1cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF90cmlnZ2VyLmRlZmF1bHQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBwbGFjZW1lbnRzXG4gIH0sIG90aGVyUHJvcHMsIHtcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICByZWY6IHRyaWdnZXJSZWYsXG4gICAgcG9wdXBDbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShvdmVybGF5Q2xhc3NOYW1lLCAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zaG93LWFycm93XCIpLCBhcnJvdykpLFxuICAgIHBvcHVwU3R5bGU6IG92ZXJsYXlTdHlsZSxcbiAgICBhY3Rpb246IHRyaWdnZXIsXG4gICAgc2hvd0FjdGlvbjogc2hvd0FjdGlvbixcbiAgICBoaWRlQWN0aW9uOiB0cmlnZ2VySGlkZUFjdGlvbixcbiAgICBwb3B1cFBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgIHBvcHVwQWxpZ246IGFsaWduLFxuICAgIHBvcHVwVHJhbnNpdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lLFxuICAgIHBvcHVwQW5pbWF0aW9uOiBhbmltYXRpb24sXG4gICAgcG9wdXBWaXNpYmxlOiBtZXJnZWRWaXNpYmxlLFxuICAgIHN0cmV0Y2g6IGdldE1pbk92ZXJsYXlXaWR0aE1hdGNoVHJpZ2dlcigpID8gJ21pbldpZHRoJyA6ICcnLFxuICAgIHBvcHVwOiBnZXRNZW51RWxlbWVudE9yTGFtYmRhKCksXG4gICAgb25Qb3B1cFZpc2libGVDaGFuZ2U6IGhhbmRsZVZpc2libGVDaGFuZ2UsXG4gICAgb25Qb3B1cENsaWNrOiBvbkNsaWNrLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lclxuICB9KSwgY2hpbGRyZW5Ob2RlKTtcbn1cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKERyb3Bkb3duKTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-dropdown/lib/Dropdown.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/rc-dropdown/lib/Overlay.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-dropdown/lib/Overlay.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar _interopRequireWildcard = (__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"(ssr)/./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\")[\"default\"]);\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar _ref = __webpack_require__(/*! rc-util/lib/ref */ \"(ssr)/./node_modules/rc-util/lib/ref.js\");\nvar Overlay = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {\n  var overlay = props.overlay,\n    arrow = props.arrow,\n    prefixCls = props.prefixCls;\n  var overlayNode = (0, _react.useMemo)(function () {\n    var overlayElement;\n    if (typeof overlay === 'function') {\n      overlayElement = overlay();\n    } else {\n      overlayElement = overlay;\n    }\n    return overlayElement;\n  }, [overlay]);\n  var composedRef = (0, _ref.composeRef)(ref, overlayNode === null || overlayNode === void 0 ? void 0 : overlayNode.ref);\n  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, arrow && /*#__PURE__*/_react.default.createElement(\"div\", {\n    className: \"\".concat(prefixCls, \"-arrow\")\n  }), /*#__PURE__*/_react.default.cloneElement(overlayNode, {\n    ref: (0, _ref.supportRef)(overlayNode) ? composedRef : undefined\n  }));\n});\nvar _default = Overlay;\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtZHJvcGRvd24vbGliL092ZXJsYXkuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOEJBQThCLDhKQUFnRTtBQUM5Riw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmLHFDQUFxQyxtQkFBTyxDQUFDLHdHQUFPO0FBQ3BELFdBQVcsbUJBQU8sQ0FBQyxnRUFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLGtCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JjLWRyb3Bkb3duL2xpYi9PdmVybGF5LmpzP2IyYjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcmVmID0gcmVxdWlyZShcInJjLXV0aWwvbGliL3JlZlwiKTtcbnZhciBPdmVybGF5ID0gLyojX19QVVJFX18qLygwLCBfcmVhY3QuZm9yd2FyZFJlZikoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIG92ZXJsYXkgPSBwcm9wcy5vdmVybGF5LFxuICAgIGFycm93ID0gcHJvcHMuYXJyb3csXG4gICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzO1xuICB2YXIgb3ZlcmxheU5vZGUgPSAoMCwgX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3ZlcmxheUVsZW1lbnQ7XG4gICAgaWYgKHR5cGVvZiBvdmVybGF5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvdmVybGF5RWxlbWVudCA9IG92ZXJsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3ZlcmxheUVsZW1lbnQgPSBvdmVybGF5O1xuICAgIH1cbiAgICByZXR1cm4gb3ZlcmxheUVsZW1lbnQ7XG4gIH0sIFtvdmVybGF5XSk7XG4gIHZhciBjb21wb3NlZFJlZiA9ICgwLCBfcmVmLmNvbXBvc2VSZWYpKHJlZiwgb3ZlcmxheU5vZGUgPT09IG51bGwgfHwgb3ZlcmxheU5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG92ZXJsYXlOb2RlLnJlZik7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgYXJyb3cgJiYgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hcnJvd1wiKVxuICB9KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChvdmVybGF5Tm9kZSwge1xuICAgIHJlZjogKDAsIF9yZWYuc3VwcG9ydFJlZikob3ZlcmxheU5vZGUpID8gY29tcG9zZWRSZWYgOiB1bmRlZmluZWRcbiAgfSkpO1xufSk7XG52YXIgX2RlZmF1bHQgPSBPdmVybGF5O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-dropdown/lib/Overlay.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/rc-dropdown/lib/hooks/useAccessibility.js":
/*!****************************************************************!*\
  !*** ./node_modules/rc-dropdown/lib/hooks/useAccessibility.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar _interopRequireWildcard = (__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"(ssr)/./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\")[\"default\"]);\nvar _interopRequireDefault = (__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"(ssr)/./node_modules/@babel/runtime/helpers/interopRequireDefault.js\")[\"default\"]);\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = useAccessibility;\nvar _KeyCode = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/KeyCode */ \"(ssr)/./node_modules/rc-util/lib/KeyCode.js\"));\nvar _raf = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/raf */ \"(ssr)/./node_modules/rc-util/lib/raf.js\"));\nvar React = _interopRequireWildcard(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar ESC = _KeyCode.default.ESC,\n  TAB = _KeyCode.default.TAB;\nfunction useAccessibility(_ref) {\n  var visible = _ref.visible,\n    triggerRef = _ref.triggerRef,\n    onVisibleChange = _ref.onVisibleChange,\n    autoFocus = _ref.autoFocus,\n    overlayRef = _ref.overlayRef;\n  var focusMenuRef = React.useRef(false);\n  var handleCloseMenuAndReturnFocus = function handleCloseMenuAndReturnFocus() {\n    if (visible) {\n      var _triggerRef$current, _triggerRef$current$f;\n      (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : (_triggerRef$current$f = _triggerRef$current.focus) === null || _triggerRef$current$f === void 0 ? void 0 : _triggerRef$current$f.call(_triggerRef$current);\n      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(false);\n    }\n  };\n  var focusMenu = function focusMenu() {\n    var _overlayRef$current;\n    if ((_overlayRef$current = overlayRef.current) !== null && _overlayRef$current !== void 0 && _overlayRef$current.focus) {\n      overlayRef.current.focus();\n      focusMenuRef.current = true;\n      return true;\n    }\n    return false;\n  };\n  var handleKeyDown = function handleKeyDown(event) {\n    switch (event.keyCode) {\n      case ESC:\n        handleCloseMenuAndReturnFocus();\n        break;\n      case TAB:\n        {\n          var focusResult = false;\n          if (!focusMenuRef.current) {\n            focusResult = focusMenu();\n          }\n          if (focusResult) {\n            event.preventDefault();\n          } else {\n            handleCloseMenuAndReturnFocus();\n          }\n          break;\n        }\n    }\n  };\n  React.useEffect(function () {\n    if (visible) {\n      window.addEventListener(\"keydown\", handleKeyDown);\n      if (autoFocus) {\n        // FIXME: hack with raf\n        (0, _raf.default)(focusMenu, 3);\n      }\n      return function () {\n        window.removeEventListener(\"keydown\", handleKeyDown);\n        focusMenuRef.current = false;\n      };\n    }\n    return function () {\n      focusMenuRef.current = false;\n    };\n  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtZHJvcGRvd24vbGliL2hvb2tzL3VzZUFjY2Vzc2liaWxpdHkuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOEJBQThCLDhKQUFnRTtBQUM5Riw2QkFBNkIsNEpBQStEO0FBQzVGLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2Ysc0NBQXNDLG1CQUFPLENBQUMsd0VBQXFCO0FBQ25FLGtDQUFrQyxtQkFBTyxDQUFDLGdFQUFpQjtBQUMzRCxvQ0FBb0MsbUJBQU8sQ0FBQyx3R0FBTztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsY0FBYztBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9yYy1kcm9wZG93bi9saWIvaG9va3MvdXNlQWNjZXNzaWJpbGl0eS5qcz8wYjg1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpLmRlZmF1bHQ7XG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVzZUFjY2Vzc2liaWxpdHk7XG52YXIgX0tleUNvZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi9LZXlDb2RlXCIpKTtcbnZhciBfcmFmID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtdXRpbC9saWIvcmFmXCIpKTtcbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgRVNDID0gX0tleUNvZGUuZGVmYXVsdC5FU0MsXG4gIFRBQiA9IF9LZXlDb2RlLmRlZmF1bHQuVEFCO1xuZnVuY3Rpb24gdXNlQWNjZXNzaWJpbGl0eShfcmVmKSB7XG4gIHZhciB2aXNpYmxlID0gX3JlZi52aXNpYmxlLFxuICAgIHRyaWdnZXJSZWYgPSBfcmVmLnRyaWdnZXJSZWYsXG4gICAgb25WaXNpYmxlQ2hhbmdlID0gX3JlZi5vblZpc2libGVDaGFuZ2UsXG4gICAgYXV0b0ZvY3VzID0gX3JlZi5hdXRvRm9jdXMsXG4gICAgb3ZlcmxheVJlZiA9IF9yZWYub3ZlcmxheVJlZjtcbiAgdmFyIGZvY3VzTWVudVJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIHZhciBoYW5kbGVDbG9zZU1lbnVBbmRSZXR1cm5Gb2N1cyA9IGZ1bmN0aW9uIGhhbmRsZUNsb3NlTWVudUFuZFJldHVybkZvY3VzKCkge1xuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB2YXIgX3RyaWdnZXJSZWYkY3VycmVudCwgX3RyaWdnZXJSZWYkY3VycmVudCRmO1xuICAgICAgKF90cmlnZ2VyUmVmJGN1cnJlbnQgPSB0cmlnZ2VyUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF90cmlnZ2VyUmVmJGN1cnJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfdHJpZ2dlclJlZiRjdXJyZW50JGYgPSBfdHJpZ2dlclJlZiRjdXJyZW50LmZvY3VzKSA9PT0gbnVsbCB8fCBfdHJpZ2dlclJlZiRjdXJyZW50JGYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90cmlnZ2VyUmVmJGN1cnJlbnQkZi5jYWxsKF90cmlnZ2VyUmVmJGN1cnJlbnQpO1xuICAgICAgb25WaXNpYmxlQ2hhbmdlID09PSBudWxsIHx8IG9uVmlzaWJsZUNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25WaXNpYmxlQ2hhbmdlKGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIHZhciBmb2N1c01lbnUgPSBmdW5jdGlvbiBmb2N1c01lbnUoKSB7XG4gICAgdmFyIF9vdmVybGF5UmVmJGN1cnJlbnQ7XG4gICAgaWYgKChfb3ZlcmxheVJlZiRjdXJyZW50ID0gb3ZlcmxheVJlZi5jdXJyZW50KSAhPT0gbnVsbCAmJiBfb3ZlcmxheVJlZiRjdXJyZW50ICE9PSB2b2lkIDAgJiYgX292ZXJsYXlSZWYkY3VycmVudC5mb2N1cykge1xuICAgICAgb3ZlcmxheVJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICBmb2N1c01lbnVSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICB2YXIgaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgRVNDOlxuICAgICAgICBoYW5kbGVDbG9zZU1lbnVBbmRSZXR1cm5Gb2N1cygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVEFCOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGZvY3VzUmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgaWYgKCFmb2N1c01lbnVSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgZm9jdXNSZXN1bHQgPSBmb2N1c01lbnUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZvY3VzUmVzdWx0KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGVDbG9zZU1lbnVBbmRSZXR1cm5Gb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgfTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgICAvLyBGSVhNRTogaGFjayB3aXRoIHJhZlxuICAgICAgICAoMCwgX3JhZi5kZWZhdWx0KShmb2N1c01lbnUsIDMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgICAgICBmb2N1c01lbnVSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvY3VzTWVudVJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW3Zpc2libGVdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-dropdown/lib/hooks/useAccessibility.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/rc-dropdown/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-dropdown/lib/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar _interopRequireDefault = (__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"(ssr)/./node_modules/@babel/runtime/helpers/interopRequireDefault.js\")[\"default\"]);\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _Dropdown = _interopRequireDefault(__webpack_require__(/*! ./Dropdown */ \"(ssr)/./node_modules/rc-dropdown/lib/Dropdown.js\"));\nvar _default = _Dropdown.default;\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtZHJvcGRvd24vbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDZCQUE2Qiw0SkFBK0Q7QUFDNUYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZix1Q0FBdUMsbUJBQU8sQ0FBQyxvRUFBWTtBQUMzRDtBQUNBLGtCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JjLWRyb3Bkb3duL2xpYi9pbmRleC5qcz8zNzRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfRHJvcGRvd24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0Ryb3Bkb3duXCIpKTtcbnZhciBfZGVmYXVsdCA9IF9Ecm9wZG93bi5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-dropdown/lib/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/rc-dropdown/lib/placements.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-dropdown/lib/placements.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar autoAdjustOverflow = {\n  adjustX: 1,\n  adjustY: 1\n};\nvar targetOffset = [0, 0];\nvar placements = {\n  topLeft: {\n    points: ['bl', 'tl'],\n    overflow: autoAdjustOverflow,\n    offset: [0, -4],\n    targetOffset: targetOffset\n  },\n  top: {\n    points: ['bc', 'tc'],\n    overflow: autoAdjustOverflow,\n    offset: [0, -4],\n    targetOffset: targetOffset\n  },\n  topRight: {\n    points: ['br', 'tr'],\n    overflow: autoAdjustOverflow,\n    offset: [0, -4],\n    targetOffset: targetOffset\n  },\n  bottomLeft: {\n    points: ['tl', 'bl'],\n    overflow: autoAdjustOverflow,\n    offset: [0, 4],\n    targetOffset: targetOffset\n  },\n  bottom: {\n    points: ['tc', 'bc'],\n    overflow: autoAdjustOverflow,\n    offset: [0, 4],\n    targetOffset: targetOffset\n  },\n  bottomRight: {\n    points: ['tr', 'br'],\n    overflow: autoAdjustOverflow,\n    offset: [0, 4],\n    targetOffset: targetOffset\n  }\n};\nvar _default = placements;\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtZHJvcGRvd24vbGliL3BsYWNlbWVudHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JjLWRyb3Bkb3duL2xpYi9wbGFjZW1lbnRzLmpzPzU0ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgYXV0b0FkanVzdE92ZXJmbG93ID0ge1xuICBhZGp1c3RYOiAxLFxuICBhZGp1c3RZOiAxXG59O1xudmFyIHRhcmdldE9mZnNldCA9IFswLCAwXTtcbnZhciBwbGFjZW1lbnRzID0ge1xuICB0b3BMZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wOiB7XG4gICAgcG9pbnRzOiBbJ2JjJywgJ3RjJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnYnInLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b21MZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b206IHtcbiAgICBwb2ludHM6IFsndGMnLCAnYmMnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbVJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ2JyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gcGxhY2VtZW50cztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-dropdown/lib/placements.js\n");

/***/ })

};
;