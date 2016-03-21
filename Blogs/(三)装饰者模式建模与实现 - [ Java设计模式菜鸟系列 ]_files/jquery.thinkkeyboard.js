+function ($) {

    var
        /**
         * 快捷键对象
         * 绑定快捷键的每一个元素会创建一个ThinkKeyboard对象
         */
        ThinkKeyboard,

        /**
         * 键盘按键对应数值表
         * @type {Object}
         */
        KeyCode = {
            "BACKSPACE": 8,
            "TAB"      : 9,
            "ENTER"    : 13,
            "ESC"      : 27,
            "SPACE"    : 32,
            "LEFT"     : 37,
            "UP"       : 38,
            "RIGHT"    : 39,
            "DOWN"     : 40,
            "F1"       : 112,
            "F2"       : 113,
            "F3"       : 114,
            "F4"       : 115,
            "F5"       : 116,
            "F6"       : 117,
            "F7"       : 118,
            "F8"       : 119,
            "F9"       : 120,
            "F10"      : 121,
            "F11"      : 122,
            "F12"      : 123
        };

    /**
     * 判断变量是否为字符串
     * @param  {String}  str 要判断的变量
     * @return {Boolean}     是-返回true,否则返回false
     */
    function is_string(str) {
        return $.type(str) === "string";
    }

    /**
     * ThinkKeyboard构造器
     * 当给元素第一次绑定快捷键时背实例化
     * @param {Object} element 要绑定到的元素
     */
    ThinkKeyboard = function (element) {
        var $element = $(element), self = this;

        /* 绑定keydown事件，用于触发快捷键 */
        $element.on("keydown.thinkkeyboard", function (event) {
            var keys = new Array(4);

            /* 当前按键 */
            keys[0] = event.ctrlKey ? "ctrl" : "";
            keys[1] = event.shiftKey ? "shift" : "";
            keys[2] = event.altKey ? "alt" : "";
            keys[3] = event.which;
            keys = keys.join("");

            /* 执行快捷键 */
            if (self.keyboards && self.keyboards[keys]) {
                return self.keyboards[keys].call(this, event);
            }
        });
    };

    /**
     * ThinkKeyboard原型
     * 提供ThinkKeyboard扩展方法
     * @type {Object}
     */
    ThinkKeyboard.prototype = {
        /**
         * 绑定快捷键
         * @param  {String}   keys     快捷键名称
         * @param  {Function} callback 快捷键触发的方法
         * @return {Object}            当前快捷键对象
         */
        "keyboard": function (keys, callback) {
            //初始化快捷键
            if (!this.keyboards) {
                this.keyboards = {};
            }

            /* 拆分组合设置的快捷键 */
            if (is_string(keys) && $.isFunction(callback)) { //单个设置
                _keyboard.call(this, keys, callback);
            } else if ($.isPlainObject(keys)) { //使用对象方式设置
                for (var key in keys) {
                    _keyboard.call(this, key, keys[key]);
                }
            } else if ($.isArray(keys) && $.isFunction(callback)) { //多快捷键对应同一操作
                for (var i in keys) {
                    _keyboard.call(this, keys[i], callback);
                }
            }

            return this;

            /**
             * 记录绑定在当前对象上的快捷键
             * @param  {String}   keys     快捷键名称
             * @param  {Function} callback 快捷键执行的方法
             */
            function _keyboard(keys, callback) {
                var keyboard = new Array(4); //[ctrl, shift, alt, code]
                keys = keys.toUpperCase().split("+");
                for (var i in keys) {
                    switch (keys[i]) {
                        case "CTRL" :
                            keyboard[0] = "ctrl";
                            break;
                        case "SHIFT" :
                            keyboard[1] = "shift";
                            break;
                        case "ALT" :
                            keyboard[2] = "alt";
                            break;
                        default:
                            keyboard[3] = KeyCode[keys[i]] || keys[i].charCodeAt();
                            break;
                    }
                }
                this.keyboards[keyboard.join("")] = callback;
            }
        },

        "remove": function (keys) {
            if (keys == null) {
                delete this.keyboards;
                return;
            }
            var keyboard = new Array(4); //[ctrl, shift, alt, code]
            keys = keys.toUpperCase().split("+");
            for (var i in keys) {
                switch (keys[i]) {
                    case "CTRL" :
                        keyboard[0] = "ctrl";
                        break;
                    case "SHIFT" :
                        keyboard[1] = "shift";
                        break;
                    case "ALT" :
                        keyboard[2] = "alt";
                        break;
                    default:
                        keyboard[3] = KeyCode[keys[i]] || keys[i].charCodeAt();
                        break;
                }
            }
            delete this.keyboards[keyboard.join("")];
        }
    };

    /**
     * jQuery.fn对象，用于创建ThinkKeyboard插件
     * @param  {String}   keys     绑定的快捷键名称
     * @param  {Function} callback 快捷键触发的方法
     */
    $.fn.thinkkeyboard = function (keys, callback) {
        return this.each(function () {
            var Keyboard = $(this).data("ThinkKeyboard");
            if (!Keyboard) {
                Keyboard = new ThinkKeyboard(this);
                $(this).data("ThinkKeyboard", Keyboard);
            }
            Keyboard.keyboard(keys, callback);
        });
    };

    $.fn.unbindthinkkeyboard = function (key) {
        return this.each(function () {
            var Keyboard = $(this).data("ThinkKeyboard");
            if (!Keyboard) {
                return;
            }
            Keyboard.remove(key);
        });
    };

}(jQuery);