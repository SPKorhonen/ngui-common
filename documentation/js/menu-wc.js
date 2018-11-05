'use strict';



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

customElements.define('compodoc-menu', function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.isNormalMode = _this.getAttribute('mode') === 'normal';
        return _this;
    }

    _createClass(_class, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.render(this.isNormalMode);
        }
    }, {
        key: 'render',
        value: function render(isNormalMode) {
            let tp = lithtml.html(
'<nav>\n    <ul class="list">\n        <li class="title">\n            \n                <a href="index.html" data-type="index-link">@ngui/common-app documentation</a>\n            \n        </li>\n\n        <li class="divider"></li>\n        ' + (isNormalMode ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>' : '') + '\n        <li class="chapter">\n            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n            <ul class="links">\n                \n                    <li class="link">\n                        <a href="overview.html" data-type="chapter-link">\n                            <span class="icon ion-ios-keypad"></span>Overview\n                        </a>\n                    </li>\n                    <li class="link">\n                        <a href="index.html" data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>README\n                        </a>\n                    </li>\n                \n                \n                    <li class="link">\n                        \n                            <a href="changelog.html"\n                        \n                        data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>CHANGELOG\n                        </a>\n                    </li>\n                \n                    <li class="link">\n                        \n                            <a href="license.html"\n                        \n                        data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>LICENSE\n                        </a>\n                    </li>\n                \n                \n                    <li class="link">\n                        <a href="dependencies.html"\n                            data-type="chapter-link">\n                            <span class="icon ion-ios-list"></span>Dependencies\n                        </a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        <li class="chapter modules">\n            <a data-type="chapter-link" href="modules.html">\n                <div class="menu-toggler linked" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"') + '>\n                    <span class="icon ion-ios-archive"></span>\n                    <span class="link-name">Modules</span>\n                    <span class="icon ion-ios-arrow-down"></span>\n                </div>\n            </a>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"') + '>\n                \n                    <li class="link">\n                        <a href="modules/NguiCommonModule.html" data-type="entity-link">NguiCommonModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/NguiInviewModule.html" data-type="entity-link">NguiInviewModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-NguiInviewModule-0e40755c2e842f790c160ca6e691576e"' : 'data-target="#xs-components-links-module-NguiInviewModule-0e40755c2e842f790c160ca6e691576e"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-NguiInviewModule-0e40755c2e842f790c160ca6e691576e"' : 'id="xs-components-links-module-NguiInviewModule-0e40755c2e842f790c160ca6e691576e"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/NguiInviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NguiInviewComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#directives-links-module-NguiInviewModule-0e40755c2e842f790c160ca6e691576e"' : 'data-target="#xs-directives-links-module-NguiInviewModule-0e40755c2e842f790c160ca6e691576e"') + '>\n                                    <span class="icon ion-md-code-working"></span>\n                                    <span>Directives</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="directives-links-module-NguiInviewModule-0e40755c2e842f790c160ca6e691576e"' : 'id="xs-directives-links-module-NguiInviewModule-0e40755c2e842f790c160ca6e691576e"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="directives/NguiInviewDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NguiInviewDirective</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/NguiListModule.html" data-type="entity-link">NguiListModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-NguiListModule-c6651439f955e940ad915bb103e71fd0"' : 'data-target="#xs-components-links-module-NguiListModule-c6651439f955e940ad915bb103e71fd0"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-NguiListModule-c6651439f955e940ad915bb103e71fd0"' : 'id="xs-components-links-module-NguiListModule-c6651439f955e940ad915bb103e71fd0"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/NguiAutocompleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NguiAutocompleteComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/NguiInviewPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NguiInviewPageComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/NguiVirtualListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NguiVirtualListComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#directives-links-module-NguiListModule-c6651439f955e940ad915bb103e71fd0"' : 'data-target="#xs-directives-links-module-NguiListModule-c6651439f955e940ad915bb103e71fd0"') + '>\n                                    <span class="icon ion-md-code-working"></span>\n                                    <span>Directives</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="directives-links-module-NguiListModule-c6651439f955e940ad915bb103e71fd0"' : 'id="xs-directives-links-module-NguiListModule-c6651439f955e940ad915bb103e71fd0"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="directives/NguiListDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NguiListDirective</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="directives/NguiListItemDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NguiListItemDirective</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/NguiUtilsModule.html" data-type="entity-link">NguiUtilsModule</a>\n                        \n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#injectables-links-module-NguiUtilsModule-ef6cd7af1d5ccb0d7b821527ade9ffb7"' : 'data-target="#xs-injectables-links-module-NguiUtilsModule-ef6cd7af1d5ccb0d7b821527ade9ffb7"') + '>\n                                    <span class="icon ion-md-arrow-round-down"></span>\n                                    <span>Injectables</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="injectables-links-module-NguiUtilsModule-ef6cd7af1d5ccb0d7b821527ade9ffb7"' : 'id="xs-injectables-links-module-NguiUtilsModule-ef6cd7af1d5ccb0d7b821527ade9ffb7"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/DynamicComponentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DynamicComponentService</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#pipes-links-module-NguiUtilsModule-ef6cd7af1d5ccb0d7b821527ade9ffb7"' : 'data-target="#xs-pipes-links-module-NguiUtilsModule-ef6cd7af1d5ccb0d7b821527ade9ffb7"') + '>\n                                    <span class="icon ion-md-add"></span>\n                                    <span>Pipes</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="pipes-links-module-NguiUtilsModule-ef6cd7af1d5ccb0d7b821527ade9ffb7"' : 'id="xs-pipes-links-module-NguiUtilsModule-ef6cd7af1d5ccb0d7b821527ade9ffb7"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="pipes/NguiHighlightPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NguiHighlightPipe</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n        \n        \n        \n            \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"') + '>\n                <span class="icon ion-ios-paper"></span>\n                <span>Classes</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"') + '>\n                \n                    <li class="link">\n                        <a href="classes/konsole.html" data-type="entity-link">konsole</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/NoMatchFound.html" data-type="entity-link">NoMatchFound</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/NoneSelect.html" data-type="entity-link">NoneSelect</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                        ' + (isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"') + '>\n                        <span class="icon ion-md-arrow-round-down"></span>\n                        <span>Injectables</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"') + '>\n                        \n                            <li class="link">\n                                <a href="injectables/DynamicComponentService.html" data-type="entity-link">DynamicComponentService</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        \n        \n        \n            \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"') + '>\n                <span class="icon ion-ios-cube"></span>\n                <span>Miscellaneous</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"') + '>\n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>\n                    </li>\n                \n                \n                \n            </ul>\n        </li>\n        \n        \n            \n        \n        \n        <li class="chapter">\n            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n        </li>\n        \n        \n        \n        <li class="divider"></li>\n        <li class="copyright">\n                Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                    \n                        \n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        \n                    \n                </a>\n        </li>\n        \n    </ul>\n</nav>'
);
        this.innerHTML = tp.strings;
        }
    }]);

    return _class;
}(HTMLElement));