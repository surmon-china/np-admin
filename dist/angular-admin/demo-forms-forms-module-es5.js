(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-forms-forms-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/inputs/components/checkboxInputs/checkboxInputs.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/demo/forms/components/inputs/components/checkboxInputs/checkboxInputs.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"checkbox-demo-row\">\r\n  <div class=\"input-demo checkbox-demo row\">\r\n    <sa-multi-checkbox [(ngModel)]=\"checkboxModel\" [propertiesMapping]=\"checkboxPropertiesMapping\"></sa-multi-checkbox>\r\n  </div>\r\n  <div class=\"input-demo radio-demo row\">\r\n    <div class=\"col-md-4\">\r\n      <label class=\"radio-inline custom-radio nowrap\">\r\n        <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\r\n        <span>Option 1</span>\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <label class=\"radio-inline custom-radio nowrap\">\r\n        <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\r\n        <span>Option 2</span>\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <label class=\"radio-inline custom-radio nowrap\">\r\n        <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\">\r\n        <span>Option3</span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div>\r\n  <sa-checkbox\r\n    [(ngModel)]=\"isDisabled\" \r\n    [baCheckboxClass]=\"'disabled'\" \r\n    [label]=\"'Disabled checkbox'\" \r\n    [disabled]=\"true\"\r\n  ></sa-checkbox>\r\n  <div class=\"radio disabled\">\r\n    <label class=\"custom-radio nowrap\">\r\n      <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"option3\" disabled>\r\n      <span>Disabled option</span>\r\n    </label>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/inputs/components/groupInputs/groupInputs.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/demo/forms/components/inputs/components/groupInputs/groupInputs.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\r\n  <span class=\"input-group-addon input-group-addon-primary addon-left\" id=\"basic-addon1\">@</span>\r\n  <input type=\"text\" class=\"form-control with-primary-addon\" placeholder=\"Username\" aria-describedby=\"basic-addon1\">\r\n</div>\r\n\r\n<div class=\"input-group\">\r\n  <input type=\"text\" class=\"form-control with-warning-addon\" placeholder=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n  <span class=\"input-group-addon input-group-addon-warning addon-right\" id=\"basic-addon2\">@example.com</span>\r\n</div>\r\n\r\n<div class=\"input-group\">\r\n  <span class=\"input-group-addon addon-left input-group-addon-success\">$</span>\r\n  <input type=\"text\" class=\"form-control with-success-addon\" aria-label=\"Amount (to the nearest dollar)\">\r\n  <span class=\"input-group-addon addon-right input-group-addon-success\">.00</span>\r\n</div>\r\n\r\n<div class=\"input-group\">\r\n  <input type=\"text\" class=\"form-control with-danger-addon\" placeholder=\"Search for...\">\r\n  <span class=\"input-group-btn\">\r\n    <button class=\"btn btn-danger\" type=\"button\">Go!</button>\r\n  </span>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/inputs/components/ratinginputs/ratinginputs.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/demo/forms/components/inputs/components/ratinginputs/ratinginputs.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\">\r\n  <rating [(ngModel)]=\"rate1\" max=\"{{_max1}}\" stateOn=\"ion-android-star\" stateOff=\"ion-android-star-outline\" class=\"rating\"></rating>\r\n  <span class=\"help-block\">Rate: {{_rate1}}</span>\r\n</div>\r\n<div class=\"col-md-8\">\r\n  <rating [(ngModel)]=\"rate2\" max=\"{{_max2}}\" stateOn=\"ion-ios-heart\" stateOff=\"ion-ios-heart-outline\" class=\"rating\"></rating>\r\n  <span class=\"help-block\">Rate: {{_rate2}}</span>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/inputs/components/selectInputs/selectInputs.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/demo/forms/components/inputs/components/selectInputs/selectInputs.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n  <label for=\"exampleSelect1\">Example select</label>\r\n  <select class=\"form-control\" id=\"exampleSelect1\">\r\n    <option>1</option>\r\n    <option>2</option>\r\n    <option>3</option>\r\n    <option>4</option>\r\n    <option>5</option>\r\n  </select>\r\n</div>\r\n<div class=\"form-group\">\r\n  <label for=\"exampleSelect2\">Example multiple select</label>\r\n  <select multiple class=\"form-control\" id=\"exampleSelect2\">\r\n    <option>1</option>\r\n    <option>2</option>\r\n    <option>3</option>\r\n    <option>4</option>\r\n    <option>5</option>\r\n  </select>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/inputs/components/standardInputs/standardInputs.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/demo/forms/components/inputs/components/standardInputs/standardInputs.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"form-group\">\r\n    <label for=\"input01\">Text</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"input01\" placeholder=\"Text\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"input02\">Password</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"input02\" placeholder=\"Password\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"input03\">Rounded Corners</label>\r\n    <input type=\"text\" class=\"form-control form-control-rounded\" id=\"input03\" placeholder=\"Rounded Corners\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"input04\">With help</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"input04\" placeholder=\"With help\">\r\n    <span class=\"help-block sub-little-text\">A block of help text that breaks onto a new line and may extend beyond one line.</span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"input05\">Disabled Input</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"input05\" placeholder=\"Disabled Input\" disabled>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"textarea01\">Textarea</label>\r\n    <textarea placeholder=\"Default Input\" class=\"form-control\" id=\"textarea01\"></textarea>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"input2\" placeholder=\"Small Input\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <input type=\"text\" class=\"form-control form-control-lg\" id=\"input4\" placeholder=\"Large Input\">\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/inputs/components/validationInputs/validationInputs.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/demo/forms/components/inputs/components/validationInputs/validationInputs.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group has-success\">\r\n  <label class=\"control-label\" for=\"inputSuccess1\">Input with success</label>\r\n  <input type=\"text\" class=\"form-control\" id=\"inputSuccess1\">\r\n</div>\r\n<div class=\"form-group has-warning\">\r\n  <label class=\"control-label\" for=\"inputWarning1\">Input with warning</label>\r\n  <input type=\"text\" class=\"form-control\" id=\"inputWarning1\">\r\n</div>\r\n<div class=\"form-group has-error\">\r\n  <label class=\"control-label\" for=\"inputError1\">Input with error</label>\r\n  <input type=\"text\" class=\"form-control\" id=\"inputError1\">\r\n</div>\r\n<sa-multi-checkbox [(ngModel)]=\"checkboxModel\" [propertiesMapping]=\"checkboxPropertiesMapping\"></sa-multi-checkbox>\r\n<br>\r\n<div class=\"form-group has-success has-feedback\">\r\n  <label class=\"control-label\" for=\"inputSuccess2\">Input with success</label>\r\n  <input type=\"text\" class=\"form-control\" id=\"inputSuccess2\" aria-describedby=\"inputSuccess2Status\">\r\n  <i class=\"ion-md-checkmark-circle form-control-feedback\" aria-hidden=\"true\"></i>\r\n  <span id=\"inputSuccess2Status\" class=\"sr-only\">(success)</span>\r\n</div>\r\n<br>\r\n<div class=\"form-group has-warning has-feedback\">\r\n  <label class=\"control-label\" for=\"inputWarning2\">Input with warning</label>\r\n  <input type=\"text\" class=\"form-control\" id=\"inputWarning2\" aria-describedby=\"inputWarning2Status\">\r\n  <i class=\"ion-md-alert form-control-feedback\" aria-hidden=\"true\"></i>\r\n  <span id=\"inputWarning2Status\" class=\"sr-only\">(warning)</span>\r\n</div>\r\n<br>\r\n<div class=\"form-group has-error has-feedback\">\r\n  <label class=\"control-label\" for=\"inputError2\">Input with error</label>\r\n  <input type=\"text\" class=\"form-control\" id=\"inputError2\" aria-describedby=\"inputError2Status\">\r\n  <i class=\"ion-md-close form-control-feedback\" aria-hidden=\"true\"></i>\r\n  <span id=\"inputError2Status\" class=\"sr-only\">(error)</span>\r\n</div>\r\n<br>\r\n<div class=\"form-group has-success has-feedback\">\r\n  <label class=\"control-label\" for=\"inputGroupSuccess1\">Input group with success</label>\r\n  <div class=\"input-group\">\r\n    <span class=\"input-group-addon addon-left\">@</span>\r\n    <input type=\"text\" class=\"form-control\" id=\"inputGroupSuccess1\" aria-describedby=\"inputGroupSuccess1Status\">\r\n  </div>\r\n  <i class=\"ion-md-checkmark-circle form-control-feedback\" aria-hidden=\"true\"></i>\r\n  <span id=\"inputGroupSuccess1Status\" class=\"sr-only\">(success)</span>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/inputs/inputs.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/demo/forms/components/inputs/inputs.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <sa-card title=\"Standard Fields\" baCardClass=\"with-scroll\">\r\n        <box-standard-inputs></box-standard-inputs>\r\n      </sa-card>\r\n      <sa-card title=\"Input Groups\" baCardClass=\"with-scroll\">\r\n        <box-group-inputs></box-group-inputs>\r\n      </sa-card>\r\n      <sa-card title=\"Selects\" baCardClass=\"with-scroll\">\r\n        <box-select-inputs></box-select-inputs>\r\n      </sa-card>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <sa-card title=\"Validation States\" baCardClass=\"with-scroll\">\r\n        <box-validation-inputs></box-validation-inputs>\r\n      </sa-card>\r\n      <sa-card title=\"Checkboxes & Radios\" baCardClass=\"with-scroll\">\r\n        <box-checkbox-inputs></box-checkbox-inputs>\r\n      </sa-card>\r\n      <sa-card title=\"Rating\" baCardClass=\"with-scroll\">\r\n        <box-rating-inputs></box-rating-inputs>\r\n      </sa-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/layouts/components/basicForm/basicForm.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/demo/forms/components/layouts/components/basicForm/basicForm.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"form-group\">\r\n    <label for=\"exampleInputEmail1\">Email address</label>\r\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"exampleInputPassword1\">Password</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n  </div>\r\n  <div class=\"checkbox\">\r\n    <sa-checkbox [(ngModel)]=\"isChecked\" [label]=\"'Check me out'\" [ngModelOptions]=\"{standalone: true}\"></sa-checkbox>\r\n  </div>\r\n  <br>\r\n  <button type=\"submit\" class=\"btn btn-danger\">Submit</button>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/layouts/components/blockForm/blockForm.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/demo/forms/components/layouts/components/blockForm/blockForm.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"form-group\">\r\n      <label for=\"inputFirstName\">First Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"inputFirstName\" placeholder=\"First Name\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"form-group\">\r\n      <label for=\"inputLastName\">Last Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"inputLastName\" placeholder=\"Last Name\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"form-group\">\r\n      <label for=\"inputFirstName\">Email</label>\r\n      <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"form-group\">\r\n      <label for=\"inputWebsite\">Website</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"inputWebsite\" placeholder=\"Website\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/layouts/components/horizontalForm/horizontalForm.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/demo/forms/components/layouts/components/horizontalForm/horizontalForm.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\">\r\n  <div class=\"form-group row\">\r\n    <label for=\"inputEmail3\" class=\"col-sm-2 form-control-label\">Email</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label for=\"inputPassword3\" class=\"col-sm-2 form-control-label\">Password</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"offset-sm-2 col-sm-10\">\r\n      <div class=\"checkbox\">\r\n        <sa-checkbox [(ngModel)]=\"isRemember\" [label]=\"'Remember me'\" [ngModelOptions]=\"{standalone: true}\"></sa-checkbox>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"offset-sm-2 col-sm-10\">\r\n      <button type=\"submit\" class=\"btn btn-warning\">Sign in</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/layouts/components/inlineForm/inlineForm.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/demo/forms/components/layouts/components/inlineForm/inlineForm.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"row form-inline\">\r\n  <div class=\"form-group col-sm-3\">\r\n    <input type=\"text\" class=\"form-control\" id=\"exampleInputName2\" placeholder=\"Name\">\r\n  </div>\r\n  <div class=\"form-group col-sm-3\">\r\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"Email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <div class=\"checkbox\">\r\n      <sa-checkbox [(ngModel)]=\"isRemember\" [label]=\"'Remember me'\" [ngModelOptions]=\"{standalone: true}\"></sa-checkbox>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button type=\"submit\" class=\"btn btn-primary\">Send invitation</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/layouts/components/withoutLabelsForm/withoutLabelsForm.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/demo/forms/components/layouts/components/withoutLabelsForm/withoutLabelsForm.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"form-group\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Recipients\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <textarea class=\"form-control\" placeholder=\"Message\"></textarea>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\">Send</button>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/layouts/layouts.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/demo/forms/components/layouts/layouts.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <sa-card title=\"Inline Form\" baCardClass=\"with-scroll\">\r\n        <box-inline-form></box-inline-form>\r\n      </sa-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div>\r\n        <sa-card title=\"Basic Form\" baCardClass=\"with-scroll\">\r\n          <box-basic-form></box-basic-form>\r\n        </sa-card>\r\n      </div>\r\n\r\n      <div>\r\n        <sa-card title=\"Horizontal Form\" baCardClass=\"with-scroll\">\r\n          <box-horizontal-form></box-horizontal-form>\r\n        </sa-card>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div>\r\n        <sa-card title=\"Form Without Labels\" baCardClass=\"with-scroll\">\r\n          <box-without-labels-form></box-without-labels-form>\r\n        </sa-card>\r\n      </div>\r\n      <div>\r\n        <sa-card title=\"Block Form\" baCardClass=\"with-scroll\">\r\n          <box-block-form></box-block-form>\r\n        </sa-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <sa-card title=\"Picture Uploader\" baCardClass=\"with-scroll\">\r\n        <sa-picture-uploader [(ngModel)]=\"picture\"></sa-picture-uploader>\r\n      </sa-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/demo/forms/components/inputs/components/checkboxInputs/checkboxInputs.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/inputs/components/checkboxInputs/checkboxInputs.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CheckboxInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxInputsComponent", function() { return CheckboxInputsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxInputsComponent = /** @class */ (function () {
    function CheckboxInputsComponent() {
        this.checkboxModel = [{
                name: 'Check 1',
                checked: false,
                class: 'col-md-4'
            }, {
                name: 'Check 2',
                checked: true,
                class: 'col-md-4'
            }, {
                name: 'Check 3',
                checked: false,
                class: 'col-md-4'
            }];
        this.checkboxPropertiesMapping = {
            model: 'checked',
            value: 'name',
            label: 'name',
            baCheckboxClass: 'class'
        };
    }
    CheckboxInputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-checkbox-inputs',
            template: __webpack_require__(/*! raw-loader!./checkboxInputs.html */ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/inputs/components/checkboxInputs/checkboxInputs.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxInputsComponent);
    return CheckboxInputsComponent;
}());



/***/ }),

/***/ "./src/app/pages/demo/forms/components/inputs/components/checkboxInputs/index.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/inputs/components/checkboxInputs/index.ts ***!
  \***************************************************************************************/
/*! exports provided: CheckboxInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkboxInputs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkboxInputs.component */ "./src/app/pages/demo/forms/components/inputs/components/checkboxInputs/checkboxInputs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxInputsComponent", function() { return _checkboxInputs_component__WEBPACK_IMPORTED_MODULE_0__["CheckboxInputsComponent"]; });




/***/ }),

/***/ "./src/app/pages/demo/forms/components/inputs/components/groupInputs/groupInputs.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/inputs/components/groupInputs/groupInputs.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: GroupInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupInputsComponent", function() { return GroupInputsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GroupInputsComponent = /** @class */ (function () {
    function GroupInputsComponent() {
    }
    GroupInputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-group-inputs',
            template: __webpack_require__(/*! raw-loader!./groupInputs.html */ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/inputs/components/groupInputs/groupInputs.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GroupInputsComponent);
    return GroupInputsComponent;
}());



/***/ }),

/***/ "./src/app/pages/demo/forms/components/inputs/components/groupInputs/index.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/inputs/components/groupInputs/index.ts ***!
  \************************************************************************************/
/*! exports provided: GroupInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _groupInputs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groupInputs.component */ "./src/app/pages/demo/forms/components/inputs/components/groupInputs/groupInputs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupInputsComponent", function() { return _groupInputs_component__WEBPACK_IMPORTED_MODULE_0__["GroupInputsComponent"]; });




/***/ }),

/***/ "./src/app/pages/demo/forms/components/inputs/components/ratinginputs/index.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/inputs/components/ratinginputs/index.ts ***!
  \*************************************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ratinginputs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratinginputs.component */ "./src/app/pages/demo/forms/components/inputs/components/ratinginputs/ratinginputs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return _ratinginputs_component__WEBPACK_IMPORTED_MODULE_0__["RatingComponent"]; });




/***/ }),

/***/ "./src/app/pages/demo/forms/components/inputs/components/ratinginputs/ratinginputs.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/inputs/components/ratinginputs/ratinginputs.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.rate1 = 3;
        this.rate2 = 4;
        this.max1 = 5;
        this.max2 = 10;
    }
    RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-rating-inputs',
            template: __webpack_require__(/*! raw-loader!./ratinginputs.html */ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/inputs/components/ratinginputs/ratinginputs.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/pages/demo/forms/components/inputs/components/selectInputs/index.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/inputs/components/selectInputs/index.ts ***!
  \*************************************************************************************/
/*! exports provided: SelectInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selectInputs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectInputs.component */ "./src/app/pages/demo/forms/components/inputs/components/selectInputs/selectInputs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectInputsComponent", function() { return _selectInputs_component__WEBPACK_IMPORTED_MODULE_0__["SelectInputsComponent"]; });




/***/ }),

/***/ "./src/app/pages/demo/forms/components/inputs/components/selectInputs/selectInput.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/inputs/components/selectInputs/selectInput.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select.form-control[multiple] {\n  overflow-y: scroll;\n}\n\nselect.form-control {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXJtb24vUHJvamVjdHMvQmxvZy9hbmd1bGFyLWFkbWluL3NyYy9hcHAvcGFnZXMvZGVtby9mb3Jtcy9jb21wb25lbnRzL2lucHV0cy9jb21wb25lbnRzL3NlbGVjdElucHV0cy9zZWxlY3RJbnB1dC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZW1vL2Zvcm1zL2NvbXBvbmVudHMvaW5wdXRzL2NvbXBvbmVudHMvc2VsZWN0SW5wdXRzL3NlbGVjdElucHV0LnNjc3MiLCIvVXNlcnMvc3VybW9uL1Byb2plY3RzL0Jsb2cvYW5ndWxhci1hZG1pbi9zcmMvYXBwL3RoZW1lL3Nhc3MvYmFzZS9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0VOUTtBREtWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGVtby9mb3Jtcy9jb21wb25lbnRzL2lucHV0cy9jb21wb25lbnRzL3NlbGVjdElucHV0cy9zZWxlY3RJbnB1dC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfmFwcC90aGVtZS9zYXNzL2Jhc2UvaW5pdCc7XG5cbnNlbGVjdC5mb3JtLWNvbnRyb2xbbXVsdGlwbGVdIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG5zZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgY29sb3I6ICRkZWZhdWx0O1xufVxuIiwic2VsZWN0LmZvcm0tY29udHJvbFttdWx0aXBsZV0ge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbnNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICBjb2xvcjogI2ZmZmZmZjtcbn0iLCJcbiRkZWZhdWx0OiAjZmZmZmZmOyAvLyBkZWZhdWx0IGNvbG9ycyBmb3IgbGF5b3V0XG4kYm9keS1iZzogI0YwRjNGNDsgLy8gZGVmYXVsdCBiZyBjb2xvclxuXG4vLyBzaWRlYmFyIGNvbG9yc1xuJHNpZGViYXI6ICMyMzI4MmQ7XG4kc2lkZWJhci10ZXh0OiAjZmZmZmZmO1xuJHNpZGViYXItc3VibGlzdDogIzMyMzczYztcbiRzaWRlYmFyLWJvcmRlcjogIzEwMTkyMDtcblxuJHRvcGJhcjogIzIzMjgyZDtcbiR0b3BiYXItdGV4dDogI2ZmZmZmZjtcbiR0b3BiYXItYm9yZGVyOiAkc2lkZWJhci1ib3JkZXI7XG5cbiRkZWZhdWx0LXRleHQ6ICRkZWZhdWx0OyAvLyBkZWZhdWx0IHRleHQgY29sb3IgbGF5b3V0ICh1c3VhbGx5IGlzIHRoZSBzYW1lIGFzICRkZWZhdWx0KVxuJGNvbnRlbnQtdGV4dDogJGRlZmF1bHQtdGV4dDsgLy8gY29udGVudCB0ZXh0IGNvbG9yIG9uIGNhcmQsIHBhbmVscywgZm9ybSwgZXRjXG4kaGVscC10ZXh0OiByZ2JhKCRkZWZhdWx0LXRleHQsIDAuNSk7IC8vIGFkZGl0aW9uYWwgdGV4dCBjb2xvciBmb3IgaGl0c1xuXG4kbGFiZWwtdGV4dDogJGRlZmF1bHQtdGV4dDsgLy8gbGFiZWxzIGNvbG9yXG4kYm9yZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IC8vIGJvcmRlciBjb2xvclxuJGJvcmRlci1saWdodDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyAvLyBsaWdodGVyIHZlcnNpb24gb2YgYm9yZGVyIGNvbG9yIChmb3IgaG92ZXJzKVxuJGlucHV0LWJvcmRlcjogJHNpZGViYXItc3VibGlzdDsgLy8gaW5wdXQgYm9yZGVyIGNvbG9yXG4kaW5wdXQtYmFja2dyb3VuZDogcmdiYSgkc2lkZWJhci1zdWJsaXN0LCAwLjUpOzsgLy8gaW5wdXQgYm9yZGVyIGNvbG9yIGZvciBob3ZlclxuJGRpc2FibGVkOiAkaW5wdXQtYm9yZGVyOyAvLyBjb2xvciBmb3IgZGlzYWJsZWQgc3RhdGVcbiRkaXNhYmxlZC1iZzogdGludCgkZGlzYWJsZWQsIDE1JSk7IC8vIGJhY2tncm91bmQgY29sb3IgZm9yIGRpc2FibGUgc3RhdGVcbiRkcm9wZG93bi10ZXh0OiAjN2Q3ZDdkOyAvLyBkcm9wZG93biB0ZXh0IGNvbG9yXG5cbi8vIHNwZWNpZmljIGNvbXBvbmVudHMgY29sb3JzXG4kbWFpbC1ib3g6IHdoaXRlc21va2U7XG4kYXV0aC1wYW5lbC1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuJHByb2dyZXNzLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4kcHJvZ3Jlc3MtZGVmYXVsdDogcmdiYSgkZGVmYXVsdC10ZXh0LCAwLjk1KTtcblxuLy8gYm9vdHN0cmFwIGNhcmQgcGFuZWwgc3R5bGVzXG4kYm9vdHN0cmFwLXBhbmVsLXJhZGl1czogN3B4O1xuJGJvb3RzdHJhcC1wYW5lbC10ZXh0OiAjZmZmZmZmO1xuJGJvb3RzdHJhcC1wYW5lbC1iZzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuJGJvb3RzdHJhcC1wYW5lbC1oZWFkZXItYmc6ICR0b3BiYXI7XG4kYm9vdHN0cmFwLXBhbmVsLWhlYWRlci1ib3JkZXI6IDFweCBzb2xpZCAkdG9wYmFyLWJvcmRlcjtcbiRib290c3RyYXAtcGFuZWwtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXG4vLyBjb2xvciBzY2hlbWVcbi8vICRwcmltYXJ5OiAjMjA5ZTkxICFkZWZhdWx0O1xuJHByaW1hcnk6ICMwMTcxNzAgIWRlZmF1bHQ7XG4kaW5mbzogIzM0OThkYiAhZGVmYXVsdDtcbiRzdWNjZXNzOiAjMjg3NTYyICFkZWZhdWx0O1xuJHdhcm5pbmc6ICNmMzljMTIgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAjZTc0YzNjICFkZWZhdWx0O1xuXG4kcHJpbWFyeS1saWdodDogdGludCgkcHJpbWFyeSwgMzAlKTtcbiRpbmZvLWxpZ2h0OiB0aW50KCRpbmZvLCAzMCUpO1xuJHN1Y2Nlc3MtbGlnaHQ6IHRpbnQoJHN1Y2Nlc3MsIDMwJSk7XG4kd2FybmluZy1saWdodDogdGludCgkd2FybmluZywgMzAlKTtcbiRkYW5nZXItbGlnaHQ6IHRpbnQoJGRhbmdlciwgMzAlKTtcblxuJHByaW1hcnktZGFyazogc2hhZGUoJHByaW1hcnksIDE1JSk7XG4kaW5mby1kYXJrOiBzaGFkZSgkaW5mbywgMTUlKTtcbiRzdWNjZXNzLWRhcms6IHNoYWRlKCRzdWNjZXNzLCAxNSUpO1xuJHdhcm5pbmctZGFyazogc2hhZGUoJHdhcm5pbmcsIDE1JSk7XG4kZGFuZ2VyLWRhcms6IHNoYWRlKCRkYW5nZXIsIDE1JSk7XG5cbiRwcmltYXJ5LWJnOiB0aW50KCRwcmltYXJ5LCAyMCUpO1xuJGluZm8tYmc6IHRpbnQoJGluZm8sIDIwJSk7XG4kc3VjY2Vzcy1iZzogdGludCgkc3VjY2VzcywgMjAlKTtcbiR3YXJuaW5nLWJnOiB0aW50KCR3YXJuaW5nLCAyMCUpO1xuJGRhbmdlci1iZzogdGludCgkZGFuZ2VyLCAyMCUpO1xuXG4vLyBsaW5rIGNvbG9yc1xuJGFjdGl2ZWxpbms6ICRkZWZhdWx0O1xuJGhvdmVybGluazogJHByaW1hcnk7XG5cbiRmb250LWZhbWlseTogJ0RJTlJlZ3VsYXInLCBcIlBpbmdGYW5nIFNDXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1JvYm90bycsICdDZW50dXJ5IEdvdGhpYycsIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ01pY3Jvc29mdCB5YWhlaScsICflvq7ova/pm4Xpu5EnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmLCBTaW1IZWk7XG5cbiRyZXNYWEw6IDEyODBweDtcbiRyZXNYTDogMTE3MHB4O1xuJHJlc0w6IDk5MXB4O1xuJHJlc006IDc2OHB4O1xuJHJlc1M6IDY2MHB4O1xuJHJlc1hTOiA1MDBweDtcbiRyZXNYWFM6IDQzNXB4O1xuJHJlc01pbjogMzIwcHg7XG5cbiR0b3AtaGVpZ2h0OiA0NXB4O1xuJHNpZGViYXItd2lkdGg6IDE5MHB4O1xuXG4kc21hbGwtY2FyZC1oZWlnaHQ6IDExNHB4O1xuJHhzbWFsbC1jYXJkLWhlaWdodDogMTg3cHg7XG4kbWVkaXVtLWNhcmQtaGVpZ2h0OiA0MDBweDtcbiRleHRyYS1tZWRpdW0tY2FyZC1oZWlnaHQ6IDU1MHB4O1xuJGxhcmdlLWNhcmQtaGVpZ2h0OiA5NzRweDtcblxuJGRlZmF1bHQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xuJGRlZmF1bHQtYW5pbWF0aW9uLXN0eWxlOiBlYXNlLW91dDtcblxuJGFzc2V0cy1yb290OiAnL2Fzc2V0cy8nO1xuJGltYWdlcy1yb290OiAkYXNzZXRzLXJvb3QgKyAnaW1nLyc7XG4kZm9udHMtcm9vdDogJGFzc2V0cy1yb290ICsgJ2ZvbnRzLyc7XG4kZm9udC10aGluOiAxMDA7XG4kZm9udC1saWdodDogMzAwO1xuJGZvbnQtbm9ybWFsOiA0MDA7XG4kZm9udC1ib2xkOiA3MDA7XG4kZm9udC1ib2xkZXI6IDUwMDtcbiRmb250LXVsdHJhQm9sZDogOTAwO1xuXG4kZmFjZWJvb2stY29sb3I6ICMzYjU5OTg7XG4kdHdpdHRlci1jb2xvcjogIzU1YWNlZTtcbiRnb29nbGUtY29sb3I6ICNkZDRiMzk7XG4kbGlua2VkaW4tY29sb3I6ICMwMTc3QjU7XG4kZ2l0aHViLWNvbG9yOiAjNmI2YjZiO1xuJHN0YWNrb3ZlcmZsb3ctY29sb3I6ICMyRjk2RTg7XG4kZHJpYmJsZS1jb2xvcjogI0YyNjc5ODtcbiRiZWhhY2UtY29sb3I6ICMwMDkzRkE7XG4kYmxhY2stY29sb3I6ICMwMDAwMDA7XG5cbi8vIG1haW4gYmFja2dyb3VuZFxuQG1peGluIGJvZHktYmcoKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnO1xuXG4gIC8vICRtYWluQmdVcmw6ICRpbWFnZXMtcm9vdCArICdibHVyLWJnLWJsdXJyZWQuanBnJztcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgLy8gYmFja2dyb3VuZDogdXJsKCRtYWluQmdVcmwpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNpZGViYXItc3VibGlzdDtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbn1cblxuLy8gYWRkaXRpb25hbCBiYWNrZ3JvdW5kIGlmIHlvdSB3YW50IGFub3RoZXIgbGF5ZXJcbkBtaXhpbiBhZGRpdGlvbmFsLWJnKCkge1xuICAvL2Rpc3BsYXk6IGJsb2NrOyAvLyBhZGRpdGlvbmFsIGJhY2tncm91bmQgbGF5ZXIsIGhpZGRlbiBieSBkZWZhdWx0XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/demo/forms/components/inputs/components/selectInputs/selectInputs.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/inputs/components/selectInputs/selectInputs.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: SelectInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectInputsComponent", function() { return SelectInputsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectInputsComponent = /** @class */ (function () {
    function SelectInputsComponent() {
    }
    SelectInputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-select-inputs',
            template: __webpack_require__(/*! raw-loader!./selectInputs.html */ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/inputs/components/selectInputs/selectInputs.html"),
            styles: [__webpack_require__(/*! ./selectInput.scss */ "./src/app/pages/demo/forms/components/inputs/components/selectInputs/selectInput.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectInputsComponent);
    return SelectInputsComponent;
}());



/***/ }),

/***/ "./src/app/pages/demo/forms/components/inputs/components/standardInputs/index.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/inputs/components/standardInputs/index.ts ***!
  \***************************************************************************************/
/*! exports provided: StandardInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _standardInputs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./standardInputs.component */ "./src/app/pages/demo/forms/components/inputs/components/standardInputs/standardInputs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StandardInputsComponent", function() { return _standardInputs_component__WEBPACK_IMPORTED_MODULE_0__["StandardInputsComponent"]; });




/***/ }),

/***/ "./src/app/pages/demo/forms/components/inputs/components/standardInputs/standardInputs.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/inputs/components/standardInputs/standardInputs.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: StandardInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardInputsComponent", function() { return StandardInputsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StandardInputsComponent = /** @class */ (function () {
    function StandardInputsComponent() {
    }
    StandardInputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-standard-inputs',
            template: __webpack_require__(/*! raw-loader!./standardInputs.html */ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/inputs/components/standardInputs/standardInputs.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StandardInputsComponent);
    return StandardInputsComponent;
}());



/***/ }),

/***/ "./src/app/pages/demo/forms/components/inputs/components/validationInputs/index.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/inputs/components/validationInputs/index.ts ***!
  \*****************************************************************************************/
/*! exports provided: ValidationInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validationInputs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validationInputs.component */ "./src/app/pages/demo/forms/components/inputs/components/validationInputs/validationInputs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationInputsComponent", function() { return _validationInputs_component__WEBPACK_IMPORTED_MODULE_0__["ValidationInputsComponent"]; });




/***/ }),

/***/ "./src/app/pages/demo/forms/components/inputs/components/validationInputs/validationInputs.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/inputs/components/validationInputs/validationInputs.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ValidationInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationInputsComponent", function() { return ValidationInputsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidationInputsComponent = /** @class */ (function () {
    function ValidationInputsComponent() {
        this.checkboxModel = [{
                name: 'Checkbox with success',
                state: false,
                class: 'has-success checkbox'
            }, {
                name: 'Checkbox with warning',
                state: false,
                class: 'has-warning checkbox',
            }, {
                name: 'Checkbox with error',
                state: false,
                class: 'has-error checkbox'
            }];
        this.checkboxPropertiesMapping = {
            model: 'state',
            value: 'name',
            label: 'name',
            baCheckboxClass: 'class'
        };
    }
    ValidationInputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-validation-inputs',
            template: __webpack_require__(/*! raw-loader!./validationInputs.html */ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/inputs/components/validationInputs/validationInputs.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidationInputsComponent);
    return ValidationInputsComponent;
}());



/***/ }),

/***/ "./src/app/pages/demo/forms/components/inputs/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/inputs/index.ts ***!
  \*************************************************************/
/*! exports provided: InputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inputs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputs.component */ "./src/app/pages/demo/forms/components/inputs/inputs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputsComponent", function() { return _inputs_component__WEBPACK_IMPORTED_MODULE_0__["InputsComponent"]; });




/***/ }),

/***/ "./src/app/pages/demo/forms/components/inputs/inputs.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/inputs/inputs.component.ts ***!
  \************************************************************************/
/*! exports provided: InputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsComponent", function() { return InputsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @file Demo Input 表单演示页面
 * @module app/page/demo/component/forms/input
 * @author Surmon <https://github.com/surmon-china>
 */


var InputsComponent = /** @class */ (function () {
    function InputsComponent() {
    }
    InputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-inputs',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! raw-loader!./inputs.html */ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/inputs/inputs.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputsComponent);
    return InputsComponent;
}());



/***/ }),

/***/ "./src/app/pages/demo/forms/components/layouts/components/basicForm/basicForm.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/layouts/components/basicForm/basicForm.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: BasicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFormComponent", function() { return BasicFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicFormComponent = /** @class */ (function () {
    function BasicFormComponent() {
    }
    BasicFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-basic-form',
            template: __webpack_require__(/*! raw-loader!./basicForm.html */ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/layouts/components/basicForm/basicForm.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicFormComponent);
    return BasicFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/demo/forms/components/layouts/components/basicForm/index.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/layouts/components/basicForm/index.ts ***!
  \***********************************************************************************/
/*! exports provided: BasicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basicForm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicForm.component */ "./src/app/pages/demo/forms/components/layouts/components/basicForm/basicForm.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicFormComponent", function() { return _basicForm_component__WEBPACK_IMPORTED_MODULE_0__["BasicFormComponent"]; });




/***/ }),

/***/ "./src/app/pages/demo/forms/components/layouts/components/blockForm/blockForm.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/layouts/components/blockForm/blockForm.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: BlockFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockFormComponent", function() { return BlockFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlockFormComponent = /** @class */ (function () {
    function BlockFormComponent() {
    }
    BlockFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-block-form',
            template: __webpack_require__(/*! raw-loader!./blockForm.html */ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/layouts/components/blockForm/blockForm.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlockFormComponent);
    return BlockFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/demo/forms/components/layouts/components/blockForm/index.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/layouts/components/blockForm/index.ts ***!
  \***********************************************************************************/
/*! exports provided: BlockFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blockForm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockForm.component */ "./src/app/pages/demo/forms/components/layouts/components/blockForm/blockForm.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockFormComponent", function() { return _blockForm_component__WEBPACK_IMPORTED_MODULE_0__["BlockFormComponent"]; });




/***/ }),

/***/ "./src/app/pages/demo/forms/components/layouts/components/horizontalForm/horizontalForm.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/layouts/components/horizontalForm/horizontalForm.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: HorizontalFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalFormComponent", function() { return HorizontalFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HorizontalFormComponent = /** @class */ (function () {
    function HorizontalFormComponent() {
    }
    HorizontalFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-horizontal-form',
            template: __webpack_require__(/*! raw-loader!./horizontalForm.html */ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/layouts/components/horizontalForm/horizontalForm.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HorizontalFormComponent);
    return HorizontalFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/demo/forms/components/layouts/components/horizontalForm/index.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/layouts/components/horizontalForm/index.ts ***!
  \****************************************************************************************/
/*! exports provided: HorizontalFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _horizontalForm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horizontalForm.component */ "./src/app/pages/demo/forms/components/layouts/components/horizontalForm/horizontalForm.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HorizontalFormComponent", function() { return _horizontalForm_component__WEBPACK_IMPORTED_MODULE_0__["HorizontalFormComponent"]; });




/***/ }),

/***/ "./src/app/pages/demo/forms/components/layouts/components/inlineForm/index.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/layouts/components/inlineForm/index.ts ***!
  \************************************************************************************/
/*! exports provided: InlineFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inlineForm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inlineForm.component */ "./src/app/pages/demo/forms/components/layouts/components/inlineForm/inlineForm.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineFormComponent", function() { return _inlineForm_component__WEBPACK_IMPORTED_MODULE_0__["InlineFormComponent"]; });




/***/ }),

/***/ "./src/app/pages/demo/forms/components/layouts/components/inlineForm/inlineForm.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/layouts/components/inlineForm/inlineForm.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: InlineFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineFormComponent", function() { return InlineFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InlineFormComponent = /** @class */ (function () {
    function InlineFormComponent() {
    }
    InlineFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-inline-form',
            template: __webpack_require__(/*! raw-loader!./inlineForm.html */ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/layouts/components/inlineForm/inlineForm.html"),
            styles: [__webpack_require__(/*! ./inlineForm.scss */ "./src/app/pages/demo/forms/components/layouts/components/inlineForm/inlineForm.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InlineFormComponent);
    return InlineFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/demo/forms/components/layouts/components/inlineForm/inlineForm.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/layouts/components/inlineForm/inlineForm.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox {\n  display: inline-block;\n  margin-bottom: -12px;\n  margin-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXJtb24vUHJvamVjdHMvQmxvZy9hbmd1bGFyLWFkbWluL3NyYy9hcHAvcGFnZXMvZGVtby9mb3Jtcy9jb21wb25lbnRzL2xheW91dHMvY29tcG9uZW50cy9pbmxpbmVGb3JtL2lubGluZUZvcm0uc2NzcyIsInNyYy9hcHAvcGFnZXMvZGVtby9mb3Jtcy9jb21wb25lbnRzL2xheW91dHMvY29tcG9uZW50cy9pbmxpbmVGb3JtL2lubGluZUZvcm0uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGVtby9mb3Jtcy9jb21wb25lbnRzL2xheW91dHMvY29tcG9uZW50cy9pbmxpbmVGb3JtL2lubGluZUZvcm0uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IC0xMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcbiIsIi5jaGVja2JveCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogLTEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/demo/forms/components/layouts/components/withoutLabelsForm/index.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/layouts/components/withoutLabelsForm/index.ts ***!
  \*******************************************************************************************/
/*! exports provided: WithoutLabelsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withoutLabelsForm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withoutLabelsForm.component */ "./src/app/pages/demo/forms/components/layouts/components/withoutLabelsForm/withoutLabelsForm.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WithoutLabelsFormComponent", function() { return _withoutLabelsForm_component__WEBPACK_IMPORTED_MODULE_0__["WithoutLabelsFormComponent"]; });




/***/ }),

/***/ "./src/app/pages/demo/forms/components/layouts/components/withoutLabelsForm/withoutLabelsForm.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/layouts/components/withoutLabelsForm/withoutLabelsForm.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: WithoutLabelsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutLabelsFormComponent", function() { return WithoutLabelsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WithoutLabelsFormComponent = /** @class */ (function () {
    function WithoutLabelsFormComponent() {
    }
    WithoutLabelsFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-without-labels-form',
            template: __webpack_require__(/*! raw-loader!./withoutLabelsForm.html */ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/layouts/components/withoutLabelsForm/withoutLabelsForm.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WithoutLabelsFormComponent);
    return WithoutLabelsFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/demo/forms/components/layouts/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/layouts/index.ts ***!
  \**************************************************************/
/*! exports provided: LayoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts.component */ "./src/app/pages/demo/forms/components/layouts/layouts.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutsComponent", function() { return _layouts_component__WEBPACK_IMPORTED_MODULE_0__["LayoutsComponent"]; });




/***/ }),

/***/ "./src/app/pages/demo/forms/components/layouts/layouts.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/demo/forms/components/layouts/layouts.component.ts ***!
  \**************************************************************************/
/*! exports provided: LayoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsComponent", function() { return LayoutsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @file Demo Layout 表单演示页面
 * @module app/page/demo/component/forms/layout
 * @author Surmon <https://github.com/surmon-china>
 */


var LayoutsComponent = /** @class */ (function () {
    function LayoutsComponent() {
        this.picture = 'assets/images/theme/no-photo.png';
    }
    LayoutsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-layouts',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! raw-loader!./layouts.html */ "./node_modules/raw-loader/index.js!./src/app/pages/demo/forms/components/layouts/layouts.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutsComponent);
    return LayoutsComponent;
}());



/***/ }),

/***/ "./src/app/pages/demo/forms/forms.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/demo/forms/forms.component.ts ***!
  \*****************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @file Demo 表单演示页面
 * @module app/page/demo/component/forms
 * @author Surmon <https://github.com/surmon-china>
 */


var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
    }
    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-forms',
            template: "<router-outlet></router-outlet>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/pages/demo/forms/forms.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/demo/forms/forms.module.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_sa_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/sa.module */ "./src/app/sa.module.ts");
/* harmony import */ var _forms_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms.routing */ "./src/app/pages/demo/forms/forms.routing.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms.component */ "./src/app/pages/demo/forms/forms.component.ts");
/* harmony import */ var _components_inputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inputs */ "./src/app/pages/demo/forms/components/inputs/index.ts");
/* harmony import */ var _components_layouts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/layouts */ "./src/app/pages/demo/forms/components/layouts/index.ts");
/* harmony import */ var _components_inputs_components_standardInputs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/inputs/components/standardInputs */ "./src/app/pages/demo/forms/components/inputs/components/standardInputs/index.ts");
/* harmony import */ var _components_inputs_components_validationInputs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/inputs/components/validationInputs */ "./src/app/pages/demo/forms/components/inputs/components/validationInputs/index.ts");
/* harmony import */ var _components_inputs_components_groupInputs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/inputs/components/groupInputs */ "./src/app/pages/demo/forms/components/inputs/components/groupInputs/index.ts");
/* harmony import */ var _components_inputs_components_checkboxInputs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/inputs/components/checkboxInputs */ "./src/app/pages/demo/forms/components/inputs/components/checkboxInputs/index.ts");
/* harmony import */ var _components_inputs_components_ratinginputs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/inputs/components/ratinginputs */ "./src/app/pages/demo/forms/components/inputs/components/ratinginputs/index.ts");
/* harmony import */ var _components_inputs_components_selectInputs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/inputs/components/selectInputs */ "./src/app/pages/demo/forms/components/inputs/components/selectInputs/index.ts");
/* harmony import */ var _components_layouts_components_inlineForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/layouts/components/inlineForm */ "./src/app/pages/demo/forms/components/layouts/components/inlineForm/index.ts");
/* harmony import */ var _components_layouts_components_blockForm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/layouts/components/blockForm */ "./src/app/pages/demo/forms/components/layouts/components/blockForm/index.ts");
/* harmony import */ var _components_layouts_components_horizontalForm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/layouts/components/horizontalForm */ "./src/app/pages/demo/forms/components/layouts/components/horizontalForm/index.ts");
/* harmony import */ var _components_layouts_components_basicForm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/layouts/components/basicForm */ "./src/app/pages/demo/forms/components/layouts/components/basicForm/index.ts");
/* harmony import */ var _components_layouts_components_withoutLabelsForm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/layouts/components/withoutLabelsForm */ "./src/app/pages/demo/forms/components/layouts/components/withoutLabelsForm/index.ts");
/**
 * @file Demo 表单演示模块
 * @module app/page/demo/component/forms/module
 * @author Surmon <https://github.com/surmon-china>
 */





















var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_sa_module__WEBPACK_IMPORTED_MODULE_4__["SaModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["RatingModule"].forRoot(),
                _forms_routing__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            declarations: [
                _components_layouts__WEBPACK_IMPORTED_MODULE_9__["LayoutsComponent"],
                _components_inputs__WEBPACK_IMPORTED_MODULE_8__["InputsComponent"],
                _forms_component__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"],
                _components_inputs_components_standardInputs__WEBPACK_IMPORTED_MODULE_10__["StandardInputsComponent"],
                _components_inputs_components_validationInputs__WEBPACK_IMPORTED_MODULE_11__["ValidationInputsComponent"],
                _components_inputs_components_groupInputs__WEBPACK_IMPORTED_MODULE_12__["GroupInputsComponent"],
                _components_inputs_components_checkboxInputs__WEBPACK_IMPORTED_MODULE_13__["CheckboxInputsComponent"],
                _components_inputs_components_ratinginputs__WEBPACK_IMPORTED_MODULE_14__["RatingComponent"],
                _components_inputs_components_selectInputs__WEBPACK_IMPORTED_MODULE_15__["SelectInputsComponent"],
                _components_layouts_components_inlineForm__WEBPACK_IMPORTED_MODULE_16__["InlineFormComponent"],
                _components_layouts_components_blockForm__WEBPACK_IMPORTED_MODULE_17__["BlockFormComponent"],
                _components_layouts_components_horizontalForm__WEBPACK_IMPORTED_MODULE_18__["HorizontalFormComponent"],
                _components_layouts_components_basicForm__WEBPACK_IMPORTED_MODULE_19__["BasicFormComponent"],
                _components_layouts_components_withoutLabelsForm__WEBPACK_IMPORTED_MODULE_20__["WithoutLabelsFormComponent"]
            ]
        })
    ], FormsModule);
    return FormsModule;
}());
/* harmony default export */ __webpack_exports__["default"] = (FormsModule);


/***/ }),

/***/ "./src/app/pages/demo/forms/forms.routing.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/demo/forms/forms.routing.ts ***!
  \***************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.component */ "./src/app/pages/demo/forms/forms.component.ts");
/* harmony import */ var _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/inputs/inputs.component */ "./src/app/pages/demo/forms/components/inputs/inputs.component.ts");
/* harmony import */ var _components_layouts_layouts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layouts/layouts.component */ "./src/app/pages/demo/forms/components/layouts/layouts.component.ts");
/**
 * @file Demo 表单演示路由
 * @module app/page/demo/component/forms/routes
 * @author Surmon <https://github.com/surmon-china>
 */




var routes = [
    {
        path: '',
        component: _forms_component__WEBPACK_IMPORTED_MODULE_1__["FormsComponent"],
        children: [
            { path: 'inputs', component: _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_2__["InputsComponent"] },
            { path: 'layouts', component: _components_layouts_layouts_component__WEBPACK_IMPORTED_MODULE_3__["LayoutsComponent"] }
        ]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=demo-forms-forms-module-es5.js.map