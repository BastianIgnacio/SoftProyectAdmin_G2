(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"],{

/***/ "./src/app/views/dashboard/dashboad-default/dashboad-default.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboad-default/dashboad-default.component.ts ***!
  \********************************************************************************/
/*! exports provided: DashboadDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboadDefaultComponent", function() { return DashboadDefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/usuarios.service */ "./src/app/_services/usuarios.service.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm5/ngx-echarts.js");





var DashboadDefaultComponent = /** @class */ (function () {
    function DashboadDefaultComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.salesChartPie = {
            color: ['#62549c', '#7566b5', '#7d6cbb', '#8877bd', '#9181bd', '#6957af'],
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)'
            },
            xAxis: [{
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            yAxis: [{
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [{
                    name: 'Proyectos',
                    type: 'pie',
                    radius: '75%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 0, name: 'Activo' },
                        { value: 0, name: 'Inactivo' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        this.userService.infoDash().subscribe(function (data) {
            _this.info = data;
            var info2 = null;
            data.usuarios.forEach(function (element) {
                info2 = {
                    admin: 0,
                    student: 0,
                    teacher: 0
                };
                if (element.profile === 'admin') {
                    info2.admin = element.count;
                }
                else if (element.profile === 'student') {
                    info2.student = element.count;
                }
                else if (element.profile === 'teacher') {
                    info2.teacher = element.count;
                }
            });
            _this.info.usuarios = info2;
            _this.dataProyectos = {
                series: {
                    data: [
                        { value: _this.info.proyectos[0].activos, name: 'Activo' },
                        { value: _this.info.proyectos[1].inactivos, name: 'Inactivo' }
                    ]
                }
            };
            _this.dataCursos = {
                series: {
                    data: [
                        { value: _this.info.cursos[0].activos, name: 'Activo' },
                        { value: _this.info.cursos[1].inactivos, name: 'Inactivo' }
                    ]
                }
            };
        });
    }
    DashboadDefaultComponent.prototype.ngOnInit = function () {
    };
    DashboadDefaultComponent.prototype.onChartInit = function (e) {
    };
    DashboadDefaultComponent.ɵfac = function DashboadDefaultComponent_Factory(t) { return new (t || DashboadDefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__["UsuariosService"])); };
    DashboadDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboadDefaultComponent, selectors: [["app-dashboad-default"]], decls: 84, vars: 11, consts: [[1, ""], [1, "row"], [1, "breadcrumb", "col-md-9"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "col-lg-8", "col-md-12"], [1, "card", "mb-4"], [1, "card-body"], [1, "card-title"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "card", "card-icon", "mb-4"], [1, "card-body", "text-center"], [1, "i-Administrator"], [1, "text-muted", "mt-2", "mb-2"], [1, "text-primary", "text-24", "line-height-1", "m-0"], [1, "i-Business-Mens"], [1, "col-lg-4", "col-sm-12"], ["echarts", "", 2, "height", "182px", 3, "options", "autoResize"], ["echarts", "", 2, "height", "182px", 3, "options", "merge", "autoResize"], [1, "col-lg-3", "col-md-6", "col-sm-6"], [1, "i-Library"], [1, "i-Close-Window"], [1, "i-Book"]], template: function DashboadDefaultComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Usuarios");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Administradores");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Docentes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Estudiantes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Proyectos");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Cursos");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Cursos");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Totales");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Finalizados");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Activos");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.usuarios.admin);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.usuarios.teacher);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.usuarios.student);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.salesChartPie)("autoResize", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.salesChartPie)("merge", ctx.dataProyectos)("autoResize", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.usuarios.admin);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.usuarios.teacher);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.usuarios.student);
        } }, directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9kYXNoYm9hZC1kZWZhdWx0L2Rhc2hib2FkLWRlZmF1bHQuY29tcG9uZW50LmNzcyJ9 */"] });
    return DashboadDefaultComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboadDefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboad-default',
                templateUrl: './dashboad-default.component.html',
                styleUrls: ['./dashboad-default.component.css']
            }]
    }], function () { return [{ type: src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__["UsuariosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _dashboad_default_dashboad_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboad-default/dashboad-default.component */ "./src/app/views/dashboard/dashboad-default/dashboad-default.component.ts");





var routes = [
    {
        path: 'v1',
        component: _dashboad_default_dashboad_default_component__WEBPACK_IMPORTED_MODULE_2__["DashboadDefaultComponent"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
    DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return DashboardRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-custom-validators */ "./node_modules/ngx-custom-validators/__ivy_ngcc__/fesm5/ngx-custom-validators.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/__ivy_ngcc__/fesm5/ngx-chips.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/views/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboad_default_dashboad_default_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboad-default/dashboad-default.component */ "./src/app/views/dashboard/dashboad-default/dashboad-default.component.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm5/ngx-echarts.js");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm5/swimlane-ngx-datatable.js");












var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingModule"],
                ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomFormsModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputModule"]
            ]] });
    return DashboardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboad_default_dashboad_default_component__WEBPACK_IMPORTED_MODULE_7__["DashboadDefaultComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"],
        ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingModule"],
        ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomFormsModule"],
        ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingModule"],
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomFormsModule"],
                    ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputModule"]
                ],
                declarations: [_dashboad_default_dashboad_default_component__WEBPACK_IMPORTED_MODULE_7__["DashboadDefaultComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-dashboard-dashboard-module.js.map