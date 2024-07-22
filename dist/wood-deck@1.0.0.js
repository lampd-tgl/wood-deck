function rn(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
var jt = { exports: {} }, N = jt.exports = {}, ye, he;
function Jr() {
  throw new Error("setTimeout has not been defined");
}
function Xr() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? ye = setTimeout : ye = Jr;
  } catch {
    ye = Jr;
  }
  try {
    typeof clearTimeout == "function" ? he = clearTimeout : he = Xr;
  } catch {
    he = Xr;
  }
})();
function xt(y) {
  if (ye === setTimeout)
    return setTimeout(y, 0);
  if ((ye === Jr || !ye) && setTimeout)
    return ye = setTimeout, setTimeout(y, 0);
  try {
    return ye(y, 0);
  } catch {
    try {
      return ye.call(null, y, 0);
    } catch {
      return ye.call(this, y, 0);
    }
  }
}
function tn(y) {
  if (he === clearTimeout)
    return clearTimeout(y);
  if ((he === Xr || !he) && clearTimeout)
    return he = clearTimeout, clearTimeout(y);
  try {
    return he(y);
  } catch {
    try {
      return he.call(null, y);
    } catch {
      return he.call(this, y);
    }
  }
}
var Re = [], Ze = !1, Ve, Sr = -1;
function nn() {
  !Ze || !Ve || (Ze = !1, Ve.length ? Re = Ve.concat(Re) : Sr = -1, Re.length && At());
}
function At() {
  if (!Ze) {
    var y = xt(nn);
    Ze = !0;
    for (var f = Re.length; f; ) {
      for (Ve = Re, Re = []; ++Sr < f; )
        Ve && Ve[Sr].run();
      Sr = -1, f = Re.length;
    }
    Ve = null, Ze = !1, tn(y);
  }
}
N.nextTick = function(y) {
  var f = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var K = 1; K < arguments.length; K++)
      f[K - 1] = arguments[K];
  Re.push(new Dt(y, f)), Re.length === 1 && !Ze && xt(At);
};
function Dt(y, f) {
  this.fun = y, this.array = f;
}
Dt.prototype.run = function() {
  this.fun.apply(null, this.array);
};
N.title = "browser";
N.browser = !0;
N.env = {};
N.argv = [];
N.version = "";
N.versions = {};
function we() {
}
N.on = we;
N.addListener = we;
N.once = we;
N.off = we;
N.removeListener = we;
N.removeAllListeners = we;
N.emit = we;
N.prependListener = we;
N.prependOnceListener = we;
N.listeners = function(y) {
  return [];
};
N.binding = function(y) {
  throw new Error("process.binding is not supported");
};
N.cwd = function() {
  return "/";
};
N.chdir = function(y) {
  throw new Error("process.chdir is not supported");
};
N.umask = function() {
  return 0;
};
var an = jt.exports;
const Or = /* @__PURE__ */ rn(an);
var Qr = { exports: {} }, nr = {}, et = { exports: {} }, g = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function on() {
  if (St) return g;
  St = 1;
  var y = Symbol.for("react.element"), f = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), me = Symbol.for("react.profiler"), oe = Symbol.for("react.provider"), ie = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), te = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), Y = Symbol.iterator;
  function ne(n) {
    return n === null || typeof n != "object" ? null : (n = Y && n[Y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var J = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, fe = Object.assign, Ue = {};
  function ue(n, u, _) {
    this.props = n, this.context = u, this.refs = Ue, this.updater = _ || J;
  }
  ue.prototype.isReactComponent = {}, ue.prototype.setState = function(n, u) {
    if (typeof n != "object" && typeof n != "function" && n != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, u, "setState");
  }, ue.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function se() {
  }
  se.prototype = ue.prototype;
  function D(n, u, _) {
    this.props = n, this.context = u, this.refs = Ue, this.updater = _ || J;
  }
  var Ce = D.prototype = new se();
  Ce.constructor = D, fe(Ce, ue.prototype), Ce.isPureReactComponent = !0;
  var ce = Array.isArray, W = Object.prototype.hasOwnProperty, Z = { current: null }, de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ge(n, u, _) {
    var E, w = {}, j = null, k = null;
    if (u != null) for (E in u.ref !== void 0 && (k = u.ref), u.key !== void 0 && (j = "" + u.key), u) W.call(u, E) && !de.hasOwnProperty(E) && (w[E] = u[E]);
    var O = arguments.length - 2;
    if (O === 1) w.children = _;
    else if (1 < O) {
      for (var T = Array(O), V = 0; V < O; V++) T[V] = arguments[V + 2];
      w.children = T;
    }
    if (n && n.defaultProps) for (E in O = n.defaultProps, O) w[E] === void 0 && (w[E] = O[E]);
    return { $$typeof: y, type: n, key: j, ref: k, props: w, _owner: Z.current };
  }
  function je(n, u) {
    return { $$typeof: y, type: n.type, key: u, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function xe(n) {
    return typeof n == "object" && n !== null && n.$$typeof === y;
  }
  function Je(n) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(_) {
      return u[_];
    });
  }
  var Ae = /\/+/g;
  function H(n, u) {
    return typeof n == "object" && n !== null && n.key != null ? Je("" + n.key) : u.toString(36);
  }
  function X(n, u, _, E, w) {
    var j = typeof n;
    (j === "undefined" || j === "boolean") && (n = null);
    var k = !1;
    if (n === null) k = !0;
    else switch (j) {
      case "string":
      case "number":
        k = !0;
        break;
      case "object":
        switch (n.$$typeof) {
          case y:
          case f:
            k = !0;
        }
    }
    if (k) return k = n, w = w(k), n = E === "" ? "." + H(k, 0) : E, ce(w) ? (_ = "", n != null && (_ = n.replace(Ae, "$&/") + "/"), X(w, u, _, "", function(V) {
      return V;
    })) : w != null && (xe(w) && (w = je(w, _ + (!w.key || k && k.key === w.key ? "" : ("" + w.key).replace(Ae, "$&/") + "/") + n)), u.push(w)), 1;
    if (k = 0, E = E === "" ? "." : E + ":", ce(n)) for (var O = 0; O < n.length; O++) {
      j = n[O];
      var T = E + H(j, O);
      k += X(j, u, _, T, w);
    }
    else if (T = ne(n), typeof T == "function") for (n = T.call(n), O = 0; !(j = n.next()).done; ) j = j.value, T = E + H(j, O++), k += X(j, u, _, T, w);
    else if (j === "object") throw u = String(n), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return k;
  }
  function B(n, u, _) {
    if (n == null) return n;
    var E = [], w = 0;
    return X(n, E, "", "", function(j) {
      return u.call(_, j, w++);
    }), E;
  }
  function le(n) {
    if (n._status === -1) {
      var u = n._result;
      u = u(), u.then(function(_) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = _);
      }, function(_) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = _);
      }), n._status === -1 && (n._status = 0, n._result = u);
    }
    if (n._status === 1) return n._result.default;
    throw n._result;
  }
  var d = { current: null }, pe = { transition: null }, De = { ReactCurrentDispatcher: d, ReactCurrentBatchConfig: pe, ReactCurrentOwner: Z };
  function _e() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return g.Children = { map: B, forEach: function(n, u, _) {
    B(n, function() {
      u.apply(this, arguments);
    }, _);
  }, count: function(n) {
    var u = 0;
    return B(n, function() {
      u++;
    }), u;
  }, toArray: function(n) {
    return B(n, function(u) {
      return u;
    }) || [];
  }, only: function(n) {
    if (!xe(n)) throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, g.Component = ue, g.Fragment = K, g.Profiler = me, g.PureComponent = D, g.StrictMode = ee, g.Suspense = L, g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = De, g.act = _e, g.cloneElement = function(n, u, _) {
    if (n == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var E = fe({}, n.props), w = n.key, j = n.ref, k = n._owner;
    if (u != null) {
      if (u.ref !== void 0 && (j = u.ref, k = Z.current), u.key !== void 0 && (w = "" + u.key), n.type && n.type.defaultProps) var O = n.type.defaultProps;
      for (T in u) W.call(u, T) && !de.hasOwnProperty(T) && (E[T] = u[T] === void 0 && O !== void 0 ? O[T] : u[T]);
    }
    var T = arguments.length - 2;
    if (T === 1) E.children = _;
    else if (1 < T) {
      O = Array(T);
      for (var V = 0; V < T; V++) O[V] = arguments[V + 2];
      E.children = O;
    }
    return { $$typeof: y, type: n.type, key: w, ref: j, props: E, _owner: k };
  }, g.createContext = function(n) {
    return n = { $$typeof: ie, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: oe, _context: n }, n.Consumer = n;
  }, g.createElement = ge, g.createFactory = function(n) {
    var u = ge.bind(null, n);
    return u.type = n, u;
  }, g.createRef = function() {
    return { current: null };
  }, g.forwardRef = function(n) {
    return { $$typeof: re, render: n };
  }, g.isValidElement = xe, g.lazy = function(n) {
    return { $$typeof: M, _payload: { _status: -1, _result: n }, _init: le };
  }, g.memo = function(n, u) {
    return { $$typeof: te, type: n, compare: u === void 0 ? null : u };
  }, g.startTransition = function(n) {
    var u = pe.transition;
    pe.transition = {};
    try {
      n();
    } finally {
      pe.transition = u;
    }
  }, g.unstable_act = _e, g.useCallback = function(n, u) {
    return d.current.useCallback(n, u);
  }, g.useContext = function(n) {
    return d.current.useContext(n);
  }, g.useDebugValue = function() {
  }, g.useDeferredValue = function(n) {
    return d.current.useDeferredValue(n);
  }, g.useEffect = function(n, u) {
    return d.current.useEffect(n, u);
  }, g.useId = function() {
    return d.current.useId();
  }, g.useImperativeHandle = function(n, u, _) {
    return d.current.useImperativeHandle(n, u, _);
  }, g.useInsertionEffect = function(n, u) {
    return d.current.useInsertionEffect(n, u);
  }, g.useLayoutEffect = function(n, u) {
    return d.current.useLayoutEffect(n, u);
  }, g.useMemo = function(n, u) {
    return d.current.useMemo(n, u);
  }, g.useReducer = function(n, u, _) {
    return d.current.useReducer(n, u, _);
  }, g.useRef = function(n) {
    return d.current.useRef(n);
  }, g.useState = function(n) {
    return d.current.useState(n);
  }, g.useSyncExternalStore = function(n, u, _) {
    return d.current.useSyncExternalStore(n, u, _);
  }, g.useTransition = function() {
    return d.current.useTransition();
  }, g.version = "18.3.1", g;
}
var or = { exports: {} };
or.exports;
var Ot;
function un() {
  return Ot || (Ot = 1, function(y, f) {
    Or.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var K = "18.3.1", ee = Symbol.for("react.element"), me = Symbol.for("react.portal"), oe = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), te = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), Ue = Symbol.for("react.offscreen"), ue = Symbol.iterator, se = "@@iterator";
      function D(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ue && e[ue] || e[se];
        return typeof r == "function" ? r : null;
      }
      var Ce = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ce = {
        transition: null
      }, W = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Z = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, de = {}, ge = null;
      function je(e) {
        ge = e;
      }
      de.setExtraStackFrame = function(e) {
        ge = e;
      }, de.getCurrentStack = null, de.getStackAddendum = function() {
        var e = "";
        ge && (e += ge);
        var r = de.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var xe = !1, Je = !1, Ae = !1, H = !1, X = !1, B = {
        ReactCurrentDispatcher: Ce,
        ReactCurrentBatchConfig: ce,
        ReactCurrentOwner: Z
      };
      B.ReactDebugCurrentFrame = de, B.ReactCurrentActQueue = W;
      function le(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          pe("warn", e, a);
        }
      }
      function d(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          pe("error", e, a);
        }
      }
      function pe(e, r, a) {
        {
          var o = B.ReactDebugCurrentFrame, c = o.getStackAddendum();
          c !== "" && (r += "%s", a = a.concat([c]));
          var p = a.map(function(l) {
            return String(l);
          });
          p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
        }
      }
      var De = {};
      function _e(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", c = o + "." + r;
          if (De[c])
            return;
          d("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), De[c] = !0;
        }
      }
      var n = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          _e(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          _e(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          _e(e, "setState");
        }
      }, u = Object.assign, _ = {};
      Object.freeze(_);
      function E(e, r, a) {
        this.props = e, this.context = r, this.refs = _, this.updater = a || n;
      }
      E.prototype.isReactComponent = {}, E.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, E.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var w = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, j = function(e, r) {
          Object.defineProperty(E.prototype, e, {
            get: function() {
              le("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var k in w)
          w.hasOwnProperty(k) && j(k, w[k]);
      }
      function O() {
      }
      O.prototype = E.prototype;
      function T(e, r, a) {
        this.props = e, this.context = r, this.refs = _, this.updater = a || n;
      }
      var V = T.prototype = new O();
      V.constructor = T, u(V, E.prototype), V.isPureReactComponent = !0;
      function kr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var ir = Array.isArray;
      function Ye(e) {
        return ir(e);
      }
      function Pr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Be(e) {
        try {
          return Te(e), !1;
        } catch {
          return !0;
        }
      }
      function Te(e) {
        return "" + e;
      }
      function Fe(e) {
        if (Be(e))
          return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pr(e)), Te(e);
      }
      function ur(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var c = r.displayName || r.name || "";
        return c !== "" ? a + "(" + c + ")" : a;
      }
      function Ie(e) {
        return e.displayName || "Context";
      }
      function ve(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case oe:
            return "Fragment";
          case me:
            return "Portal";
          case re:
            return "Profiler";
          case ie:
            return "StrictMode";
          case Y:
            return "Suspense";
          case ne:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case te:
              var r = e;
              return Ie(r) + ".Consumer";
            case L:
              var a = e;
              return Ie(a._context) + ".Provider";
            case M:
              return ur(e, e.render, "ForwardRef");
            case J:
              var o = e.displayName || null;
              return o !== null ? o : ve(e.type) || "Memo";
            case fe: {
              var c = e, p = c._payload, l = c._init;
              try {
                return ve(l(p));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var $e = Object.prototype.hasOwnProperty, ze = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, sr, cr, qe;
      qe = {};
      function Xe(e) {
        if ($e.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Se(e) {
        if ($e.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function jr(e, r) {
        var a = function() {
          sr || (sr = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function lr(e, r) {
        var a = function() {
          cr || (cr = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function fr(e) {
        if (typeof e.ref == "string" && Z.current && e.__self && Z.current.stateNode !== e.__self) {
          var r = ve(Z.current.type);
          qe[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), qe[r] = !0);
        }
      }
      var Le = function(e, r, a, o, c, p, l) {
        var h = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: ee,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: l,
          // Record the component responsible for creating this element.
          _owner: p
        };
        return h._store = {}, Object.defineProperty(h._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(h, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(h, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
      };
      function xr(e, r, a) {
        var o, c = {}, p = null, l = null, h = null, R = null;
        if (r != null) {
          Xe(r) && (l = r.ref, fr(r)), Se(r) && (Fe(r.key), p = "" + r.key), h = r.__self === void 0 ? null : r.__self, R = r.__source === void 0 ? null : r.__source;
          for (o in r)
            $e.call(r, o) && !ze.hasOwnProperty(o) && (c[o] = r[o]);
        }
        var P = arguments.length - 2;
        if (P === 1)
          c.children = a;
        else if (P > 1) {
          for (var x = Array(P), A = 0; A < P; A++)
            x[A] = arguments[A + 2];
          Object.freeze && Object.freeze(x), c.children = x;
        }
        if (e && e.defaultProps) {
          var I = e.defaultProps;
          for (o in I)
            c[o] === void 0 && (c[o] = I[o]);
        }
        if (p || l) {
          var U = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && jr(c, U), l && lr(c, U);
        }
        return Le(e, p, l, h, R, Z.current, c);
      }
      function Ar(e, r) {
        var a = Le(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Dr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, c = u({}, e.props), p = e.key, l = e.ref, h = e._self, R = e._source, P = e._owner;
        if (r != null) {
          Xe(r) && (l = r.ref, P = Z.current), Se(r) && (Fe(r.key), p = "" + r.key);
          var x;
          e.type && e.type.defaultProps && (x = e.type.defaultProps);
          for (o in r)
            $e.call(r, o) && !ze.hasOwnProperty(o) && (r[o] === void 0 && x !== void 0 ? c[o] = x[o] : c[o] = r[o]);
        }
        var A = arguments.length - 2;
        if (A === 1)
          c.children = a;
        else if (A > 1) {
          for (var I = Array(A), U = 0; U < A; U++)
            I[U] = arguments[U + 2];
          c.children = I;
        }
        return Le(e.type, p, l, h, R, P, c);
      }
      function Oe(e) {
        return typeof e == "object" && e !== null && e.$$typeof === ee;
      }
      var dr = ".", Fr = ":";
      function Ir(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(c) {
          return a[c];
        });
        return "$" + o;
      }
      var Ke = !1, pr = /\/+/g;
      function be(e) {
        return e.replace(pr, "$&/");
      }
      function Me(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Fe(e.key), Ir("" + e.key)) : r.toString(36);
      }
      function ke(e, r, a, o, c) {
        var p = typeof e;
        (p === "undefined" || p === "boolean") && (e = null);
        var l = !1;
        if (e === null)
          l = !0;
        else
          switch (p) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case ee:
                case me:
                  l = !0;
              }
          }
        if (l) {
          var h = e, R = c(h), P = o === "" ? dr + Me(h, 0) : o;
          if (Ye(R)) {
            var x = "";
            P != null && (x = be(P) + "/"), ke(R, r, x, "", function(en) {
              return en;
            });
          } else R != null && (Oe(R) && (R.key && (!h || h.key !== R.key) && Fe(R.key), R = Ar(
            R,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (R.key && (!h || h.key !== R.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              be("" + R.key) + "/"
            ) : "") + P
          )), r.push(R));
          return 1;
        }
        var A, I, U = 0, q = o === "" ? dr : o + Fr;
        if (Ye(e))
          for (var Tr = 0; Tr < e.length; Tr++)
            A = e[Tr], I = q + Me(A, Tr), U += ke(A, r, a, I, c);
        else {
          var Zr = D(e);
          if (typeof Zr == "function") {
            var wt = e;
            Zr === wt.entries && (Ke || le("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ke = !0);
            for (var Xt = Zr.call(wt), Ct, Qt = 0; !(Ct = Xt.next()).done; )
              A = Ct.value, I = q + Me(A, Qt++), U += ke(A, r, a, I, c);
          } else if (p === "object") {
            var Tt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (Tt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : Tt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return U;
      }
      function Ne(e, r, a) {
        if (e == null)
          return e;
        var o = [], c = 0;
        return ke(e, o, "", "", function(p) {
          return r.call(a, p, c++);
        }), o;
      }
      function $r(e) {
        var r = 0;
        return Ne(e, function() {
          r++;
        }), r;
      }
      function vr(e, r, a) {
        Ne(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Lr(e) {
        return Ne(e, function(r) {
          return r;
        }) || [];
      }
      function yr(e) {
        if (!Oe(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function hr(e) {
        var r = {
          $$typeof: te,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: L,
          _context: r
        };
        var a = !1, o = !1, c = !1;
        {
          var p = {
            $$typeof: te,
            _context: r
          };
          Object.defineProperties(p, {
            Provider: {
              get: function() {
                return o || (o = !0, d("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(l) {
                r.Provider = l;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(l) {
                r._currentValue = l;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(l) {
                r._currentValue2 = l;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(l) {
                r._threadCount = l;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, d("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(l) {
                c || (le("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), c = !0);
              }
            }
          }), r.Consumer = p;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var We = -1, Qe = 0, er = 1, mr = 2;
      function Mr(e) {
        if (e._status === We) {
          var r = e._result, a = r();
          if (a.then(function(p) {
            if (e._status === Qe || e._status === We) {
              var l = e;
              l._status = er, l._result = p;
            }
          }, function(p) {
            if (e._status === Qe || e._status === We) {
              var l = e;
              l._status = mr, l._result = p;
            }
          }), e._status === We) {
            var o = e;
            o._status = Qe, o._result = a;
          }
        }
        if (e._status === er) {
          var c = e._result;
          return c === void 0 && d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, c), "default" in c || d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, c), c.default;
        } else
          throw e._result;
      }
      function Nr(e) {
        var r = {
          // We use these fields to store the result.
          _status: We,
          _result: e
        }, a = {
          $$typeof: fe,
          _payload: r,
          _init: Mr
        };
        {
          var o, c;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = p, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return c;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), c = p, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function Wr(e) {
        e != null && e.$$typeof === J ? d("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? d("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && d("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && d("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: M,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var gr;
      gr = Symbol.for("react.module.reference");
      function t(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === oe || e === re || X || e === ie || e === Y || e === ne || H || e === Ue || xe || Je || Ae || typeof e == "object" && e !== null && (e.$$typeof === fe || e.$$typeof === J || e.$$typeof === L || e.$$typeof === te || e.$$typeof === M || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === gr || e.getModuleId !== void 0));
      }
      function i(e, r) {
        t(e) || d("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: J,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(c) {
              o = c, !e.name && !e.displayName && (e.displayName = c);
            }
          });
        }
        return a;
      }
      function s() {
        var e = Ce.current;
        return e === null && d(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function v(e) {
        var r = s();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? d("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && d("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function C(e) {
        var r = s();
        return r.useState(e);
      }
      function S(e, r, a) {
        var o = s();
        return o.useReducer(e, r, a);
      }
      function b(e) {
        var r = s();
        return r.useRef(e);
      }
      function m(e, r) {
        var a = s();
        return a.useEffect(e, r);
      }
      function z(e, r) {
        var a = s();
        return a.useInsertionEffect(e, r);
      }
      function F(e, r) {
        var a = s();
        return a.useLayoutEffect(e, r);
      }
      function $(e, r) {
        var a = s();
        return a.useCallback(e, r);
      }
      function Q(e, r) {
        var a = s();
        return a.useMemo(e, r);
      }
      function Pe(e, r, a) {
        var o = s();
        return o.useImperativeHandle(e, r, a);
      }
      function Ee(e, r) {
        {
          var a = s();
          return a.useDebugValue(e, r);
        }
      }
      function G() {
        var e = s();
        return e.useTransition();
      }
      function rr(e) {
        var r = s();
        return r.useDeferredValue(e);
      }
      function Vr() {
        var e = s();
        return e.useId();
      }
      function Ur(e, r, a) {
        var o = s();
        return o.useSyncExternalStore(e, r, a);
      }
      var tr = 0, tt, nt, at, ot, it, ut, st;
      function ct() {
      }
      ct.__reactDisabledLog = !0;
      function Ft() {
        {
          if (tr === 0) {
            tt = console.log, nt = console.info, at = console.warn, ot = console.error, it = console.group, ut = console.groupCollapsed, st = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: ct,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          tr++;
        }
      }
      function It() {
        {
          if (tr--, tr === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: u({}, e, {
                value: tt
              }),
              info: u({}, e, {
                value: nt
              }),
              warn: u({}, e, {
                value: at
              }),
              error: u({}, e, {
                value: ot
              }),
              group: u({}, e, {
                value: it
              }),
              groupCollapsed: u({}, e, {
                value: ut
              }),
              groupEnd: u({}, e, {
                value: st
              })
            });
          }
          tr < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Yr = B.ReactCurrentDispatcher, Br;
      function _r(e, r, a) {
        {
          if (Br === void 0)
            try {
              throw Error();
            } catch (c) {
              var o = c.stack.trim().match(/\n( *(at )?)/);
              Br = o && o[1] || "";
            }
          return `
` + Br + e;
        }
      }
      var zr = !1, br;
      {
        var $t = typeof WeakMap == "function" ? WeakMap : Map;
        br = new $t();
      }
      function lt(e, r) {
        if (!e || zr)
          return "";
        {
          var a = br.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        zr = !0;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var p;
        p = Yr.current, Yr.current = null, Ft();
        try {
          if (r) {
            var l = function() {
              throw Error();
            };
            if (Object.defineProperty(l.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(l, []);
              } catch (q) {
                o = q;
              }
              Reflect.construct(e, [], l);
            } else {
              try {
                l.call();
              } catch (q) {
                o = q;
              }
              e.call(l.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (q) {
              o = q;
            }
            e();
          }
        } catch (q) {
          if (q && o && typeof q.stack == "string") {
            for (var h = q.stack.split(`
`), R = o.stack.split(`
`), P = h.length - 1, x = R.length - 1; P >= 1 && x >= 0 && h[P] !== R[x]; )
              x--;
            for (; P >= 1 && x >= 0; P--, x--)
              if (h[P] !== R[x]) {
                if (P !== 1 || x !== 1)
                  do
                    if (P--, x--, x < 0 || h[P] !== R[x]) {
                      var A = `
` + h[P].replace(" at new ", " at ");
                      return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && br.set(e, A), A;
                    }
                  while (P >= 1 && x >= 0);
                break;
              }
          }
        } finally {
          zr = !1, Yr.current = p, It(), Error.prepareStackTrace = c;
        }
        var I = e ? e.displayName || e.name : "", U = I ? _r(I) : "";
        return typeof e == "function" && br.set(e, U), U;
      }
      function Lt(e, r, a) {
        return lt(e, !1);
      }
      function Mt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function Er(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return lt(e, Mt(e));
        if (typeof e == "string")
          return _r(e);
        switch (e) {
          case Y:
            return _r("Suspense");
          case ne:
            return _r("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case M:
              return Lt(e.render);
            case J:
              return Er(e.type, r, a);
            case fe: {
              var o = e, c = o._payload, p = o._init;
              try {
                return Er(p(c), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var ft = {}, dt = B.ReactDebugCurrentFrame;
      function Rr(e) {
        if (e) {
          var r = e._owner, a = Er(e.type, e._source, r ? r.type : null);
          dt.setExtraStackFrame(a);
        } else
          dt.setExtraStackFrame(null);
      }
      function Nt(e, r, a, o, c) {
        {
          var p = Function.call.bind($e);
          for (var l in e)
            if (p(e, l)) {
              var h = void 0;
              try {
                if (typeof e[l] != "function") {
                  var R = Error((o || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw R.name = "Invariant Violation", R;
                }
                h = e[l](r, l, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (P) {
                h = P;
              }
              h && !(h instanceof Error) && (Rr(c), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, l, typeof h), Rr(null)), h instanceof Error && !(h.message in ft) && (ft[h.message] = !0, Rr(c), d("Failed %s type: %s", a, h.message), Rr(null));
            }
        }
      }
      function He(e) {
        if (e) {
          var r = e._owner, a = Er(e.type, e._source, r ? r.type : null);
          je(a);
        } else
          je(null);
      }
      var qr;
      qr = !1;
      function pt() {
        if (Z.current) {
          var e = ve(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Wt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Vt(e) {
        return e != null ? Wt(e.__source) : "";
      }
      var vt = {};
      function Ut(e) {
        var r = pt();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function yt(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Ut(r);
          if (!vt[a]) {
            vt[a] = !0;
            var o = "";
            e && e._owner && e._owner !== Z.current && (o = " It was passed a child from " + ve(e._owner.type) + "."), He(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), He(null);
          }
        }
      }
      function ht(e, r) {
        if (typeof e == "object") {
          if (Ye(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              Oe(o) && yt(o, r);
            }
          else if (Oe(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var c = D(e);
            if (typeof c == "function" && c !== e.entries)
              for (var p = c.call(e), l; !(l = p.next()).done; )
                Oe(l.value) && yt(l.value, r);
          }
        }
      }
      function mt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === M || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === J))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = ve(r);
            Nt(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !qr) {
            qr = !0;
            var c = ve(r);
            d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Yt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              He(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), He(null);
              break;
            }
          }
          e.ref !== null && (He(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), He(null));
        }
      }
      function gt(e, r, a) {
        var o = t(e);
        if (!o) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Vt(r);
          p ? c += p : c += pt();
          var l;
          e === null ? l = "null" : Ye(e) ? l = "array" : e !== void 0 && e.$$typeof === ee ? (l = "<" + (ve(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, d("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, c);
        }
        var h = xr.apply(this, arguments);
        if (h == null)
          return h;
        if (o)
          for (var R = 2; R < arguments.length; R++)
            ht(arguments[R], e);
        return e === oe ? Yt(h) : mt(h), h;
      }
      var _t = !1;
      function Bt(e) {
        var r = gt.bind(null, e);
        return r.type = e, _t || (_t = !0, le("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return le("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function zt(e, r, a) {
        for (var o = Dr.apply(this, arguments), c = 2; c < arguments.length; c++)
          ht(arguments[c], o.type);
        return mt(o), o;
      }
      function qt(e, r) {
        var a = ce.transition;
        ce.transition = {};
        var o = ce.transition;
        ce.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (ce.transition = a, a === null && o._updatedFibers) {
            var c = o._updatedFibers.size;
            c > 10 && le("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var bt = !1, wr = null;
      function Kt(e) {
        if (wr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = y && y[r];
            wr = a.call(y, "timers").setImmediate;
          } catch {
            wr = function(c) {
              bt === !1 && (bt = !0, typeof MessageChannel > "u" && d("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var p = new MessageChannel();
              p.port1.onmessage = c, p.port2.postMessage(void 0);
            };
          }
        return wr(e);
      }
      var Ge = 0, Et = !1;
      function Rt(e) {
        {
          var r = Ge;
          Ge++, W.current === null && (W.current = []);
          var a = W.isBatchingLegacy, o;
          try {
            if (W.isBatchingLegacy = !0, o = e(), !a && W.didScheduleLegacyUpdate) {
              var c = W.current;
              c !== null && (W.didScheduleLegacyUpdate = !1, Gr(c));
            }
          } catch (I) {
            throw Cr(r), I;
          } finally {
            W.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var p = o, l = !1, h = {
              then: function(I, U) {
                l = !0, p.then(function(q) {
                  Cr(r), Ge === 0 ? Kr(q, I, U) : I(q);
                }, function(q) {
                  Cr(r), U(q);
                });
              }
            };
            return !Et && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              l || (Et = !0, d("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), h;
          } else {
            var R = o;
            if (Cr(r), Ge === 0) {
              var P = W.current;
              P !== null && (Gr(P), W.current = null);
              var x = {
                then: function(I, U) {
                  W.current === null ? (W.current = [], Kr(R, I, U)) : I(R);
                }
              };
              return x;
            } else {
              var A = {
                then: function(I, U) {
                  I(R);
                }
              };
              return A;
            }
          }
        }
      }
      function Cr(e) {
        e !== Ge - 1 && d("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ge = e;
      }
      function Kr(e, r, a) {
        {
          var o = W.current;
          if (o !== null)
            try {
              Gr(o), Kt(function() {
                o.length === 0 ? (W.current = null, r(e)) : Kr(e, r, a);
              });
            } catch (c) {
              a(c);
            }
          else
            r(e);
        }
      }
      var Hr = !1;
      function Gr(e) {
        if (!Hr) {
          Hr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Hr = !1;
          }
        }
      }
      var Ht = gt, Gt = zt, Zt = Bt, Jt = {
        map: Ne,
        forEach: vr,
        count: $r,
        toArray: Lr,
        only: yr
      };
      f.Children = Jt, f.Component = E, f.Fragment = oe, f.Profiler = re, f.PureComponent = T, f.StrictMode = ie, f.Suspense = Y, f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B, f.act = Rt, f.cloneElement = Gt, f.createContext = hr, f.createElement = Ht, f.createFactory = Zt, f.createRef = kr, f.forwardRef = Wr, f.isValidElement = Oe, f.lazy = Nr, f.memo = i, f.startTransition = qt, f.unstable_act = Rt, f.useCallback = $, f.useContext = v, f.useDebugValue = Ee, f.useDeferredValue = rr, f.useEffect = m, f.useId = Vr, f.useImperativeHandle = Pe, f.useInsertionEffect = z, f.useLayoutEffect = F, f.useMemo = Q, f.useReducer = S, f.useRef = b, f.useState = C, f.useSyncExternalStore = Ur, f.useTransition = G, f.version = K, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(or, or.exports)), or.exports;
}
Or.env.NODE_ENV === "production" ? et.exports = on() : et.exports = un();
var rt = et.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function sn() {
  if (kt) return nr;
  kt = 1;
  var y = rt, f = Symbol.for("react.element"), K = Symbol.for("react.fragment"), ee = Object.prototype.hasOwnProperty, me = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, oe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ie(re, L, te) {
    var M, Y = {}, ne = null, J = null;
    te !== void 0 && (ne = "" + te), L.key !== void 0 && (ne = "" + L.key), L.ref !== void 0 && (J = L.ref);
    for (M in L) ee.call(L, M) && !oe.hasOwnProperty(M) && (Y[M] = L[M]);
    if (re && re.defaultProps) for (M in L = re.defaultProps, L) Y[M] === void 0 && (Y[M] = L[M]);
    return { $$typeof: f, type: re, key: ne, ref: J, props: Y, _owner: me.current };
  }
  return nr.Fragment = K, nr.jsx = ie, nr.jsxs = ie, nr;
}
var ar = {}, Pt;
function cn() {
  return Pt || (Pt = 1, Or.env.NODE_ENV !== "production" && function() {
    var y = rt, f = Symbol.for("react.element"), K = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), me = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), ie = Symbol.for("react.provider"), re = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), fe = Symbol.iterator, Ue = "@@iterator";
    function ue(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = fe && t[fe] || t[Ue];
      return typeof i == "function" ? i : null;
    }
    var se = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(t) {
      {
        for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), v = 1; v < i; v++)
          s[v - 1] = arguments[v];
        Ce("error", t, s);
      }
    }
    function Ce(t, i, s) {
      {
        var v = se.ReactDebugCurrentFrame, C = v.getStackAddendum();
        C !== "" && (i += "%s", s = s.concat([C]));
        var S = s.map(function(b) {
          return String(b);
        });
        S.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, S);
      }
    }
    var ce = !1, W = !1, Z = !1, de = !1, ge = !1, je;
    je = Symbol.for("react.module.reference");
    function xe(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === ee || t === oe || ge || t === me || t === te || t === M || de || t === J || ce || W || Z || typeof t == "object" && t !== null && (t.$$typeof === ne || t.$$typeof === Y || t.$$typeof === ie || t.$$typeof === re || t.$$typeof === L || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === je || t.getModuleId !== void 0));
    }
    function Je(t, i, s) {
      var v = t.displayName;
      if (v)
        return v;
      var C = i.displayName || i.name || "";
      return C !== "" ? s + "(" + C + ")" : s;
    }
    function Ae(t) {
      return t.displayName || "Context";
    }
    function H(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case ee:
          return "Fragment";
        case K:
          return "Portal";
        case oe:
          return "Profiler";
        case me:
          return "StrictMode";
        case te:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case re:
            var i = t;
            return Ae(i) + ".Consumer";
          case ie:
            var s = t;
            return Ae(s._context) + ".Provider";
          case L:
            return Je(t, t.render, "ForwardRef");
          case Y:
            var v = t.displayName || null;
            return v !== null ? v : H(t.type) || "Memo";
          case ne: {
            var C = t, S = C._payload, b = C._init;
            try {
              return H(b(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, B = 0, le, d, pe, De, _e, n, u;
    function _() {
    }
    _.__reactDisabledLog = !0;
    function E() {
      {
        if (B === 0) {
          le = console.log, d = console.info, pe = console.warn, De = console.error, _e = console.group, n = console.groupCollapsed, u = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: _,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        B++;
      }
    }
    function w() {
      {
        if (B--, B === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, t, {
              value: le
            }),
            info: X({}, t, {
              value: d
            }),
            warn: X({}, t, {
              value: pe
            }),
            error: X({}, t, {
              value: De
            }),
            group: X({}, t, {
              value: _e
            }),
            groupCollapsed: X({}, t, {
              value: n
            }),
            groupEnd: X({}, t, {
              value: u
            })
          });
        }
        B < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var j = se.ReactCurrentDispatcher, k;
    function O(t, i, s) {
      {
        if (k === void 0)
          try {
            throw Error();
          } catch (C) {
            var v = C.stack.trim().match(/\n( *(at )?)/);
            k = v && v[1] || "";
          }
        return `
` + k + t;
      }
    }
    var T = !1, V;
    {
      var kr = typeof WeakMap == "function" ? WeakMap : Map;
      V = new kr();
    }
    function ir(t, i) {
      if (!t || T)
        return "";
      {
        var s = V.get(t);
        if (s !== void 0)
          return s;
      }
      var v;
      T = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = j.current, j.current = null, E();
      try {
        if (i) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (G) {
              v = G;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (G) {
              v = G;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            v = G;
          }
          t();
        }
      } catch (G) {
        if (G && v && typeof G.stack == "string") {
          for (var m = G.stack.split(`
`), z = v.stack.split(`
`), F = m.length - 1, $ = z.length - 1; F >= 1 && $ >= 0 && m[F] !== z[$]; )
            $--;
          for (; F >= 1 && $ >= 0; F--, $--)
            if (m[F] !== z[$]) {
              if (F !== 1 || $ !== 1)
                do
                  if (F--, $--, $ < 0 || m[F] !== z[$]) {
                    var Q = `
` + m[F].replace(" at new ", " at ");
                    return t.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", t.displayName)), typeof t == "function" && V.set(t, Q), Q;
                  }
                while (F >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        T = !1, j.current = S, w(), Error.prepareStackTrace = C;
      }
      var Pe = t ? t.displayName || t.name : "", Ee = Pe ? O(Pe) : "";
      return typeof t == "function" && V.set(t, Ee), Ee;
    }
    function Ye(t, i, s) {
      return ir(t, !1);
    }
    function Pr(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function Be(t, i, s) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ir(t, Pr(t));
      if (typeof t == "string")
        return O(t);
      switch (t) {
        case te:
          return O("Suspense");
        case M:
          return O("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case L:
            return Ye(t.render);
          case Y:
            return Be(t.type, i, s);
          case ne: {
            var v = t, C = v._payload, S = v._init;
            try {
              return Be(S(C), i, s);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, Fe = {}, ur = se.ReactDebugCurrentFrame;
    function Ie(t) {
      if (t) {
        var i = t._owner, s = Be(t.type, t._source, i ? i.type : null);
        ur.setExtraStackFrame(s);
      } else
        ur.setExtraStackFrame(null);
    }
    function ve(t, i, s, v, C) {
      {
        var S = Function.call.bind(Te);
        for (var b in t)
          if (S(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var z = Error((v || "React class") + ": " + s + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              m = t[b](i, b, v, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              m = F;
            }
            m && !(m instanceof Error) && (Ie(C), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", s, b, typeof m), Ie(null)), m instanceof Error && !(m.message in Fe) && (Fe[m.message] = !0, Ie(C), D("Failed %s type: %s", s, m.message), Ie(null));
          }
      }
    }
    var $e = Array.isArray;
    function ze(t) {
      return $e(t);
    }
    function sr(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, s = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s;
      }
    }
    function cr(t) {
      try {
        return qe(t), !1;
      } catch {
        return !0;
      }
    }
    function qe(t) {
      return "" + t;
    }
    function Xe(t) {
      if (cr(t))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(t)), qe(t);
    }
    var Se = se.ReactCurrentOwner, jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lr, fr, Le;
    Le = {};
    function xr(t) {
      if (Te.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Ar(t) {
      if (Te.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Dr(t, i) {
      if (typeof t.ref == "string" && Se.current && i && Se.current.stateNode !== i) {
        var s = H(Se.current.type);
        Le[s] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(Se.current.type), t.ref), Le[s] = !0);
      }
    }
    function Oe(t, i) {
      {
        var s = function() {
          lr || (lr = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function dr(t, i) {
      {
        var s = function() {
          fr || (fr = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var Fr = function(t, i, s, v, C, S, b) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: s,
        props: b,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Ir(t, i, s, v, C) {
      {
        var S, b = {}, m = null, z = null;
        s !== void 0 && (Xe(s), m = "" + s), Ar(i) && (Xe(i.key), m = "" + i.key), xr(i) && (z = i.ref, Dr(i, C));
        for (S in i)
          Te.call(i, S) && !jr.hasOwnProperty(S) && (b[S] = i[S]);
        if (t && t.defaultProps) {
          var F = t.defaultProps;
          for (S in F)
            b[S] === void 0 && (b[S] = F[S]);
        }
        if (m || z) {
          var $ = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && Oe(b, $), z && dr(b, $);
        }
        return Fr(t, m, z, C, v, Se.current, b);
      }
    }
    var Ke = se.ReactCurrentOwner, pr = se.ReactDebugCurrentFrame;
    function be(t) {
      if (t) {
        var i = t._owner, s = Be(t.type, t._source, i ? i.type : null);
        pr.setExtraStackFrame(s);
      } else
        pr.setExtraStackFrame(null);
    }
    var Me;
    Me = !1;
    function ke(t) {
      return typeof t == "object" && t !== null && t.$$typeof === f;
    }
    function Ne() {
      {
        if (Ke.current) {
          var t = H(Ke.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function $r(t) {
      return "";
    }
    var vr = {};
    function Lr(t) {
      {
        var i = Ne();
        if (!i) {
          var s = typeof t == "string" ? t : t.displayName || t.name;
          s && (i = `

Check the top-level render call using <` + s + ">.");
        }
        return i;
      }
    }
    function yr(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var s = Lr(i);
        if (vr[s])
          return;
        vr[s] = !0;
        var v = "";
        t && t._owner && t._owner !== Ke.current && (v = " It was passed a child from " + H(t._owner.type) + "."), be(t), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, v), be(null);
      }
    }
    function hr(t, i) {
      {
        if (typeof t != "object")
          return;
        if (ze(t))
          for (var s = 0; s < t.length; s++) {
            var v = t[s];
            ke(v) && yr(v, i);
          }
        else if (ke(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var C = ue(t);
          if (typeof C == "function" && C !== t.entries)
            for (var S = C.call(t), b; !(b = S.next()).done; )
              ke(b.value) && yr(b.value, i);
        }
      }
    }
    function We(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var s;
        if (typeof i == "function")
          s = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === L || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === Y))
          s = i.propTypes;
        else
          return;
        if (s) {
          var v = H(i);
          ve(s, t.props, "prop", v, t);
        } else if (i.PropTypes !== void 0 && !Me) {
          Me = !0;
          var C = H(i);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qe(t) {
      {
        for (var i = Object.keys(t.props), s = 0; s < i.length; s++) {
          var v = i[s];
          if (v !== "children" && v !== "key") {
            be(t), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), be(null);
            break;
          }
        }
        t.ref !== null && (be(t), D("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    var er = {};
    function mr(t, i, s, v, C, S) {
      {
        var b = xe(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = $r();
          z ? m += z : m += Ne();
          var F;
          t === null ? F = "null" : ze(t) ? F = "array" : t !== void 0 && t.$$typeof === f ? (F = "<" + (H(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : F = typeof t, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, m);
        }
        var $ = Ir(t, i, s, C, S);
        if ($ == null)
          return $;
        if (b) {
          var Q = i.children;
          if (Q !== void 0)
            if (v)
              if (ze(Q)) {
                for (var Pe = 0; Pe < Q.length; Pe++)
                  hr(Q[Pe], t);
                Object.freeze && Object.freeze(Q);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              hr(Q, t);
        }
        if (Te.call(i, "key")) {
          var Ee = H(t), G = Object.keys(i).filter(function(Ur) {
            return Ur !== "key";
          }), rr = G.length > 0 ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!er[Ee + rr]) {
            var Vr = G.length > 0 ? "{" + G.join(": ..., ") + ": ...}" : "{}";
            D(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rr, Ee, Vr, Ee), er[Ee + rr] = !0;
          }
        }
        return t === ee ? Qe($) : We($), $;
      }
    }
    function Mr(t, i, s) {
      return mr(t, i, s, !0);
    }
    function Nr(t, i, s) {
      return mr(t, i, s, !1);
    }
    var Wr = Nr, gr = Mr;
    ar.Fragment = ee, ar.jsx = Wr, ar.jsxs = gr;
  }()), ar;
}
Or.env.NODE_ENV === "production" ? Qr.exports = sn() : Qr.exports = cn();
var ae = Qr.exports;
const ln = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='35.93'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20228'%3e%3cpath%20fill='%2300D8FF'%20d='M210.483%2073.824a171.49%20171.49%200%200%200-8.24-2.597c.465-1.9.893-3.777%201.273-5.621c6.238-30.281%202.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254%2019.526a171.23%20171.23%200%200%200-6.375%205.848a155.866%20155.866%200%200%200-4.241-3.917C100.759%203.829%2077.587-4.822%2063.673%203.233C50.33%2010.957%2046.379%2033.89%2051.995%2062.588a170.974%20170.974%200%200%200%201.892%208.48c-3.28.932-6.445%201.924-9.474%202.98C17.309%2083.498%200%2098.307%200%20113.668c0%2015.865%2018.582%2031.778%2046.812%2041.427a145.52%20145.52%200%200%200%206.921%202.165a167.467%20167.467%200%200%200-2.01%209.138c-5.354%2028.2-1.173%2050.591%2012.134%2058.266c13.744%207.926%2036.812-.22%2059.273-19.855a145.567%20145.567%200%200%200%205.342-4.923a168.064%20168.064%200%200%200%206.92%206.314c21.758%2018.722%2043.246%2026.282%2056.54%2018.586c13.731-7.949%2018.194-32.003%2012.4-61.268a145.016%20145.016%200%200%200-1.535-6.842c1.62-.48%203.21-.974%204.76-1.488c29.348-9.723%2048.443-25.443%2048.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365%2070.984c-1.4.463-2.836.91-4.3%201.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11%209.31-21.767%2012.459-31.957c2.619.758%205.16%201.557%207.61%202.4c23.69%208.156%2038.14%2020.213%2038.14%2029.504c0%209.896-15.606%2022.743-40.946%2031.14Zm-10.514%2020.834c2.562%2012.94%202.927%2024.64%201.23%2033.787c-1.524%208.219-4.59%2013.698-8.382%2015.893c-8.067%204.67-25.32-1.4-43.927-17.412a156.726%20156.726%200%200%201-6.437-5.87c7.214-7.889%2014.423-17.06%2021.459-27.246c12.376-1.098%2024.068-2.894%2034.671-5.345a134.17%20134.17%200%200%201%201.386%206.193ZM87.276%20214.515c-7.882%202.783-14.16%202.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923%20156.923%200%200%201%201.869-8.499c10.486%202.32%2022.093%203.988%2034.498%204.994c7.084%209.967%2014.501%2019.128%2021.976%2027.15a134.668%20134.668%200%200%201-4.877%204.492c-9.933%208.682-19.886%2014.842-28.658%2017.94ZM50.35%20144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322%2013.897-21.212%2037.076-29.293c2.813-.98%205.757-1.905%208.812-2.773c3.204%2010.42%207.406%2021.315%2012.477%2032.332c-5.137%2011.18-9.399%2022.249-12.634%2032.792a134.718%20134.718%200%200%201-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134%206.425-47.789c8.564-4.958%2027.502%202.111%2047.463%2019.835a144.318%20144.318%200%200%201%203.841%203.545c-7.438%207.987-14.787%2017.08-21.808%2026.988c-12.04%201.116-23.565%202.908-34.161%205.309a160.342%20160.342%200%200%201-1.76-7.887Zm110.427%2027.268a347.8%20347.8%200%200%200-7.785-12.803c8.168%201.033%2015.994%202.404%2023.343%204.08c-2.206%207.072-4.956%2014.465-8.193%2022.045a381.151%20381.151%200%200%200-7.365-13.322Zm-45.032-43.861c5.044%205.465%2010.096%2011.566%2015.065%2018.186a322.04%20322.04%200%200%200-30.257-.006c4.974-6.559%2010.069-12.652%2015.192-18.18ZM82.802%2087.83a323.167%20323.167%200%200%200-7.227%2013.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634%2015.093-2.97%2023.209-3.984a321.524%20321.524%200%200%200-7.848%2012.897Zm8.081%2065.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3%205.045-14.885%208.298-22.6a321.187%20321.187%200%200%200%207.257%2013.246c2.594%204.48%205.28%208.868%208.038%2013.147Zm37.542%2031.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192%209.899.29%2014.978.29c5.218%200%2010.376-.117%2015.453-.343c-4.985%206.774-10.018%2012.97-15.028%2018.486Zm52.198-57.817c3.422%207.8%206.306%2015.345%208.596%2022.52c-7.422%201.694-15.436%203.058-23.88%204.071a382.417%20382.417%200%200%200%207.859-13.026a347.403%20347.403%200%200%200%207.425-13.565Zm-16.898%208.101a358.557%20358.557%200%200%201-12.281%2019.815a329.4%20329.4%200%200%201-23.444.823c-7.967%200-15.716-.248-23.178-.732a310.202%20310.202%200%200%201-12.513-19.846h.001a307.41%20307.41%200%200%201-10.923-20.627a310.278%20310.278%200%200%201%2010.89-20.637l-.001.001a307.318%20307.318%200%200%201%2012.413-19.761c7.613-.576%2015.42-.876%2023.31-.876H128c7.926%200%2015.743.303%2023.354.883a329.357%20329.357%200%200%201%2012.335%2019.695a358.489%20358.489%200%200%201%2011.036%2020.54a329.472%20329.472%200%200%201-11%2020.722Zm22.56-122.124c8.572%204.944%2011.906%2024.881%206.52%2051.026c-.344%201.668-.73%203.367-1.15%205.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789%20160.789%200%200%201%205.888-5.4c18.9-16.447%2036.564-22.941%2044.612-18.3ZM128%2090.808c12.625%200%2022.86%2010.235%2022.86%2022.86s-10.235%2022.86-22.86%2022.86s-22.86-10.235-22.86-22.86s10.235-22.86%2022.86-22.86Z'%3e%3c/path%3e%3c/svg%3e", fn = "/vite.svg";
function dn() {
  const [y, f] = rt.useState(0);
  return /* @__PURE__ */ ae.jsxs(ae.Fragment, { children: [
    /* @__PURE__ */ ae.jsxs("div", { children: [
      /* @__PURE__ */ ae.jsx("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ ae.jsx("img", { src: fn, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ ae.jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ ae.jsx("img", { src: ln, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ ae.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ ae.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ ae.jsxs("button", { onClick: () => f((K) => K + 1), children: [
        "count is ",
        y
      ] }),
      /* @__PURE__ */ ae.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ ae.jsx("code", { children: "src/App.tsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ ae.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
export {
  dn as WoodDeck
};
