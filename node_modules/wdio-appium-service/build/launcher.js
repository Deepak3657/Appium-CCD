'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _child_process = require('child_process');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEBUG_LOG = 'wdio_appium_service_debug_log.txt';

var AppiumLauncher = function () {
    function AppiumLauncher() {
        _classCallCheck(this, AppiumLauncher);
    }

    _createClass(AppiumLauncher, [{
        key: 'onPrepare',
        value: function onPrepare(config) {
            var _this = this;

            var c = config.appium || {};

            this.appiumArgs = this._keyValueToCliArgs(c.args || {});
            this.appiumCommand = c.command || this._detectAppiumCommand(__dirname) || 'appium';
            this.appiumWaitStartTime = c.waitStartTime || 5000;
            this.appiumLogFileName = c.logFileName || 'appium.log';
            this.isDebug = process.env.NODE_ENV === 'debug';

            if (this.isDebug) {
                _fs2.default.writeFileSync(DEBUG_LOG, '');
                this._debugLog('onPrepare: ' + JSON.stringify(config.appium));
            }

            return this._startAppium().then(function (p) {
                _this.process = p;
                if (_this.isDebug) {
                    _this._debugLog('onPrepare: Appium started!');
                }
                return;
            });
        }
    }, {
        key: 'onComplete',
        value: function onComplete() {
            if (this.process !== undefined && !this.process.killed) {
                this.process.kill();
            }
        }
    }, {
        key: '_startAppium',
        value: function _startAppium() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                if (_this2.isDebug) {
                    _this2._debugLog('_startAppium: Will spawn Appium process: ' + _this2.appiumCommand + ' ' + _this2.appiumArgs.join(' '));
                }
                var p = (0, _child_process.spawn)(_this2.appiumCommand, _this2.appiumArgs, { stdio: ['ignore', 'pipe', 'pipe'] });
                var log = _fs2.default.createWriteStream(_this2.appiumLogFileName);
                var exited = null;

                p.stdout.pipe(log);
                p.stderr.pipe(log);

                var timer = setTimeout(function () {
                    p.removeListener('exit', exitCallback);
                    if (exited === null) {
                        if (_this2.isDebug) {
                            _this2._debugLog('_startAppium: Process started:' + p.pid);
                        }
                        return resolve(p);
                    }

                    return reject(new Error('Appium exited just after starting with exit code:' + exited));
                }, _this2.appiumWaitStartTime);

                var exitCallback = function exitCallback(code) {
                    clearTimeout(timer);
                    exited = code;
                    reject(new Error('Appium exited before timeout (Exit code: ' + code + ')'));
                };

                p.once('exit', exitCallback);
            });
        }
    }, {
        key: '_detectAppiumCommand',
        value: function _detectAppiumCommand(p) {
            while (true) {
                p = _path2.default.dirname(p);

                var parsed = _path2.default.parse(p);
                if (parsed.root === parsed.dir && parsed.name === '') {
                    // When 'p' indicates root directory, local 'appium' command was not found.
                    return null;
                }

                if (parsed.name !== 'node_modules') {
                    continue;
                }

                var cmd = _path2.default.join(p, '.bin', 'appium');
                try {
                    if (_fs2.default.lstatSync(cmd).isFile()) {
                        return cmd;
                    }
                } catch (e) {
                    // Do nothing
                }
            }
        }
    }, {
        key: '_lowerCamelToOptionName',
        value: function _lowerCamelToOptionName(s) {
            var ret = '--';
            var A = 'A'.charCodeAt(0);
            var Z = 'Z'.charCodeAt(0);
            for (var idx = 0; idx < s.length; ++idx) {
                var c = s.charAt(idx);
                var code = s.charCodeAt(idx);
                if (A <= code && code <= Z) {
                    ret += '-' + c.toLowerCase();
                } else {
                    ret += c;
                }
            }
            return ret;
        }
    }, {
        key: '_keyValueToCliArgs',
        value: function _keyValueToCliArgs(args) {
            if (Array.isArray(args)) {
                // Note:
                // If specified as array, this plugin assumes it as the string list of command line arguments.
                return args;
            }

            var ret = [];
            for (var key in args) {
                var value = args[key];
                if (typeof value === 'boolean' && !value || value === null) {
                    continue;
                }

                ret.push(this._lowerCamelToOptionName(key));

                if (typeof value !== 'boolean' && value !== null) {
                    ret.push(this._sanitizeCliValue(value));
                }
            }
            return ret;
        }
    }, {
        key: '_sanitizeCliValue',
        value: function _sanitizeCliValue(v) {
            var valueStr = String(v);
            return (/\s/.test(valueStr) ? '\'' + valueStr + '\'' : valueStr
            );
        }
    }, {
        key: '_debugLog',
        value: function _debugLog(msg) {
            _fs2.default.appendFile(DEBUG_LOG, '[' + new Date(Date.now()).toString() + '] ' + msg + '\n');
        }
    }]);

    return AppiumLauncher;
}();

exports.default = AppiumLauncher;
