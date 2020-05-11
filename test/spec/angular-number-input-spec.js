/*global assert: false, inject: false */

describe('number-input', function () {
    'use strict';

    beforeEach(window.angular.mock.module('testServices'));
    beforeEach(window.angular.mock.module('number-input'));

    describe('validations', function () {
        it('none', inject(function ($compile, $rootScope) {
            const scope = $rootScope.$new();

            let element = angular.element('<input type="text" class="number-input" ng-model="value">');
            element = $compile(element)(scope);

            scope.value = 10;

            scope.$apply();

            assert.equal(element.val(), '10');
        }));

        describe('min', function () {
            it('wrong definition', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" min="abc"></form>');
                    element = $compile(element)(scope);

                    scope.value = 10;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '10');
                        assert.equal(scope.value, 10);
                        assert.isTrue(scope.testForm.$valid);

                        done();
                    }, 0);
                });
            });

            it('valid not exact', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" min="5"></form>');
                    element = $compile(element)(scope);

                    scope.value = 10;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '10');
                        assert.equal(scope.value, 10);
                        assert.isTrue(scope.testForm.$valid);

                        done();
                    }, 0);
                });
            });

            it('valid exact', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" min="10"></form>');
                    element = $compile(element)(scope);

                    scope.value = 10;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '10');
                        assert.equal(scope.value, 10);
                        assert.isTrue(scope.testForm.$valid);

                        done();
                    }, 0);
                });
            });

            it('invalid', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" min="100"></form>');
                    element = $compile(element)(scope);

                    scope.value = 10;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '');
                        assert.equal(scope.value, undefined);
                        assert.isTrue(scope.testForm.$invalid);

                        done();
                    }, 0);
                });
            });

            it('valid from service', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" service="minValidation"></form>');
                    element = $compile(element)(scope);

                    scope.value = 10;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '10');
                        assert.equal(scope.value, 10);
                        assert.isTrue(scope.testForm.$valid);

                        done();
                    }, 0);
                });
            });

            it('invalid from service', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" service="minValidation"></form>');
                    element = $compile(element)(scope);

                    scope.value = 1;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '');
                        assert.equal(scope.value, undefined);
                        assert.isFalse(scope.testForm.$valid);

                        done();
                    }, 0);
                });
            });
        });

        describe('max', function () {
            it('wrong definition', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" max="abc"></form>');
                    element = $compile(element)(scope);

                    scope.value = 10;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '10');
                        assert.equal(scope.value, 10);
                        assert.isTrue(scope.testForm.$valid);

                        done();
                    }, 0);
                });
            });

            it('valid not exact', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" max="5"></form>');
                    element = $compile(element)(scope);

                    scope.value = 2;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '2');
                        assert.equal(scope.value, 2);
                        assert.isTrue(scope.testForm.$valid);

                        done();
                    }, 0);
                });
            });

            it('valid exact', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" max="10"></form>');
                    element = $compile(element)(scope);

                    scope.value = 10;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '10');
                        assert.equal(scope.value, 10);
                        assert.isTrue(scope.testForm.$valid);

                        done();
                    }, 0);
                });
            });

            it('invalid', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" max="100"></form>');
                    element = $compile(element)(scope);

                    scope.value = 1000;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '');
                        assert.equal(scope.value, undefined);
                        assert.isTrue(scope.testForm.$invalid);

                        done();
                    }, 0);
                });
            });

            it('valid from service', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" service="maxValidation"></form>');
                    element = $compile(element)(scope);

                    scope.value = 50;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '50');
                        assert.equal(scope.value, 50);
                        assert.isTrue(scope.testForm.$valid);

                        done();
                    }, 0);
                });
            });

            it('invalid from service', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" service="maxValidation"></form>');
                    element = $compile(element)(scope);

                    scope.value = 500;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '');
                        assert.equal(scope.value, undefined);
                        assert.isFalse(scope.testForm.$valid);

                        done();
                    }, 0);
                });
            });
        });

        describe('step', function () {
            it('wrong definition', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" step="abc"></form>');
                    element = $compile(element)(scope);

                    scope.value = 10;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '10');
                        assert.equal(scope.value, 10);
                        assert.isTrue(scope.testForm.$valid);

                        done();
                    }, 0);
                });
            });

            it('valid', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" step="0.5"></form>');
                    element = $compile(element)(scope);

                    scope.value = 10.5;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '10.5');
                        assert.equal(scope.value, 10.5);
                        assert.isTrue(scope.testForm.$valid);

                        done();
                    }, 0);
                });
            });

            it('invalid', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" step="0.5"></form>');
                    element = $compile(element)(scope);

                    scope.value = 10.3;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '');
                        assert.equal(scope.value, undefined);
                        assert.isTrue(scope.testForm.$invalid);

                        done();
                    }, 0);
                });
            });

            it('valid from service', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" service="stepValidation"></form>');
                    element = $compile(element)(scope);

                    scope.value = 20;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '20');
                        assert.equal(scope.value, 20);
                        assert.isTrue(scope.testForm.$valid);

                        done();
                    }, 0);
                });
            });

            it('invalid from service', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" service="stepValidation"></form>');
                    element = $compile(element)(scope);

                    scope.value = 23;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '');
                        assert.equal(scope.value, undefined);
                        assert.isFalse(scope.testForm.$valid);

                        done();
                    }, 0);
                });
            });

            it('valid without big', function (done) {
                inject(function ($compile, $rootScope) {
                    const big = window.Big;
                    assert.isDefined(big);
                    delete window.Big;

                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" step="0.5"></form>');
                    element = $compile(element)(scope);

                    scope.value = 10.5;

                    scope.$apply();

                    window.Big = big;

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '10.5');
                        assert.equal(scope.value, 10.5);
                        assert.isTrue(scope.testForm.$valid);

                        done();
                    }, 0);
                });
            });

            it('invalid without big', function (done) {
                inject(function ($compile, $rootScope) {
                    const big = window.Big;
                    assert.isDefined(big);
                    delete window.Big;

                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" step="0.5"></form>');
                    element = $compile(element)(scope);

                    scope.value = 10.3;

                    scope.$apply();

                    window.Big = big;

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '');
                        assert.equal(scope.value, undefined);
                        assert.isTrue(scope.testForm.$invalid);

                        done();
                    }, 0);
                });
            });
        });

        describe('external', function () {
            it('wrong definition', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" validation="abc"></form>');
                    element = $compile(element)(scope);

                    scope.value = 10;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '10');
                        assert.equal(scope.value, 10);
                        assert.isTrue(scope.testForm.$valid);

                        done();
                    }, 0);
                });
            });

            it('valid', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" validation="myValidator"></form>');
                    element = $compile(element)(scope);

                    scope.myValidator = function (modelValue) {
                        assert.equal(modelValue, 10.5);

                        return true;
                    };
                    scope.value = 10.5;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '10.5');
                        assert.equal(scope.value, 10.5);
                        assert.isTrue(scope.testForm.$valid);

                        done();
                    }, 0);
                });
            });

            it('invalid', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" class="number-input" ng-model="value" validation="myValidator"></form>');
                    element = $compile(element)(scope);

                    scope.myValidator = function (modelValue) {
                        if (modelValue) {
                            assert.equal(modelValue, 10.5);
                        }

                        return false;
                    };
                    scope.value = 10.5;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '');
                        assert.equal(scope.value, undefined);
                        assert.isTrue(scope.testForm.$invalid);

                        done();
                    }, 0);
                });
            });
        });
    });

    describe('formatter', function () {
        describe('default', function () {
            it('undefined', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value">');
                element = $compile(element)(scope);

                scope.value = undefined;

                scope.$apply();

                assert.equal(element.val(), '');
            }));

            it('null', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value">');
                element = $compile(element)(scope);

                scope.value = null;

                scope.$apply();

                assert.equal(element.val(), '');
            }));

            it('number', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value">');
                element = $compile(element)(scope);

                scope.value = 5.5;

                scope.$apply();

                assert.equal(element.val(), '5.5');
            }));

            it('invalid number', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value" max="100">');
                element = $compile(element)(scope);

                scope.value = 105.5;

                scope.$apply();

                assert.equal(element.val(), '');
            }));

            it('not a number', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value" max="100">');
                element = $compile(element)(scope);

                scope.value = 'abc';

                scope.$apply();

                assert.equal(element.val(), 'abc');
            }));

            it('custom', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<input type="text" class="number-input" ng-model="value" formatter="testFormatter">');
                    element = $compile(element)(scope);

                    scope.testFormatter = function () {
                        return 'test';
                    };
                    scope.value = 'abc';

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.val(), 'test');

                        done();
                    }, 0);
                });
            });

            it('custom override service', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<input type="text" class="number-input" ng-model="value" formatter="testFormatter" service="allAttributes">');
                    element = $compile(element)(scope);

                    scope.testFormatter = function () {
                        return '1,000';
                    };
                    scope.value = 123;

                    scope.$apply();

                    setTimeout(function () {
                        assert.equal(element.val(), '1,000');

                        scope.testFormatter = undefined;

                        scope.$apply();

                        setTimeout(function () {
                            assert.equal(element.val(), '$1000');

                            done();
                        }, 0);
                    }, 0);
                });
            });
        });
    });

    describe('parser', function () {
        describe('default', function () {
            it('undefined', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value">');
                element = $compile(element)(scope);

                scope.value = undefined;

                scope.$apply();

                assert.equal(element.val(), '');
            }));

            it('null', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value">');
                element = $compile(element)(scope);

                scope.value = null;

                scope.$apply();

                assert.equal(element.val(), '');
            }));

            it('number', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value">');
                element = $compile(element)(scope);

                scope.value = 5.5;

                scope.$apply();

                assert.equal(element.val(), '5.5');
            }));

            it('decimal', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value">');
                element = $compile(element)(scope);

                scope.value = 105.500;

                scope.$apply();

                assert.equal(element.val(), '105.5');
            }));

            it('k separator', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" name="testNumber" class="number-input" ng-model="value"></form>');
                    element = $compile(element)(scope);

                    scope.value = 100;

                    scope.$apply();

                    scope.testForm.testNumber.$setViewValue('100,000');

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '100000');

                        done();
                    }, 0);
                });
            });

            it('custom', function (done) {
                inject(function ($compile, $rootScope) {
                    const scope = $rootScope.$new();

                    let element = angular.element('<form name="testForm"><input type="text" name="testNumber" class="number-input" ng-model="value" parser="testParser"></form>');
                    element = $compile(element)(scope);

                    scope.testParser = function () {
                        return 1000;
                    };
                    scope.value = 'abc';

                    scope.$apply();

                    scope.testForm.testNumber.$setViewValue('value');

                    setTimeout(function () {
                        assert.equal(element.find('.number-input').val(), '1000');

                        done();
                    }, 0);
                });
            });
        });
    });

    describe('service', function () {
        describe('replace', function () {
            it('replace', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value" service="noAttributes">');
                element = $compile(element)(scope);

                scope.value = 500;
                scope.$apply();

                assert.equal(element.val(), '500');

                element.attr('service', 'allAttributes');

                scope.$apply();

                assert.equal(element.val(), '$500');
            }));

            it('remove', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value" service="allAttributes">');
                element = $compile(element)(scope);

                scope.value = 500;
                scope.$apply();

                assert.equal(element.val(), '$500');

                element.removeAttr('service');
                scope.value = 500;
                scope.$apply();

                assert.equal(element.val(), '500');
            }));

            it('custom overrides service', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value" validation="myValidator" formatter="testFormatter" parser="testParser" service="allAttributes">');
                element = $compile(element)(scope);

                scope.value = 500;
                scope.$apply();

                assert.equal(element.val(), '$500');

                scope.$apply();

                scope.myValidator = function () {
                    return true;
                };
                scope.testParser = function () {
                    return 100;
                };
                scope.testFormatter = function () {
                    return '1,000';
                };

                scope.value = 500;
                scope.$apply();

                assert.equal(element.val(), '1,000');
            }));

            it('service unable to override custom', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value" min="0" max="5000" step="1" validation="myValidator" formatter="testFormatter" parser="testParser">');
                element = $compile(element)(scope);

                scope.myValidator = function () {
                    return true;
                };
                scope.testParser = function () {
                    return 100;
                };
                scope.testFormatter = function () {
                    return '1,000';
                };

                scope.value = 500;
                scope.$apply();

                assert.equal(element.val(), '1,000');

                element.attr('service', 'allAttributes');

                scope.value = 500;
                scope.$apply();

                assert.equal(element.val(), '1,000');
            }));
        });

        it('bind with name, no scope', inject(function ($compile, $rootScope) {
            const scope = $rootScope.$new();

            let element = angular.element('<input type="text" class="number-input" ng-model="value" service="allAttributes">');
            element = $compile(element)(scope);

            scope.value = undefined;
            scope.$apply();

            scope.value = 500;
            scope.$apply();

            assert.equal(element.val(), '$500');
        }));

        describe('no capabilities', function () {
            it('no state', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value" service="noAttributes">');
                element = $compile(element)(scope);

                scope.value = undefined;

                scope.$apply();

                assert.equal(element.val(), '');
            }));

            it('clear old state from service and scope', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value" validation="myValidator" formatter="testFormatter" parser="testParser">');
                element = $compile(element)(scope);

                scope.value = undefined;

                scope.myValidator = function () {
                    return true;
                };
                scope.testParser = function () {
                    return 100;
                };
                scope.testFormatter = function () {
                    return '1,000';
                };

                scope.value = 500;
                scope.$apply();

                assert.equal(element.val(), '1,000');

                element.attr('service', 'allAttributes');
                scope.$apply();

                scope.value = 500;
                scope.$apply();

                assert.equal(element.val(), '1,000');

                scope.myValidator = undefined;
                scope.testParser = undefined;
                scope.testFormatter = undefined;

                scope.value = 500;
                scope.$apply();

                assert.equal(element.val(), '$500');

                element.removeAttr('service');

                scope.value = 500;
                scope.$apply();

                assert.equal(element.val(), '500');
            }));

            it('clear old state from service with all attributes', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value" service="allAttributes">');
                element = $compile(element)(scope);

                scope.value = 500;
                scope.$apply();

                assert.equal(element.val(), '$500');

                element.removeAttr('service');

                scope.value = 500;
                scope.$apply();

                assert.equal(element.val(), '500');
            }));

            it('clear old state from service with no attributes', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value" service="noAttributes">');
                element = $compile(element)(scope);

                scope.value = 500;
                scope.$apply();

                assert.equal(element.val(), '500');

                element.removeAttr('service');

                scope.value = 500;
                scope.$apply();

                assert.equal(element.val(), '500');
            }));
        });

        describe('all capabilities', function () {
            it('no state', inject(function ($compile, $rootScope) {
                const scope = $rootScope.$new();

                let element = angular.element('<input type="text" class="number-input" ng-model="value" service="allAttributes">');
                element = $compile(element)(scope);

                scope.value = undefined;

                scope.$apply();

                scope.value = 500;
                scope.$apply();

                assert.equal(element.val(), '$500');
            }));
        });

        it('ignore service functions', inject(function ($compile, $rootScope) {
            const scope = $rootScope.$new();

            let element = angular.element('<input type="text" class="number-input" ng-model="value" validation="myValidator" formatter="testFormatter" parser="testParser" service="allAttributes">');
            element = $compile(element)(scope);

            scope.value = undefined;

            scope.myValidator = function () {
                return true;
            };
            scope.testParser = function () {
                return 100;
            };
            scope.testFormatter = function () {
                return '1,000';
            };

            scope.value = 500; //shouldn't change anything
            scope.$apply();

            assert.equal(element.val(), '1,000');
        }));
    });

    describe('events', function () {
        it('number-input$update-model', inject(function ($compile, $rootScope) {
            const scope = $rootScope.$new();

            let element = angular.element('<input type="text" class="number-input" ng-model="value">');
            element = $compile(element)(scope);

            scope.value = 10;

            scope.$apply();

            assert.equal(element.val(), '10');

            element.trigger('number-input$update-model', 20);

            scope.$apply();

            assert.equal(scope.value, 20);
            assert.equal(element.val(), '20');
        }));
    });
});
