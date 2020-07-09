! function (e) {
    var t = {};

    function o(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }
    o.m = e, o.c = t, o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function (e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) o.d(n, i, function (t) {
                return e[t]
            }.bind(null, i));
        return n
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 1)
}([function (e, t, o) {
    "use strict";
    var n, i = "object" == typeof Reflect ? Reflect : null,
        r = i && "function" == typeof i.apply ? i.apply : function (e, t, o) {
            return Function.prototype.apply.call(e, t, o)
        };
    n = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function (e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : function (e) {
        return Object.getOwnPropertyNames(e)
    };
    var s = Number.isNaN || function (e) {
        return e != e
    };

    function a() {
        a.init.call(this)
    }
    e.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
    var l = 10;

    function u(e) {
        return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
    }

    function d(e, t, o, n) {
        var i, r, s, a;
        if ("function" != typeof o) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof o);
        if (void 0 === (r = e._events) ? (r = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== r.newListener && (e.emit("newListener", t, o.listener ? o.listener : o), r = e._events), s = r[t]), void 0 === s) s = r[t] = o, ++e._eventsCount;
        else if ("function" == typeof s ? s = r[t] = n ? [o, s] : [s, o] : n ? s.unshift(o) : s.push(o), (i = u(e)) > 0 && s.length > i && !s.warned) {
            s.warned = !0;
            var l = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = s.length, a = l, console && console.warn && console.warn(a)
        }
        return e
    }

    function c(e, t, o) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: o
            },
            i = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t]);
                this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, r(this.listener, this.target, e))
            }.bind(n);
        return i.listener = o, n.wrapFn = i, i
    }

    function f(e, t, o) {
        var n = e._events;
        if (void 0 === n) return [];
        var i = n[t];
        return void 0 === i ? [] : "function" == typeof i ? o ? [i.listener || i] : [i] : o ? function (e) {
            for (var t = new Array(e.length), o = 0; o < t.length; ++o) t[o] = e[o].listener || e[o];
            return t
        }(i) : h(i, i.length)
    }

    function p(e) {
        var t = this._events;
        if (void 0 !== t) {
            var o = t[e];
            if ("function" == typeof o) return 1;
            if (void 0 !== o) return o.length
        }
        return 0
    }

    function h(e, t) {
        for (var o = new Array(t), n = 0; n < t; ++n) o[n] = e[n];
        return o
    }
    Object.defineProperty(a, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
            return l
        },
        set: function (e) {
            if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            l = e
        }
    }), a.init = function () {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, a.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    }, a.prototype.getMaxListeners = function () {
        return u(this)
    }, a.prototype.emit = function (e) {
        for (var t = [], o = 1; o < arguments.length; o++) t.push(arguments[o]);
        var n = "error" === e,
            i = this._events;
        if (void 0 !== i) n = n && void 0 === i.error;
        else if (!n) return !1;
        if (n) {
            var s;
            if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
            var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
            throw a.context = s, a
        }
        var l = i[e];
        if (void 0 === l) return !1;
        if ("function" == typeof l) r(l, this, t);
        else {
            var u = l.length,
                d = h(l, u);
            for (o = 0; o < u; ++o) r(d[o], this, t)
        }
        return !0
    }, a.prototype.addListener = function (e, t) {
        return d(this, e, t, !1)
    }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function (e, t) {
        return d(this, e, t, !0)
    }, a.prototype.once = function (e, t) {
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.on(e, c(this, e, t)), this
    }, a.prototype.prependOnceListener = function (e, t) {
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.prependListener(e, c(this, e, t)), this
    }, a.prototype.removeListener = function (e, t) {
        var o, n, i, r, s;
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        if (void 0 === (n = this._events)) return this;
        if (void 0 === (o = n[e])) return this;
        if (o === t || o.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, o.listener || t));
        else if ("function" != typeof o) {
            for (i = -1, r = o.length - 1; r >= 0; r--)
                if (o[r] === t || o[r].listener === t) {
                    s = o[r].listener, i = r;
                    break
                } if (i < 0) return this;
            0 === i ? o.shift() : function (e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop()
            }(o, i), 1 === o.length && (n[e] = o[0]), void 0 !== n.removeListener && this.emit("removeListener", e, s || t)
        }
        return this
    }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function (e) {
        var t, o, n;
        if (void 0 === (o = this._events)) return this;
        if (void 0 === o.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== o[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete o[e]), this;
        if (0 === arguments.length) {
            var i, r = Object.keys(o);
            for (n = 0; n < r.length; ++n) "removeListener" !== (i = r[n]) && this.removeAllListeners(i);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if ("function" == typeof (t = o[e])) this.removeListener(e, t);
        else if (void 0 !== t)
            for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
        return this
    }, a.prototype.listeners = function (e) {
        return f(this, e, !0)
    }, a.prototype.rawListeners = function (e) {
        return f(this, e, !1)
    }, a.listenerCount = function (e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t)
    }, a.prototype.listenerCount = p, a.prototype.eventNames = function () {
        return this._eventsCount > 0 ? n(this._events) : []
    }
}, function (e, t, o) {
    "use strict";
    o.r(t);
    const n = new(o(0).EventEmitter);
    new Vue({
        el: "#app",
        data: () => ({
            goods: [],
            filteredGoods: [],
            basketGoods: [],
            searchLine: "",
            isVisibleCart: !0,
            totalPriceMessage: "",
            totalPriceCoin: ""
        }),
        methods: {
            makeGETRequest: e => new Promise((t, o) => {
                let n = window.XMLHttpRequest ? new window.XMLHttpRequest : new window.ActiveXObject;
                n.open("GET", e, !0), n.onload = (() => t(JSON.parse(n.responseText))), n.onerror = (() => o(n.statusText)), n.send()
            }),
            makePOSTRequest: (e, t) => new Promise((o, n) => {
                let i = window.XMLHttpRequest ? new window.XMLHttpRequest : new window.ActiveXObject;
                i.open("POST", e, !0), i.setRequestHeader("Content-Type", "application/json; charset=UTF-8"), i.onload = (() => o(JSON.parse(i.responseText))), i.onerror = (() => n(i.statusText)), i.send(JSON.stringify(t))
            }),
            addToBasket(e) {
                let t;
                this.goods.forEach(function (o) {
                    e == o.id && (t = {
                        id: o.id,
                        title: o.title,
                        price: o.price,
                        img: o.img
                    })
                }), this.basketGoods.push(t), this.calcAllGoods(), this.makePOSTRequest("/addToCard", t)
            },
            deleteFromBasket(e) {
                let t;
                this.basketGoods.forEach(function (o, n) {
                    let i = o.id;
                    e == i && (t = n)
                }), this.basketGoods.splice(t, 1), this.calcAllGoods(), this.makePOSTRequest("/updateCart", this.basketGoods)
            },
            viewCart() {
                switch (this.isVisibleCart) {
                    case !1:
                        this.isVisibleCart = !0;
                        break;
                    case !0:
                        this.isVisibleCart = !1
                }
            },
            filterGoods(e) {
                let t = new RegExp(e, "i");
                this.filteredGoods = this.goods.filter(e => t.test(e.title))
            },
            calcAllGoods() {
                let e = 0;
                this.basketGoods.forEach(t => {
                    void 0 !== t.price && (e += t.price)
                }), this.totalPriceMessage = "Cумма товаров в корзине: " + e, this.totalPriceCoin = e
            }
        },
        async created() {
            try {
                n.on("basket-add", this.addToBasket.bind(this)), n.on("basket-remove", this.deleteFromBasket.bind(this)), n.on("goods-filter", this.filterGoods.bind(this)), this.goods = await this.makeGETRequest("/catalog"), this.filteredGoods = this.goods, this.basketGoods = await this.makeGETRequest("/cart"), 0 !== this.basketGoods.lenght && this.calcAllGoods()
            } catch (e) {
                console.error(e)
            }
        },
        mounted() {
            this.calcAllGoods()
        }
    });
    Vue.component("goods-list", {
        props: ["goods"],
        template: '<section class="goods-list"><slot name="title"></slot><goods-item v-for="good in goods" :key="good.id" :good="good"></goods-item><slot name="nothing"></section>'
    }), Vue.component("goods-item", {
        props: ["good"],
        template: '<div class="goods-item"><img :src="good.img" :alt="good.title"><h3>{{good.title}}</h3><p>{{good.price}}</p><button :id="good.id" v-on:click="fireAdd">Добавить</button></div>',
        methods: {
            fireAdd(e) {
                n.emit("basket-add", e.target.id)
            }
        }
    }), Vue.component("basket-list", {
        props: ["goods"],
        template: '<aside class="basket-list"><slot name="title"></slot><basket-item v-for="good in goods" :key="good.id" :good="good"></basket-item><slot name="totalCart"></slot></aside>'
    }), Vue.component("basket-item", {
        props: ["good"],
        template: '<div class="basket-item"><img :src="good.img" :alt="good.title"><button :id="good.id" v-on:click="fireRemove">&times;</button><div class="basket-item-info"><h3>{{good.title}}</h3><p>{{good.price}}</p></div></div>',
        methods: {
            fireRemove(e) {
                n.emit("basket-remove", e.target.id)
            }
        }
    }), Vue.component("search", {
        props: [],
        template: '<div class="search"><input type="search" v-on:keydown.enter="fireFilter" v-model="search" placeholder="Type and press enter"></div>',
        data: () => ({
            search: ""
        }),
        methods: {
            fireFilter() {
                n.emit("goods-filter", this.search)
            }
        }
    })
}]);
