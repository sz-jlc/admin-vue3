var jlcAdmin = function(exports, vue, elementPlus) {
  "use strict";
  const _sfc_main$7 = vue.defineComponent({
    name: "filter-page-list-layout"
  });
  const filterPageList_vue_vue_type_style_index_0_scoped_59b2b166_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _hoisted_1$4 = { class: "ftp-wrap" };
  const _hoisted_2$4 = {
    class: "filter-wrap",
    ref: "filterWrap"
  };
  const _hoisted_3$3 = { class: "filter-bottom" };
  const _hoisted_4$2 = {
    class: "list-wrap",
    ref: "listWrap"
  };
  const _hoisted_5$1 = { class: "list-bottom" };
  const _hoisted_6$1 = {
    class: "page-wrap",
    ref: "pageWrap"
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
      vue.createElementVNode("div", _hoisted_2$4, [
        vue.renderSlot(_ctx.$slots, "filter", {}, void 0, true)
      ], 512),
      vue.createElementVNode("div", _hoisted_3$3, [
        vue.renderSlot(_ctx.$slots, "filter-bottom", {}, void 0, true)
      ]),
      vue.createElementVNode("div", _hoisted_4$2, [
        vue.renderSlot(_ctx.$slots, "list", {}, void 0, true)
      ], 512),
      vue.createElementVNode("div", _hoisted_5$1, [
        vue.renderSlot(_ctx.$slots, "list-bottom", {}, void 0, true)
      ]),
      vue.createElementVNode("div", _hoisted_6$1, [
        vue.renderSlot(_ctx.$slots, "page", {}, void 0, true)
      ], 512)
    ]);
  }
  const FilterPageList = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render], ["__scopeId", "data-v-59b2b166"]]);
  const withInstall = (main, extra) => {
    main.install = (app) => {
      for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
        app.component(comp.name, comp);
      }
    };
    if (extra) {
      for (const [key, comp] of Object.entries(extra)) {
        main[key] = comp;
      }
    }
    return main;
  };
  const compose = (...fns) => {
    return fns.reduce(
      (a, b) => (...args) => a(b(...args))
    );
  };
  const isEmpty = (value) => {
    return value === "" || value === null || value === void 0;
  };
  const toTree = (list, config) => {
    const {
      id = "id",
      parentId = "parentId",
      children = "children"
    } = config || {};
    return list.filter((item1) => {
      item1[children] = list.filter((item2) => item1[id] === item2[parentId]);
      return isEmpty(item1[parentId]);
    });
  };
  const flatTree = (tree, config) => {
    const { children = "children" } = config || {};
    const result = [];
    function _flat(tree2) {
      for (const item of tree2) {
        result.push(item);
        if (item[children]) {
          _flat(item[children]);
        }
      }
    }
    _flat(tree);
    return result;
  };
  const convertArrayMap = (arr, key) => {
    return arr.reduce((res, cur) => {
      res[cur[key]] = cur;
      return res;
    }, {});
  };
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function listCacheClear$1() {
    this.__data__ = [];
    this.size = 0;
  }
  var _listCacheClear = listCacheClear$1;
  function eq$4(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_1 = eq$4;
  var eq$3 = eq_1;
  function assocIndexOf$4(array, key) {
    var length = array.length;
    while (length--) {
      if (eq$3(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  var _assocIndexOf = assocIndexOf$4;
  var assocIndexOf$3 = _assocIndexOf;
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete$1(key) {
    var data = this.__data__, index2 = assocIndexOf$3(data, key);
    if (index2 < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index2 == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index2, 1);
    }
    --this.size;
    return true;
  }
  var _listCacheDelete = listCacheDelete$1;
  var assocIndexOf$2 = _assocIndexOf;
  function listCacheGet$1(key) {
    var data = this.__data__, index2 = assocIndexOf$2(data, key);
    return index2 < 0 ? void 0 : data[index2][1];
  }
  var _listCacheGet = listCacheGet$1;
  var assocIndexOf$1 = _assocIndexOf;
  function listCacheHas$1(key) {
    return assocIndexOf$1(this.__data__, key) > -1;
  }
  var _listCacheHas = listCacheHas$1;
  var assocIndexOf = _assocIndexOf;
  function listCacheSet$1(key, value) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    if (index2 < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index2][1] = value;
    }
    return this;
  }
  var _listCacheSet = listCacheSet$1;
  var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
  function ListCache$4(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache$4.prototype.clear = listCacheClear;
  ListCache$4.prototype["delete"] = listCacheDelete;
  ListCache$4.prototype.get = listCacheGet;
  ListCache$4.prototype.has = listCacheHas;
  ListCache$4.prototype.set = listCacheSet;
  var _ListCache = ListCache$4;
  var ListCache$3 = _ListCache;
  function stackClear$1() {
    this.__data__ = new ListCache$3();
    this.size = 0;
  }
  var _stackClear = stackClear$1;
  function stackDelete$1(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  var _stackDelete = stackDelete$1;
  function stackGet$1(key) {
    return this.__data__.get(key);
  }
  var _stackGet = stackGet$1;
  function stackHas$1(key) {
    return this.__data__.has(key);
  }
  var _stackHas = stackHas$1;
  var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var _freeGlobal = freeGlobal$1;
  var freeGlobal = _freeGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root$8 = freeGlobal || freeSelf || Function("return this")();
  var _root = root$8;
  var root$7 = _root;
  var Symbol$4 = root$7.Symbol;
  var _Symbol = Symbol$4;
  var Symbol$3 = _Symbol;
  var objectProto$d = Object.prototype;
  var hasOwnProperty$a = objectProto$d.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$d.toString;
  var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : void 0;
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$a.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var _getRawTag = getRawTag$1;
  var objectProto$c = Object.prototype;
  var nativeObjectToString = objectProto$c.toString;
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }
  var _objectToString = objectToString$1;
  var Symbol$2 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
  function baseGetTag$5(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  var _baseGetTag = baseGetTag$5;
  function isObject$8(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_1 = isObject$8;
  var baseGetTag$4 = _baseGetTag, isObject$7 = isObject_1;
  var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
  function isFunction$3(value) {
    if (!isObject$7(value)) {
      return false;
    }
    var tag = baseGetTag$4(value);
    return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_1 = isFunction$3;
  var root$6 = _root;
  var coreJsData$1 = root$6["__core-js_shared__"];
  var _coreJsData = coreJsData$1;
  var coreJsData = _coreJsData;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked$1(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var _isMasked = isMasked$1;
  var funcProto$2 = Function.prototype;
  var funcToString$2 = funcProto$2.toString;
  function toSource$2(func) {
    if (func != null) {
      try {
        return funcToString$2.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  var _toSource = toSource$2;
  var isFunction$2 = isFunction_1, isMasked = _isMasked, isObject$6 = isObject_1, toSource$1 = _toSource;
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto$1 = Function.prototype, objectProto$b = Object.prototype;
  var funcToString$1 = funcProto$1.toString;
  var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString$1.call(hasOwnProperty$9).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative$1(value) {
    if (!isObject$6(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource$1(value));
  }
  var _baseIsNative = baseIsNative$1;
  function getValue$1(object, key) {
    return object == null ? void 0 : object[key];
  }
  var _getValue = getValue$1;
  var baseIsNative = _baseIsNative, getValue = _getValue;
  function getNative$7(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  var _getNative = getNative$7;
  var getNative$6 = _getNative, root$5 = _root;
  var Map$3 = getNative$6(root$5, "Map");
  var _Map = Map$3;
  var getNative$5 = _getNative;
  var nativeCreate$4 = getNative$5(Object, "create");
  var _nativeCreate = nativeCreate$4;
  var nativeCreate$3 = _nativeCreate;
  function hashClear$1() {
    this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
    this.size = 0;
  }
  var _hashClear = hashClear$1;
  function hashDelete$1(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var _hashDelete = hashDelete$1;
  var nativeCreate$2 = _nativeCreate;
  var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
  var objectProto$a = Object.prototype;
  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
  function hashGet$1(key) {
    var data = this.__data__;
    if (nativeCreate$2) {
      var result = data[key];
      return result === HASH_UNDEFINED$1 ? void 0 : result;
    }
    return hasOwnProperty$8.call(data, key) ? data[key] : void 0;
  }
  var _hashGet = hashGet$1;
  var nativeCreate$1 = _nativeCreate;
  var objectProto$9 = Object.prototype;
  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
  function hashHas$1(key) {
    var data = this.__data__;
    return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$7.call(data, key);
  }
  var _hashHas = hashHas$1;
  var nativeCreate = _nativeCreate;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function hashSet$1(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  var _hashSet = hashSet$1;
  var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
  function Hash$1(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  Hash$1.prototype.clear = hashClear;
  Hash$1.prototype["delete"] = hashDelete;
  Hash$1.prototype.get = hashGet;
  Hash$1.prototype.has = hashHas;
  Hash$1.prototype.set = hashSet;
  var _Hash = Hash$1;
  var Hash = _Hash, ListCache$2 = _ListCache, Map$2 = _Map;
  function mapCacheClear$1() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map$2 || ListCache$2)(),
      "string": new Hash()
    };
  }
  var _mapCacheClear = mapCacheClear$1;
  function isKeyable$1(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  var _isKeyable = isKeyable$1;
  var isKeyable = _isKeyable;
  function getMapData$4(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  var _getMapData = getMapData$4;
  var getMapData$3 = _getMapData;
  function mapCacheDelete$1(key) {
    var result = getMapData$3(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  var _mapCacheDelete = mapCacheDelete$1;
  var getMapData$2 = _getMapData;
  function mapCacheGet$1(key) {
    return getMapData$2(this, key).get(key);
  }
  var _mapCacheGet = mapCacheGet$1;
  var getMapData$1 = _getMapData;
  function mapCacheHas$1(key) {
    return getMapData$1(this, key).has(key);
  }
  var _mapCacheHas = mapCacheHas$1;
  var getMapData = _getMapData;
  function mapCacheSet$1(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  var _mapCacheSet = mapCacheSet$1;
  var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
  function MapCache$1(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache$1.prototype.clear = mapCacheClear;
  MapCache$1.prototype["delete"] = mapCacheDelete;
  MapCache$1.prototype.get = mapCacheGet;
  MapCache$1.prototype.has = mapCacheHas;
  MapCache$1.prototype.set = mapCacheSet;
  var _MapCache = MapCache$1;
  var ListCache$1 = _ListCache, Map$1 = _Map, MapCache = _MapCache;
  var LARGE_ARRAY_SIZE = 200;
  function stackSet$1(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache$1) {
      var pairs = data.__data__;
      if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  var _stackSet = stackSet$1;
  var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
  function Stack$2(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  Stack$2.prototype.clear = stackClear;
  Stack$2.prototype["delete"] = stackDelete;
  Stack$2.prototype.get = stackGet;
  Stack$2.prototype.has = stackHas;
  Stack$2.prototype.set = stackSet;
  var _Stack = Stack$2;
  var getNative$4 = _getNative;
  var defineProperty$2 = function() {
    try {
      var func = getNative$4(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {
    }
  }();
  var _defineProperty = defineProperty$2;
  var defineProperty$1 = _defineProperty;
  function baseAssignValue$3(object, key, value) {
    if (key == "__proto__" && defineProperty$1) {
      defineProperty$1(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object[key] = value;
    }
  }
  var _baseAssignValue = baseAssignValue$3;
  var baseAssignValue$2 = _baseAssignValue, eq$2 = eq_1;
  function assignMergeValue$2(object, key, value) {
    if (value !== void 0 && !eq$2(object[key], value) || value === void 0 && !(key in object)) {
      baseAssignValue$2(object, key, value);
    }
  }
  var _assignMergeValue = assignMergeValue$2;
  function createBaseFor$1(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index2];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  var _createBaseFor = createBaseFor$1;
  var createBaseFor = _createBaseFor;
  var baseFor$1 = createBaseFor();
  var _baseFor = baseFor$1;
  var _cloneBuffer = { exports: {} };
  (function(module, exports2) {
    var root2 = _root;
    var freeExports = exports2 && !exports2.nodeType && exports2;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    function cloneBuffer2(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module.exports = cloneBuffer2;
  })(_cloneBuffer, _cloneBuffer.exports);
  var root$4 = _root;
  var Uint8Array$1 = root$4.Uint8Array;
  var _Uint8Array = Uint8Array$1;
  var Uint8Array = _Uint8Array;
  function cloneArrayBuffer$3(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }
  var _cloneArrayBuffer = cloneArrayBuffer$3;
  var cloneArrayBuffer$2 = _cloneArrayBuffer;
  function cloneTypedArray$2(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$2(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  var _cloneTypedArray = cloneTypedArray$2;
  function copyArray$2(source, array) {
    var index2 = -1, length = source.length;
    array || (array = Array(length));
    while (++index2 < length) {
      array[index2] = source[index2];
    }
    return array;
  }
  var _copyArray = copyArray$2;
  var isObject$5 = isObject_1;
  var objectCreate = Object.create;
  var baseCreate$1 = function() {
    function object() {
    }
    return function(proto) {
      if (!isObject$5(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  }();
  var _baseCreate = baseCreate$1;
  function overArg$2(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var _overArg = overArg$2;
  var overArg$1 = _overArg;
  var getPrototype$3 = overArg$1(Object.getPrototypeOf, Object);
  var _getPrototype = getPrototype$3;
  var objectProto$8 = Object.prototype;
  function isPrototype$3(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$8;
    return value === proto;
  }
  var _isPrototype = isPrototype$3;
  var baseCreate = _baseCreate, getPrototype$2 = _getPrototype, isPrototype$2 = _isPrototype;
  function initCloneObject$2(object) {
    return typeof object.constructor == "function" && !isPrototype$2(object) ? baseCreate(getPrototype$2(object)) : {};
  }
  var _initCloneObject = initCloneObject$2;
  function isObjectLike$7(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_1 = isObjectLike$7;
  var baseGetTag$3 = _baseGetTag, isObjectLike$6 = isObjectLike_1;
  var argsTag$2 = "[object Arguments]";
  function baseIsArguments$1(value) {
    return isObjectLike$6(value) && baseGetTag$3(value) == argsTag$2;
  }
  var _baseIsArguments = baseIsArguments$1;
  var baseIsArguments = _baseIsArguments, isObjectLike$5 = isObjectLike_1;
  var objectProto$7 = Object.prototype;
  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
  var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;
  var isArguments$2 = baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike$5(value) && hasOwnProperty$6.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
  };
  var isArguments_1 = isArguments$2;
  var isArray$4 = Array.isArray;
  var isArray_1 = isArray$4;
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  function isLength$2(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
  }
  var isLength_1 = isLength$2;
  var isFunction$1 = isFunction_1, isLength$1 = isLength_1;
  function isArrayLike$4(value) {
    return value != null && isLength$1(value.length) && !isFunction$1(value);
  }
  var isArrayLike_1 = isArrayLike$4;
  var isArrayLike$3 = isArrayLike_1, isObjectLike$4 = isObjectLike_1;
  function isArrayLikeObject$1(value) {
    return isObjectLike$4(value) && isArrayLike$3(value);
  }
  var isArrayLikeObject_1 = isArrayLikeObject$1;
  var isBuffer$3 = { exports: {} };
  function stubFalse() {
    return false;
  }
  var stubFalse_1 = stubFalse;
  (function(module, exports2) {
    var root2 = _root, stubFalse2 = stubFalse_1;
    var freeExports = exports2 && !exports2.nodeType && exports2;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root2.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer2 = nativeIsBuffer || stubFalse2;
    module.exports = isBuffer2;
  })(isBuffer$3, isBuffer$3.exports);
  var baseGetTag$2 = _baseGetTag, getPrototype$1 = _getPrototype, isObjectLike$3 = isObjectLike_1;
  var objectTag$3 = "[object Object]";
  var funcProto = Function.prototype, objectProto$6 = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);
  function isPlainObject$1(value) {
    if (!isObjectLike$3(value) || baseGetTag$2(value) != objectTag$3) {
      return false;
    }
    var proto = getPrototype$1(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$5.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  var isPlainObject_1 = isPlainObject$1;
  var baseGetTag$1 = _baseGetTag, isLength = isLength_1, isObjectLike$2 = isObjectLike_1;
  var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$4 = "[object Map]", numberTag$2 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
  var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
  function baseIsTypedArray$1(value) {
    return isObjectLike$2(value) && isLength(value.length) && !!typedArrayTags[baseGetTag$1(value)];
  }
  var _baseIsTypedArray = baseIsTypedArray$1;
  function baseUnary$3(func) {
    return function(value) {
      return func(value);
    };
  }
  var _baseUnary = baseUnary$3;
  var _nodeUtil = { exports: {} };
  (function(module, exports2) {
    var freeGlobal2 = _freeGlobal;
    var freeExports = exports2 && !exports2.nodeType && exports2;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal2.process;
    var nodeUtil2 = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil2;
  })(_nodeUtil, _nodeUtil.exports);
  var baseIsTypedArray = _baseIsTypedArray, baseUnary$2 = _baseUnary, nodeUtil$2 = _nodeUtil.exports;
  var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
  var isTypedArray$2 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;
  var isTypedArray_1 = isTypedArray$2;
  function safeGet$2(object, key) {
    if (key === "constructor" && typeof object[key] === "function") {
      return;
    }
    if (key == "__proto__") {
      return;
    }
    return object[key];
  }
  var _safeGet = safeGet$2;
  var baseAssignValue$1 = _baseAssignValue, eq$1 = eq_1;
  var objectProto$5 = Object.prototype;
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
  function assignValue$2(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$4.call(object, key) && eq$1(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue$1(object, key, value);
    }
  }
  var _assignValue = assignValue$2;
  var assignValue$1 = _assignValue, baseAssignValue = _baseAssignValue;
  function copyObject$5(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index2 = -1, length = props.length;
    while (++index2 < length) {
      var key = props[index2];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue$1(object, key, newValue);
      }
    }
    return object;
  }
  var _copyObject = copyObject$5;
  function baseTimes$1(n, iteratee) {
    var index2 = -1, result = Array(n);
    while (++index2 < n) {
      result[index2] = iteratee(index2);
    }
    return result;
  }
  var _baseTimes = baseTimes$1;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex$2(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  var _isIndex = isIndex$2;
  var baseTimes = _baseTimes, isArguments$1 = isArguments_1, isArray$3 = isArray_1, isBuffer$2 = isBuffer$3.exports, isIndex$1 = _isIndex, isTypedArray$1 = isTypedArray_1;
  var objectProto$4 = Object.prototype;
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
  function arrayLikeKeys$2(value, inherited) {
    var isArr = isArray$3(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$2(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$1(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  var _arrayLikeKeys = arrayLikeKeys$2;
  function nativeKeysIn$1(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  var _nativeKeysIn = nativeKeysIn$1;
  var isObject$4 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
  var objectProto$3 = Object.prototype;
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
  function baseKeysIn$1(object) {
    if (!isObject$4(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype$1(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty$2.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  var _baseKeysIn = baseKeysIn$1;
  var arrayLikeKeys$1 = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$2 = isArrayLike_1;
  function keysIn$5(object) {
    return isArrayLike$2(object) ? arrayLikeKeys$1(object, true) : baseKeysIn(object);
  }
  var keysIn_1 = keysIn$5;
  var copyObject$4 = _copyObject, keysIn$4 = keysIn_1;
  function toPlainObject$1(value) {
    return copyObject$4(value, keysIn$4(value));
  }
  var toPlainObject_1 = toPlainObject$1;
  var assignMergeValue$1 = _assignMergeValue, cloneBuffer$1 = _cloneBuffer.exports, cloneTypedArray$1 = _cloneTypedArray, copyArray$1 = _copyArray, initCloneObject$1 = _initCloneObject, isArguments = isArguments_1, isArray$2 = isArray_1, isArrayLikeObject = isArrayLikeObject_1, isBuffer$1 = isBuffer$3.exports, isFunction = isFunction_1, isObject$3 = isObject_1, isPlainObject = isPlainObject_1, isTypedArray = isTypedArray_1, safeGet$1 = _safeGet, toPlainObject = toPlainObject_1;
  function baseMergeDeep$1(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet$1(object, key), srcValue = safeGet$1(source, key), stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue$1(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
      var isArr = isArray$2(srcValue), isBuff = !isArr && isBuffer$1(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray$2(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray$1(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer$1(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray$1(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        newValue = objValue;
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject$3(objValue) || isFunction(objValue)) {
          newValue = initCloneObject$1(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue$1(object, key, newValue);
  }
  var _baseMergeDeep = baseMergeDeep$1;
  var Stack$1 = _Stack, assignMergeValue = _assignMergeValue, baseFor = _baseFor, baseMergeDeep = _baseMergeDeep, isObject$2 = isObject_1, keysIn$3 = keysIn_1, safeGet = _safeGet;
  function baseMerge$1(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(source, function(srcValue, key) {
      stack || (stack = new Stack$1());
      if (isObject$2(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge$1, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    }, keysIn$3);
  }
  var _baseMerge = baseMerge$1;
  function identity$2(value) {
    return value;
  }
  var identity_1 = identity$2;
  function apply$1(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  var _apply = apply$1;
  var apply = _apply;
  var nativeMax = Math.max;
  function overRest$1(func, start, transform) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
      while (++index2 < length) {
        array[index2] = args[start + index2];
      }
      index2 = -1;
      var otherArgs = Array(start + 1);
      while (++index2 < start) {
        otherArgs[index2] = args[index2];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }
  var _overRest = overRest$1;
  function constant$1(value) {
    return function() {
      return value;
    };
  }
  var constant_1 = constant$1;
  var constant = constant_1, defineProperty = _defineProperty, identity$1 = identity_1;
  var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
    return defineProperty(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant(string),
      "writable": true
    });
  };
  var _baseSetToString = baseSetToString$1;
  var HOT_COUNT = 800, HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut$1(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  var _shortOut = shortOut$1;
  var baseSetToString = _baseSetToString, shortOut = _shortOut;
  var setToString$1 = shortOut(baseSetToString);
  var _setToString = setToString$1;
  var identity = identity_1, overRest = _overRest, setToString = _setToString;
  function baseRest$1(func, start) {
    return setToString(overRest(func, start, identity), func + "");
  }
  var _baseRest = baseRest$1;
  var eq = eq_1, isArrayLike$1 = isArrayLike_1, isIndex = _isIndex, isObject$1 = isObject_1;
  function isIterateeCall$1(value, index2, object) {
    if (!isObject$1(object)) {
      return false;
    }
    var type = typeof index2;
    if (type == "number" ? isArrayLike$1(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
      return eq(object[index2], value);
    }
    return false;
  }
  var _isIterateeCall = isIterateeCall$1;
  var baseRest = _baseRest, isIterateeCall = _isIterateeCall;
  function createAssigner$1(assigner) {
    return baseRest(function(object, sources) {
      var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? void 0 : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index2 < length) {
        var source = sources[index2];
        if (source) {
          assigner(object, source, index2, customizer);
        }
      }
      return object;
    });
  }
  var _createAssigner = createAssigner$1;
  var baseMerge = _baseMerge, createAssigner = _createAssigner;
  var merge = createAssigner(function(object, source, srcIndex) {
    baseMerge(object, source, srcIndex);
  });
  var merge_1 = merge;
  function arrayEach$1(array, iteratee) {
    var index2 = -1, length = array == null ? 0 : array.length;
    while (++index2 < length) {
      if (iteratee(array[index2], index2, array) === false) {
        break;
      }
    }
    return array;
  }
  var _arrayEach = arrayEach$1;
  var overArg = _overArg;
  var nativeKeys$1 = overArg(Object.keys, Object);
  var _nativeKeys = nativeKeys$1;
  var isPrototype = _isPrototype, nativeKeys = _nativeKeys;
  var objectProto$2 = Object.prototype;
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
  function baseKeys$1(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$1.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  var _baseKeys = baseKeys$1;
  var arrayLikeKeys = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike = isArrayLike_1;
  function keys$3(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  var keys_1 = keys$3;
  var copyObject$3 = _copyObject, keys$2 = keys_1;
  function baseAssign$1(object, source) {
    return object && copyObject$3(source, keys$2(source), object);
  }
  var _baseAssign = baseAssign$1;
  var copyObject$2 = _copyObject, keysIn$2 = keysIn_1;
  function baseAssignIn$1(object, source) {
    return object && copyObject$2(source, keysIn$2(source), object);
  }
  var _baseAssignIn = baseAssignIn$1;
  function arrayFilter$1(array, predicate) {
    var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index2 < length) {
      var value = array[index2];
      if (predicate(value, index2, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  var _arrayFilter = arrayFilter$1;
  function stubArray$2() {
    return [];
  }
  var stubArray_1 = stubArray$2;
  var arrayFilter = _arrayFilter, stubArray$1 = stubArray_1;
  var objectProto$1 = Object.prototype;
  var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
  var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  var _getSymbols = getSymbols$3;
  var copyObject$1 = _copyObject, getSymbols$2 = _getSymbols;
  function copySymbols$1(source, object) {
    return copyObject$1(source, getSymbols$2(source), object);
  }
  var _copySymbols = copySymbols$1;
  function arrayPush$2(array, values) {
    var index2 = -1, length = values.length, offset = array.length;
    while (++index2 < length) {
      array[offset + index2] = values[index2];
    }
    return array;
  }
  var _arrayPush = arrayPush$2;
  var arrayPush$1 = _arrayPush, getPrototype = _getPrototype, getSymbols$1 = _getSymbols, stubArray = stubArray_1;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while (object) {
      arrayPush$1(result, getSymbols$1(object));
      object = getPrototype(object);
    }
    return result;
  };
  var _getSymbolsIn = getSymbolsIn$2;
  var copyObject = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
  function copySymbolsIn$1(source, object) {
    return copyObject(source, getSymbolsIn$1(source), object);
  }
  var _copySymbolsIn = copySymbolsIn$1;
  var arrayPush = _arrayPush, isArray$1 = isArray_1;
  function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  var _baseGetAllKeys = baseGetAllKeys$2;
  var baseGetAllKeys$1 = _baseGetAllKeys, getSymbols = _getSymbols, keys$1 = keys_1;
  function getAllKeys$1(object) {
    return baseGetAllKeys$1(object, keys$1, getSymbols);
  }
  var _getAllKeys = getAllKeys$1;
  var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$1 = keysIn_1;
  function getAllKeysIn$1(object) {
    return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
  }
  var _getAllKeysIn = getAllKeysIn$1;
  var getNative$3 = _getNative, root$3 = _root;
  var DataView$1 = getNative$3(root$3, "DataView");
  var _DataView = DataView$1;
  var getNative$2 = _getNative, root$2 = _root;
  var Promise$2 = getNative$2(root$2, "Promise");
  var _Promise = Promise$2;
  var getNative$1 = _getNative, root$1 = _root;
  var Set$2 = getNative$1(root$1, "Set");
  var _Set = Set$2;
  var getNative = _getNative, root = _root;
  var WeakMap$1 = getNative(root, "WeakMap");
  var _WeakMap = WeakMap$1;
  var DataView = _DataView, Map = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap = _WeakMap, baseGetTag = _baseGetTag, toSource = _toSource;
  var mapTag$3 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
  var dataViewTag$2 = "[object DataView]";
  var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap);
  var getTag$3 = baseGetTag;
  if (DataView && getTag$3(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map && getTag$3(new Map()) != mapTag$3 || Promise$1 && getTag$3(Promise$1.resolve()) != promiseTag || Set$1 && getTag$3(new Set$1()) != setTag$3 || WeakMap && getTag$3(new WeakMap()) != weakMapTag$1) {
    getTag$3 = function(value) {
      var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag$2;
          case mapCtorString:
            return mapTag$3;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag$3;
          case weakMapCtorString:
            return weakMapTag$1;
        }
      }
      return result;
    };
  }
  var _getTag = getTag$3;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function initCloneArray$1(array) {
    var length = array.length, result = new array.constructor(length);
    if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  var _initCloneArray = initCloneArray$1;
  var cloneArrayBuffer$1 = _cloneArrayBuffer;
  function cloneDataView$1(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$1(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  var _cloneDataView = cloneDataView$1;
  var reFlags = /\w*$/;
  function cloneRegExp$1(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  var _cloneRegExp = cloneRegExp$1;
  var Symbol$1 = _Symbol;
  var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function cloneSymbol$1(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  var _cloneSymbol = cloneSymbol$1;
  var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray = _cloneTypedArray;
  var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
  var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
  function initCloneByTag$1(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$1:
        return cloneArrayBuffer(object);
      case boolTag$1:
      case dateTag$1:
        return new Ctor(+object);
      case dataViewTag$1:
        return cloneDataView(object, isDeep);
      case float32Tag$1:
      case float64Tag$1:
      case int8Tag$1:
      case int16Tag$1:
      case int32Tag$1:
      case uint8Tag$1:
      case uint8ClampedTag$1:
      case uint16Tag$1:
      case uint32Tag$1:
        return cloneTypedArray(object, isDeep);
      case mapTag$2:
        return new Ctor();
      case numberTag$1:
      case stringTag$1:
        return new Ctor(object);
      case regexpTag$1:
        return cloneRegExp(object);
      case setTag$2:
        return new Ctor();
      case symbolTag$1:
        return cloneSymbol(object);
    }
  }
  var _initCloneByTag = initCloneByTag$1;
  var getTag$2 = _getTag, isObjectLike$1 = isObjectLike_1;
  var mapTag$1 = "[object Map]";
  function baseIsMap$1(value) {
    return isObjectLike$1(value) && getTag$2(value) == mapTag$1;
  }
  var _baseIsMap = baseIsMap$1;
  var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtil.exports;
  var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
  var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
  var isMap_1 = isMap$1;
  var getTag$1 = _getTag, isObjectLike = isObjectLike_1;
  var setTag$1 = "[object Set]";
  function baseIsSet$1(value) {
    return isObjectLike(value) && getTag$1(value) == setTag$1;
  }
  var _baseIsSet = baseIsSet$1;
  var baseIsSet = _baseIsSet, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
  var nodeIsSet = nodeUtil && nodeUtil.isSet;
  var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
  var isSet_1 = isSet$1;
  var Stack = _Stack, arrayEach = _arrayEach, assignValue = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer = _cloneBuffer.exports, copyArray = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys = _getAllKeys, getAllKeysIn = _getAllKeysIn, getTag = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject = _initCloneObject, isArray = isArray_1, isBuffer = isBuffer$3.exports, isMap = isMap_1, isObject = isObject_1, isSet = isSet_1, keys = keys_1, keysIn = keysIn_1;
  var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  function baseClone$1(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== void 0) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        result = isFlat || isFunc ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (isSet(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function(subValue, key2) {
        result.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
      });
    }
    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
    var props = isArr ? void 0 : keysFunc(value);
    arrayEach(props || value, function(subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue(result, key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
    });
    return result;
  }
  var _baseClone = baseClone$1;
  var baseClone = _baseClone;
  var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
  function cloneDeep(value) {
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
  }
  var cloneDeep_1 = cloneDeep;
  const propsType$5 = {
    filters: {
      type: Array,
      default: () => [],
      required: true
    },
    columnCount: {
      type: Number,
      default: 5
    }
  };
  const emitsType$3 = [
    "query",
    "reset"
  ];
  const _hoisted_1$3 = { class: "el-date-table-cell" };
  const _hoisted_2$3 = { class: "el-date-table-cell__text" };
  const _hoisted_3$2 = { class: "filter__ctrl" };
  const __default__$5 = vue.defineComponent({
    name: "jlc-filter"
  });
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$5,
    props: propsType$5,
    emits: emitsType$3,
    setup(__props, { expose, emit }) {
      const props = __props;
      const formRef = vue.ref();
      const bindForm = vue.reactive({});
      const filterParams = {};
      const defaultPlaceholder = {
        "el-input": "\u8BF7\u8F93\u5165",
        "el-input-number": "\u8BF7\u8F93\u5165",
        "el-select": "\u8BF7\u9009\u62E9",
        "el-date-picker": "\u8BF7\u9009\u62E9",
        "el-time-picker": "\u8BF7\u9009\u62E9",
        "el-cascader": "\u8BF7\u9009\u62E9"
      };
      const handleDefaultValue = (filterItem) => {
        const defaultMap = {
          component: "el-input",
          attrs: {
            clearable: true
          },
          events: {},
          flatTransform: true,
          enterQuery: true
        };
        const result = merge_1({}, defaultMap, filterItem);
        if (result.component === "el-input") {
          result.trim = isEmpty(result.trim) ? true : result.trim;
        }
        result.attrs.placeholder = result.attrs.placeholder || defaultPlaceholder[result.component];
        return result;
      };
      const handleRangeTime = (filterItem) => {
        const { label, key, type, value = [], transform } = filterItem;
        if (type !== "rangeTime")
          return filterItem;
        if (!Array.isArray(key)) {
          throw new Error("[jlc-filter] \u5F53type\u4E3ArangeTime\u65F6\uFF0Ckey\u5FC5\u987B\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\uFF1A[key1, key2]");
        }
        const [startField, endField] = key;
        const res = [
          {
            label,
            transform,
            component: "el-date-picker",
            key: startField,
            value: value[0],
            attrs: {
              placeholder: "\u5F00\u59CB\u65F6\u95F4",
              type: "datetime",
              disabledDate(date) {
                return new Date(date).getTime() > new Date(bindForm[endField]).getTime();
              }
            }
          },
          {
            label: "\u81F3",
            transform,
            component: "el-date-picker",
            key: endField,
            value: value[1],
            attrs: {
              placeholder: "\u7ED3\u675F\u65F6\u95F4",
              type: "datetime",
              disabledDate(date) {
                return new Date(date).getTime() < new Date(bindForm[startField]).getTime();
              }
            }
          }
        ];
        return res;
      };
      const handledFilters = vue.computed(() => {
        let result = [];
        props.filters.forEach((item) => {
          if (typeof item.key !== "string" && !Array.isArray(item.key)) {
            throw new Error("[jlc-filter] \u7F3A\u5C11\u5C5E\u6027\u6216\u7C7B\u578B\u4E0D\u6B63\u786E\uFF1Akey");
          }
          result = result.concat(compose(handleRangeTime, handleDefaultValue)(item));
        });
        return result;
      });
      const filtersMap = {};
      const getTransformValues = () => {
        const result = {};
        Object.keys(filtersMap).forEach((key) => {
          if (!filtersMap[key])
            return;
          const value = cloneDeep_1(bindForm[key]);
          const { transform, flatTransform, trim } = filtersMap[key];
          if (transform) {
            const transformVal = transform(value);
            if (flatTransform && typeof transformVal === "object") {
              Object.assign(result, transformVal);
            } else {
              result[key] = transformVal;
            }
          } else if (trim && typeof value === "string") {
            result[key] = value.trim();
          } else {
            result[key] = value;
          }
        });
        return result;
      };
      const syncFilterParams = () => {
        const transformValues = getTransformValues();
        Object.assign(filterParams, transformValues);
        return transformValues;
      };
      const handleInitValue = () => {
        handledFilters.value.forEach((item) => {
          const { key, value } = item;
          bindForm[key] = cloneDeep_1(value);
        });
      };
      const query = (queryNow = true) => {
        const transformValues = syncFilterParams();
        emit("query", transformValues, queryNow);
        return transformValues;
      };
      const setFilter = (filter, queryNow = true) => {
        Object.assign(bindForm, filter);
        return query(queryNow);
      };
      const reset = (queryNow = true) => {
        handleInitValue();
        const transformValues = syncFilterParams();
        emit("reset", transformValues, queryNow);
      };
      const onEnter = (filterItem) => {
        if (filterItem.enterQuery) {
          query();
        }
      };
      const filterItemStyle = vue.computed(() => {
        const { columnCount } = props;
        const percentage = 100 / columnCount;
        return {
          width: `${percentage}%`,
          minWidth: `${percentage}%`
        };
      });
      vue.watch(
        handledFilters,
        (filters) => {
          const oldKeys = new Set(Object.keys(filtersMap));
          filters.forEach((item) => {
            oldKeys.delete(item.key);
            if (!filtersMap[item.key]) {
              filtersMap[item.key] = item;
              bindForm[item.key] = cloneDeep_1(item.value);
            }
          });
          oldKeys.forEach((key) => {
            delete filterParams[key];
            delete bindForm[key];
          });
          syncFilterParams();
        },
        {
          immediate: true
        }
      );
      const init = () => {
        syncFilterParams();
      };
      init();
      expose({
        query,
        reset,
        setFilter,
        epForm: formRef
      });
      return (_ctx, _cache) => {
        const _component_el_form_item = vue.resolveComponent("el-form-item");
        const _component_el_button = vue.resolveComponent("el-button");
        const _component_el_form = vue.resolveComponent("el-form");
        return vue.openBlock(), vue.createBlock(_component_el_form, vue.mergeProps({
          ref_key: "formRef",
          ref: formRef,
          model: bindForm
        }, _ctx.$attrs, {
          onSubmit: _cache[2] || (_cache[2] = vue.withModifiers(() => {
          }, ["prevent"])),
          class: "filter__form"
        }), {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(handledFilters), (item, index2) => {
              return vue.openBlock(), vue.createBlock(_component_el_form_item, {
                prop: item.key,
                label: item.label,
                key: index2,
                style: vue.normalizeStyle(vue.unref(filterItemStyle)),
                class: "filter__form__item"
              }, {
                default: vue.withCtx(() => [
                  item.slot ? vue.renderSlot(_ctx.$slots, item.slot, {
                    key: 0,
                    bindForm
                  }, void 0, true) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item.component), vue.mergeProps({
                    key: 1,
                    modelValue: bindForm[item.key],
                    "onUpdate:modelValue": ($event) => bindForm[item.key] = $event
                  }, item.attrs || {}, vue.toHandlers(item.events || {}), {
                    class: "w-full",
                    onKeydown: vue.withKeys(($event) => onEnter(item), ["enter"])
                  }), vue.createSlots({
                    default: vue.withCtx(() => [
                      item.children ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(item.children, (child, index22) => {
                        return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(child.component), vue.mergeProps({ key: index22 }, child.attrs || {}, vue.toHandlers(child.events || {})), {
                          default: vue.withCtx(() => [
                            child.render ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(child.render(bindForm)), { key: 0 })) : child.content ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                              vue.createTextVNode(vue.toDisplayString(child.content), 1)
                            ], 64)) : vue.createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1040);
                      }), 128)) : vue.createCommentVNode("", true)
                    ]),
                    _: 2
                  }, [
                    item.component === "el-date-picker" ? {
                      name: "default",
                      fn: vue.withCtx(({ text }) => [
                        vue.createElementVNode("div", _hoisted_1$3, [
                          vue.createElementVNode("span", _hoisted_2$3, vue.toDisplayString(text), 1)
                        ])
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1040, ["modelValue", "onUpdate:modelValue", "onKeydown"]))
                ]),
                _: 2
              }, 1032, ["prop", "label", "style"]);
            }), 128)),
            vue.renderSlot(_ctx.$slots, "filter-ctrl", {
              query: (queryNow = true) => query(queryNow),
              reset: (queryNow = true) => reset(queryNow)
            }, () => [
              vue.createElementVNode("div", _hoisted_3$2, [
                vue.createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[0] || (_cache[0] = ($event) => query(true))
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("\u67E5\u8BE2")
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_el_button, {
                  type: "info",
                  onClick: _cache[1] || (_cache[1] = ($event) => reset(true))
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("\u91CD\u7F6E")
                  ]),
                  _: 1
                })
              ])
            ], true)
          ]),
          _: 3
        }, 16, ["model"]);
      };
    }
  });
  const filter_vue_vue_type_style_index_0_scoped_91c5ff49_lang = "";
  const Filter = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-91c5ff49"]]);
  const JlcFilter = withInstall(Filter);
  const propsType$4 = {
    columns: {
      type: Array,
      default: () => [],
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    update: {
      type: Boolean,
      default: false
    },
    delete: {
      type: Boolean,
      default: false
    }
  };
  const emitsType$2 = [
    "query",
    "update",
    "delete"
  ];
  const _withScopeId = (n) => (vue.pushScopeId("data-v-4a11fadd"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$2 = {
    key: 0,
    class: "table__state"
  };
  const _hoisted_2$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("div", null, "\u65E0\u6570\u636E", -1));
  const _hoisted_3$1 = [
    _hoisted_2$2
  ];
  const _hoisted_4$1 = {
    key: 1,
    class: "table__state"
  };
  const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("div", null, "\u7F51\u7EDC\u9519\u8BEF", -1));
  const _hoisted_6 = [
    _hoisted_5
  ];
  const __default__$4 = vue.defineComponent({
    name: "jlc-table"
  });
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$4,
    props: propsType$4,
    emits: emitsType$2,
    setup(__props, { expose, emit }) {
      const props = __props;
      const tableRef = vue.ref();
      const typeConfigMap = {
        date: {
          width: 120,
          align: "center"
        },
        time: {
          width: 140,
          align: "center"
        },
        phone: {
          width: 120,
          align: "center"
        }
      };
      const handleEditAndDelete = () => {
        const operateColumn = [];
        if (props.update) {
          operateColumn.push(
            (row) => vue.h(
              elementPlus.ElButton,
              {
                link: true,
                type: "primary",
                onClick() {
                  emit("update", row);
                }
              },
              () => "\u7F16\u8F91"
            )
          );
        }
        if (props.delete) {
          operateColumn.push(
            (row) => vue.h(
              elementPlus.ElButton,
              {
                link: true,
                type: "danger",
                onClick() {
                  emit("delete", row);
                }
              },
              () => "\u5220\u9664"
            )
          );
        }
        if (operateColumn.length) {
          const width = operateColumn.length * 40 + 40;
          return {
            width,
            align: "center",
            label: "\u64CD\u4F5C",
            fixed: "right",
            render(h2, row) {
              return h2(
                "div",
                operateColumn.map((render) => render(row))
              );
            }
          };
        }
      };
      const handledColumns = vue.computed(() => {
        const result = props.columns.map((item) => {
          const { type } = item;
          return {
            ...item,
            ...type in typeConfigMap ? typeConfigMap[type] : {},
            align: item.align || "center",
            resizable: isEmpty(item.resizable) ? true : item.resizable,
            minWidth: isEmpty(item.minWidth) ? item.label ? item.label.length * 15 + 24 : 20 : item.minWidth
          };
        });
        const operateColumn = handleEditAndDelete();
        if (operateColumn) {
          result.push(operateColumn);
        }
        return result;
      });
      const exoprtFns = {
        clearSelection: () => {
        },
        getSelectionRows: () => {
        },
        toggleRowSelection: () => {
        },
        toggleAllSelection: () => {
        },
        toggleRowExpansion: () => {
        },
        setCurrentRow: () => {
        },
        clearSort: () => {
        },
        clearFilter: () => {
        },
        doLayout: () => {
        },
        sort: () => {
        },
        scrollTo: () => {
        },
        setScrollTop: () => {
        },
        setScrollLeft: () => {
        }
      };
      vue.onMounted(() => {
        Object.keys(exoprtFns).forEach((key) => {
          exoprtFns[key] = tableRef.value[key];
        });
      });
      expose(exoprtFns);
      return (_ctx, _cache) => {
        const _component_el_table_column = vue.resolveComponent("el-table-column");
        const _component_el_table = vue.resolveComponent("el-table");
        const _directive_loading = vue.resolveDirective("loading");
        return vue.withDirectives((vue.openBlock(), vue.createBlock(_component_el_table, vue.mergeProps({
          ref_key: "tableRef",
          ref: tableRef
        }, _ctx.$attrs, {
          stripe: "",
          border: ""
        }), {
          empty: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", null, [
              !_ctx.error ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, _hoisted_3$1)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$1, _hoisted_6))
            ], 512), [
              [vue.vShow, !_ctx.loading]
            ])
          ]),
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(handledColumns), (item, index2) => {
              return vue.openBlock(), vue.createBlock(_component_el_table_column, vue.mergeProps({ key: index2 }, item), vue.createSlots({
                default: vue.withCtx(({ row, column, $index }) => [
                  item.slot ? vue.renderSlot(_ctx.$slots, item.slot, {
                    key: 0,
                    row,
                    column,
                    index: $index
                  }, void 0, true) : item.render ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item.render(vue.h, row, column, $index)), { key: 1 })) : vue.createCommentVNode("", true)
                ]),
                _: 2
              }, [
                item.header ? {
                  name: "header",
                  fn: vue.withCtx(() => [
                    (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item.header(vue.h))))
                  ]),
                  key: "0"
                } : void 0
              ]), 1040);
            }), 128))
          ]),
          _: 3
        }, 16)), [
          [_directive_loading, _ctx.loading]
        ]);
      };
    }
  });
  const table_vue_vue_type_style_index_0_scoped_4a11fadd_lang = "";
  const Table = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-4a11fadd"]]);
  const DEFAULT_PAGE_SIZE = 15;
  const propsType$3 = {
    total: {
      type: Number,
      required: true
    }
  };
  const emitsType$1 = [
    "query"
  ];
  const __default__$3 = vue.defineComponent({
    name: "jlc-page"
  });
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$3,
    props: propsType$3,
    emits: emitsType$1,
    setup(__props, { expose, emit }) {
      const props = __props;
      const DEFAULT_CURRENT_PAGE = 1;
      const attrs = vue.useAttrs();
      const initPageInfo = {
        pageNum: attrs.defaultCurrentPage || DEFAULT_CURRENT_PAGE,
        pageSize: attrs.defaultPageSize || DEFAULT_PAGE_SIZE
      };
      const pageInfo = vue.reactive({ ...initPageInfo });
      const onCurrentChange = (current) => {
        pageInfo.pageNum = current;
        query();
      };
      const onSizeChange = (size) => {
        pageInfo.pageSize = size;
        query();
      };
      const query = (queryNow = true) => {
        const _pageInfo = {
          pageNum: pageInfo.pageNum,
          pageSize: pageInfo.pageSize
        };
        emit("query", _pageInfo, queryNow);
        return _pageInfo;
      };
      const setPage = (_pageInfo, queryNow = true) => {
        Object.assign(pageInfo, _pageInfo);
        return query(queryNow);
      };
      const reset = (queryNow = true, resetSize = false) => {
        pageInfo.pageNum = initPageInfo.pageNum;
        if (resetSize) {
          pageInfo.pageSize = initPageInfo.pageSize;
        }
        query(queryNow);
      };
      expose({
        query,
        setPage,
        reset
      });
      return (_ctx, _cache) => {
        const _component_el_pagination = vue.resolveComponent("el-pagination");
        return vue.openBlock(), vue.createBlock(_component_el_pagination, vue.mergeProps(_ctx.$attrs, {
          total: props.total,
          "current-page": pageInfo.pageNum,
          "page-size": pageInfo.pageSize,
          "onUpdate:currentPage": onCurrentChange,
          "onUpdate:pageSize": onSizeChange,
          background: "",
          layout: "total, sizes, prev, pager, next, jumper"
        }), null, 16, ["total", "current-page", "page-size"]);
      };
    }
  });
  const configProviderContextKey = Symbol();
  const useFilterPage = ({ props, emit, params }) => {
    const globalConfig = vue.inject(configProviderContextKey, {});
    const filterRef = vue.ref();
    const pageRef = vue.ref();
    const total = vue.ref(0);
    const data = vue.ref([]);
    const loading = vue.ref(false);
    const error = vue.ref(false);
    const filterParams = vue.ref({});
    const pageParams = vue.ref({});
    const queryParams = vue.computed(() => {
      const pageInfo = {
        pageNum: 1,
        pageSize: DEFAULT_PAGE_SIZE,
        ...pageParams.value
      };
      const result = {
        ...filterParams.value,
        ...params.value
      };
      if (props.isPage) {
        Object.assign(result, pageInfo);
      }
      return result;
    });
    const onFilterQuery = (params2, queryNow) => {
      filterParams.value = params2 || {};
      queryNow && queryData();
    };
    const onFilterReset = (params2, queryNow) => {
      filterParams.value = params2 || {};
      if (pageRef.value) {
        pageRef.value.reset(false);
      }
      queryNow && queryData();
    };
    const onPageQuery = (params2, queryNow) => {
      pageParams.value = params2 || {};
      queryNow && queryData();
    };
    const setFilter = (filter, queryNow = true) => {
      if (filterRef.value) {
        return filterRef.value.setFilter(filter, queryNow);
      }
    };
    const resetFilter = (queryNow = true) => {
      if (filterRef.value) {
        filterRef.value.reset(queryNow);
      }
    };
    const setPage = (pageInfo, queryNow = true) => {
      if (pageRef.value) {
        pageRef.value.setPage(pageInfo, queryNow);
      }
    };
    const resetPage = (queryNow = true, resetSize = false) => {
      if (pageRef.value) {
        pageRef.value.reset(queryNow, resetSize);
      }
    };
    const refresh = (needResetPage = false) => {
      if (needResetPage) {
        resetPage(false);
      }
      queryData();
    };
    const queryData = () => {
      if (!props.getData)
        return;
      const retValue = props.getData(queryParams.value);
      if (retValue instanceof Promise) {
        loading.value = true;
        handleQuery(retValue);
      } else {
        handleQueryData(retValue);
      }
      emit("get-data", retValue);
    };
    let queryTaskCount = 0;
    const handleQuery = (promise) => {
      queryTaskCount++;
      promise.then((res) => {
        handleQueryData(res);
      }).catch(() => {
        if (queryTaskCount <= 1) {
          data.value = [];
          error.value = true;
          total.value = 0;
        }
      }).finally(() => {
        if (queryTaskCount <= 1) {
          loading.value = false;
        }
        queryTaskCount--;
      });
    };
    const handleQueryData = (queryData2) => {
      if (globalConfig == null ? void 0 : globalConfig.transformPageData) {
        queryData2 = globalConfig.transformPageData(queryData2);
      }
      const throwErr = () => {
        const errMsg = `
      [jlc-table] getData\u63A5\u6536\u5230\u7684\u6570\u636E\u7ED3\u6784\u6709\u8BEF\uFF0C\u8981\u6C42\u5982\u4E0B\uFF1A

        {
          list: array, // \u5217\u8868\u6570\u636E
          total: number, // \u603B\u6761\u6570
        }
      `;
        throw new Error(errMsg);
      };
      if (typeof queryData2 !== "object" || typeof queryData2.total !== "number" || !Array.isArray(queryData2.list)) {
        throwErr();
      }
      data.value = queryData2.list;
      total.value = queryData2.total || 0;
      error.value = false;
      emit("got-data", queryData2);
    };
    const query = () => {
      if (filterRef.value) {
        filterRef.value.query(false);
      }
      if (pageRef.value) {
        pageRef.value.query(false);
      }
      queryData();
    };
    if (props.initGet) {
      vue.onMounted(() => {
        query();
      });
    }
    return {
      filterRef,
      pageRef,
      total,
      data,
      loading,
      error,
      onFilterQuery,
      onFilterReset,
      onPageQuery,
      query,
      refresh,
      setFilter,
      resetFilter,
      setPage,
      resetPage,
      queryData,
      handleQuery,
      handleQueryData
    };
  };
  const RESERVE_SLOTS = ["filter-bottom", "list-bottom"];
  const getOptionSlots = (target) => {
    const result = target.filter((item) => {
      if (item.slot) {
        if (RESERVE_SLOTS.includes(item.slot)) {
          throw new Error(`${item.slot}\u4E3A\u7EC4\u4EF6\u5185\u90E8\u9884\u7559\u63D2\u69FD\uFF0C\u8BF7\u4FEE\u6539\u63D2\u69FD\u540D\u79F0`);
        }
        return true;
      }
    }).map((item) => item.slot);
    return result;
  };
  const getEpTableCommonFns = (target) => {
    return {
      clearSelection: target.clearSelection,
      getSelectionRows: target.getSelectionRows,
      toggleRowSelection: target.toggleRowSelection,
      toggleAllSelection: target.toggleAllSelection,
      toggleRowExpansion: target.toggleRowExpansion,
      setCurrentRow: target.setCurrentRow
    };
  };
  const epTableCommonEventNames = [
    "select",
    "select-all",
    "selection-change",
    "row-click",
    "row-dblclick",
    "sort-change",
    "current-change"
  ];
  const propsType$2 = {
    filters: propsType$5.filters,
    columns: propsType$4.columns,
    getData: {
      type: Function,
      required: true
    },
    initGet: {
      type: Boolean,
      default: true
    },
    isPage: {
      type: Boolean,
      default: true
    },
    filterProps: {
      type: Object,
      default: () => ({})
    },
    filterEvents: {
      type: Object,
      default: () => ({})
    },
    tableProps: {
      type: Object,
      default: () => ({})
    },
    tableEvents: {
      type: Object,
      default: () => ({})
    },
    pageProps: {
      type: Object,
      default: () => ({})
    },
    pageEvents: {
      type: Object,
      default: () => ({})
    }
  };
  const emitsType = [
    "get-data",
    "got-data",
    ...epTableCommonEventNames
  ];
  const __default__$2 = vue.defineComponent({
    name: "jlc-pro-table"
  });
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$2,
    props: propsType$2,
    emits: emitsType,
    setup(__props, { expose, emit }) {
      const props = __props;
      const createEvents = (eventName) => {
        return (...args) => {
          emit(eventName, ...args);
        };
      };
      const withCommonTableEvents = vue.computed(() => {
        const commonEvents = {};
        epTableCommonEventNames.forEach((eventName) => {
          commonEvents[eventName] = createEvents(eventName);
        });
        const result = Object.assign(commonEvents, props.tableEvents);
        return result;
      });
      const tableParams = vue.ref({});
      const {
        filterRef,
        pageRef,
        total,
        data,
        loading,
        error,
        query,
        queryData,
        refresh,
        setFilter,
        resetFilter,
        setPage,
        resetPage,
        onFilterQuery,
        onFilterReset,
        onPageQuery
      } = useFilterPage({ props, emit, params: tableParams });
      const tableRef = vue.ref();
      const onTableQuery = (params, queryNow) => {
        tableParams.value = params || {};
        queryNow && queryData();
      };
      const filterSlots = vue.computed(() => getOptionSlots(props.filters));
      const tableSlots = vue.computed(() => getOptionSlots(props.columns));
      const exoprtFns = {
        query,
        refresh,
        setFilter,
        resetFilter,
        setPage,
        resetPage,
        filter: filterRef,
        table: tableRef,
        page: pageRef,
        clearSelection: () => {
        },
        getSelectionRows: () => {
        },
        toggleRowSelection: () => {
        },
        toggleAllSelection: () => {
        },
        toggleRowExpansion: () => {
        },
        setCurrentRow: () => {
        }
      };
      vue.onMounted(() => {
        Object.assign(exoprtFns, getEpTableCommonFns(tableRef.value));
      });
      expose(exoprtFns);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.unref(FilterPageList), null, vue.createSlots({
          "filter-bottom": vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "filter-bottom")
          ]),
          list: vue.withCtx(() => [
            vue.createVNode(vue.unref(Table), vue.mergeProps({
              ref_key: "tableRef",
              ref: tableRef
            }, _ctx.tableProps, vue.toHandlers(vue.unref(withCommonTableEvents)), {
              columns: _ctx.columns,
              data: vue.unref(data),
              loading: vue.unref(loading),
              error: vue.unref(error),
              onQuery: onTableQuery
            }), vue.createSlots({ _: 2 }, [
              vue.renderList(vue.unref(tableSlots), (slot) => {
                return {
                  name: slot,
                  fn: vue.withCtx(({ row, column, index: index2 }) => [
                    vue.renderSlot(_ctx.$slots, slot, {
                      row,
                      column,
                      index: index2
                    })
                  ])
                };
              })
            ]), 1040, ["columns", "data", "loading", "error"])
          ]),
          "list-bottom": vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "table-bottom")
          ]),
          _: 2
        }, [
          _ctx.filters.length ? {
            name: "filter",
            fn: vue.withCtx(() => [
              vue.createVNode(vue.unref(JlcFilter), vue.mergeProps({
                ref_key: "filterRef",
                ref: filterRef
              }, _ctx.filterProps, vue.toHandlers(_ctx.filterEvents), {
                filters: _ctx.filters,
                onQuery: vue.unref(onFilterQuery),
                onReset: vue.unref(onFilterReset)
              }), vue.createSlots({
                "filter-ctrl": vue.withCtx((slotScope) => [
                  vue.renderSlot(_ctx.$slots, "filter-ctrl", vue.normalizeProps(vue.guardReactiveProps(slotScope)))
                ]),
                _: 2
              }, [
                vue.renderList(vue.unref(filterSlots), (slot) => {
                  return {
                    name: slot,
                    fn: vue.withCtx(({ bindForm }) => [
                      vue.renderSlot(_ctx.$slots, slot, { bindForm })
                    ])
                  };
                })
              ]), 1040, ["filters", "onQuery", "onReset"])
            ]),
            key: "0"
          } : void 0,
          _ctx.isPage ? {
            name: "page",
            fn: vue.withCtx(() => [
              vue.createVNode(vue.unref(_sfc_main$4), vue.mergeProps({
                ref_key: "pageRef",
                ref: pageRef
              }, _ctx.pageProps, vue.toHandlers(_ctx.pageEvents), {
                total: vue.unref(total),
                onQuery: vue.unref(onPageQuery)
              }), null, 16, ["total", "onQuery"])
            ]),
            key: "1"
          } : void 0
        ]), 1024);
      };
    }
  });
  const SOURCE_TYPE = 1;
  const TARGET_TYPE = 2;
  const COMMON_TYPE = 3;
  const _hoisted_1$1 = { class: "transfer-tree" };
  const _hoisted_2$1 = { class: "transfer-tree__check-all" };
  const _hoisted_3 = { class: "transfer-tree__search" };
  const _hoisted_4 = { class: "transfer-tree__main" };
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "tree",
    props: {
      props: { default: () => ({}) },
      type: null,
      list: null,
      title: null
    },
    setup(__props, { expose }) {
      const compProps = __props;
      vue.watch(
        () => compProps.list,
        async () => {
          await vue.nextTick();
          updateCheckAll();
        },
        {
          deep: true
        }
      );
      const treeRef = vue.ref();
      const labelKey = vue.computed(() => compProps.props.label || "label");
      const treeData = vue.computed(() => {
        const { type, list, props } = compProps;
        const { id, parentId, children } = props;
        return toTree(
          cloneDeep_1(
            list.filter((item) => {
              const { __type__ } = item;
              return __type__ === type || __type__ == COMMON_TYPE;
            })
          ),
          {
            id,
            parentId,
            children
          }
        );
      });
      const listIdMap = vue.computed(
        () => convertArrayMap(
          compProps.list.filter((item) => {
            const { __type__ } = item;
            return __type__ === compProps.type || __type__ == COMMON_TYPE;
          }),
          compProps.props.id || "id"
        )
      );
      const ids = vue.computed(() => Object.keys(listIdMap.value));
      const getNodes = () => {
        const { type, list } = compProps;
        return list.filter((item) => item.__type__ === type || item.__type__ === COMMON_TYPE);
      };
      const filterKey = vue.ref("");
      vue.watch(filterKey, (value) => {
        treeRef.value.filter(value);
      });
      const findParents = (data) => {
        const result = [data];
        for (let i = 0; i < result.length; i++) {
          const item = result[i];
          const parent = listIdMap.value[item.parentId];
          if (parent) {
            result.push(parent);
          }
        }
        result.shift();
        return result;
      };
      const filterNode = (value, data) => {
        if (!value)
          return true;
        const transformValue = value.toUpperCase();
        if (data[labelKey.value].toUpperCase().includes(transformValue)) {
          return true;
        }
        const parents = findParents(data);
        if (parents.some((item) => item[labelKey.value].toUpperCase().includes(transformValue))) {
          return true;
        }
        return false;
      };
      const checkedAll = vue.ref(false);
      const indeterminate = vue.ref(false);
      const onChangeCheckAll = (value) => {
        treeRef.value.setCheckedKeys(value ? ids.value : []);
      };
      const updateCheckAll = () => {
        const checkedCount = treeRef.value.getCheckedNodes().length;
        if (checkedCount === 0) {
          indeterminate.value = false;
          checkedAll.value = false;
          return;
        }
        if (checkedCount === 0) {
          indeterminate.value = false;
          checkedAll.value = false;
        } else if (checkedCount === ids.value.length) {
          indeterminate.value = false;
          checkedAll.value = true;
        } else {
          checkedAll.value = false;
          indeterminate.value = true;
        }
      };
      expose({
        tree: treeRef,
        getNodes
      });
      return (_ctx, _cache) => {
        const _component_el_checkbox = vue.resolveComponent("el-checkbox");
        const _component_el_input = vue.resolveComponent("el-input");
        const _component_el_tree = vue.resolveComponent("el-tree");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          vue.createElementVNode("div", _hoisted_2$1, [
            vue.createVNode(_component_el_checkbox, {
              modelValue: checkedAll.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checkedAll.value = $event),
              indeterminate: indeterminate.value,
              label: __props.title,
              onChange: onChangeCheckAll
            }, null, 8, ["modelValue", "indeterminate", "label"])
          ]),
          vue.createElementVNode("div", _hoisted_3, [
            vue.createVNode(_component_el_input, {
              placeholder: "\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22",
              modelValue: filterKey.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filterKey.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          vue.createElementVNode("div", _hoisted_4, [
            vue.createVNode(_component_el_tree, vue.mergeProps(_ctx.$attrs, {
              data: vue.unref(treeData),
              "default-expand-all": "",
              "expand-on-click-node": true,
              "node-key": __props.props.id,
              "show-checkbox": "",
              "check-on-click-node": true,
              "filter-node-method": filterNode,
              ref_key: "treeRef",
              ref: treeRef,
              props: __props.props,
              onCheck: updateCheckAll
            }), null, 16, ["data", "node-key", "props"])
          ])
        ]);
      };
    }
  });
  const tree_vue_vue_type_style_index_0_scoped_3a26171a_lang = "";
  const Tree = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3a26171a"]]);
  const propsType$1 = {
    data: {
      type: Array,
      default: []
    },
    targetIds: {
      type: Array,
      default: []
    },
    props: {
      type: Object,
      default: () => ({})
    },
    sourceTitle: {
      type: String,
      default: "\u6E90"
    },
    targetTitle: {
      type: String,
      default: "\u76EE\u6807"
    }
  };
  const _hoisted_1 = { class: "tree-transfer" };
  const _hoisted_2 = { class: "tree-transfer__ctrl" };
  const __default__$1 = vue.defineComponent({
    name: "jlc-tree-transfer"
  });
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$1,
    props: propsType$1,
    setup(__props, { expose }) {
      const compProps = __props;
      const props = vue.computed(() => {
        const { children = "children", parentId = "parentId", id = "id" } = compProps.props;
        return { ...compProps.props, children, parentId, id };
      });
      const hanledData = vue.computed(() => {
        const { children, parentId, id } = props.value;
        const data = cloneDeep_1(compProps.data);
        function eachTree(tree, parent) {
          for (const item of tree) {
            if (parent) {
              if (item[parentId] === void 0) {
                item[parentId] = parent[id];
              }
            }
            if (item[children]) {
              eachTree(item[children], item);
            }
          }
        }
        eachTree(data);
        return data;
      });
      const sourceTreeRef = vue.ref();
      const targetTreeRef = vue.ref();
      const getFlatList = () => {
        return flatTree(hanledData.value, { children: props.value.children }).map((item) => ({
          ...item,
          __type__: SOURCE_TYPE
        }));
      };
      const flatList = vue.ref(getFlatList());
      vue.watch(
        () => compProps.targetIds,
        () => {
          setTargetTree();
        }
      );
      vue.watch(
        () => compProps.data,
        () => {
          flatList.value = getFlatList();
        }
      );
      vue.onMounted(() => {
        setTargetTree();
      });
      const setTargetTree = () => {
        const { parentId } = props.value;
        const checkedIds = compProps.targetIds.filter(
          (id) => !flatList.value.some((item) => item[parentId] === id)
        );
        sourceTreeRef.value.tree.setCheckedKeys(checkedIds);
        vue.nextTick(() => {
          toTarget();
        });
      };
      const toggle = (tree, type) => {
        const id = props.value.id;
        const checkedNodes = new Set(tree.getCheckedNodes().map((item) => item[id]));
        const halfCheckedNodes = new Set(tree.getHalfCheckedNodes().map((item) => item[id]));
        for (const item of flatList.value) {
          if (checkedNodes.has(item[id])) {
            item.__type__ = type === SOURCE_TYPE ? TARGET_TYPE : SOURCE_TYPE;
          } else if (halfCheckedNodes.has(item[id])) {
            item.__type__ = COMMON_TYPE;
          }
        }
      };
      const toTarget = () => {
        toggle(sourceTreeRef.value.tree, SOURCE_TYPE);
      };
      const toSource2 = () => {
        toggle(targetTreeRef.value.tree, TARGET_TYPE);
      };
      const getSourceNodes = () => sourceTreeRef.value.getNodes();
      const getTargetNodes = () => targetTreeRef.value.getNodes();
      const getCommonNodes = () => flatList.value.filter((item) => item.__type__ === COMMON_TYPE);
      expose({
        getSourceNodes,
        getTargetNodes,
        getCommonNodes
      });
      return (_ctx, _cache) => {
        const _component_el_button = vue.resolveComponent("el-button");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createVNode(Tree, {
            list: flatList.value,
            props: vue.unref(props),
            type: vue.unref(SOURCE_TYPE),
            title: _ctx.sourceTitle,
            ref_key: "sourceTreeRef",
            ref: sourceTreeRef
          }, null, 8, ["list", "props", "type", "title"]),
          vue.renderSlot(_ctx.$slots, "middle", {
            toTarget,
            toSource: toSource2
          }, () => [
            vue.createElementVNode("div", _hoisted_2, [
              vue.createVNode(_component_el_button, { onClick: toTarget }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("\u6DFB\u52A0 >")
                ]),
                _: 1
              }),
              vue.createVNode(_component_el_button, {
                class: "tree-transfer__remove",
                onClick: toSource2
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("< \u79FB\u9664")
                ]),
                _: 1
              })
            ])
          ], true),
          vue.createVNode(Tree, {
            list: flatList.value,
            props: vue.unref(props),
            type: vue.unref(TARGET_TYPE),
            title: _ctx.targetTitle,
            ref_key: "targetTreeRef",
            ref: targetTreeRef
          }, null, 8, ["list", "props", "type", "title"])
        ]);
      };
    }
  });
  const treeTransfer_vue_vue_type_style_index_0_scoped_6804a2c7_lang = "";
  const TreeTransfer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6804a2c7"]]);
  const propsType = {
    transformPageData: Function
  };
  const __default__ = vue.defineComponent({
    name: "jlc-config-provider"
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    ...__default__,
    props: propsType,
    setup(__props) {
      const props = __props;
      vue.provide(configProviderContextKey, props);
      return (_ctx, _cache) => {
        return vue.renderSlot(_ctx.$slots, "default");
      };
    }
  });
  const components = [
    FilterPageList,
    JlcFilter,
    Table,
    _sfc_main$4,
    _sfc_main$3,
    TreeTransfer,
    _sfc_main
  ];
  const index = {
    install(app) {
      components.forEach((component) => {
        app.component(component.name, component);
      });
    }
  };
  exports.JlcConfigProvider = _sfc_main;
  exports.JlcFilter = JlcFilter;
  exports.JlcLayoutFilterPageList = FilterPageList;
  exports.JlcPage = _sfc_main$4;
  exports.JlcProTable = _sfc_main$3;
  exports.JlcTable = Table;
  exports.JlcTreeTransfer = TreeTransfer;
  exports.default = index;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, Vue, ElementPlus);
