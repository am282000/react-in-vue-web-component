var Pf = Object.defineProperty;
var Nf = (N, F, m) => F in N ? Pf(N, F, { enumerable: !0, configurable: !0, writable: !0, value: m }) : N[F] = m;
var wa = (N, F, m) => Nf(N, typeof F != "symbol" ? F + "" : F, m);
function zf(N) {
  return N && N.__esModule && Object.prototype.hasOwnProperty.call(N, "default") ? N.default : N;
}
var xa = { exports: {} }, yr = {}, Pa = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sa;
function Tf() {
  if (Sa) return M;
  Sa = 1;
  var N = Symbol.for("react.element"), F = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), ae = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), _e = Symbol.for("react.provider"), me = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Ce = Symbol.for("react.memo"), ye = Symbol.for("react.lazy"), q = Symbol.iterator;
  function X(c) {
    return c === null || typeof c != "object" ? null : (c = q && c[q] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var He = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, We = Object.assign, G = {};
  function W(c, v, O) {
    this.props = c, this.context = v, this.refs = G, this.updater = O || He;
  }
  W.prototype.isReactComponent = {}, W.prototype.setState = function(c, v) {
    if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, v, "setState");
  }, W.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function vn() {
  }
  vn.prototype = W.prototype;
  function sn(c, v, O) {
    this.props = c, this.context = v, this.refs = G, this.updater = O || He;
  }
  var Je = sn.prototype = new vn();
  Je.constructor = sn, We(Je, W.prototype), Je.isPureReactComponent = !0;
  var ge = Array.isArray, qe = Object.prototype.hasOwnProperty, xe = { current: null }, ze = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $e(c, v, O) {
    var D, j = {}, U = null, $ = null;
    if (v != null) for (D in v.ref !== void 0 && ($ = v.ref), v.key !== void 0 && (U = "" + v.key), v) qe.call(v, D) && !ze.hasOwnProperty(D) && (j[D] = v[D]);
    var V = arguments.length - 2;
    if (V === 1) j.children = O;
    else if (1 < V) {
      for (var Z = Array(V), je = 0; je < V; je++) Z[je] = arguments[je + 2];
      j.children = Z;
    }
    if (c && c.defaultProps) for (D in V = c.defaultProps, V) j[D] === void 0 && (j[D] = V[D]);
    return { $$typeof: N, type: c, key: U, ref: $, props: j, _owner: xe.current };
  }
  function Nn(c, v) {
    return { $$typeof: N, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function yn(c) {
    return typeof c == "object" && c !== null && c.$$typeof === N;
  }
  function Yn(c) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(O) {
      return v[O];
    });
  }
  var an = /\/+/g;
  function Fe(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Yn("" + c.key) : v.toString(36);
  }
  function be(c, v, O, D, j) {
    var U = typeof c;
    (U === "undefined" || U === "boolean") && (c = null);
    var $ = !1;
    if (c === null) $ = !0;
    else switch (U) {
      case "string":
      case "number":
        $ = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case N:
          case F:
            $ = !0;
        }
    }
    if ($) return $ = c, j = j($), c = D === "" ? "." + Fe($, 0) : D, ge(j) ? (O = "", c != null && (O = c.replace(an, "$&/") + "/"), be(j, v, O, "", function(je) {
      return je;
    })) : j != null && (yn(j) && (j = Nn(j, O + (!j.key || $ && $.key === j.key ? "" : ("" + j.key).replace(an, "$&/") + "/") + c)), v.push(j)), 1;
    if ($ = 0, D = D === "" ? "." : D + ":", ge(c)) for (var V = 0; V < c.length; V++) {
      U = c[V];
      var Z = D + Fe(U, V);
      $ += be(U, v, O, Z, j);
    }
    else if (Z = X(c), typeof Z == "function") for (c = Z.call(c), V = 0; !(U = c.next()).done; ) U = U.value, Z = D + Fe(U, V++), $ += be(U, v, O, Z, j);
    else if (U === "object") throw v = String(c), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return $;
  }
  function cn(c, v, O) {
    if (c == null) return c;
    var D = [], j = 0;
    return be(c, D, "", "", function(U) {
      return v.call(O, U, j++);
    }), D;
  }
  function Te(c) {
    if (c._status === -1) {
      var v = c._result;
      v = v(), v.then(function(O) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = O);
      }, function(O) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = O);
      }), c._status === -1 && (c._status = 0, c._result = v);
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ne = { current: null }, S = { transition: null }, L = { ReactCurrentDispatcher: ne, ReactCurrentBatchConfig: S, ReactCurrentOwner: xe };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return M.Children = { map: cn, forEach: function(c, v, O) {
    cn(c, function() {
      v.apply(this, arguments);
    }, O);
  }, count: function(c) {
    var v = 0;
    return cn(c, function() {
      v++;
    }), v;
  }, toArray: function(c) {
    return cn(c, function(v) {
      return v;
    }) || [];
  }, only: function(c) {
    if (!yn(c)) throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, M.Component = W, M.Fragment = m, M.Profiler = oe, M.PureComponent = sn, M.StrictMode = ae, M.Suspense = H, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L, M.act = _, M.cloneElement = function(c, v, O) {
    if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var D = We({}, c.props), j = c.key, U = c.ref, $ = c._owner;
    if (v != null) {
      if (v.ref !== void 0 && (U = v.ref, $ = xe.current), v.key !== void 0 && (j = "" + v.key), c.type && c.type.defaultProps) var V = c.type.defaultProps;
      for (Z in v) qe.call(v, Z) && !ze.hasOwnProperty(Z) && (D[Z] = v[Z] === void 0 && V !== void 0 ? V[Z] : v[Z]);
    }
    var Z = arguments.length - 2;
    if (Z === 1) D.children = O;
    else if (1 < Z) {
      V = Array(Z);
      for (var je = 0; je < Z; je++) V[je] = arguments[je + 2];
      D.children = V;
    }
    return { $$typeof: N, type: c.type, key: j, ref: U, props: D, _owner: $ };
  }, M.createContext = function(c) {
    return c = { $$typeof: me, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: _e, _context: c }, c.Consumer = c;
  }, M.createElement = $e, M.createFactory = function(c) {
    var v = $e.bind(null, c);
    return v.type = c, v;
  }, M.createRef = function() {
    return { current: null };
  }, M.forwardRef = function(c) {
    return { $$typeof: ce, render: c };
  }, M.isValidElement = yn, M.lazy = function(c) {
    return { $$typeof: ye, _payload: { _status: -1, _result: c }, _init: Te };
  }, M.memo = function(c, v) {
    return { $$typeof: Ce, type: c, compare: v === void 0 ? null : v };
  }, M.startTransition = function(c) {
    var v = S.transition;
    S.transition = {};
    try {
      c();
    } finally {
      S.transition = v;
    }
  }, M.unstable_act = _, M.useCallback = function(c, v) {
    return ne.current.useCallback(c, v);
  }, M.useContext = function(c) {
    return ne.current.useContext(c);
  }, M.useDebugValue = function() {
  }, M.useDeferredValue = function(c) {
    return ne.current.useDeferredValue(c);
  }, M.useEffect = function(c, v) {
    return ne.current.useEffect(c, v);
  }, M.useId = function() {
    return ne.current.useId();
  }, M.useImperativeHandle = function(c, v, O) {
    return ne.current.useImperativeHandle(c, v, O);
  }, M.useInsertionEffect = function(c, v) {
    return ne.current.useInsertionEffect(c, v);
  }, M.useLayoutEffect = function(c, v) {
    return ne.current.useLayoutEffect(c, v);
  }, M.useMemo = function(c, v) {
    return ne.current.useMemo(c, v);
  }, M.useReducer = function(c, v, O) {
    return ne.current.useReducer(c, v, O);
  }, M.useRef = function(c) {
    return ne.current.useRef(c);
  }, M.useState = function(c) {
    return ne.current.useState(c);
  }, M.useSyncExternalStore = function(c, v, O) {
    return ne.current.useSyncExternalStore(c, v, O);
  }, M.useTransition = function() {
    return ne.current.useTransition();
  }, M.version = "18.3.1", M;
}
Pa.exports = Tf();
var Co = Pa.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ka;
function Lf() {
  if (ka) return yr;
  ka = 1;
  var N = Co, F = Symbol.for("react.element"), m = Symbol.for("react.fragment"), ae = Object.prototype.hasOwnProperty, oe = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function me(ce, H, Ce) {
    var ye, q = {}, X = null, He = null;
    Ce !== void 0 && (X = "" + Ce), H.key !== void 0 && (X = "" + H.key), H.ref !== void 0 && (He = H.ref);
    for (ye in H) ae.call(H, ye) && !_e.hasOwnProperty(ye) && (q[ye] = H[ye]);
    if (ce && ce.defaultProps) for (ye in H = ce.defaultProps, H) q[ye] === void 0 && (q[ye] = H[ye]);
    return { $$typeof: F, type: ce, key: X, ref: He, props: q, _owner: oe.current };
  }
  return yr.Fragment = m, yr.jsx = me, yr.jsxs = me, yr;
}
xa.exports = Lf();
var Pn = xa.exports, Na = { exports: {} }, Ie = {}, Eo = { exports: {} }, _o = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ea;
function Rf() {
  return Ea || (Ea = 1, function(N) {
    function F(S, L) {
      var _ = S.length;
      S.push(L);
      e: for (; 0 < _; ) {
        var c = _ - 1 >>> 1, v = S[c];
        if (0 < oe(v, L)) S[c] = L, S[_] = v, _ = c;
        else break e;
      }
    }
    function m(S) {
      return S.length === 0 ? null : S[0];
    }
    function ae(S) {
      if (S.length === 0) return null;
      var L = S[0], _ = S.pop();
      if (_ !== L) {
        S[0] = _;
        e: for (var c = 0, v = S.length, O = v >>> 1; c < O; ) {
          var D = 2 * (c + 1) - 1, j = S[D], U = D + 1, $ = S[U];
          if (0 > oe(j, _)) U < v && 0 > oe($, j) ? (S[c] = $, S[U] = _, c = U) : (S[c] = j, S[D] = _, c = D);
          else if (U < v && 0 > oe($, _)) S[c] = $, S[U] = _, c = U;
          else break e;
        }
      }
      return L;
    }
    function oe(S, L) {
      var _ = S.sortIndex - L.sortIndex;
      return _ !== 0 ? _ : S.id - L.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var _e = performance;
      N.unstable_now = function() {
        return _e.now();
      };
    } else {
      var me = Date, ce = me.now();
      N.unstable_now = function() {
        return me.now() - ce;
      };
    }
    var H = [], Ce = [], ye = 1, q = null, X = 3, He = !1, We = !1, G = !1, W = typeof setTimeout == "function" ? setTimeout : null, vn = typeof clearTimeout == "function" ? clearTimeout : null, sn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Je(S) {
      for (var L = m(Ce); L !== null; ) {
        if (L.callback === null) ae(Ce);
        else if (L.startTime <= S) ae(Ce), L.sortIndex = L.expirationTime, F(H, L);
        else break;
        L = m(Ce);
      }
    }
    function ge(S) {
      if (G = !1, Je(S), !We) if (m(H) !== null) We = !0, Te(qe);
      else {
        var L = m(Ce);
        L !== null && ne(ge, L.startTime - S);
      }
    }
    function qe(S, L) {
      We = !1, G && (G = !1, vn($e), $e = -1), He = !0;
      var _ = X;
      try {
        for (Je(L), q = m(H); q !== null && (!(q.expirationTime > L) || S && !Yn()); ) {
          var c = q.callback;
          if (typeof c == "function") {
            q.callback = null, X = q.priorityLevel;
            var v = c(q.expirationTime <= L);
            L = N.unstable_now(), typeof v == "function" ? q.callback = v : q === m(H) && ae(H), Je(L);
          } else ae(H);
          q = m(H);
        }
        if (q !== null) var O = !0;
        else {
          var D = m(Ce);
          D !== null && ne(ge, D.startTime - L), O = !1;
        }
        return O;
      } finally {
        q = null, X = _, He = !1;
      }
    }
    var xe = !1, ze = null, $e = -1, Nn = 5, yn = -1;
    function Yn() {
      return !(N.unstable_now() - yn < Nn);
    }
    function an() {
      if (ze !== null) {
        var S = N.unstable_now();
        yn = S;
        var L = !0;
        try {
          L = ze(!0, S);
        } finally {
          L ? Fe() : (xe = !1, ze = null);
        }
      } else xe = !1;
    }
    var Fe;
    if (typeof sn == "function") Fe = function() {
      sn(an);
    };
    else if (typeof MessageChannel < "u") {
      var be = new MessageChannel(), cn = be.port2;
      be.port1.onmessage = an, Fe = function() {
        cn.postMessage(null);
      };
    } else Fe = function() {
      W(an, 0);
    };
    function Te(S) {
      ze = S, xe || (xe = !0, Fe());
    }
    function ne(S, L) {
      $e = W(function() {
        S(N.unstable_now());
      }, L);
    }
    N.unstable_IdlePriority = 5, N.unstable_ImmediatePriority = 1, N.unstable_LowPriority = 4, N.unstable_NormalPriority = 3, N.unstable_Profiling = null, N.unstable_UserBlockingPriority = 2, N.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, N.unstable_continueExecution = function() {
      We || He || (We = !0, Te(qe));
    }, N.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Nn = 0 < S ? Math.floor(1e3 / S) : 5;
    }, N.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, N.unstable_getFirstCallbackNode = function() {
      return m(H);
    }, N.unstable_next = function(S) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = X;
      }
      var _ = X;
      X = L;
      try {
        return S();
      } finally {
        X = _;
      }
    }, N.unstable_pauseExecution = function() {
    }, N.unstable_requestPaint = function() {
    }, N.unstable_runWithPriority = function(S, L) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var _ = X;
      X = S;
      try {
        return L();
      } finally {
        X = _;
      }
    }, N.unstable_scheduleCallback = function(S, L, _) {
      var c = N.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? c + _ : c) : _ = c, S) {
        case 1:
          var v = -1;
          break;
        case 2:
          v = 250;
          break;
        case 5:
          v = 1073741823;
          break;
        case 4:
          v = 1e4;
          break;
        default:
          v = 5e3;
      }
      return v = _ + v, S = { id: ye++, callback: L, priorityLevel: S, startTime: _, expirationTime: v, sortIndex: -1 }, _ > c ? (S.sortIndex = _, F(Ce, S), m(H) === null && S === m(Ce) && (G ? (vn($e), $e = -1) : G = !0, ne(ge, _ - c))) : (S.sortIndex = v, F(H, S), We || He || (We = !0, Te(qe))), S;
    }, N.unstable_shouldYield = Yn, N.unstable_wrapCallback = function(S) {
      var L = X;
      return function() {
        var _ = X;
        X = L;
        try {
          return S.apply(this, arguments);
        } finally {
          X = _;
        }
      };
    };
  }(_o)), _o;
}
var _a;
function Of() {
  return _a || (_a = 1, Eo.exports = Rf()), Eo.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ca;
function Mf() {
  if (Ca) return Ie;
  Ca = 1;
  var N = Co, F = Of();
  function m(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ae = /* @__PURE__ */ new Set(), oe = {};
  function _e(e, n) {
    me(e, n), me(e + "Capture", n);
  }
  function me(e, n) {
    for (oe[e] = n, e = 0; e < n.length; e++) ae.add(n[e]);
  }
  var ce = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), H = Object.prototype.hasOwnProperty, Ce = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ye = {}, q = {};
  function X(e) {
    return H.call(q, e) ? !0 : H.call(ye, e) ? !1 : Ce.test(e) ? q[e] = !0 : (ye[e] = !0, !1);
  }
  function He(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function We(e, n, t, r) {
    if (n === null || typeof n > "u" || He(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null) switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
    return !1;
  }
  function G(e, n, t, r, l, u, o) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = u, this.removeEmptyString = o;
  }
  var W = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    W[e] = new G(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    W[n] = new G(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    W[e] = new G(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    W[e] = new G(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    W[e] = new G(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    W[e] = new G(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    W[e] = new G(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    W[e] = new G(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    W[e] = new G(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var vn = /[\-:]([a-z])/g;
  function sn(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      vn,
      sn
    );
    W[n] = new G(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(vn, sn);
    W[n] = new G(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(vn, sn);
    W[n] = new G(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    W[e] = new G(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), W.xlinkHref = new G("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    W[e] = new G(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Je(e, n, t, r) {
    var l = W.hasOwnProperty(n) ? W[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (We(n, t, l, r) && (t = null), r || l === null ? X(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var ge = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, qe = Symbol.for("react.element"), xe = Symbol.for("react.portal"), ze = Symbol.for("react.fragment"), $e = Symbol.for("react.strict_mode"), Nn = Symbol.for("react.profiler"), yn = Symbol.for("react.provider"), Yn = Symbol.for("react.context"), an = Symbol.for("react.forward_ref"), Fe = Symbol.for("react.suspense"), be = Symbol.for("react.suspense_list"), cn = Symbol.for("react.memo"), Te = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), S = Symbol.iterator;
  function L(e) {
    return e === null || typeof e != "object" ? null : (e = S && e[S] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var _ = Object.assign, c;
  function v(e) {
    if (c === void 0) try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      c = n && n[1] || "";
    }
    return `
` + c + e;
  }
  var O = !1;
  function D(e, n) {
    if (!e || O) return "";
    O = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n) if (n = function() {
        throw Error();
      }, Object.defineProperty(n.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(n, []);
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (p) {
          r = p;
        }
        e.call(n.prototype);
      }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (var l = p.stack.split(`
`), u = r.stack.split(`
`), o = l.length - 1, i = u.length - 1; 1 <= o && 0 <= i && l[o] !== u[i]; ) i--;
        for (; 1 <= o && 0 <= i; o--, i--) if (l[o] !== u[i]) {
          if (o !== 1 || i !== 1)
            do
              if (o--, i--, 0 > i || l[o] !== u[i]) {
                var s = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= o && 0 <= i);
          break;
        }
      }
    } finally {
      O = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function j(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = D(e.type, !1), e;
      case 11:
        return e = D(e.type.render, !1), e;
      case 1:
        return e = D(e.type, !0), e;
      default:
        return "";
    }
  }
  function U(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ze:
        return "Fragment";
      case xe:
        return "Portal";
      case Nn:
        return "Profiler";
      case $e:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Yn:
        return (e.displayName || "Context") + ".Consumer";
      case yn:
        return (e._context.displayName || "Context") + ".Provider";
      case an:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case cn:
        return n = e.displayName || null, n !== null ? n : U(e.type) || "Memo";
      case Te:
        n = e._payload, e = e._init;
        try {
          return U(e(n));
        } catch {
        }
    }
    return null;
  }
  function $(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return U(n);
      case 8:
        return n === $e ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function V(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Z(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function je(e) {
    var n = Z(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l = t.get, u = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(o) {
        r = "" + o, u.call(this, o);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(o) {
        r = "" + o;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function gr(e) {
    e._valueTracker || (e._valueTracker = je(e));
  }
  function xo(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(), r = "";
    return e && (r = Z(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
  }
  function wr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function zl(e, n) {
    var t = n.checked;
    return _({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function Po(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = V(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function No(e, n) {
    n = n.checked, n != null && Je(e, "checked", n, !1);
  }
  function Tl(e, n) {
    No(e, n);
    var t = V(n.value), r = n.type;
    if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Ll(e, n.type, t) : n.hasOwnProperty("defaultValue") && Ll(e, n.type, V(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function zo(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function Ll(e, n, t) {
    (n !== "number" || wr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Ot = Array.isArray;
  function it(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + V(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Rl(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(m(91));
    return _({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function To(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null) throw Error(m(92));
        if (Ot(t)) {
          if (1 < t.length) throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: V(t) };
  }
  function Lo(e, n) {
    var t = V(n.value), r = V(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function Ro(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Oo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ol(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Oo(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Sr, Mo = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, r, l);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
    else {
      for (Sr = Sr || document.createElement("div"), Sr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Sr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
  function Mt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Dt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ta = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dt).forEach(function(e) {
    Ta.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), Dt[n] = Dt[e];
    });
  });
  function Do(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Dt.hasOwnProperty(e) && Dt[e] ? ("" + n).trim() : n + "px";
  }
  function Io(e, n) {
    e = e.style;
    for (var t in n) if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, l = Do(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
    }
  }
  var La = _({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ml(e, n) {
    if (n) {
      if (La[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(m(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(m(62));
    }
  }
  function Dl(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Il = null;
  function Fl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var jl = null, st = null, at = null;
  function Fo(e) {
    if (e = tr(e)) {
      if (typeof jl != "function") throw Error(m(280));
      var n = e.stateNode;
      n && (n = Wr(n), jl(e.stateNode, e.type, n));
    }
  }
  function jo(e) {
    st ? at ? at.push(e) : at = [e] : st = e;
  }
  function Uo() {
    if (st) {
      var e = st, n = at;
      if (at = st = null, Fo(e), n) for (e = 0; e < n.length; e++) Fo(n[e]);
    }
  }
  function Ao(e, n) {
    return e(n);
  }
  function Vo() {
  }
  var Ul = !1;
  function Bo(e, n, t) {
    if (Ul) return e(n, t);
    Ul = !0;
    try {
      return Ao(e, n, t);
    } finally {
      Ul = !1, (st !== null || at !== null) && (Vo(), Uo());
    }
  }
  function It(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = Wr(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(m(231, n, typeof t));
    return t;
  }
  var Al = !1;
  if (ce) try {
    var Ft = {};
    Object.defineProperty(Ft, "passive", { get: function() {
      Al = !0;
    } }), window.addEventListener("test", Ft, Ft), window.removeEventListener("test", Ft, Ft);
  } catch {
    Al = !1;
  }
  function Ra(e, n, t, r, l, u, o, i, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var jt = !1, kr = null, Er = !1, Vl = null, Oa = { onError: function(e) {
    jt = !0, kr = e;
  } };
  function Ma(e, n, t, r, l, u, o, i, s) {
    jt = !1, kr = null, Ra.apply(Oa, arguments);
  }
  function Da(e, n, t, r, l, u, o, i, s) {
    if (Ma.apply(this, arguments), jt) {
      if (jt) {
        var p = kr;
        jt = !1, kr = null;
      } else throw Error(m(198));
      Er || (Er = !0, Vl = p);
    }
  }
  function Xn(e) {
    var n = e, t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, n.flags & 4098 && (t = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Ho(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function Wo(e) {
    if (Xn(e) !== e) throw Error(m(188));
  }
  function Ia(e) {
    var n = e.alternate;
    if (!n) {
      if (n = Xn(e), n === null) throw Error(m(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (r = l.return, r !== null) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === t) return Wo(l), e;
          if (u === r) return Wo(l), n;
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return) t = l, r = u;
      else {
        for (var o = !1, i = l.child; i; ) {
          if (i === t) {
            o = !0, t = l, r = u;
            break;
          }
          if (i === r) {
            o = !0, r = l, t = u;
            break;
          }
          i = i.sibling;
        }
        if (!o) {
          for (i = u.child; i; ) {
            if (i === t) {
              o = !0, t = u, r = l;
              break;
            }
            if (i === r) {
              o = !0, r = u, t = l;
              break;
            }
            i = i.sibling;
          }
          if (!o) throw Error(m(189));
        }
      }
      if (t.alternate !== r) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function $o(e) {
    return e = Ia(e), e !== null ? Qo(e) : null;
  }
  function Qo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Qo(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var Ko = F.unstable_scheduleCallback, Yo = F.unstable_cancelCallback, Fa = F.unstable_shouldYield, ja = F.unstable_requestPaint, re = F.unstable_now, Ua = F.unstable_getCurrentPriorityLevel, Bl = F.unstable_ImmediatePriority, Xo = F.unstable_UserBlockingPriority, _r = F.unstable_NormalPriority, Aa = F.unstable_LowPriority, Go = F.unstable_IdlePriority, Cr = null, fn = null;
  function Va(e) {
    if (fn && typeof fn.onCommitFiberRoot == "function") try {
      fn.onCommitFiberRoot(Cr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var en = Math.clz32 ? Math.clz32 : Wa, Ba = Math.log, Ha = Math.LN2;
  function Wa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ba(e) / Ha | 0) | 0;
  }
  var xr = 64, Pr = 4194304;
  function Ut(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Nr(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0, l = e.suspendedLanes, u = e.pingedLanes, o = t & 268435455;
    if (o !== 0) {
      var i = o & ~l;
      i !== 0 ? r = Ut(i) : (u &= o, u !== 0 && (r = Ut(u)));
    } else o = t & ~l, o !== 0 ? r = Ut(o) : u !== 0 && (r = Ut(u));
    if (r === 0) return 0;
    if (n !== 0 && n !== r && !(n & l) && (l = r & -r, u = n & -n, l >= u || l === 16 && (u & 4194240) !== 0)) return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - en(n), l = 1 << t, r |= e[t], n &= ~l;
    return r;
  }
  function $a(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Qa(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var o = 31 - en(u), i = 1 << o, s = l[o];
      s === -1 ? (!(i & t) || i & r) && (l[o] = $a(i, n)) : s <= n && (e.expiredLanes |= i), u &= ~i;
    }
  }
  function Hl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Zo() {
    var e = xr;
    return xr <<= 1, !(xr & 4194240) && (xr = 64), e;
  }
  function Wl(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function At(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - en(n), e[n] = t;
  }
  function Ka(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - en(t), u = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~u;
    }
  }
  function $l(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - en(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var B = 0;
  function Jo(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var qo, Ql, bo, ei, ni, Kl = !1, zr = [], zn = null, Tn = null, Ln = null, Vt = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), Rn = [], Ya = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ti(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        zn = null;
        break;
      case "dragenter":
      case "dragleave":
        Tn = null;
        break;
      case "mouseover":
      case "mouseout":
        Ln = null;
        break;
      case "pointerover":
      case "pointerout":
        Vt.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bt.delete(n.pointerId);
    }
  }
  function Ht(e, n, t, r, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, n !== null && (n = tr(n), n !== null && Ql(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function Xa(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return zn = Ht(zn, e, n, t, r, l), !0;
      case "dragenter":
        return Tn = Ht(Tn, e, n, t, r, l), !0;
      case "mouseover":
        return Ln = Ht(Ln, e, n, t, r, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return Vt.set(u, Ht(Vt.get(u) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, Bt.set(u, Ht(Bt.get(u) || null, e, n, t, r, l)), !0;
    }
    return !1;
  }
  function ri(e) {
    var n = Gn(e.target);
    if (n !== null) {
      var t = Xn(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Ho(t), n !== null) {
            e.blockedOn = n, ni(e.priority, function() {
              bo(t);
            });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Tr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Xl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        Il = r, t.target.dispatchEvent(r), Il = null;
      } else return n = tr(t), n !== null && Ql(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function li(e, n, t) {
    Tr(e) && t.delete(n);
  }
  function Ga() {
    Kl = !1, zn !== null && Tr(zn) && (zn = null), Tn !== null && Tr(Tn) && (Tn = null), Ln !== null && Tr(Ln) && (Ln = null), Vt.forEach(li), Bt.forEach(li);
  }
  function Wt(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Kl || (Kl = !0, F.unstable_scheduleCallback(F.unstable_NormalPriority, Ga)));
  }
  function $t(e) {
    function n(l) {
      return Wt(l, e);
    }
    if (0 < zr.length) {
      Wt(zr[0], e);
      for (var t = 1; t < zr.length; t++) {
        var r = zr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (zn !== null && Wt(zn, e), Tn !== null && Wt(Tn, e), Ln !== null && Wt(Ln, e), Vt.forEach(n), Bt.forEach(n), t = 0; t < Rn.length; t++) r = Rn[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rn.length && (t = Rn[0], t.blockedOn === null); ) ri(t), t.blockedOn === null && Rn.shift();
  }
  var ct = ge.ReactCurrentBatchConfig, Lr = !0;
  function Za(e, n, t, r) {
    var l = B, u = ct.transition;
    ct.transition = null;
    try {
      B = 1, Yl(e, n, t, r);
    } finally {
      B = l, ct.transition = u;
    }
  }
  function Ja(e, n, t, r) {
    var l = B, u = ct.transition;
    ct.transition = null;
    try {
      B = 4, Yl(e, n, t, r);
    } finally {
      B = l, ct.transition = u;
    }
  }
  function Yl(e, n, t, r) {
    if (Lr) {
      var l = Xl(e, n, t, r);
      if (l === null) fu(e, n, r, Rr, t), ti(e, r);
      else if (Xa(l, e, n, t, r)) r.stopPropagation();
      else if (ti(e, r), n & 4 && -1 < Ya.indexOf(e)) {
        for (; l !== null; ) {
          var u = tr(l);
          if (u !== null && qo(u), u = Xl(e, n, t, r), u === null && fu(e, n, r, Rr, t), u === l) break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else fu(e, n, r, null, t);
    }
  }
  var Rr = null;
  function Xl(e, n, t, r) {
    if (Rr = null, e = Fl(r), e = Gn(e), e !== null) if (n = Xn(e), n === null) e = null;
    else if (t = n.tag, t === 13) {
      if (e = Ho(n), e !== null) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
    return Rr = e, null;
  }
  function ui(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ua()) {
          case Bl:
            return 1;
          case Xo:
            return 4;
          case _r:
          case Aa:
            return 16;
          case Go:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var On = null, Gl = null, Or = null;
  function oi() {
    if (Or) return Or;
    var e, n = Gl, t = n.length, r, l = "value" in On ? On.value : On.textContent, u = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++) ;
    var o = t - e;
    for (r = 1; r <= o && n[t - r] === l[u - r]; r++) ;
    return Or = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Mr(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Dr() {
    return !0;
  }
  function ii() {
    return !1;
  }
  function Ue(e) {
    function n(t, r, l, u, o) {
      this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = o, this.currentTarget = null;
      for (var i in e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(u) : u[i]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Dr : ii, this.isPropagationStopped = ii, this;
    }
    return _(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Dr);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Dr);
    }, persist: function() {
    }, isPersistent: Dr }), n;
  }
  var ft = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Zl = Ue(ft), Qt = _({}, ft, { view: 0, detail: 0 }), qa = Ue(Qt), Jl, ql, Kt, Ir = _({}, Qt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: eu, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Kt && (Kt && e.type === "mousemove" ? (Jl = e.screenX - Kt.screenX, ql = e.screenY - Kt.screenY) : ql = Jl = 0, Kt = e), Jl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ql;
  } }), si = Ue(Ir), ba = _({}, Ir, { dataTransfer: 0 }), ec = Ue(ba), nc = _({}, Qt, { relatedTarget: 0 }), bl = Ue(nc), tc = _({}, ft, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), rc = Ue(tc), lc = _({}, ft, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), uc = Ue(lc), oc = _({}, ft, { data: 0 }), ai = Ue(oc), ic = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, sc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ac = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function cc(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = ac[e]) ? !!n[e] : !1;
  }
  function eu() {
    return cc;
  }
  var fc = _({}, Qt, { key: function(e) {
    if (e.key) {
      var n = ic[e.key] || e.key;
      if (n !== "Unidentified") return n;
    }
    return e.type === "keypress" ? (e = Mr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: eu, charCode: function(e) {
    return e.type === "keypress" ? Mr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Mr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), dc = Ue(fc), pc = _({}, Ir, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ci = Ue(pc), mc = _({}, Qt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: eu }), hc = Ue(mc), vc = _({}, ft, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), yc = Ue(vc), gc = _({}, Ir, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), wc = Ue(gc), Sc = [9, 13, 27, 32], nu = ce && "CompositionEvent" in window, Yt = null;
  ce && "documentMode" in document && (Yt = document.documentMode);
  var kc = ce && "TextEvent" in window && !Yt, fi = ce && (!nu || Yt && 8 < Yt && 11 >= Yt), di = " ", pi = !1;
  function mi(e, n) {
    switch (e) {
      case "keyup":
        return Sc.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function hi(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var dt = !1;
  function Ec(e, n) {
    switch (e) {
      case "compositionend":
        return hi(n);
      case "keypress":
        return n.which !== 32 ? null : (pi = !0, di);
      case "textInput":
        return e = n.data, e === di && pi ? null : e;
      default:
        return null;
    }
  }
  function _c(e, n) {
    if (dt) return e === "compositionend" || !nu && mi(e, n) ? (e = oi(), Or = Gl = On = null, dt = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return fi && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Cc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function vi(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Cc[e.type] : n === "textarea";
  }
  function yi(e, n, t, r) {
    jo(r), n = Vr(n, "onChange"), 0 < n.length && (t = new Zl("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var Xt = null, Gt = null;
  function xc(e) {
    Ii(e, 0);
  }
  function Fr(e) {
    var n = yt(e);
    if (xo(n)) return e;
  }
  function Pc(e, n) {
    if (e === "change") return n;
  }
  var gi = !1;
  if (ce) {
    var tu;
    if (ce) {
      var ru = "oninput" in document;
      if (!ru) {
        var wi = document.createElement("div");
        wi.setAttribute("oninput", "return;"), ru = typeof wi.oninput == "function";
      }
      tu = ru;
    } else tu = !1;
    gi = tu && (!document.documentMode || 9 < document.documentMode);
  }
  function Si() {
    Xt && (Xt.detachEvent("onpropertychange", ki), Gt = Xt = null);
  }
  function ki(e) {
    if (e.propertyName === "value" && Fr(Gt)) {
      var n = [];
      yi(n, Gt, e, Fl(e)), Bo(xc, n);
    }
  }
  function Nc(e, n, t) {
    e === "focusin" ? (Si(), Xt = n, Gt = t, Xt.attachEvent("onpropertychange", ki)) : e === "focusout" && Si();
  }
  function zc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fr(Gt);
  }
  function Tc(e, n) {
    if (e === "click") return Fr(n);
  }
  function Lc(e, n) {
    if (e === "input" || e === "change") return Fr(n);
  }
  function Rc(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var nn = typeof Object.is == "function" ? Object.is : Rc;
  function Zt(e, n) {
    if (nn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!H.call(n, l) || !nn(e[l], n[l])) return !1;
    }
    return !0;
  }
  function Ei(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function _i(e, n) {
    var t = Ei(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (r = e + t.textContent.length, e <= n && r >= n) return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Ei(t);
    }
  }
  function Ci(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Ci(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function xi() {
    for (var e = window, n = wr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = wr(e.document);
    }
    return n;
  }
  function lu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function Oc(e) {
    var n = xi(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && Ci(t.ownerDocument.documentElement, t)) {
      if (r !== null && lu(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, u = Math.min(r.start, l);
          r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = _i(t, u);
          var o = _i(
            t,
            r
          );
          l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(n), e.extend(o.node, o.offset)) : (n.setEnd(o.node, o.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Mc = ce && "documentMode" in document && 11 >= document.documentMode, pt = null, uu = null, Jt = null, ou = !1;
  function Pi(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    ou || pt == null || pt !== wr(r) || (r = pt, "selectionStart" in r && lu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Jt && Zt(Jt, r) || (Jt = r, r = Vr(uu, "onSelect"), 0 < r.length && (n = new Zl("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = pt)));
  }
  function jr(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var mt = { animationend: jr("Animation", "AnimationEnd"), animationiteration: jr("Animation", "AnimationIteration"), animationstart: jr("Animation", "AnimationStart"), transitionend: jr("Transition", "TransitionEnd") }, iu = {}, Ni = {};
  ce && (Ni = document.createElement("div").style, "AnimationEvent" in window || (delete mt.animationend.animation, delete mt.animationiteration.animation, delete mt.animationstart.animation), "TransitionEvent" in window || delete mt.transitionend.transition);
  function Ur(e) {
    if (iu[e]) return iu[e];
    if (!mt[e]) return e;
    var n = mt[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in Ni) return iu[e] = n[t];
    return e;
  }
  var zi = Ur("animationend"), Ti = Ur("animationiteration"), Li = Ur("animationstart"), Ri = Ur("transitionend"), Oi = /* @__PURE__ */ new Map(), Mi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Mn(e, n) {
    Oi.set(e, n), _e(n, [e]);
  }
  for (var su = 0; su < Mi.length; su++) {
    var au = Mi[su], Dc = au.toLowerCase(), Ic = au[0].toUpperCase() + au.slice(1);
    Mn(Dc, "on" + Ic);
  }
  Mn(zi, "onAnimationEnd"), Mn(Ti, "onAnimationIteration"), Mn(Li, "onAnimationStart"), Mn("dblclick", "onDoubleClick"), Mn("focusin", "onFocus"), Mn("focusout", "onBlur"), Mn(Ri, "onTransitionEnd"), me("onMouseEnter", ["mouseout", "mouseover"]), me("onMouseLeave", ["mouseout", "mouseover"]), me("onPointerEnter", ["pointerout", "pointerover"]), me("onPointerLeave", ["pointerout", "pointerover"]), _e("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), _e("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), _e("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), _e("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), _e("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), _e("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Fc = new Set("cancel close invalid load scroll toggle".split(" ").concat(qt));
  function Di(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, Da(r, n, void 0, e), e.currentTarget = null;
  }
  function Ii(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (n) for (var o = r.length - 1; 0 <= o; o--) {
          var i = r[o], s = i.instance, p = i.currentTarget;
          if (i = i.listener, s !== u && l.isPropagationStopped()) break e;
          Di(l, i, p), u = s;
        }
        else for (o = 0; o < r.length; o++) {
          if (i = r[o], s = i.instance, p = i.currentTarget, i = i.listener, s !== u && l.isPropagationStopped()) break e;
          Di(l, i, p), u = s;
        }
      }
    }
    if (Er) throw e = Vl, Er = !1, Vl = null, e;
  }
  function K(e, n) {
    var t = n[yu];
    t === void 0 && (t = n[yu] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (Fi(n, e, 2, !1), t.add(r));
  }
  function cu(e, n, t) {
    var r = 0;
    n && (r |= 4), Fi(t, e, r, n);
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function bt(e) {
    if (!e[Ar]) {
      e[Ar] = !0, ae.forEach(function(t) {
        t !== "selectionchange" && (Fc.has(t) || cu(t, !1, e), cu(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Ar] || (n[Ar] = !0, cu("selectionchange", !1, n));
    }
  }
  function Fi(e, n, t, r) {
    switch (ui(n)) {
      case 1:
        var l = Za;
        break;
      case 4:
        l = Ja;
        break;
      default:
        l = Yl;
    }
    t = l.bind(null, n, t, e), l = void 0, !Al || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
  }
  function fu(e, n, t, r, l) {
    var u = r;
    if (!(n & 1) && !(n & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var i = r.stateNode.containerInfo;
        if (i === l || i.nodeType === 8 && i.parentNode === l) break;
        if (o === 4) for (o = r.return; o !== null; ) {
          var s = o.tag;
          if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          o = o.return;
        }
        for (; i !== null; ) {
          if (o = Gn(i), o === null) return;
          if (s = o.tag, s === 5 || s === 6) {
            r = u = o;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
    Bo(function() {
      var p = u, y = Fl(t), g = [];
      e: {
        var h = Oi.get(e);
        if (h !== void 0) {
          var k = Zl, C = e;
          switch (e) {
            case "keypress":
              if (Mr(t) === 0) break e;
            case "keydown":
            case "keyup":
              k = dc;
              break;
            case "focusin":
              C = "focus", k = bl;
              break;
            case "focusout":
              C = "blur", k = bl;
              break;
            case "beforeblur":
            case "afterblur":
              k = bl;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k = si;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = ec;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = hc;
              break;
            case zi:
            case Ti:
            case Li:
              k = rc;
              break;
            case Ri:
              k = yc;
              break;
            case "scroll":
              k = qa;
              break;
            case "wheel":
              k = wc;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = uc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = ci;
          }
          var x = (n & 4) !== 0, le = !x && e === "scroll", f = x ? h !== null ? h + "Capture" : null : h;
          x = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, f !== null && (w = It(a, f), w != null && x.push(er(a, w, d)))), le) break;
            a = a.return;
          }
          0 < x.length && (h = new k(h, C, null, t, y), g.push({ event: h, listeners: x }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", h && t !== Il && (C = t.relatedTarget || t.fromElement) && (Gn(C) || C[gn])) break e;
          if ((k || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, k ? (C = t.relatedTarget || t.toElement, k = p, C = C ? Gn(C) : null, C !== null && (le = Xn(C), C !== le || C.tag !== 5 && C.tag !== 6) && (C = null)) : (k = null, C = p), k !== C)) {
            if (x = si, w = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (x = ci, w = "onPointerLeave", f = "onPointerEnter", a = "pointer"), le = k == null ? h : yt(k), d = C == null ? h : yt(C), h = new x(w, a + "leave", k, t, y), h.target = le, h.relatedTarget = d, w = null, Gn(y) === p && (x = new x(f, a + "enter", C, t, y), x.target = d, x.relatedTarget = le, w = x), le = w, k && C) n: {
              for (x = k, f = C, a = 0, d = x; d; d = ht(d)) a++;
              for (d = 0, w = f; w; w = ht(w)) d++;
              for (; 0 < a - d; ) x = ht(x), a--;
              for (; 0 < d - a; ) f = ht(f), d--;
              for (; a--; ) {
                if (x === f || f !== null && x === f.alternate) break n;
                x = ht(x), f = ht(f);
              }
              x = null;
            }
            else x = null;
            k !== null && ji(g, h, k, x, !1), C !== null && le !== null && ji(g, le, C, x, !0);
          }
        }
        e: {
          if (h = p ? yt(p) : window, k = h.nodeName && h.nodeName.toLowerCase(), k === "select" || k === "input" && h.type === "file") var P = Pc;
          else if (vi(h)) if (gi) P = Lc;
          else {
            P = zc;
            var z = Nc;
          }
          else (k = h.nodeName) && k.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (P = Tc);
          if (P && (P = P(e, p))) {
            yi(g, P, t, y);
            break e;
          }
          z && z(e, h, p), e === "focusout" && (z = h._wrapperState) && z.controlled && h.type === "number" && Ll(h, "number", h.value);
        }
        switch (z = p ? yt(p) : window, e) {
          case "focusin":
            (vi(z) || z.contentEditable === "true") && (pt = z, uu = p, Jt = null);
            break;
          case "focusout":
            Jt = uu = pt = null;
            break;
          case "mousedown":
            ou = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ou = !1, Pi(g, t, y);
            break;
          case "selectionchange":
            if (Mc) break;
          case "keydown":
          case "keyup":
            Pi(g, t, y);
        }
        var T;
        if (nu) e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
        else dt ? mi(e, t) && (R = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (R = "onCompositionStart");
        R && (fi && t.locale !== "ko" && (dt || R !== "onCompositionStart" ? R === "onCompositionEnd" && dt && (T = oi()) : (On = y, Gl = "value" in On ? On.value : On.textContent, dt = !0)), z = Vr(p, R), 0 < z.length && (R = new ai(R, e, null, t, y), g.push({ event: R, listeners: z }), T ? R.data = T : (T = hi(t), T !== null && (R.data = T)))), (T = kc ? Ec(e, t) : _c(e, t)) && (p = Vr(p, "onBeforeInput"), 0 < p.length && (y = new ai("onBeforeInput", "beforeinput", null, t, y), g.push({ event: y, listeners: p }), y.data = T));
      }
      Ii(g, n);
    });
  }
  function er(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Vr(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = It(e, t), u != null && r.unshift(er(e, u, l)), u = It(e, n), u != null && r.push(er(e, u, l))), e = e.return;
    }
    return r;
  }
  function ht(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ji(e, n, t, r, l) {
    for (var u = n._reactName, o = []; t !== null && t !== r; ) {
      var i = t, s = i.alternate, p = i.stateNode;
      if (s !== null && s === r) break;
      i.tag === 5 && p !== null && (i = p, l ? (s = It(t, u), s != null && o.unshift(er(t, s, i))) : l || (s = It(t, u), s != null && o.push(er(t, s, i)))), t = t.return;
    }
    o.length !== 0 && e.push({ event: n, listeners: o });
  }
  var jc = /\r\n?/g, Uc = /\u0000|\uFFFD/g;
  function Ui(e) {
    return (typeof e == "string" ? e : "" + e).replace(jc, `
`).replace(Uc, "");
  }
  function Br(e, n, t) {
    if (n = Ui(n), Ui(e) !== n && t) throw Error(m(425));
  }
  function Hr() {
  }
  var du = null, pu = null;
  function mu(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var hu = typeof setTimeout == "function" ? setTimeout : void 0, Ac = typeof clearTimeout == "function" ? clearTimeout : void 0, Ai = typeof Promise == "function" ? Promise : void 0, Vc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ai < "u" ? function(e) {
    return Ai.resolve(null).then(e).catch(Bc);
  } : hu;
  function Bc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function vu(e, n) {
    var t = n, r = 0;
    do {
      var l = t.nextSibling;
      if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
        if (r === 0) {
          e.removeChild(l), $t(n);
          return;
        }
        r--;
      } else t !== "$" && t !== "$?" && t !== "$!" || r++;
      t = l;
    } while (t);
    $t(n);
  }
  function Dn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function Vi(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0) return e;
          n--;
        } else t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var vt = Math.random().toString(36).slice(2), dn = "__reactFiber$" + vt, nr = "__reactProps$" + vt, gn = "__reactContainer$" + vt, yu = "__reactEvents$" + vt, Hc = "__reactListeners$" + vt, Wc = "__reactHandles$" + vt;
  function Gn(e) {
    var n = e[dn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[gn] || t[dn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Vi(e); e !== null; ) {
          if (t = e[dn]) return t;
          e = Vi(e);
        }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function tr(e) {
    return e = e[dn] || e[gn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function yt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[nr] || null;
  }
  var gu = [], gt = -1;
  function In(e) {
    return { current: e };
  }
  function Y(e) {
    0 > gt || (e.current = gu[gt], gu[gt] = null, gt--);
  }
  function Q(e, n) {
    gt++, gu[gt] = e.current, e.current = n;
  }
  var Fn = {}, we = In(Fn), Le = In(!1), Zn = Fn;
  function wt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in t) l[u] = n[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Re(e) {
    return e = e.childContextTypes, e != null;
  }
  function $r() {
    Y(Le), Y(we);
  }
  function Bi(e, n, t) {
    if (we.current !== Fn) throw Error(m(168));
    Q(we, n), Q(Le, t);
  }
  function Hi(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, $(e) || "Unknown", l));
    return _({}, t, r);
  }
  function Qr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fn, Zn = we.current, Q(we, e), Q(Le, Le.current), !0;
  }
  function Wi(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t ? (e = Hi(e, n, Zn), r.__reactInternalMemoizedMergedChildContext = e, Y(Le), Y(we), Q(we, e)) : Y(Le), Q(Le, t);
  }
  var wn = null, Kr = !1, wu = !1;
  function $i(e) {
    wn === null ? wn = [e] : wn.push(e);
  }
  function $c(e) {
    Kr = !0, $i(e);
  }
  function jn() {
    if (!wu && wn !== null) {
      wu = !0;
      var e = 0, n = B;
      try {
        var t = wn;
        for (B = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        wn = null, Kr = !1;
      } catch (l) {
        throw wn !== null && (wn = wn.slice(e + 1)), Ko(Bl, jn), l;
      } finally {
        B = n, wu = !1;
      }
    }
    return null;
  }
  var St = [], kt = 0, Yr = null, Xr = 0, Qe = [], Ke = 0, Jn = null, Sn = 1, kn = "";
  function qn(e, n) {
    St[kt++] = Xr, St[kt++] = Yr, Yr = e, Xr = n;
  }
  function Qi(e, n, t) {
    Qe[Ke++] = Sn, Qe[Ke++] = kn, Qe[Ke++] = Jn, Jn = e;
    var r = Sn;
    e = kn;
    var l = 32 - en(r) - 1;
    r &= ~(1 << l), t += 1;
    var u = 32 - en(n) + l;
    if (30 < u) {
      var o = l - l % 5;
      u = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Sn = 1 << 32 - en(n) + l | t << l | r, kn = u + e;
    } else Sn = 1 << u | t << l | r, kn = e;
  }
  function Su(e) {
    e.return !== null && (qn(e, 1), Qi(e, 1, 0));
  }
  function ku(e) {
    for (; e === Yr; ) Yr = St[--kt], St[kt] = null, Xr = St[--kt], St[kt] = null;
    for (; e === Jn; ) Jn = Qe[--Ke], Qe[Ke] = null, kn = Qe[--Ke], Qe[Ke] = null, Sn = Qe[--Ke], Qe[Ke] = null;
  }
  var Ae = null, Ve = null, J = !1, tn = null;
  function Ki(e, n) {
    var t = Ze(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function Yi(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Ae = e, Ve = Dn(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Ae = e, Ve = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Jn !== null ? { id: Sn, overflow: kn } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Ze(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, Ae = e, Ve = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Eu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function _u(e) {
    if (J) {
      var n = Ve;
      if (n) {
        var t = n;
        if (!Yi(e, n)) {
          if (Eu(e)) throw Error(m(418));
          n = Dn(t.nextSibling);
          var r = Ae;
          n && Yi(e, n) ? Ki(r, t) : (e.flags = e.flags & -4097 | 2, J = !1, Ae = e);
        }
      } else {
        if (Eu(e)) throw Error(m(418));
        e.flags = e.flags & -4097 | 2, J = !1, Ae = e;
      }
    }
  }
  function Xi(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ae = e;
  }
  function Gr(e) {
    if (e !== Ae) return !1;
    if (!J) return Xi(e), J = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !mu(e.type, e.memoizedProps)), n && (n = Ve)) {
      if (Eu(e)) throw Gi(), Error(m(418));
      for (; n; ) Ki(e, n), n = Dn(n.nextSibling);
    }
    if (Xi(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Ve = Dn(e.nextSibling);
                break e;
              }
              n--;
            } else t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        Ve = null;
      }
    } else Ve = Ae ? Dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Gi() {
    for (var e = Ve; e; ) e = Dn(e.nextSibling);
  }
  function Et() {
    Ve = Ae = null, J = !1;
  }
  function Cu(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  var Qc = ge.ReactCurrentBatchConfig;
  function rr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1) throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r, u = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === u ? n.ref : (n = function(o) {
          var i = l.refs;
          o === null ? delete i[u] : i[u] = o;
        }, n._stringRef = u, n);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!t._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Zr(e, n) {
    throw e = Object.prototype.toString.call(n), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function Zi(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Ji(e) {
    function n(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
      }
    }
    function t(f, a) {
      if (!e) return null;
      for (; a !== null; ) n(f, a), a = a.sibling;
      return null;
    }
    function r(f, a) {
      for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
      return f;
    }
    function l(f, a) {
      return f = Qn(f, a), f.index = 0, f.sibling = null, f;
    }
    function u(f, a, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
    }
    function o(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, a, d, w) {
      return a === null || a.tag !== 6 ? (a = vo(d, f.mode, w), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function s(f, a, d, w) {
      var P = d.type;
      return P === ze ? y(f, a, d.props.children, w, d.key) : a !== null && (a.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Te && Zi(P) === a.type) ? (w = l(a, d.props), w.ref = rr(f, a, d), w.return = f, w) : (w = Sl(d.type, d.key, d.props, null, f.mode, w), w.ref = rr(f, a, d), w.return = f, w);
    }
    function p(f, a, d, w) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = yo(d, f.mode, w), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function y(f, a, d, w, P) {
      return a === null || a.tag !== 7 ? (a = ot(d, f.mode, w, P), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function g(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = vo("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case qe:
            return d = Sl(a.type, a.key, a.props, null, f.mode, d), d.ref = rr(f, null, a), d.return = f, d;
          case xe:
            return a = yo(a, f.mode, d), a.return = f, a;
          case Te:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (Ot(a) || L(a)) return a = ot(a, f.mode, d, null), a.return = f, a;
        Zr(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var P = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return P !== null ? null : i(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case qe:
            return d.key === P ? s(f, a, d, w) : null;
          case xe:
            return d.key === P ? p(f, a, d, w) : null;
          case Te:
            return P = d._init, h(
              f,
              a,
              P(d._payload),
              w
            );
        }
        if (Ot(d) || L(d)) return P !== null ? null : y(f, a, d, w, null);
        Zr(f, d);
      }
      return null;
    }
    function k(f, a, d, w, P) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(d) || null, i(a, f, "" + w, P);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case qe:
            return f = f.get(w.key === null ? d : w.key) || null, s(a, f, w, P);
          case xe:
            return f = f.get(w.key === null ? d : w.key) || null, p(a, f, w, P);
          case Te:
            var z = w._init;
            return k(f, a, d, z(w._payload), P);
        }
        if (Ot(w) || L(w)) return f = f.get(d) || null, y(a, f, w, P, null);
        Zr(a, w);
      }
      return null;
    }
    function C(f, a, d, w) {
      for (var P = null, z = null, T = a, R = a = 0, pe = null; T !== null && R < d.length; R++) {
        T.index > R ? (pe = T, T = null) : pe = T.sibling;
        var A = h(f, T, d[R], w);
        if (A === null) {
          T === null && (T = pe);
          break;
        }
        e && T && A.alternate === null && n(f, T), a = u(A, a, R), z === null ? P = A : z.sibling = A, z = A, T = pe;
      }
      if (R === d.length) return t(f, T), J && qn(f, R), P;
      if (T === null) {
        for (; R < d.length; R++) T = g(f, d[R], w), T !== null && (a = u(T, a, R), z === null ? P = T : z.sibling = T, z = T);
        return J && qn(f, R), P;
      }
      for (T = r(f, T); R < d.length; R++) pe = k(T, f, R, d[R], w), pe !== null && (e && pe.alternate !== null && T.delete(pe.key === null ? R : pe.key), a = u(pe, a, R), z === null ? P = pe : z.sibling = pe, z = pe);
      return e && T.forEach(function(Kn) {
        return n(f, Kn);
      }), J && qn(f, R), P;
    }
    function x(f, a, d, w) {
      var P = L(d);
      if (typeof P != "function") throw Error(m(150));
      if (d = P.call(d), d == null) throw Error(m(151));
      for (var z = P = null, T = a, R = a = 0, pe = null, A = d.next(); T !== null && !A.done; R++, A = d.next()) {
        T.index > R ? (pe = T, T = null) : pe = T.sibling;
        var Kn = h(f, T, A.value, w);
        if (Kn === null) {
          T === null && (T = pe);
          break;
        }
        e && T && Kn.alternate === null && n(f, T), a = u(Kn, a, R), z === null ? P = Kn : z.sibling = Kn, z = Kn, T = pe;
      }
      if (A.done) return t(
        f,
        T
      ), J && qn(f, R), P;
      if (T === null) {
        for (; !A.done; R++, A = d.next()) A = g(f, A.value, w), A !== null && (a = u(A, a, R), z === null ? P = A : z.sibling = A, z = A);
        return J && qn(f, R), P;
      }
      for (T = r(f, T); !A.done; R++, A = d.next()) A = k(T, f, R, A.value, w), A !== null && (e && A.alternate !== null && T.delete(A.key === null ? R : A.key), a = u(A, a, R), z === null ? P = A : z.sibling = A, z = A);
      return e && T.forEach(function(xf) {
        return n(f, xf);
      }), J && qn(f, R), P;
    }
    function le(f, a, d, w) {
      if (typeof d == "object" && d !== null && d.type === ze && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case qe:
            e: {
              for (var P = d.key, z = a; z !== null; ) {
                if (z.key === P) {
                  if (P = d.type, P === ze) {
                    if (z.tag === 7) {
                      t(f, z.sibling), a = l(z, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (z.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Te && Zi(P) === z.type) {
                    t(f, z.sibling), a = l(z, d.props), a.ref = rr(f, z, d), a.return = f, f = a;
                    break e;
                  }
                  t(f, z);
                  break;
                } else n(f, z);
                z = z.sibling;
              }
              d.type === ze ? (a = ot(d.props.children, f.mode, w, d.key), a.return = f, f = a) : (w = Sl(d.type, d.key, d.props, null, f.mode, w), w.ref = rr(f, a, d), w.return = f, f = w);
            }
            return o(f);
          case xe:
            e: {
              for (z = d.key; a !== null; ) {
                if (a.key === z) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  t(f, a);
                  break;
                }
                else n(f, a);
                a = a.sibling;
              }
              a = yo(d, f.mode, w), a.return = f, f = a;
            }
            return o(f);
          case Te:
            return z = d._init, le(f, a, z(d._payload), w);
        }
        if (Ot(d)) return C(f, a, d, w);
        if (L(d)) return x(f, a, d, w);
        Zr(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = vo(d, f.mode, w), a.return = f, f = a), o(f)) : t(f, a);
    }
    return le;
  }
  var _t = Ji(!0), qi = Ji(!1), Jr = In(null), qr = null, Ct = null, xu = null;
  function Pu() {
    xu = Ct = qr = null;
  }
  function Nu(e) {
    var n = Jr.current;
    Y(Jr), e._currentValue = n;
  }
  function zu(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
      e = e.return;
    }
  }
  function xt(e, n) {
    qr = e, xu = Ct = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (Oe = !0), e.firstContext = null);
  }
  function Ye(e) {
    var n = e._currentValue;
    if (xu !== e) if (e = { context: e, memoizedValue: n, next: null }, Ct === null) {
      if (qr === null) throw Error(m(308));
      Ct = e, qr.dependencies = { lanes: 0, firstContext: e };
    } else Ct = Ct.next = e;
    return n;
  }
  var bn = null;
  function Tu(e) {
    bn === null ? bn = [e] : bn.push(e);
  }
  function bi(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Tu(n)) : (t.next = l.next, l.next = t), n.interleaved = t, En(e, r);
  }
  function En(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Un = !1;
  function Lu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function es(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function _n(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function An(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, I & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, En(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, Tu(r)) : (n.next = l.next, l.next = n), r.interleaved = n, En(e, t);
  }
  function br(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, $l(e, t);
    }
  }
  function ns(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var l = null, u = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var o = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          u === null ? l = u = o : u = u.next = o, t = t.next;
        } while (t !== null);
        u === null ? l = u = n : u = u.next = n;
      } else l = u = n;
      t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function el(e, n, t, r) {
    var l = e.updateQueue;
    Un = !1;
    var u = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i, p = s.next;
      s.next = null, o === null ? u = p : o.next = p, o = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, i = y.lastBaseUpdate, i !== o && (i === null ? y.firstBaseUpdate = p : i.next = p, y.lastBaseUpdate = s));
    }
    if (u !== null) {
      var g = l.baseState;
      o = 0, y = p = s = null, i = u;
      do {
        var h = i.lane, k = i.eventTime;
        if ((r & h) === h) {
          y !== null && (y = y.next = {
            eventTime: k,
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          });
          e: {
            var C = e, x = i;
            switch (h = n, k = t, x.tag) {
              case 1:
                if (C = x.payload, typeof C == "function") {
                  g = C.call(k, g, h);
                  break e;
                }
                g = C;
                break e;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = x.payload, h = typeof C == "function" ? C.call(k, g, h) : C, h == null) break e;
                g = _({}, g, h);
                break e;
              case 2:
                Un = !0;
            }
          }
          i.callback !== null && i.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [i] : h.push(i));
        } else k = { eventTime: k, lane: h, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, y === null ? (p = y = k, s = g) : y = y.next = k, o |= h;
        if (i = i.next, i === null) {
          if (i = l.shared.pending, i === null) break;
          h = i, i = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
        }
      } while (!0);
      if (y === null && (s = g), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          o |= l.lane, l = l.next;
        while (l !== n);
      } else u === null && (l.shared.lanes = 0);
      tt |= o, e.lanes = o, e.memoizedState = g;
    }
  }
  function ts(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
      var r = e[n], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = t, typeof l != "function") throw Error(m(191, l));
        l.call(r);
      }
    }
  }
  var lr = {}, pn = In(lr), ur = In(lr), or = In(lr);
  function et(e) {
    if (e === lr) throw Error(m(174));
    return e;
  }
  function Ru(e, n) {
    switch (Q(or, n), Q(ur, e), Q(pn, lr), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Ol(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Ol(n, e);
    }
    Y(pn), Q(pn, n);
  }
  function Pt() {
    Y(pn), Y(ur), Y(or);
  }
  function rs(e) {
    et(or.current);
    var n = et(pn.current), t = Ol(n, e.type);
    n !== t && (Q(ur, e), Q(pn, t));
  }
  function Ou(e) {
    ur.current === e && (Y(pn), Y(ur));
  }
  var b = In(0);
  function nl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Mu = [];
  function Du() {
    for (var e = 0; e < Mu.length; e++) Mu[e]._workInProgressVersionPrimary = null;
    Mu.length = 0;
  }
  var tl = ge.ReactCurrentDispatcher, Iu = ge.ReactCurrentBatchConfig, nt = 0, ee = null, ie = null, fe = null, rl = !1, ir = !1, sr = 0, Kc = 0;
  function Se() {
    throw Error(m(321));
  }
  function Fu(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++) if (!nn(e[t], n[t])) return !1;
    return !0;
  }
  function ju(e, n, t, r, l, u) {
    if (nt = u, ee = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, tl.current = e === null || e.memoizedState === null ? Zc : Jc, e = t(r, l), ir) {
      u = 0;
      do {
        if (ir = !1, sr = 0, 25 <= u) throw Error(m(301));
        u += 1, fe = ie = null, n.updateQueue = null, tl.current = qc, e = t(r, l);
      } while (ir);
    }
    if (tl.current = ol, n = ie !== null && ie.next !== null, nt = 0, fe = ie = ee = null, rl = !1, n) throw Error(m(300));
    return e;
  }
  function Uu() {
    var e = sr !== 0;
    return sr = 0, e;
  }
  function mn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return fe === null ? ee.memoizedState = fe = e : fe = fe.next = e, fe;
  }
  function Xe() {
    if (ie === null) {
      var e = ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ie.next;
    var n = fe === null ? ee.memoizedState : fe.next;
    if (n !== null) fe = n, ie = e;
    else {
      if (e === null) throw Error(m(310));
      ie = e, e = { memoizedState: ie.memoizedState, baseState: ie.baseState, baseQueue: ie.baseQueue, queue: ie.queue, next: null }, fe === null ? ee.memoizedState = fe = e : fe = fe.next = e;
    }
    return fe;
  }
  function ar(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Au(e) {
    var n = Xe(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = ie, l = r.baseQueue, u = t.pending;
    if (u !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = u.next, u.next = o;
      }
      r.baseQueue = l = u, t.pending = null;
    }
    if (l !== null) {
      u = l.next, r = r.baseState;
      var i = o = null, s = null, p = u;
      do {
        var y = p.lane;
        if ((nt & y) === y) s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (i = s = g, o = r) : s = s.next = g, ee.lanes |= y, tt |= y;
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? o = r : s.next = i, nn(r, n.memoizedState) || (Oe = !0), n.memoizedState = r, n.baseState = o, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, ee.lanes |= u, tt |= u, l = l.next;
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Vu(e) {
    var n = Xe(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, u = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var o = l = l.next;
      do
        u = e(u, o.action), o = o.next;
      while (o !== l);
      nn(u, n.memoizedState) || (Oe = !0), n.memoizedState = u, n.baseQueue === null && (n.baseState = u), t.lastRenderedState = u;
    }
    return [u, r];
  }
  function ls() {
  }
  function us(e, n) {
    var t = ee, r = Xe(), l = n(), u = !nn(r.memoizedState, l);
    if (u && (r.memoizedState = l, Oe = !0), r = r.queue, Bu(ss.bind(null, t, r, e), [e]), r.getSnapshot !== n || u || fe !== null && fe.memoizedState.tag & 1) {
      if (t.flags |= 2048, cr(9, is.bind(null, t, r, l, n), void 0, null), de === null) throw Error(m(349));
      nt & 30 || os(t, n, l);
    }
    return l;
  }
  function os(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = ee.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ee.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function is(e, n, t, r) {
    n.value = t, n.getSnapshot = r, as(n) && cs(e);
  }
  function ss(e, n, t) {
    return t(function() {
      as(n) && cs(e);
    });
  }
  function as(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !nn(e, t);
    } catch {
      return !0;
    }
  }
  function cs(e) {
    var n = En(e, 1);
    n !== null && on(n, e, 1, -1);
  }
  function fs(e) {
    var n = mn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ar, lastRenderedState: e }, n.queue = e, e = e.dispatch = Gc.bind(null, ee, e), [n.memoizedState, e];
  }
  function cr(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = ee.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ee.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function ds() {
    return Xe().memoizedState;
  }
  function ll(e, n, t, r) {
    var l = mn();
    ee.flags |= e, l.memoizedState = cr(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function ul(e, n, t, r) {
    var l = Xe();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (ie !== null) {
      var o = ie.memoizedState;
      if (u = o.destroy, r !== null && Fu(r, o.deps)) {
        l.memoizedState = cr(n, t, u, r);
        return;
      }
    }
    ee.flags |= e, l.memoizedState = cr(1 | n, t, u, r);
  }
  function ps(e, n) {
    return ll(8390656, 8, e, n);
  }
  function Bu(e, n) {
    return ul(2048, 8, e, n);
  }
  function ms(e, n) {
    return ul(4, 2, e, n);
  }
  function hs(e, n) {
    return ul(4, 4, e, n);
  }
  function vs(e, n) {
    if (typeof n == "function") return e = e(), n(e), function() {
      n(null);
    };
    if (n != null) return e = e(), n.current = e, function() {
      n.current = null;
    };
  }
  function ys(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ul(4, 4, vs.bind(null, n, e), t);
  }
  function Hu() {
  }
  function gs(e, n) {
    var t = Xe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Fu(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function ws(e, n) {
    var t = Xe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Fu(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function Ss(e, n, t) {
    return nt & 21 ? (nn(t, n) || (t = Zo(), ee.lanes |= t, tt |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, Oe = !0), e.memoizedState = t);
  }
  function Yc(e, n) {
    var t = B;
    B = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = Iu.transition;
    Iu.transition = {};
    try {
      e(!1), n();
    } finally {
      B = t, Iu.transition = r;
    }
  }
  function ks() {
    return Xe().memoizedState;
  }
  function Xc(e, n, t) {
    var r = Wn(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Es(e)) _s(n, t);
    else if (t = bi(e, n, t, r), t !== null) {
      var l = Ne();
      on(t, e, r, l), Cs(t, n, r);
    }
  }
  function Gc(e, n, t) {
    var r = Wn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (Es(e)) _s(n, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = n.lastRenderedReducer, u !== null)) try {
        var o = n.lastRenderedState, i = u(o, t);
        if (l.hasEagerState = !0, l.eagerState = i, nn(i, o)) {
          var s = n.interleaved;
          s === null ? (l.next = l, Tu(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      t = bi(e, n, l, r), t !== null && (l = Ne(), on(t, e, r, l), Cs(t, n, r));
    }
  }
  function Es(e) {
    var n = e.alternate;
    return e === ee || n !== null && n === ee;
  }
  function _s(e, n) {
    ir = rl = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function Cs(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, $l(e, t);
    }
  }
  var ol = { readContext: Ye, useCallback: Se, useContext: Se, useEffect: Se, useImperativeHandle: Se, useInsertionEffect: Se, useLayoutEffect: Se, useMemo: Se, useReducer: Se, useRef: Se, useState: Se, useDebugValue: Se, useDeferredValue: Se, useTransition: Se, useMutableSource: Se, useSyncExternalStore: Se, useId: Se, unstable_isNewReconciler: !1 }, Zc = { readContext: Ye, useCallback: function(e, n) {
    return mn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Ye, useEffect: ps, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ll(
      4194308,
      4,
      vs.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return ll(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return ll(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = mn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r = mn();
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = Xc.bind(null, ee, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = mn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: fs, useDebugValue: Hu, useDeferredValue: function(e) {
    return mn().memoizedState = e;
  }, useTransition: function() {
    var e = fs(!1), n = e[0];
    return e = Yc.bind(null, e[1]), mn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = ee, l = mn();
    if (J) {
      if (t === void 0) throw Error(m(407));
      t = t();
    } else {
      if (t = n(), de === null) throw Error(m(349));
      nt & 30 || os(r, n, t);
    }
    l.memoizedState = t;
    var u = { value: t, getSnapshot: n };
    return l.queue = u, ps(ss.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, cr(9, is.bind(null, r, u, t, n), void 0, null), t;
  }, useId: function() {
    var e = mn(), n = de.identifierPrefix;
    if (J) {
      var t = kn, r = Sn;
      t = (r & ~(1 << 32 - en(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = sr++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else t = Kc++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, Jc = {
    readContext: Ye,
    useCallback: gs,
    useContext: Ye,
    useEffect: Bu,
    useImperativeHandle: ys,
    useInsertionEffect: ms,
    useLayoutEffect: hs,
    useMemo: ws,
    useReducer: Au,
    useRef: ds,
    useState: function() {
      return Au(ar);
    },
    useDebugValue: Hu,
    useDeferredValue: function(e) {
      var n = Xe();
      return Ss(n, ie.memoizedState, e);
    },
    useTransition: function() {
      var e = Au(ar)[0], n = Xe().memoizedState;
      return [e, n];
    },
    useMutableSource: ls,
    useSyncExternalStore: us,
    useId: ks,
    unstable_isNewReconciler: !1
  }, qc = { readContext: Ye, useCallback: gs, useContext: Ye, useEffect: Bu, useImperativeHandle: ys, useInsertionEffect: ms, useLayoutEffect: hs, useMemo: ws, useReducer: Vu, useRef: ds, useState: function() {
    return Vu(ar);
  }, useDebugValue: Hu, useDeferredValue: function(e) {
    var n = Xe();
    return ie === null ? n.memoizedState = e : Ss(n, ie.memoizedState, e);
  }, useTransition: function() {
    var e = Vu(ar)[0], n = Xe().memoizedState;
    return [e, n];
  }, useMutableSource: ls, useSyncExternalStore: us, useId: ks, unstable_isNewReconciler: !1 };
  function rn(e, n) {
    if (e && e.defaultProps) {
      n = _({}, n), e = e.defaultProps;
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function Wu(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : _({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var il = { isMounted: function(e) {
    return (e = e._reactInternals) ? Xn(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = Ne(), l = Wn(e), u = _n(r, l);
    u.payload = n, t != null && (u.callback = t), n = An(e, u, l), n !== null && (on(n, e, l, r), br(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = Ne(), l = Wn(e), u = _n(r, l);
    u.tag = 1, u.payload = n, t != null && (u.callback = t), n = An(e, u, l), n !== null && (on(n, e, l, r), br(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = Ne(), r = Wn(e), l = _n(t, r);
    l.tag = 2, n != null && (l.callback = n), n = An(e, l, r), n !== null && (on(n, e, r, t), br(n, e, r));
  } };
  function xs(e, n, t, r, l, u, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, o) : n.prototype && n.prototype.isPureReactComponent ? !Zt(t, r) || !Zt(l, u) : !0;
  }
  function Ps(e, n, t) {
    var r = !1, l = Fn, u = n.contextType;
    return typeof u == "object" && u !== null ? u = Ye(u) : (l = Re(n) ? Zn : we.current, r = n.contextTypes, u = (r = r != null) ? wt(e, l) : Fn), n = new n(t, u), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = il, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), n;
  }
  function Ns(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && il.enqueueReplaceState(n, n.state, null);
  }
  function $u(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = {}, Lu(e);
    var u = n.contextType;
    typeof u == "object" && u !== null ? l.context = Ye(u) : (u = Re(n) ? Zn : we.current, l.context = wt(e, u)), l.state = e.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (Wu(e, n, u, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && il.enqueueReplaceState(l, l.state, null), el(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Nt(e, n) {
    try {
      var t = "", r = n;
      do
        t += j(r), r = r.return;
      while (r);
      var l = t;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Qu(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Ku(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var bc = typeof WeakMap == "function" ? WeakMap : Map;
  function zs(e, n, t) {
    t = _n(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      ml || (ml = !0, io = r), Ku(e, n);
    }, t;
  }
  function Ts(e, n, t) {
    t = _n(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      t.payload = function() {
        return r(l);
      }, t.callback = function() {
        Ku(e, n);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (t.callback = function() {
      Ku(e, n), typeof r != "function" && (Bn === null ? Bn = /* @__PURE__ */ new Set([this]) : Bn.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, { componentStack: o !== null ? o : "" });
    }), t;
  }
  function Ls(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new bc();
      var l = /* @__PURE__ */ new Set();
      r.set(n, l);
    } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
    l.has(t) || (l.add(t), e = mf.bind(null, e, n, t), n.then(e, e));
  }
  function Rs(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Os(e, n, t, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = _n(-1, 1), n.tag = 2, An(t, n, 1))), t.lanes |= 1), e);
  }
  var ef = ge.ReactCurrentOwner, Oe = !1;
  function Pe(e, n, t, r) {
    n.child = e === null ? qi(n, null, t, r) : _t(n, e.child, t, r);
  }
  function Ms(e, n, t, r, l) {
    t = t.render;
    var u = n.ref;
    return xt(n, l), r = ju(e, n, t, r, u, l), t = Uu(), e !== null && !Oe ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Cn(e, n, l)) : (J && t && Su(n), n.flags |= 1, Pe(e, n, r, l), n.child);
  }
  function Ds(e, n, t, r, l) {
    if (e === null) {
      var u = t.type;
      return typeof u == "function" && !ho(u) && u.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = u, Is(e, n, u, r, l)) : (e = Sl(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (u = e.child, !(e.lanes & l)) {
      var o = u.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Zt, t(o, r) && e.ref === n.ref) return Cn(e, n, l);
    }
    return n.flags |= 1, e = Qn(u, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Is(e, n, t, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Zt(u, r) && e.ref === n.ref) if (Oe = !1, n.pendingProps = r = u, (e.lanes & l) !== 0) e.flags & 131072 && (Oe = !0);
      else return n.lanes = e.lanes, Cn(e, n, l);
    }
    return Yu(e, n, t, r, l);
  }
  function Fs(e, n, t) {
    var r = n.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Q(Tt, Be), Be |= t;
    else {
      if (!(t & 1073741824)) return e = u !== null ? u.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, Q(Tt, Be), Be |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : t, Q(Tt, Be), Be |= r;
    }
    else u !== null ? (r = u.baseLanes | t, n.memoizedState = null) : r = t, Q(Tt, Be), Be |= r;
    return Pe(e, n, l, t), n.child;
  }
  function js(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Yu(e, n, t, r, l) {
    var u = Re(t) ? Zn : we.current;
    return u = wt(n, u), xt(n, l), t = ju(e, n, t, r, u, l), r = Uu(), e !== null && !Oe ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Cn(e, n, l)) : (J && r && Su(n), n.flags |= 1, Pe(e, n, t, l), n.child);
  }
  function Us(e, n, t, r, l) {
    if (Re(t)) {
      var u = !0;
      Qr(n);
    } else u = !1;
    if (xt(n, l), n.stateNode === null) al(e, n), Ps(n, t, r), $u(n, t, r, l), r = !0;
    else if (e === null) {
      var o = n.stateNode, i = n.memoizedProps;
      o.props = i;
      var s = o.context, p = t.contextType;
      typeof p == "object" && p !== null ? p = Ye(p) : (p = Re(t) ? Zn : we.current, p = wt(n, p));
      var y = t.getDerivedStateFromProps, g = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      g || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || s !== p) && Ns(n, o, r, p), Un = !1;
      var h = n.memoizedState;
      o.state = h, el(n, r, o, l), s = n.memoizedState, i !== r || h !== s || Le.current || Un ? (typeof y == "function" && (Wu(n, t, y, r), s = n.memoizedState), (i = Un || xs(n, t, i, r, h, s, p)) ? (g || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), o.props = r, o.state = s, o.context = p, r = i) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      o = n.stateNode, es(e, n), i = n.memoizedProps, p = n.type === n.elementType ? i : rn(n.type, i), o.props = p, g = n.pendingProps, h = o.context, s = t.contextType, typeof s == "object" && s !== null ? s = Ye(s) : (s = Re(t) ? Zn : we.current, s = wt(n, s));
      var k = t.getDerivedStateFromProps;
      (y = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== g || h !== s) && Ns(n, o, r, s), Un = !1, h = n.memoizedState, o.state = h, el(n, r, o, l);
      var C = n.memoizedState;
      i !== g || h !== C || Le.current || Un ? (typeof k == "function" && (Wu(n, t, k, r), C = n.memoizedState), (p = Un || xs(n, t, p, r, h, C, s) || !1) ? (y || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, C, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, C, s)), typeof o.componentDidUpdate == "function" && (n.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = C), o.props = r, o.state = C, o.context = s, r = p) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return Xu(e, n, t, r, u, l);
  }
  function Xu(e, n, t, r, l, u) {
    js(e, n);
    var o = (n.flags & 128) !== 0;
    if (!r && !o) return l && Wi(n, t, !1), Cn(e, n, u);
    r = n.stateNode, ef.current = n;
    var i = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && o ? (n.child = _t(n, e.child, null, u), n.child = _t(n, null, i, u)) : Pe(e, n, i, u), n.memoizedState = r.state, l && Wi(n, t, !0), n.child;
  }
  function As(e) {
    var n = e.stateNode;
    n.pendingContext ? Bi(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Bi(e, n.context, !1), Ru(e, n.containerInfo);
  }
  function Vs(e, n, t, r, l) {
    return Et(), Cu(l), n.flags |= 256, Pe(e, n, t, r), n.child;
  }
  var Gu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Zu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Bs(e, n, t) {
    var r = n.pendingProps, l = b.current, u = !1, o = (n.flags & 128) !== 0, i;
    if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (u = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Q(b, l & 1), e === null)
      return _u(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (o = r.children, e = r.fallback, u ? (r = n.mode, u = n.child, o = { mode: "hidden", children: o }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = o) : u = kl(o, r, 0, null), e = ot(e, r, t, null), u.return = n, e.return = n, u.sibling = e, n.child = u, n.child.memoizedState = Zu(t), n.memoizedState = Gu, e) : Ju(n, o));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return nf(e, n, o, r, i, l, t);
    if (u) {
      u = r.fallback, o = n.mode, l = e.child, i = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(o & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = Qn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? u = Qn(i, u) : (u = ot(u, o, t, null), u.flags |= 2), u.return = n, r.return = n, r.sibling = u, n.child = r, r = u, u = n.child, o = e.child.memoizedState, o = o === null ? Zu(t) : { baseLanes: o.baseLanes | t, cachePool: null, transitions: o.transitions }, u.memoizedState = o, u.childLanes = e.childLanes & ~t, n.memoizedState = Gu, r;
    }
    return u = e.child, e = u.sibling, r = Qn(u, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function Ju(e, n) {
    return n = kl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function sl(e, n, t, r) {
    return r !== null && Cu(r), _t(n, e.child, null, t), e = Ju(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function nf(e, n, t, r, l, u, o) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r = Qu(Error(m(422))), sl(e, n, o, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (u = r.fallback, l = n.mode, r = kl({ mode: "visible", children: r.children }, l, 0, null), u = ot(u, l, o, null), u.flags |= 2, r.return = n, u.return = n, r.sibling = u, n.child = r, n.mode & 1 && _t(n, e.child, null, o), n.child.memoizedState = Zu(o), n.memoizedState = Gu, u);
    if (!(n.mode & 1)) return sl(e, n, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
      return r = i, u = Error(m(419)), r = Qu(u, r, void 0), sl(e, n, o, r);
    }
    if (i = (o & e.childLanes) !== 0, Oe || i) {
      if (r = de, r !== null) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, En(e, l), on(r, e, l, -1));
      }
      return mo(), r = Qu(Error(m(421))), sl(e, n, o, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = hf.bind(null, e), l._reactRetry = n, null) : (e = u.treeContext, Ve = Dn(l.nextSibling), Ae = n, J = !0, tn = null, e !== null && (Qe[Ke++] = Sn, Qe[Ke++] = kn, Qe[Ke++] = Jn, Sn = e.id, kn = e.overflow, Jn = n), n = Ju(n, r.children), n.flags |= 4096, n);
  }
  function Hs(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), zu(e.return, n, t);
  }
  function qu(e, n, t, r, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (u.isBackwards = n, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = t, u.tailMode = l);
  }
  function Ws(e, n, t) {
    var r = n.pendingProps, l = r.revealOrder, u = r.tail;
    if (Pe(e, n, r.children, t), r = b.current, r & 2) r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hs(e, t, n);
        else if (e.tag === 19) Hs(e, t, n);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (Q(b, r), !(n.mode & 1)) n.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && nl(e) === null && (l = t), t = t.sibling;
        t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), qu(n, !1, l, t, u);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && nl(e) === null) {
            n.child = l;
            break;
          }
          e = l.sibling, l.sibling = t, t = l, l = e;
        }
        qu(n, !0, t, null, u);
        break;
      case "together":
        qu(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function al(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function Cn(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), tt |= n.lanes, !(t & n.childLanes)) return null;
    if (e !== null && n.child !== e.child) throw Error(m(153));
    if (n.child !== null) {
      for (e = n.child, t = Qn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = Qn(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function tf(e, n, t) {
    switch (n.tag) {
      case 3:
        As(n), Et();
        break;
      case 5:
        rs(n);
        break;
      case 1:
        Re(n.type) && Qr(n);
        break;
      case 4:
        Ru(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        Q(Jr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (Q(b, b.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Bs(e, n, t) : (Q(b, b.current & 1), e = Cn(e, n, t), e !== null ? e.sibling : null);
        Q(b, b.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r) return Ws(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Q(b, b.current), r) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Fs(e, n, t);
    }
    return Cn(e, n, t);
  }
  var $s, bu, Qs, Ks;
  $s = function(e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) return;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }, bu = function() {
  }, Qs = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = n.stateNode, et(pn.current);
      var u = null;
      switch (t) {
        case "input":
          l = zl(e, l), r = zl(e, r), u = [];
          break;
        case "select":
          l = _({}, l, { value: void 0 }), r = _({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = Rl(e, l), r = Rl(e, r), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
      }
      Ml(t, r);
      var o;
      t = null;
      for (p in l) if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null) if (p === "style") {
        var i = l[p];
        for (o in i) i.hasOwnProperty(o) && (t || (t = {}), t[o] = "");
      } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (oe.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (i = l != null ? l[p] : void 0, r.hasOwnProperty(p) && s !== i && (s != null || i != null)) if (p === "style") if (i) {
          for (o in i) !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (t || (t = {}), t[o] = "");
          for (o in s) s.hasOwnProperty(o) && i[o] !== s[o] && (t || (t = {}), t[o] = s[o]);
        } else t || (u || (u = []), u.push(
          p,
          t
        )), t = s;
        else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (u = u || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (oe.hasOwnProperty(p) ? (s != null && p === "onScroll" && K("scroll", e), u || i === s || (u = [])) : (u = u || []).push(p, s));
      }
      t && (u = u || []).push("style", t);
      var p = u;
      (n.updateQueue = p) && (n.flags |= 4);
    }
  }, Ks = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function fr(e, n) {
    if (!J) switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
        t === null ? e.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function ke(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function rf(e, n, t) {
    var r = n.pendingProps;
    switch (ku(n), n.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ke(n), null;
      case 1:
        return Re(n.type) && $r(), ke(n), null;
      case 3:
        return r = n.stateNode, Pt(), Y(Le), Y(we), Du(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Gr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, tn !== null && (co(tn), tn = null))), bu(e, n), ke(n), null;
      case 5:
        Ou(n);
        var l = et(or.current);
        if (t = n.type, e !== null && n.stateNode != null) Qs(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return ke(n), null;
          }
          if (e = et(pn.current), Gr(n)) {
            r = n.stateNode, t = n.type;
            var u = n.memoizedProps;
            switch (r[dn] = n, r[nr] = u, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                K("cancel", r), K("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < qt.length; l++) K(qt[l], r);
                break;
              case "source":
                K("error", r);
                break;
              case "img":
              case "image":
              case "link":
                K(
                  "error",
                  r
                ), K("load", r);
                break;
              case "details":
                K("toggle", r);
                break;
              case "input":
                Po(r, u), K("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, K("invalid", r);
                break;
              case "textarea":
                To(r, u), K("invalid", r);
            }
            Ml(t, u), l = null;
            for (var o in u) if (u.hasOwnProperty(o)) {
              var i = u[o];
              o === "children" ? typeof i == "string" ? r.textContent !== i && (u.suppressHydrationWarning !== !0 && Br(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (u.suppressHydrationWarning !== !0 && Br(
                r.textContent,
                i,
                e
              ), l = ["children", "" + i]) : oe.hasOwnProperty(o) && i != null && o === "onScroll" && K("scroll", r);
            }
            switch (t) {
              case "input":
                gr(r), zo(r, u, !0);
                break;
              case "textarea":
                gr(r), Ro(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Hr);
            }
            r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Oo(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(t, { is: r.is }) : (e = o.createElement(t), t === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, t), e[dn] = n, e[nr] = r, $s(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (o = Dl(t, r), t) {
                case "dialog":
                  K("cancel", e), K("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  K("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < qt.length; l++) K(qt[l], e);
                  l = r;
                  break;
                case "source":
                  K("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  K(
                    "error",
                    e
                  ), K("load", e), l = r;
                  break;
                case "details":
                  K("toggle", e), l = r;
                  break;
                case "input":
                  Po(e, r), l = zl(e, r), K("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = _({}, r, { value: void 0 }), K("invalid", e);
                  break;
                case "textarea":
                  To(e, r), l = Rl(e, r), K("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ml(t, l), i = l;
              for (u in i) if (i.hasOwnProperty(u)) {
                var s = i[u];
                u === "style" ? Io(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Mo(e, s)) : u === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Mt(e, s) : typeof s == "number" && Mt(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (oe.hasOwnProperty(u) ? s != null && u === "onScroll" && K("scroll", e) : s != null && Je(e, u, s, o));
              }
              switch (t) {
                case "input":
                  gr(e), zo(e, r, !1);
                  break;
                case "textarea":
                  gr(e), Ro(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + V(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? it(e, !!r.multiple, u, !1) : r.defaultValue != null && it(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Hr);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return ke(n), null;
      case 6:
        if (e && n.stateNode != null) Ks(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
          if (t = et(or.current), et(pn.current), Gr(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[dn] = n, (u = r.nodeValue !== t) && (e = Ae, e !== null)) switch (e.tag) {
              case 3:
                Br(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Br(r.nodeValue, t, (e.mode & 1) !== 0);
            }
            u && (n.flags |= 4);
          } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[dn] = n, n.stateNode = r;
        }
        return ke(n), null;
      case 13:
        if (Y(b), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (J && Ve !== null && n.mode & 1 && !(n.flags & 128)) Gi(), Et(), n.flags |= 98560, u = !1;
          else if (u = Gr(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(m(317));
              u[dn] = n;
            } else Et(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            ke(n), u = !1;
          } else tn !== null && (co(tn), tn = null), u = !0;
          if (!u) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || b.current & 1 ? se === 0 && (se = 3) : mo())), n.updateQueue !== null && (n.flags |= 4), ke(n), null);
      case 4:
        return Pt(), bu(e, n), e === null && bt(n.stateNode.containerInfo), ke(n), null;
      case 10:
        return Nu(n.type._context), ke(n), null;
      case 17:
        return Re(n.type) && $r(), ke(n), null;
      case 19:
        if (Y(b), u = n.memoizedState, u === null) return ke(n), null;
        if (r = (n.flags & 128) !== 0, o = u.rendering, o === null) if (r) fr(u, !1);
        else {
          if (se !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
            if (o = nl(e), o !== null) {
              for (n.flags |= 128, fr(u, !1), r = o.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) u = t, e = r, u.flags &= 14680066, o = u.alternate, o === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = o.childLanes, u.lanes = o.lanes, u.child = o.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = o.memoizedProps, u.memoizedState = o.memoizedState, u.updateQueue = o.updateQueue, u.type = o.type, e = o.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
              return Q(b, b.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          u.tail !== null && re() > Lt && (n.flags |= 128, r = !0, fr(u, !1), n.lanes = 4194304);
        }
        else {
          if (!r) if (e = nl(o), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), fr(u, !0), u.tail === null && u.tailMode === "hidden" && !o.alternate && !J) return ke(n), null;
          } else 2 * re() - u.renderingStartTime > Lt && t !== 1073741824 && (n.flags |= 128, r = !0, fr(u, !1), n.lanes = 4194304);
          u.isBackwards ? (o.sibling = n.child, n.child = o) : (t = u.last, t !== null ? t.sibling = o : n.child = o, u.last = o);
        }
        return u.tail !== null ? (n = u.tail, u.rendering = n, u.tail = n.sibling, u.renderingStartTime = re(), n.sibling = null, t = b.current, Q(b, r ? t & 1 | 2 : t & 1), n) : (ke(n), null);
      case 22:
      case 23:
        return po(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? Be & 1073741824 && (ke(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ke(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function lf(e, n) {
    switch (ku(n), n.tag) {
      case 1:
        return Re(n.type) && $r(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Pt(), Y(Le), Y(we), Du(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Ou(n), null;
      case 13:
        if (Y(b), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(m(340));
          Et();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return Y(b), null;
      case 4:
        return Pt(), null;
      case 10:
        return Nu(n.type._context), null;
      case 22:
      case 23:
        return po(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var cl = !1, Ee = !1, uf = typeof WeakSet == "function" ? WeakSet : Set, E = null;
  function zt(e, n) {
    var t = e.ref;
    if (t !== null) if (typeof t == "function") try {
      t(null);
    } catch (r) {
      te(e, n, r);
    }
    else t.current = null;
  }
  function eo(e, n, t) {
    try {
      t();
    } catch (r) {
      te(e, n, r);
    }
  }
  var Ys = !1;
  function of(e, n) {
    if (du = Lr, e = xi(), lu(e)) {
      if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset, u = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, u.nodeType;
          } catch {
            t = null;
            break e;
          }
          var o = 0, i = -1, s = -1, p = 0, y = 0, g = e, h = null;
          n: for (; ; ) {
            for (var k; g !== t || l !== 0 && g.nodeType !== 3 || (i = o + l), g !== u || r !== 0 && g.nodeType !== 3 || (s = o + r), g.nodeType === 3 && (o += g.nodeValue.length), (k = g.firstChild) !== null; )
              h = g, g = k;
            for (; ; ) {
              if (g === e) break n;
              if (h === t && ++p === l && (i = o), h === u && ++y === r && (s = o), (k = g.nextSibling) !== null) break;
              g = h, h = g.parentNode;
            }
            g = k;
          }
          t = i === -1 || s === -1 ? null : { start: i, end: s };
        } else t = null;
      }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (pu = { focusedElem: e, selectionRange: t }, Lr = !1, E = n; E !== null; ) if (n = E, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, E = e;
    else for (; E !== null; ) {
      n = E;
      try {
        var C = n.alternate;
        if (n.flags & 1024) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (C !== null) {
              var x = C.memoizedProps, le = C.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? x : rn(n.type, x), le);
              f.__reactInternalSnapshotBeforeUpdate = a;
            }
            break;
          case 3:
            var d = n.stateNode.containerInfo;
            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(m(163));
        }
      } catch (w) {
        te(n, n.return, w);
      }
      if (e = n.sibling, e !== null) {
        e.return = n.return, E = e;
        break;
      }
      E = n.return;
    }
    return C = Ys, Ys = !1, C;
  }
  function dr(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && eo(n, t, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function fl(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
      var t = n = n.next;
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function no(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : n.current = e;
    }
  }
  function Xs(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Xs(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[dn], delete n[nr], delete n[yu], delete n[Hc], delete n[Wc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Gs(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Zs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Gs(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function to(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Hr));
    else if (r !== 4 && (e = e.child, e !== null)) for (to(e, n, t), e = e.sibling; e !== null; ) to(e, n, t), e = e.sibling;
  }
  function ro(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (ro(e, n, t), e = e.sibling; e !== null; ) ro(e, n, t), e = e.sibling;
  }
  var he = null, ln = !1;
  function Vn(e, n, t) {
    for (t = t.child; t !== null; ) Js(e, n, t), t = t.sibling;
  }
  function Js(e, n, t) {
    if (fn && typeof fn.onCommitFiberUnmount == "function") try {
      fn.onCommitFiberUnmount(Cr, t);
    } catch {
    }
    switch (t.tag) {
      case 5:
        Ee || zt(t, n);
      case 6:
        var r = he, l = ln;
        he = null, Vn(e, n, t), he = r, ln = l, he !== null && (ln ? (e = he, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : he.removeChild(t.stateNode));
        break;
      case 18:
        he !== null && (ln ? (e = he, t = t.stateNode, e.nodeType === 8 ? vu(e.parentNode, t) : e.nodeType === 1 && vu(e, t), $t(e)) : vu(he, t.stateNode));
        break;
      case 4:
        r = he, l = ln, he = t.stateNode.containerInfo, ln = !0, Vn(e, n, t), he = r, ln = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ee && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var u = l, o = u.destroy;
            u = u.tag, o !== void 0 && (u & 2 || u & 4) && eo(t, n, o), l = l.next;
          } while (l !== r);
        }
        Vn(e, n, t);
        break;
      case 1:
        if (!Ee && (zt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (i) {
          te(t, n, i);
        }
        Vn(e, n, t);
        break;
      case 21:
        Vn(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (Ee = (r = Ee) || t.memoizedState !== null, Vn(e, n, t), Ee = r) : Vn(e, n, t);
        break;
      default:
        Vn(e, n, t);
    }
  }
  function qs(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new uf()), n.forEach(function(r) {
        var l = vf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
    }
  }
  function un(e, n) {
    var t = n.deletions;
    if (t !== null) for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var u = e, o = n, i = o;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              he = i.stateNode, ln = !1;
              break e;
            case 3:
              he = i.stateNode.containerInfo, ln = !0;
              break e;
            case 4:
              he = i.stateNode.containerInfo, ln = !0;
              break e;
          }
          i = i.return;
        }
        if (he === null) throw Error(m(160));
        Js(u, o, l), he = null, ln = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (p) {
        te(l, n, p);
      }
    }
    if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) bs(n, e), n = n.sibling;
  }
  function bs(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (un(n, e), hn(e), r & 4) {
          try {
            dr(3, e, e.return), fl(3, e);
          } catch (x) {
            te(e, e.return, x);
          }
          try {
            dr(5, e, e.return);
          } catch (x) {
            te(e, e.return, x);
          }
        }
        break;
      case 1:
        un(n, e), hn(e), r & 512 && t !== null && zt(t, t.return);
        break;
      case 5:
        if (un(n, e), hn(e), r & 512 && t !== null && zt(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Mt(l, "");
          } catch (x) {
            te(e, e.return, x);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, o = t !== null ? t.memoizedProps : u, i = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            i === "input" && u.type === "radio" && u.name != null && No(l, u), Dl(i, o);
            var p = Dl(i, u);
            for (o = 0; o < s.length; o += 2) {
              var y = s[o], g = s[o + 1];
              y === "style" ? Io(l, g) : y === "dangerouslySetInnerHTML" ? Mo(l, g) : y === "children" ? Mt(l, g) : Je(l, y, g, p);
            }
            switch (i) {
              case "input":
                Tl(l, u);
                break;
              case "textarea":
                Lo(l, u);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var k = u.value;
                k != null ? it(l, !!u.multiple, k, !1) : h !== !!u.multiple && (u.defaultValue != null ? it(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : it(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[nr] = u;
          } catch (x) {
            te(e, e.return, x);
          }
        }
        break;
      case 6:
        if (un(n, e), hn(e), r & 4) {
          if (e.stateNode === null) throw Error(m(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (x) {
            te(e, e.return, x);
          }
        }
        break;
      case 3:
        if (un(n, e), hn(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
          $t(n.containerInfo);
        } catch (x) {
          te(e, e.return, x);
        }
        break;
      case 4:
        un(n, e), hn(e);
        break;
      case 13:
        un(n, e), hn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (oo = re())), r & 4 && qs(e);
        break;
      case 22:
        if (y = t !== null && t.memoizedState !== null, e.mode & 1 ? (Ee = (p = Ee) || y, un(n, e), Ee = p) : un(n, e), hn(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && e.mode & 1) for (E = e, y = e.child; y !== null; ) {
            for (g = E = y; E !== null; ) {
              switch (h = E, k = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  dr(4, h, h.return);
                  break;
                case 1:
                  zt(h, h.return);
                  var C = h.stateNode;
                  if (typeof C.componentWillUnmount == "function") {
                    r = h, t = h.return;
                    try {
                      n = r, C.props = n.memoizedProps, C.state = n.memoizedState, C.componentWillUnmount();
                    } catch (x) {
                      te(r, t, x);
                    }
                  }
                  break;
                case 5:
                  zt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    ta(g);
                    continue;
                  }
              }
              k !== null ? (k.return = h, E = k) : ta(g);
            }
            y = y.sibling;
          }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  l = g.stateNode, p ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (i = g.stateNode, s = g.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Do("display", o));
                } catch (x) {
                  te(e, e.return, x);
                }
              }
            } else if (g.tag === 6) {
              if (y === null) try {
                g.stateNode.nodeValue = p ? "" : g.memoizedProps;
              } catch (x) {
                te(e, e.return, x);
              }
            } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
              g.child.return = g, g = g.child;
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              y === g && (y = null), g = g.return;
            }
            y === g && (y = null), g.sibling.return = g.return, g = g.sibling;
          }
        }
        break;
      case 19:
        un(n, e), hn(e), r & 4 && qs(e);
        break;
      case 21:
        break;
      default:
        un(
          n,
          e
        ), hn(e);
    }
  }
  function hn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (Gs(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Mt(l, ""), r.flags &= -33);
            var u = Zs(e);
            ro(e, u, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, i = Zs(e);
            to(e, i, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        te(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function sf(e, n, t) {
    E = e, ea(e);
  }
  function ea(e, n, t) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E, u = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || cl;
        if (!o) {
          var i = l.alternate, s = i !== null && i.memoizedState !== null || Ee;
          i = cl;
          var p = Ee;
          if (cl = o, (Ee = s) && !p) for (E = l; E !== null; ) o = E, s = o.child, o.tag === 22 && o.memoizedState !== null ? ra(l) : s !== null ? (s.return = o, E = s) : ra(l);
          for (; u !== null; ) E = u, ea(u), u = u.sibling;
          E = l, cl = i, Ee = p;
        }
        na(e);
      } else l.subtreeFlags & 8772 && u !== null ? (u.return = l, E = u) : na(e);
    }
  }
  function na(e) {
    for (; E !== null; ) {
      var n = E;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              Ee || fl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !Ee) if (t === null) r.componentDidMount();
              else {
                var l = n.elementType === n.type ? t.memoizedProps : rn(n.type, t.memoizedProps);
                r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var u = n.updateQueue;
              u !== null && ts(n, u, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (o !== null) {
                if (t = null, n.child !== null) switch (n.child.tag) {
                  case 5:
                    t = n.child.stateNode;
                    break;
                  case 1:
                    t = n.child.stateNode;
                }
                ts(n, o, t);
              }
              break;
            case 5:
              var i = n.stateNode;
              if (t === null && n.flags & 4) {
                t = i;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var p = n.alternate;
                if (p !== null) {
                  var y = p.memoizedState;
                  if (y !== null) {
                    var g = y.dehydrated;
                    g !== null && $t(g);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(m(163));
          }
          Ee || n.flags & 512 && no(n);
        } catch (h) {
          te(n, n.return, h);
        }
      }
      if (n === e) {
        E = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function ta(e) {
    for (; E !== null; ) {
      var n = E;
      if (n === e) {
        E = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function ra(e) {
    for (; E !== null; ) {
      var n = E;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              fl(4, n);
            } catch (s) {
              te(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                te(n, l, s);
              }
            }
            var u = n.return;
            try {
              no(n);
            } catch (s) {
              te(n, u, s);
            }
            break;
          case 5:
            var o = n.return;
            try {
              no(n);
            } catch (s) {
              te(n, o, s);
            }
        }
      } catch (s) {
        te(n, n.return, s);
      }
      if (n === e) {
        E = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        i.return = n.return, E = i;
        break;
      }
      E = n.return;
    }
  }
  var af = Math.ceil, dl = ge.ReactCurrentDispatcher, lo = ge.ReactCurrentOwner, Ge = ge.ReactCurrentBatchConfig, I = 0, de = null, ue = null, ve = 0, Be = 0, Tt = In(0), se = 0, pr = null, tt = 0, pl = 0, uo = 0, mr = null, Me = null, oo = 0, Lt = 1 / 0, xn = null, ml = !1, io = null, Bn = null, hl = !1, Hn = null, vl = 0, hr = 0, so = null, yl = -1, gl = 0;
  function Ne() {
    return I & 6 ? re() : yl !== -1 ? yl : yl = re();
  }
  function Wn(e) {
    return e.mode & 1 ? I & 2 && ve !== 0 ? ve & -ve : Qc.transition !== null ? (gl === 0 && (gl = Zo()), gl) : (e = B, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ui(e.type)), e) : 1;
  }
  function on(e, n, t, r) {
    if (50 < hr) throw hr = 0, so = null, Error(m(185));
    At(e, t, r), (!(I & 2) || e !== de) && (e === de && (!(I & 2) && (pl |= t), se === 4 && $n(e, ve)), De(e, r), t === 1 && I === 0 && !(n.mode & 1) && (Lt = re() + 500, Kr && jn()));
  }
  function De(e, n) {
    var t = e.callbackNode;
    Qa(e, n);
    var r = Nr(e, e === de ? ve : 0);
    if (r === 0) t !== null && Yo(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && Yo(t), n === 1) e.tag === 0 ? $c(ua.bind(null, e)) : $i(ua.bind(null, e)), Vc(function() {
        !(I & 6) && jn();
      }), t = null;
      else {
        switch (Jo(r)) {
          case 1:
            t = Bl;
            break;
          case 4:
            t = Xo;
            break;
          case 16:
            t = _r;
            break;
          case 536870912:
            t = Go;
            break;
          default:
            t = _r;
        }
        t = pa(t, la.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function la(e, n) {
    if (yl = -1, gl = 0, I & 6) throw Error(m(327));
    var t = e.callbackNode;
    if (Rt() && e.callbackNode !== t) return null;
    var r = Nr(e, e === de ? ve : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = wl(e, r);
    else {
      n = r;
      var l = I;
      I |= 2;
      var u = ia();
      (de !== e || ve !== n) && (xn = null, Lt = re() + 500, lt(e, n));
      do
        try {
          df();
          break;
        } catch (i) {
          oa(e, i);
        }
      while (!0);
      Pu(), dl.current = u, I = l, ue !== null ? n = 0 : (de = null, ve = 0, n = se);
    }
    if (n !== 0) {
      if (n === 2 && (l = Hl(e), l !== 0 && (r = l, n = ao(e, l))), n === 1) throw t = pr, lt(e, 0), $n(e, r), De(e, re()), t;
      if (n === 6) $n(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !cf(l) && (n = wl(e, r), n === 2 && (u = Hl(e), u !== 0 && (r = u, n = ao(e, u))), n === 1)) throw t = pr, lt(e, 0), $n(e, r), De(e, re()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ut(e, Me, xn);
            break;
          case 3:
            if ($n(e, r), (r & 130023424) === r && (n = oo + 500 - re(), 10 < n)) {
              if (Nr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Ne(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = hu(ut.bind(null, e, Me, xn), n);
              break;
            }
            ut(e, Me, xn);
            break;
          case 4:
            if ($n(e, r), (r & 4194240) === r) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - en(r);
              u = 1 << o, o = n[o], o > l && (l = o), r &= ~u;
            }
            if (r = l, r = re() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * af(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = hu(ut.bind(null, e, Me, xn), r);
              break;
            }
            ut(e, Me, xn);
            break;
          case 5:
            ut(e, Me, xn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return De(e, re()), e.callbackNode === t ? la.bind(null, e) : null;
  }
  function ao(e, n) {
    var t = mr;
    return e.current.memoizedState.isDehydrated && (lt(e, n).flags |= 256), e = wl(e, n), e !== 2 && (n = Me, Me = t, n !== null && co(n)), e;
  }
  function co(e) {
    Me === null ? Me = e : Me.push.apply(Me, e);
  }
  function cf(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
          var l = t[r], u = l.getSnapshot;
          l = l.value;
          try {
            if (!nn(u(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function $n(e, n) {
    for (n &= ~uo, n &= ~pl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - en(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function ua(e) {
    if (I & 6) throw Error(m(327));
    Rt();
    var n = Nr(e, 0);
    if (!(n & 1)) return De(e, re()), null;
    var t = wl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Hl(e);
      r !== 0 && (n = r, t = ao(e, r));
    }
    if (t === 1) throw t = pr, lt(e, 0), $n(e, n), De(e, re()), t;
    if (t === 6) throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, ut(e, Me, xn), De(e, re()), null;
  }
  function fo(e, n) {
    var t = I;
    I |= 1;
    try {
      return e(n);
    } finally {
      I = t, I === 0 && (Lt = re() + 500, Kr && jn());
    }
  }
  function rt(e) {
    Hn !== null && Hn.tag === 0 && !(I & 6) && Rt();
    var n = I;
    I |= 1;
    var t = Ge.transition, r = B;
    try {
      if (Ge.transition = null, B = 1, e) return e();
    } finally {
      B = r, Ge.transition = t, I = n, !(I & 6) && jn();
    }
  }
  function po() {
    Be = Tt.current, Y(Tt);
  }
  function lt(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Ac(t)), ue !== null) for (t = ue.return; t !== null; ) {
      var r = t;
      switch (ku(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && $r();
          break;
        case 3:
          Pt(), Y(Le), Y(we), Du();
          break;
        case 5:
          Ou(r);
          break;
        case 4:
          Pt();
          break;
        case 13:
          Y(b);
          break;
        case 19:
          Y(b);
          break;
        case 10:
          Nu(r.type._context);
          break;
        case 22:
        case 23:
          po();
      }
      t = t.return;
    }
    if (de = e, ue = e = Qn(e.current, null), ve = Be = n, se = 0, pr = null, uo = pl = tt = 0, Me = mr = null, bn !== null) {
      for (n = 0; n < bn.length; n++) if (t = bn[n], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var l = r.next, u = t.pending;
        if (u !== null) {
          var o = u.next;
          u.next = l, r.next = o;
        }
        t.pending = r;
      }
      bn = null;
    }
    return e;
  }
  function oa(e, n) {
    do {
      var t = ue;
      try {
        if (Pu(), tl.current = ol, rl) {
          for (var r = ee.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          rl = !1;
        }
        if (nt = 0, fe = ie = ee = null, ir = !1, sr = 0, lo.current = null, t === null || t.return === null) {
          se = 1, pr = n, ue = null;
          break;
        }
        e: {
          var u = e, o = t.return, i = t, s = n;
          if (n = ve, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = i, g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var k = Rs(o);
            if (k !== null) {
              k.flags &= -257, Os(k, o, i, u, n), k.mode & 1 && Ls(u, p, n), n = k, s = p;
              var C = n.updateQueue;
              if (C === null) {
                var x = /* @__PURE__ */ new Set();
                x.add(s), n.updateQueue = x;
              } else C.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Ls(u, p, n), mo();
                break e;
              }
              s = Error(m(426));
            }
          } else if (J && i.mode & 1) {
            var le = Rs(o);
            if (le !== null) {
              !(le.flags & 65536) && (le.flags |= 256), Os(le, o, i, u, n), Cu(Nt(s, i));
              break e;
            }
          }
          u = s = Nt(s, i), se !== 4 && (se = 2), mr === null ? mr = [u] : mr.push(u), u = o;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, n &= -n, u.lanes |= n;
                var f = zs(u, s, n);
                ns(u, f);
                break e;
              case 1:
                i = s;
                var a = u.type, d = u.stateNode;
                if (!(u.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Bn === null || !Bn.has(d)))) {
                  u.flags |= 65536, n &= -n, u.lanes |= n;
                  var w = Ts(u, i, n);
                  ns(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        aa(t);
      } catch (P) {
        n = P, ue === t && t !== null && (ue = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ia() {
    var e = dl.current;
    return dl.current = ol, e === null ? ol : e;
  }
  function mo() {
    (se === 0 || se === 3 || se === 2) && (se = 4), de === null || !(tt & 268435455) && !(pl & 268435455) || $n(de, ve);
  }
  function wl(e, n) {
    var t = I;
    I |= 2;
    var r = ia();
    (de !== e || ve !== n) && (xn = null, lt(e, n));
    do
      try {
        ff();
        break;
      } catch (l) {
        oa(e, l);
      }
    while (!0);
    if (Pu(), I = t, dl.current = r, ue !== null) throw Error(m(261));
    return de = null, ve = 0, se;
  }
  function ff() {
    for (; ue !== null; ) sa(ue);
  }
  function df() {
    for (; ue !== null && !Fa(); ) sa(ue);
  }
  function sa(e) {
    var n = da(e.alternate, e, Be);
    e.memoizedProps = e.pendingProps, n === null ? aa(e) : ue = n, lo.current = null;
  }
  function aa(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = lf(t, n), t !== null) {
          t.flags &= 32767, ue = t;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          se = 6, ue = null;
          return;
        }
      } else if (t = rf(t, n, Be), t !== null) {
        ue = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        ue = n;
        return;
      }
      ue = n = e;
    } while (n !== null);
    se === 0 && (se = 5);
  }
  function ut(e, n, t) {
    var r = B, l = Ge.transition;
    try {
      Ge.transition = null, B = 1, pf(e, n, t, r);
    } finally {
      Ge.transition = l, B = r;
    }
    return null;
  }
  function pf(e, n, t, r) {
    do
      Rt();
    while (Hn !== null);
    if (I & 6) throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = t.lanes | t.childLanes;
    if (Ka(e, u), e === de && (ue = de = null, ve = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || hl || (hl = !0, pa(_r, function() {
      return Rt(), null;
    })), u = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || u) {
      u = Ge.transition, Ge.transition = null;
      var o = B;
      B = 1;
      var i = I;
      I |= 4, lo.current = null, of(e, t), bs(t, e), Oc(pu), Lr = !!du, pu = du = null, e.current = t, sf(t), ja(), I = i, B = o, Ge.transition = u;
    } else e.current = t;
    if (hl && (hl = !1, Hn = e, vl = l), u = e.pendingLanes, u === 0 && (Bn = null), Va(t.stateNode), De(e, re()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (ml) throw ml = !1, e = io, io = null, e;
    return vl & 1 && e.tag !== 0 && Rt(), u = e.pendingLanes, u & 1 ? e === so ? hr++ : (hr = 0, so = e) : hr = 0, jn(), null;
  }
  function Rt() {
    if (Hn !== null) {
      var e = Jo(vl), n = Ge.transition, t = B;
      try {
        if (Ge.transition = null, B = 16 > e ? 16 : e, Hn === null) var r = !1;
        else {
          if (e = Hn, Hn = null, vl = 0, I & 6) throw Error(m(331));
          var l = I;
          for (I |= 4, E = e.current; E !== null; ) {
            var u = E, o = u.child;
            if (E.flags & 16) {
              var i = u.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var p = i[s];
                  for (E = p; E !== null; ) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dr(8, y, u);
                    }
                    var g = y.child;
                    if (g !== null) g.return = y, E = g;
                    else for (; E !== null; ) {
                      y = E;
                      var h = y.sibling, k = y.return;
                      if (Xs(y), y === p) {
                        E = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = k, E = h;
                        break;
                      }
                      E = k;
                    }
                  }
                }
                var C = u.alternate;
                if (C !== null) {
                  var x = C.child;
                  if (x !== null) {
                    C.child = null;
                    do {
                      var le = x.sibling;
                      x.sibling = null, x = le;
                    } while (x !== null);
                  }
                }
                E = u;
              }
            }
            if (u.subtreeFlags & 2064 && o !== null) o.return = u, E = o;
            else e: for (; E !== null; ) {
              if (u = E, u.flags & 2048) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  dr(9, u, u.return);
              }
              var f = u.sibling;
              if (f !== null) {
                f.return = u.return, E = f;
                break e;
              }
              E = u.return;
            }
          }
          var a = e.current;
          for (E = a; E !== null; ) {
            o = E;
            var d = o.child;
            if (o.subtreeFlags & 2064 && d !== null) d.return = o, E = d;
            else e: for (o = a; E !== null; ) {
              if (i = E, i.flags & 2048) try {
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fl(9, i);
                }
              } catch (P) {
                te(i, i.return, P);
              }
              if (i === o) {
                E = null;
                break e;
              }
              var w = i.sibling;
              if (w !== null) {
                w.return = i.return, E = w;
                break e;
              }
              E = i.return;
            }
          }
          if (I = l, jn(), fn && typeof fn.onPostCommitFiberRoot == "function") try {
            fn.onPostCommitFiberRoot(Cr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        B = t, Ge.transition = n;
      }
    }
    return !1;
  }
  function ca(e, n, t) {
    n = Nt(t, n), n = zs(e, n, 1), e = An(e, n, 1), n = Ne(), e !== null && (At(e, 1, n), De(e, n));
  }
  function te(e, n, t) {
    if (e.tag === 3) ca(e, e, t);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        ca(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Bn === null || !Bn.has(r))) {
          e = Nt(t, e), e = Ts(n, e, 1), n = An(n, e, 1), e = Ne(), n !== null && (At(n, 1, e), De(n, e));
          break;
        }
      }
      n = n.return;
    }
  }
  function mf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = Ne(), e.pingedLanes |= e.suspendedLanes & t, de === e && (ve & t) === t && (se === 4 || se === 3 && (ve & 130023424) === ve && 500 > re() - oo ? lt(e, 0) : uo |= t), De(e, n);
  }
  function fa(e, n) {
    n === 0 && (e.mode & 1 ? (n = Pr, Pr <<= 1, !(Pr & 130023424) && (Pr = 4194304)) : n = 1);
    var t = Ne();
    e = En(e, n), e !== null && (At(e, n, t), De(e, t));
  }
  function hf(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), fa(e, t);
  }
  function vf(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(n), fa(e, t);
  }
  var da;
  da = function(e, n, t) {
    if (e !== null) if (e.memoizedProps !== n.pendingProps || Le.current) Oe = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return Oe = !1, tf(e, n, t);
      Oe = !!(e.flags & 131072);
    }
    else Oe = !1, J && n.flags & 1048576 && Qi(n, Xr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        al(e, n), e = n.pendingProps;
        var l = wt(n, we.current);
        xt(n, t), l = ju(null, n, r, e, l, t);
        var u = Uu();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Re(r) ? (u = !0, Qr(n)) : u = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Lu(n), l.updater = il, n.stateNode = l, l._reactInternals = n, $u(n, r, e, t), n = Xu(null, n, r, !0, u, t)) : (n.tag = 0, J && u && Su(n), Pe(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (al(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = gf(r), e = rn(r, e), l) {
            case 0:
              n = Yu(null, n, r, e, t);
              break e;
            case 1:
              n = Us(null, n, r, e, t);
              break e;
            case 11:
              n = Ms(null, n, r, e, t);
              break e;
            case 14:
              n = Ds(null, n, r, rn(r.type, e), t);
              break e;
          }
          throw Error(m(
            306,
            r,
            ""
          ));
        }
        return n;
      case 0:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), Yu(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), Us(e, n, r, l, t);
      case 3:
        e: {
          if (As(n), e === null) throw Error(m(387));
          r = n.pendingProps, u = n.memoizedState, l = u.element, es(e, n), el(n, r, null, t);
          var o = n.memoizedState;
          if (r = o.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, n.updateQueue.baseState = u, n.memoizedState = u, n.flags & 256) {
            l = Nt(Error(m(423)), n), n = Vs(e, n, r, t, l);
            break e;
          } else if (r !== l) {
            l = Nt(Error(m(424)), n), n = Vs(e, n, r, t, l);
            break e;
          } else for (Ve = Dn(n.stateNode.containerInfo.firstChild), Ae = n, J = !0, tn = null, t = qi(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Et(), r === l) {
              n = Cn(e, n, t);
              break e;
            }
            Pe(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return rs(n), e === null && _u(n), r = n.type, l = n.pendingProps, u = e !== null ? e.memoizedProps : null, o = l.children, mu(r, l) ? o = null : u !== null && mu(r, u) && (n.flags |= 32), js(e, n), Pe(e, n, o, t), n.child;
      case 6:
        return e === null && _u(n), null;
      case 13:
        return Bs(e, n, t);
      case 4:
        return Ru(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = _t(n, null, r, t) : Pe(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), Ms(e, n, r, l, t);
      case 7:
        return Pe(e, n, n.pendingProps, t), n.child;
      case 8:
        return Pe(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Pe(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, u = n.memoizedProps, o = l.value, Q(Jr, r._currentValue), r._currentValue = o, u !== null) if (nn(u.value, o)) {
            if (u.children === l.children && !Le.current) {
              n = Cn(e, n, t);
              break e;
            }
          } else for (u = n.child, u !== null && (u.return = n); u !== null; ) {
            var i = u.dependencies;
            if (i !== null) {
              o = u.child;
              for (var s = i.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (u.tag === 1) {
                    s = _n(-1, t & -t), s.tag = 2;
                    var p = u.updateQueue;
                    if (p !== null) {
                      p = p.shared;
                      var y = p.pending;
                      y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                    }
                  }
                  u.lanes |= t, s = u.alternate, s !== null && (s.lanes |= t), zu(
                    u.return,
                    t,
                    n
                  ), i.lanes |= t;
                  break;
                }
                s = s.next;
              }
            } else if (u.tag === 10) o = u.type === n.type ? null : u.child;
            else if (u.tag === 18) {
              if (o = u.return, o === null) throw Error(m(341));
              o.lanes |= t, i = o.alternate, i !== null && (i.lanes |= t), zu(o, t, n), o = u.sibling;
            } else o = u.child;
            if (o !== null) o.return = u;
            else for (o = u; o !== null; ) {
              if (o === n) {
                o = null;
                break;
              }
              if (u = o.sibling, u !== null) {
                u.return = o.return, o = u;
                break;
              }
              o = o.return;
            }
            u = o;
          }
          Pe(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, xt(n, t), l = Ye(l), r = r(l), n.flags |= 1, Pe(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = rn(r, n.pendingProps), l = rn(r.type, l), Ds(e, n, r, l, t);
      case 15:
        return Is(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), al(e, n), n.tag = 1, Re(r) ? (e = !0, Qr(n)) : e = !1, xt(n, t), Ps(n, r, l), $u(n, r, l, t), Xu(null, n, r, !0, e, t);
      case 19:
        return Ws(e, n, t);
      case 22:
        return Fs(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function pa(e, n) {
    return Ko(e, n);
  }
  function yf(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ze(e, n, t, r) {
    return new yf(e, n, t, r);
  }
  function ho(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function gf(e) {
    if (typeof e == "function") return ho(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === an) return 11;
      if (e === cn) return 14;
    }
    return 2;
  }
  function Qn(e, n) {
    var t = e.alternate;
    return t === null ? (t = Ze(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function Sl(e, n, t, r, l, u) {
    var o = 2;
    if (r = e, typeof e == "function") ho(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case ze:
        return ot(t.children, l, u, n);
      case $e:
        o = 8, l |= 8;
        break;
      case Nn:
        return e = Ze(12, t, n, l | 2), e.elementType = Nn, e.lanes = u, e;
      case Fe:
        return e = Ze(13, t, n, l), e.elementType = Fe, e.lanes = u, e;
      case be:
        return e = Ze(19, t, n, l), e.elementType = be, e.lanes = u, e;
      case ne:
        return kl(t, l, u, n);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case yn:
            o = 10;
            break e;
          case Yn:
            o = 9;
            break e;
          case an:
            o = 11;
            break e;
          case cn:
            o = 14;
            break e;
          case Te:
            o = 16, r = null;
            break e;
        }
        throw Error(m(130, e == null ? e : typeof e, ""));
    }
    return n = Ze(o, t, n, l), n.elementType = e, n.type = r, n.lanes = u, n;
  }
  function ot(e, n, t, r) {
    return e = Ze(7, e, r, n), e.lanes = t, e;
  }
  function kl(e, n, t, r) {
    return e = Ze(22, e, r, n), e.elementType = ne, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function vo(e, n, t) {
    return e = Ze(6, e, null, n), e.lanes = t, e;
  }
  function yo(e, n, t) {
    return n = Ze(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function wf(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wl(0), this.expirationTimes = Wl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function go(e, n, t, r, l, u, o, i, s) {
    return e = new wf(e, n, t, i, s), n === 1 ? (n = 1, u === !0 && (n |= 8)) : n = 0, u = Ze(3, null, null, n), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Lu(u), e;
  }
  function Sf(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: xe, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function ma(e) {
    if (!e) return Fn;
    e = e._reactInternals;
    e: {
      if (Xn(e) !== e || e.tag !== 1) throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Re(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Re(t)) return Hi(e, t, n);
    }
    return n;
  }
  function ha(e, n, t, r, l, u, o, i, s) {
    return e = go(t, r, !0, e, l, u, o, i, s), e.context = ma(null), t = e.current, r = Ne(), l = Wn(t), u = _n(r, l), u.callback = n ?? null, An(t, u, l), e.current.lanes = l, At(e, l, r), De(e, r), e;
  }
  function El(e, n, t, r) {
    var l = n.current, u = Ne(), o = Wn(l);
    return t = ma(t), n.context === null ? n.context = t : n.pendingContext = t, n = _n(u, o), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = An(l, n, o), e !== null && (on(e, l, o, u), br(e, l, o)), o;
  }
  function _l(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function va(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function wo(e, n) {
    va(e, n), (e = e.alternate) && va(e, n);
  }
  function kf() {
    return null;
  }
  var ya = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function So(e) {
    this._internalRoot = e;
  }
  Cl.prototype.render = So.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(m(409));
    El(e, n, null, null);
  }, Cl.prototype.unmount = So.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      rt(function() {
        El(null, e, null, null);
      }), n[gn] = null;
    }
  };
  function Cl(e) {
    this._internalRoot = e;
  }
  Cl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = ei();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Rn.length && n !== 0 && n < Rn[t].priority; t++) ;
      Rn.splice(t, 0, e), t === 0 && ri(e);
    }
  };
  function ko(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function xl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function ga() {
  }
  function Ef(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var p = _l(o);
          u.call(p);
        };
      }
      var o = ha(n, r, e, 0, null, !1, !1, "", ga);
      return e._reactRootContainer = o, e[gn] = o.current, bt(e.nodeType === 8 ? e.parentNode : e), rt(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var p = _l(s);
        i.call(p);
      };
    }
    var s = go(e, 0, !1, null, null, !1, !1, "", ga);
    return e._reactRootContainer = s, e[gn] = s.current, bt(e.nodeType === 8 ? e.parentNode : e), rt(function() {
      El(n, s, t, r);
    }), s;
  }
  function Pl(e, n, t, r, l) {
    var u = t._reactRootContainer;
    if (u) {
      var o = u;
      if (typeof l == "function") {
        var i = l;
        l = function() {
          var s = _l(o);
          i.call(s);
        };
      }
      El(n, o, e, l);
    } else o = Ef(t, n, e, l, r);
    return _l(o);
  }
  qo = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = Ut(n.pendingLanes);
          t !== 0 && ($l(n, t | 1), De(n, re()), !(I & 6) && (Lt = re() + 500, jn()));
        }
        break;
      case 13:
        rt(function() {
          var r = En(e, 1);
          if (r !== null) {
            var l = Ne();
            on(r, e, 1, l);
          }
        }), wo(e, 1);
    }
  }, Ql = function(e) {
    if (e.tag === 13) {
      var n = En(e, 134217728);
      if (n !== null) {
        var t = Ne();
        on(n, e, 134217728, t);
      }
      wo(e, 134217728);
    }
  }, bo = function(e) {
    if (e.tag === 13) {
      var n = Wn(e), t = En(e, n);
      if (t !== null) {
        var r = Ne();
        on(t, e, n, r);
      }
      wo(e, n);
    }
  }, ei = function() {
    return B;
  }, ni = function(e, n) {
    var t = B;
    try {
      return B = e, n();
    } finally {
      B = t;
    }
  }, jl = function(e, n, t) {
    switch (n) {
      case "input":
        if (Tl(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; ) t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l = Wr(r);
              if (!l) throw Error(m(90));
              xo(r), Tl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Lo(e, t);
        break;
      case "select":
        n = t.value, n != null && it(e, !!t.multiple, n, !1);
    }
  }, Ao = fo, Vo = rt;
  var _f = { usingClientEntryPoint: !1, Events: [tr, yt, Wr, jo, Uo, fo] }, vr = { findFiberByHostInstance: Gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Cf = { bundleType: vr.bundleType, version: vr.version, rendererPackageName: vr.rendererPackageName, rendererConfig: vr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ge.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = $o(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: vr.findFiberByHostInstance || kf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nl.isDisabled && Nl.supportsFiber) try {
      Cr = Nl.inject(Cf), fn = Nl;
    } catch {
    }
  }
  return Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _f, Ie.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ko(n)) throw Error(m(200));
    return Sf(e, n, null, t);
  }, Ie.createRoot = function(e, n) {
    if (!ko(e)) throw Error(m(299));
    var t = !1, r = "", l = ya;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = go(e, 1, !1, null, null, t, !1, r, l), e[gn] = n.current, bt(e.nodeType === 8 ? e.parentNode : e), new So(n);
  }, Ie.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = $o(n), e = e === null ? null : e.stateNode, e;
  }, Ie.flushSync = function(e) {
    return rt(e);
  }, Ie.hydrate = function(e, n, t) {
    if (!xl(n)) throw Error(m(200));
    return Pl(null, e, n, !0, t);
  }, Ie.hydrateRoot = function(e, n, t) {
    if (!ko(e)) throw Error(m(405));
    var r = t != null && t.hydratedSources || null, l = !1, u = "", o = ya;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), n = ha(n, null, e, 1, t ?? null, l, !1, u, o), e[gn] = n.current, bt(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
      t,
      l
    );
    return new Cl(n);
  }, Ie.render = function(e, n, t) {
    if (!xl(n)) throw Error(m(200));
    return Pl(null, e, n, !1, t);
  }, Ie.unmountComponentAtNode = function(e) {
    if (!xl(e)) throw Error(m(40));
    return e._reactRootContainer ? (rt(function() {
      Pl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[gn] = null;
      });
    }), !0) : !1;
  }, Ie.unstable_batchedUpdates = fo, Ie.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!xl(t)) throw Error(m(200));
    if (e == null || e._reactInternals === void 0) throw Error(m(38));
    return Pl(e, n, t, !1, r);
  }, Ie.version = "18.3.1-next-f1338f8080-20240426", Ie;
}
function za() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(za);
    } catch (N) {
      console.error(N);
    }
}
za(), Na.exports = Mf();
var Df = Na.exports;
const If = /* @__PURE__ */ zf(Df), Ff = ({ message: N, random: F, onCustomEvent: m }) => {
  const [ae, oe] = Co.useState(0), _e = () => {
    const me = ae + 1;
    oe(me), m && m(me);
  };
  return /* @__PURE__ */ Pn.jsxs(Pn.Fragment, { children: [
    /* @__PURE__ */ Pn.jsx("h2", { children: "Resource Schedule - Web component React" }),
    /* @__PURE__ */ Pn.jsxs("p", { children: [
      "Prop 1: ",
      N
    ] }),
    /* @__PURE__ */ Pn.jsxs("p", { children: [
      "Prop 2: ",
      F
    ] }),
    /* @__PURE__ */ Pn.jsxs("div", { children: [
      /* @__PURE__ */ Pn.jsx("button", { onClick: _e, children: "Increment Counter" }),
      /* @__PURE__ */ Pn.jsxs("p", { children: [
        "Current Count: ",
        ae
      ] })
    ] })
  ] });
};
class jf extends HTMLElement {
  constructor() {
    super();
    wa(this, "emitCustomEvent", (m) => {
      const ae = new CustomEvent("myEvent", {
        detail: { count: m },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(ae);
    });
    this.attachShadow({ mode: "open" }), this.props = {
      message: "Default message",
      random: "Default random value"
    };
  }
  static get observedAttributes() {
    return ["message", "random"];
  }
  attributeChangedCallback(m, ae, oe) {
    ae !== oe && (this.props[m] = oe, this.render());
  }
  connectedCallback() {
    this.render();
  }
  render() {
    If.render(
      /* @__PURE__ */ Pn.jsx(Ff, { ...this.props, onCustomEvent: this.emitCustomEvent }),
      this.shadowRoot
    );
  }
}
customElements.define("my-web-component", jf);
