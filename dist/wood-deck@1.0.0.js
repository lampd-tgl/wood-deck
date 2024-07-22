import $e, { useState as Cr } from "react";
function jr(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Le = { exports: {} }, l = Le.exports = {}, _, T;
function ue() {
  throw new Error("setTimeout has not been defined");
}
function ce() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? _ = setTimeout : _ = ue;
  } catch {
    _ = ue;
  }
  try {
    typeof clearTimeout == "function" ? T = clearTimeout : T = ce;
  } catch {
    T = ce;
  }
})();
function Me(i) {
  if (_ === setTimeout)
    return setTimeout(i, 0);
  if ((_ === ue || !_) && setTimeout)
    return _ = setTimeout, setTimeout(i, 0);
  try {
    return _(i, 0);
  } catch {
    try {
      return _.call(null, i, 0);
    } catch {
      return _.call(this, i, 0);
    }
  }
}
function Or(i) {
  if (T === clearTimeout)
    return clearTimeout(i);
  if ((T === ce || !T) && clearTimeout)
    return T = clearTimeout, clearTimeout(i);
  try {
    return T(i);
  } catch {
    try {
      return T.call(null, i);
    } catch {
      return T.call(this, i);
    }
  }
}
var x = [], $ = !1, k, H = -1;
function Sr() {
  !$ || !k || ($ = !1, k.length ? x = k.concat(x) : H = -1, x.length && Ye());
}
function Ye() {
  if (!$) {
    var i = Me(Sr);
    $ = !0;
    for (var d = x.length; d; ) {
      for (k = x, x = []; ++H < d; )
        k && k[H].run();
      H = -1, d = x.length;
    }
    k = null, $ = !1, Or(i);
  }
}
l.nextTick = function(i) {
  var d = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var b = 1; b < arguments.length; b++)
      d[b - 1] = arguments[b];
  x.push(new Ve(i, d)), x.length === 1 && !$ && Me(Ye);
};
function Ve(i, d) {
  this.fun = i, this.array = d;
}
Ve.prototype.run = function() {
  this.fun.apply(null, this.array);
};
l.title = "browser";
l.browser = !0;
l.env = {};
l.argv = [];
l.version = "";
l.versions = {};
function C() {
}
l.on = C;
l.addListener = C;
l.once = C;
l.off = C;
l.removeListener = C;
l.removeAllListeners = C;
l.emit = C;
l.prependListener = C;
l.prependOnceListener = C;
l.listeners = function(i) {
  return [];
};
l.binding = function(i) {
  throw new Error("process.binding is not supported");
};
l.cwd = function() {
  return "/";
};
l.chdir = function(i) {
  throw new Error("process.chdir is not supported");
};
l.umask = function() {
  return 0;
};
var Pr = Le.exports;
const Ne = /* @__PURE__ */ jr(Pr);
var se = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function kr() {
  if (Ie) return N;
  Ie = 1;
  var i = $e, d = Symbol.for("react.element"), b = Symbol.for("react.fragment"), D = Object.prototype.hasOwnProperty, Z = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(j, p, F) {
    var m, w = {}, O = null, B = null;
    F !== void 0 && (O = "" + F), p.key !== void 0 && (O = "" + p.key), p.ref !== void 0 && (B = p.ref);
    for (m in p) D.call(p, m) && !q.hasOwnProperty(m) && (w[m] = p[m]);
    if (j && j.defaultProps) for (m in p = j.defaultProps, p) w[m] === void 0 && (w[m] = p[m]);
    return { $$typeof: d, type: j, key: O, ref: B, props: w, _owner: Z.current };
  }
  return N.Fragment = b, N.jsx = L, N.jsxs = L, N;
}
var U = {}, We;
function Dr() {
  return We || (We = 1, Ne.env.NODE_ENV !== "production" && function() {
    var i = $e, d = Symbol.for("react.element"), b = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), j = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), le = Symbol.iterator, Ue = "@@iterator";
    function Ze(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = le && e[le] || e[Ue];
      return typeof r == "function" ? r : null;
    }
    var A = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        qe("error", e, t);
      }
    }
    function qe(e, r, t) {
      {
        var n = A.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var c = t.map(function(o) {
          return String(o);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var Be = !1, Je = !1, Ke = !1, Ge = !1, ze = !1, fe;
    fe = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === D || e === q || ze || e === Z || e === F || e === m || Ge || e === B || Be || Je || Ke || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === w || e.$$typeof === L || e.$$typeof === j || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function Xe(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case D:
          return "Fragment";
        case b:
          return "Portal";
        case q:
          return "Profiler";
        case Z:
          return "StrictMode";
        case F:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var r = e;
            return de(r) + ".Consumer";
          case L:
            var t = e;
            return de(t._context) + ".Provider";
          case p:
            return Xe(e, e.render, "ForwardRef");
          case w:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case O: {
            var u = e, c = u._payload, o = u._init;
            try {
              return R(o(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, M = 0, ve, pe, he, ge, me, ye, be;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Qe() {
      {
        if (M === 0) {
          ve = console.log, pe = console.info, he = console.warn, ge = console.error, me = console.group, ye = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
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
        M++;
      }
    }
    function er() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ve
            }),
            info: S({}, e, {
              value: pe
            }),
            warn: S({}, e, {
              value: he
            }),
            error: S({}, e, {
              value: ge
            }),
            group: S({}, e, {
              value: me
            }),
            groupCollapsed: S({}, e, {
              value: ye
            }),
            groupEnd: S({}, e, {
              value: be
            })
          });
        }
        M < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = A.ReactCurrentDispatcher, Q;
    function J(e, r, t) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            Q = n && n[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var ee = !1, K;
    {
      var rr = typeof WeakMap == "function" ? WeakMap : Map;
      K = new rr();
    }
    function Re(e, r) {
      if (!e || ee)
        return "";
      {
        var t = K.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ee = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = X.current, X.current = null, Qe();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (g) {
              n = g;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var a = g.stack.split(`
`), h = n.stack.split(`
`), s = a.length - 1, f = h.length - 1; s >= 1 && f >= 0 && a[s] !== h[f]; )
            f--;
          for (; s >= 1 && f >= 0; s--, f--)
            if (a[s] !== h[f]) {
              if (s !== 1 || f !== 1)
                do
                  if (s--, f--, f < 0 || a[s] !== h[f]) {
                    var E = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, E), E;
                  }
                while (s >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        ee = !1, X.current = c, er(), Error.prepareStackTrace = u;
      }
      var W = e ? e.displayName || e.name : "", P = W ? J(W) : "";
      return typeof e == "function" && K.set(e, P), P;
    }
    function tr(e, r, t) {
      return Re(e, !1);
    }
    function nr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, nr(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case F:
          return J("Suspense");
        case m:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return tr(e.render);
          case w:
            return G(e.type, r, t);
          case O: {
            var n = e, u = n._payload, c = n._init;
            try {
              return G(c(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, _e = {}, Te = A.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    function ar(e, r, t, n, u) {
      {
        var c = Function.call.bind(Y);
        for (var o in e)
          if (c(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (z(u), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), z(null)), a instanceof Error && !(a.message in _e) && (_e[a.message] = !0, z(u), v("Failed %s type: %s", t, a.message), z(null));
          }
      }
    }
    var ir = Array.isArray;
    function re(e) {
      return ir(e);
    }
    function or(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ur(e) {
      try {
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function xe(e) {
      if (ur(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(e)), we(e);
    }
    var V = A.ReactCurrentOwner, cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, je, te;
    te = {};
    function sr(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function lr(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function fr(e, r) {
      if (typeof e.ref == "string" && V.current && r && V.current.stateNode !== r) {
        var t = R(V.current.type);
        te[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(V.current.type), e.ref), te[t] = !0);
      }
    }
    function dr(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function vr(e, r) {
      {
        var t = function() {
          je || (je = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var pr = function(e, r, t, n, u, c, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function hr(e, r, t, n, u) {
      {
        var c, o = {}, a = null, h = null;
        t !== void 0 && (xe(t), a = "" + t), lr(r) && (xe(r.key), a = "" + r.key), sr(r) && (h = r.ref, fr(r, u));
        for (c in r)
          Y.call(r, c) && !cr.hasOwnProperty(c) && (o[c] = r[c]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (c in s)
            o[c] === void 0 && (o[c] = s[c]);
        }
        if (a || h) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && dr(o, f), h && vr(o, f);
        }
        return pr(e, a, h, u, n, V.current, o);
      }
    }
    var ne = A.ReactCurrentOwner, Oe = A.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(t);
      } else
        Oe.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function Se() {
      {
        if (ne.current) {
          var e = R(ne.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function gr(e) {
      return "";
    }
    var Pe = {};
    function mr(e) {
      {
        var r = Se();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ke(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = mr(r);
        if (Pe[t])
          return;
        Pe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ne.current && (n = " It was passed a child from " + R(e._owner.type) + "."), I(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), I(null);
      }
    }
    function De(e, r) {
      {
        if (typeof e != "object")
          return;
        if (re(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ie(n) && ke(n, r);
          }
        else if (ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = Ze(e);
          if (typeof u == "function" && u !== e.entries)
            for (var c = u.call(e), o; !(o = c.next()).done; )
              ie(o.value) && ke(o.value, r);
        }
      }
    }
    function yr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          ar(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ae) {
          ae = !0;
          var u = R(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            I(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var Fe = {};
    function Ae(e, r, t, n, u, c) {
      {
        var o = He(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = gr();
          h ? a += h : a += Se();
          var s;
          e === null ? s = "null" : re(e) ? s = "array" : e !== void 0 && e.$$typeof === d ? (s = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var f = hr(e, r, t, u, c);
        if (f == null)
          return f;
        if (o) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (re(E)) {
                for (var W = 0; W < E.length; W++)
                  De(E[W], e);
                Object.freeze && Object.freeze(E);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(E, e);
        }
        if (Y.call(r, "key")) {
          var P = R(e), g = Object.keys(r).filter(function(xr) {
            return xr !== "key";
          }), oe = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fe[P + oe]) {
            var wr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, oe, P, wr, P), Fe[P + oe] = !0;
          }
        }
        return e === D ? br(f) : yr(f), f;
      }
    }
    function Er(e, r, t) {
      return Ae(e, r, t, !0);
    }
    function Rr(e, r, t) {
      return Ae(e, r, t, !1);
    }
    var _r = Rr, Tr = Er;
    U.Fragment = D, U.jsx = _r, U.jsxs = Tr;
  }()), U;
}
Ne.env.NODE_ENV === "production" ? se.exports = kr() : se.exports = Dr();
var y = se.exports;
const Fr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='35.93'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20228'%3e%3cpath%20fill='%2300D8FF'%20d='M210.483%2073.824a171.49%20171.49%200%200%200-8.24-2.597c.465-1.9.893-3.777%201.273-5.621c6.238-30.281%202.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254%2019.526a171.23%20171.23%200%200%200-6.375%205.848a155.866%20155.866%200%200%200-4.241-3.917C100.759%203.829%2077.587-4.822%2063.673%203.233C50.33%2010.957%2046.379%2033.89%2051.995%2062.588a170.974%20170.974%200%200%200%201.892%208.48c-3.28.932-6.445%201.924-9.474%202.98C17.309%2083.498%200%2098.307%200%20113.668c0%2015.865%2018.582%2031.778%2046.812%2041.427a145.52%20145.52%200%200%200%206.921%202.165a167.467%20167.467%200%200%200-2.01%209.138c-5.354%2028.2-1.173%2050.591%2012.134%2058.266c13.744%207.926%2036.812-.22%2059.273-19.855a145.567%20145.567%200%200%200%205.342-4.923a168.064%20168.064%200%200%200%206.92%206.314c21.758%2018.722%2043.246%2026.282%2056.54%2018.586c13.731-7.949%2018.194-32.003%2012.4-61.268a145.016%20145.016%200%200%200-1.535-6.842c1.62-.48%203.21-.974%204.76-1.488c29.348-9.723%2048.443-25.443%2048.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365%2070.984c-1.4.463-2.836.91-4.3%201.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11%209.31-21.767%2012.459-31.957c2.619.758%205.16%201.557%207.61%202.4c23.69%208.156%2038.14%2020.213%2038.14%2029.504c0%209.896-15.606%2022.743-40.946%2031.14Zm-10.514%2020.834c2.562%2012.94%202.927%2024.64%201.23%2033.787c-1.524%208.219-4.59%2013.698-8.382%2015.893c-8.067%204.67-25.32-1.4-43.927-17.412a156.726%20156.726%200%200%201-6.437-5.87c7.214-7.889%2014.423-17.06%2021.459-27.246c12.376-1.098%2024.068-2.894%2034.671-5.345a134.17%20134.17%200%200%201%201.386%206.193ZM87.276%20214.515c-7.882%202.783-14.16%202.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923%20156.923%200%200%201%201.869-8.499c10.486%202.32%2022.093%203.988%2034.498%204.994c7.084%209.967%2014.501%2019.128%2021.976%2027.15a134.668%20134.668%200%200%201-4.877%204.492c-9.933%208.682-19.886%2014.842-28.658%2017.94ZM50.35%20144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322%2013.897-21.212%2037.076-29.293c2.813-.98%205.757-1.905%208.812-2.773c3.204%2010.42%207.406%2021.315%2012.477%2032.332c-5.137%2011.18-9.399%2022.249-12.634%2032.792a134.718%20134.718%200%200%201-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134%206.425-47.789c8.564-4.958%2027.502%202.111%2047.463%2019.835a144.318%20144.318%200%200%201%203.841%203.545c-7.438%207.987-14.787%2017.08-21.808%2026.988c-12.04%201.116-23.565%202.908-34.161%205.309a160.342%20160.342%200%200%201-1.76-7.887Zm110.427%2027.268a347.8%20347.8%200%200%200-7.785-12.803c8.168%201.033%2015.994%202.404%2023.343%204.08c-2.206%207.072-4.956%2014.465-8.193%2022.045a381.151%20381.151%200%200%200-7.365-13.322Zm-45.032-43.861c5.044%205.465%2010.096%2011.566%2015.065%2018.186a322.04%20322.04%200%200%200-30.257-.006c4.974-6.559%2010.069-12.652%2015.192-18.18ZM82.802%2087.83a323.167%20323.167%200%200%200-7.227%2013.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634%2015.093-2.97%2023.209-3.984a321.524%20321.524%200%200%200-7.848%2012.897Zm8.081%2065.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3%205.045-14.885%208.298-22.6a321.187%20321.187%200%200%200%207.257%2013.246c2.594%204.48%205.28%208.868%208.038%2013.147Zm37.542%2031.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192%209.899.29%2014.978.29c5.218%200%2010.376-.117%2015.453-.343c-4.985%206.774-10.018%2012.97-15.028%2018.486Zm52.198-57.817c3.422%207.8%206.306%2015.345%208.596%2022.52c-7.422%201.694-15.436%203.058-23.88%204.071a382.417%20382.417%200%200%200%207.859-13.026a347.403%20347.403%200%200%200%207.425-13.565Zm-16.898%208.101a358.557%20358.557%200%200%201-12.281%2019.815a329.4%20329.4%200%200%201-23.444.823c-7.967%200-15.716-.248-23.178-.732a310.202%20310.202%200%200%201-12.513-19.846h.001a307.41%20307.41%200%200%201-10.923-20.627a310.278%20310.278%200%200%201%2010.89-20.637l-.001.001a307.318%20307.318%200%200%201%2012.413-19.761c7.613-.576%2015.42-.876%2023.31-.876H128c7.926%200%2015.743.303%2023.354.883a329.357%20329.357%200%200%201%2012.335%2019.695a358.489%20358.489%200%200%201%2011.036%2020.54a329.472%20329.472%200%200%201-11%2020.722Zm22.56-122.124c8.572%204.944%2011.906%2024.881%206.52%2051.026c-.344%201.668-.73%203.367-1.15%205.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789%20160.789%200%200%201%205.888-5.4c18.9-16.447%2036.564-22.941%2044.612-18.3ZM128%2090.808c12.625%200%2022.86%2010.235%2022.86%2022.86s-10.235%2022.86-22.86%2022.86s-22.86-10.235-22.86-22.86s10.235-22.86%2022.86-22.86Z'%3e%3c/path%3e%3c/svg%3e", Ar = "/vite.svg";
function Wr() {
  const [i, d] = Cr(0);
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs("div", { children: [
      /* @__PURE__ */ y.jsx("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ y.jsx("img", { src: Ar, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ y.jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ y.jsx("img", { src: Fr, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ y.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ y.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ y.jsxs("button", { onClick: () => d((b) => b + 1), children: [
        "count is ",
        i
      ] }),
      /* @__PURE__ */ y.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ y.jsx("code", { children: "src/App.tsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ y.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
export {
  Wr as WoodDeck
};
