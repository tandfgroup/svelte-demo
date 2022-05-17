import { registerTemplate, sanitizeAttribute, registerDecorators, registerComponent, LightningElement, createElement } from '/lwc.js';
// import '/lwc-ss.js';;

function stylesheet$3(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  return "main" + shadowSelector + " {margin: 30px;display: flex;flex-direction: column;align-items: center;}h1" + shadowSelector + " {color: #1798c1;}";
  /*LWC compiler v2.13.3*/
}
var _implicitStylesheets$3 = [stylesheet$3];

var _implicitScopedStylesheets$3 = undefined;

function stylesheet$2(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  return "main" + shadowSelector + " {margin: 30px;display: flex;flex-direction: column;align-items: center;}h1" + shadowSelector + " {color: #1798c1;}";
  /*LWC compiler v2.13.3*/
}
var _implicitStylesheets$2 = [stylesheet$2];

var _implicitScopedStylesheets$2 = undefined;

function stylesheet$1(token, useActualHostSelector, useNativeDirPseudoclass) {
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ((useActualHostSelector ? ":host {display: block;}" : hostSelector + " {display: block;}"));
  /*LWC compiler v2.13.3*/
}
var _implicitStylesheets$1 = [stylesheet$1];

var _implicitScopedStylesheets$1 = undefined;

function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  return "_:-ms-lang(x)" + shadowSelector + ", svg" + shadowSelector + " {pointer-events: none;}";
  /*LWC compiler v2.13.3*/
}
var _implicitStylesheets = [stylesheet];

var _implicitScopedStylesheets = undefined;

function tmpl$9($api, $cmp, $slotset, $ctx) {
  const {fid: api_scoped_frag_id, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true"
    },
    key: 0,
    svg: true
  }, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", api_scoped_frag_id($cmp.href))
    },
    key: 1,
    svg: true
  })])];
  /*LWC compiler v2.13.3*/
}
var _tmpl$a = registerTemplate(tmpl$9);
tmpl$9.stylesheets = [];


if (_implicitStylesheets) {
  tmpl$9.stylesheets.push.apply(tmpl$9.stylesheets, _implicitStylesheets);
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl$9.stylesheetToken = "lightning-primitiveIcon_primitiveIcon";
}

const classNamesHash = classes => {
  return typeof classes === 'string' ? classes.trim().split(/\s+/).reduce((acc, cn) => {
    acc[cn] = true;
    return acc;
  }, {}) : classes;
};

const proto = {
  add(className) {
    Object.assign(this, classNamesHash(className));
    return this;
  },

  invert() {
    Object.keys(this).forEach(key => {
      this[key] = !this[key];
    });
    return this;
  },

  toString() {
    return Object.keys(this).filter(key => this[key]).join(' ');
  }

};
function classSet(config) {
  return Object.assign(Object.create(proto), classNamesHash(config));
}

/**
 * Takes label strings with placeholder params (`{0}`) and updates the label with given `args`
 * @param {string} str - any label string requiring injections of other strings/params (e.g., 'foo {0}')
 * @param  {string|array} arguments - string(s) to be injected into the `string` param
 * @returns {string} fully replaced string, e.g., '{0} is a {1}' -> 'Hal Jordan is a Green Lantern'
 */
function formatLabel(str) {
  const args = Array.prototype.slice.call(arguments, 1);
  let replacements = args;

  if (Array.isArray(args[0])) {
    [replacements] = args;
  }

  return str.replace(/{(\d+)}/g, (match, i) => {
    return replacements[i];
  });
}

function assert(condition, message) {
  {
    if (!condition) {
      throw new Error(message);
    }
  }
}

/* All Valid Aria Attributes, in camel case
 * - it's better to start from camel-case
 *   because `aria-${_.kebabCase('describedBy')}` => 'aria-described-by' (NOT aria property)
 * - correct aria property: 'aria-describedby'
 *  https://www.w3.org/TR/wai-aria/
 */
const ARIA_PROP_LIST = ['activeDescendant', 'atomic', 'autoComplete', 'busy', 'checked', 'colCount', 'colIndex', 'colSpan', 'controls', 'current', 'describedAt', 'describedBy', 'description', 'details', 'disabled', 'dropEffect', 'errorMessage', 'expanded', 'flowTo', 'grabbed', 'hasPopup', 'hidden', 'invalid', 'keyShortcuts', 'label', 'labelledBy', 'level', 'live', 'modal', 'multiLine', 'multiSelectable', 'orientation', 'owns', 'placeholder', 'posInSet', 'pressed', 'readOnly', 'relevant', 'required', 'roleDescription', 'rowCount', 'rowIndex', 'rowSpan', 'selected', 'setSize', 'sort', 'valueMax', 'valueMin', 'valueNow', 'valueText'];
/**
 * Generate an ARIA lookup object when passing in a list of ARIA values
 * @param {Array} list A list of ARIA properties (array of strings)
 * @param {String} type A type which defaults to output ARIA properties as modified kebab-case, or camel-case
 * @example 'valueMax' string becomes: { VALUEMAX: 'aria-valuemax' }
 * @returns {Object} A lookup object for ARIA properties in (modified) kebab-case or camel-case
 */

const getAriaLookup = (list, type = 'default') => {
  if (!list || list.length === 0) {
    throw new Error('List of aria properties is required');
  }

  const lookupObj = {};

  if (type === 'default') {
    list.forEach(name => {
      const nameUpperCase = name.toUpperCase();

      if (!lookupObj[nameUpperCase]) {
        lookupObj[nameUpperCase] = `aria-${name.toLowerCase()}`;
      }
    });
    return lookupObj;
  }

  list.forEach(name => {
    const ariaPropertyLowerCase = `aria-${name.toLowerCase()}`;
    const ariaPropertyCamelCase = `aria${name.charAt(0).toUpperCase()}${name.slice(1)}`;

    if (!lookupObj[ariaPropertyLowerCase]) {
      lookupObj[ariaPropertyLowerCase] = ariaPropertyCamelCase;
    }
  });
  return lookupObj;
};
/**
 * ARIA lookup, 'modified' kebab-case
 * Given an array of aria property strings in camel-case, produce a lookup object
 * NOTE: 'ariaDescribedBy' (camel-case ARIA property) in TRUE kebab-case would be:
 * - 'aria-described-by' (not valid ARIA)
 * - 'aria-describedby' (valid ARIA, or modified kebab-case)
 * Example: 'describedBy' -> { DESCRIBEDBY: 'aria-describedby' }
 */


getAriaLookup(ARIA_PROP_LIST);
/**
 * ARIA lookup, aria-property (key): 'ariaCamelCase' (value)
 * Example: 'valueMax' -> { 'aria-valuemax': 'ariaValueMax' }
 * Useful for converting from normal aria properties to aria camel cased values
 */

getAriaLookup(ARIA_PROP_LIST, 'cc');

/**
An emitter implementation based on the Node.js EventEmitter API:
https://nodejs.org/dist/latest-v6.x/docs/api/events.html#events_class_eventemitter
**/
class EventEmitter {
  constructor() {
    this.registry = {};
  }
  /**
  Registers a listener on the emitter
  @method EventEmitter#on
  @param {String} name - The name of the event
  @param {Function} listener - The callback function
  @return {EventEmitter} - Returns a reference to the `EventEmitter` so that calls can be chained
  **/


  on(name, listener) {
    this.registry[name] = this.registry[name] || [];
    this.registry[name].push(listener);
    return this;
  }
  /**
  Registers a listener on the emitter that only executes once
  @method EventEmitter#once
  @param {String} name - The name of the event
  @param {Function} listener - The callback function
  @return {EventEmitter} - Returns a reference to the `EventEmitter` so that calls can be chained
  **/


  once(name, listener) {
    const doOnce = function () {
      listener.apply(null, arguments);
      this.removeListener(name, doOnce);
    }.bind(this);

    this.on(name, doOnce);
    return this;
  }
  /**
  Synchronously calls each listener registered with the specified event
  @method EventEmitter#emit
  @param {String} name - The name of the event
  @return {Boolean} - Returns `true` if the event had listeners, `false` otherwise
  **/


  emit(name) {
    const args = Array.prototype.slice.call(arguments, 1);
    const listeners = this.registry[name];
    let count = 0;

    if (listeners) {
      listeners.forEach(listener => {
        count += 1;
        listener.apply(null, args);
      });
    }

    return count > 0;
  }
  /**
  Removes the specified `listener` from the listener array for the event named `name`
  @method EventEmitter#removeListener
  @param {String} name - The name of the event
  @param {Function} listener - The callback function
  @return {EventEmitter} - Returns a reference to the `EventEmitter` so that calls can be chained
  **/


  removeListener(name, listener) {
    const listeners = this.registry[name];

    if (listeners) {
      for (let i = 0, len = listeners.length; i < len; i += 1) {
        if (listeners[i] === listener) {
          listeners.splice(i, 1);
          return this;
        }
      }
    }

    return this;
  }

}

/**
 * Utility function to generate an unique guid.
 * used on state objects to provide a performance aid when iterating
 * through the items and marking them for render
 * @returns {String} an unique string ID
 */
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function classListMutation(classList, config) {
  Object.keys(config).forEach(key => {
    if (typeof key === 'string' && key.length) {
      if (config[key]) {
        classList.add(key);
      } else {
        classList.remove(key);
      }
    }
  });
}

const isIE11 = isIE11Test(navigator);
isChromeTest(navigator);
isSafariTest(navigator); // The following functions are for tests only

function isIE11Test(navigator) {
  // https://stackoverflow.com/questions/17447373/how-can-i-target-only-internet-explorer-11-with-javascript
  return /Trident.*rv[ :]*11\./.test(navigator.userAgent);
}
function isChromeTest(navigator) {
  // https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome
  return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
}
function isSafariTest(navigator) {
  // via https://stackoverflow.com/questions/49872111/detect-safari-and-stop-script
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

/**
A string normalization utility for attributes.
@param {String} value - The value to normalize.
@param {Object} config - The optional configuration object.
@param {String} [config.fallbackValue] - The optional fallback value to use if the given value is not provided or invalid. Defaults to an empty string.
@param {Array} [config.validValues] - An optional array of valid values. Assumes all input is valid if not provided.
@return {String} - The normalized value.
**/
function normalizeString(value, config = {}) {
  const {
    fallbackValue = '',
    validValues,
    toLowerCase = true
  } = config;
  let normalized = typeof value === 'string' && value.trim() || '';
  normalized = toLowerCase ? normalized.toLowerCase() : normalized;

  if (validValues && validValues.indexOf(normalized) === -1) {
    normalized = fallbackValue;
  }

  return normalized;
}
/**
A boolean normalization utility for attributes.
@param {Any} value - The value to normalize.
@return {Boolean} - The normalized value.
**/

function normalizeBoolean(value) {
  return typeof value === 'string' || !!value;
}
/**
A aria attribute normalization utility.
@param {Any} value - A single aria value or an array of aria values
@return {String} - A space separated list of aria values
**/

function normalizeAriaAttribute(value) {
  let arias = Array.isArray(value) ? value : [value];
  arias = arias.map(ariaValue => {
    if (typeof ariaValue === 'string') {
      return ariaValue.replace(/\s+/g, ' ').trim();
    }

    return '';
  }).filter(ariaValue => !!ariaValue);
  return arias.length > 0 ? arias.join(' ') : null;
}

const keyCodes = {
  tab: 9,
  backspace: 8,
  enter: 13,
  escape: 27,
  space: 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  delete: 46,
  shift: 16
}; // Acceptable values are defined here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values

/**
 * Set an attribute on an element, if it's a normal element
 * it will use setAttribute, if it's an LWC component
 * it will use the public property
 *
 * @param {HTMLElement} element The element to act on
 * @param {String} attribute the attribute to set
 * @param {Any} value the value to set
 */
function smartSetAttribute(element, attribute, value) {
  if (element.tagName.match(/^LIGHTNING/i)) {
    attribute = attribute.replace(/-\w/g, m => m[1].toUpperCase());
    element[attribute] = value ? value : null;
  } else if (value) {
    element.setAttribute(attribute, value);
  } else {
    element.removeAttribute(attribute);
  }
}

/**
 * @param {HTMLElement} element Element to act on
 * @param {Object} values values and attributes to set, if the value is
 *                        falsy it the attribute will be removed
 */

function synchronizeAttrs(element, values) {
  if (!element) {
    return;
  }

  const attributes = Object.keys(values);
  attributes.forEach(attribute => {
    smartSetAttribute(element, attribute, values[attribute]);
  });
}
/**
 * Get the actual DOM id for an element
 * @param {HTMLElement|String} el The element to get the id for (string will just be returned)
 *
 * @returns {String} The DOM id or null
 */

function getRealDOMId(el) {
  if (el && typeof el === 'string') {
    return el;
  } else if (el) {
    return el.getAttribute('id');
  }

  return null;
}
const DEFAULT_MODAL_ZINDEX = 9000;
const DEFAULT_ZINDEX_OFFSET = 100;
const DEFAULT_ZINDEX_BASELINE = DEFAULT_MODAL_ZINDEX + DEFAULT_ZINDEX_OFFSET;
/**
 * Returns the zIndex baseline from slds zIndex variable --lwc-zIndexModal.
 * @returns {Number} zIndex baseline
 */

function getZIndexBaseline() {
  // When SLDS styles are present, typically on Core
  // this currently resolves to: '9000' (string)
  const modalZindexValueLwc = (window.getComputedStyle(document.documentElement) || document.documentElement.style).getPropertyValue('--lwc-zIndexModal');
  const baseZindexModalLwc = parseInt(modalZindexValueLwc, 10);
  return isNaN(baseZindexModalLwc) ? DEFAULT_ZINDEX_BASELINE : baseZindexModalLwc + DEFAULT_ZINDEX_OFFSET;
}
const BUTTON_GROUP_ORDER = {
  FIRST: 'first',
  MIDDLE: 'middle',
  LAST: 'last',
  ONLY: 'only'
};
/**
 * returns the SLDS class for the given group order
 * @param groupOrder
 * @returns {string}
 */

function buttonGroupOrderClass(groupOrder) {
  return {
    [BUTTON_GROUP_ORDER.FIRST]: 'slds-button_first',
    [BUTTON_GROUP_ORDER.MIDDLE]: 'slds-button_middle',
    [BUTTON_GROUP_ORDER.LAST]: 'slds-button_last',
    [BUTTON_GROUP_ORDER.ONLY]: 'single-button'
  }[groupOrder];
}

/*
 * Regex to test a string for an ISO8601 Date. The following formats are matched.
 * Note that if a time element is present (e.g. 'T'), the string should have a time zone designator (Z or +hh:mm or -hh:mm).
 *
 *  YYYY
 *  YYYY-MM
 *  YYYY-MM-DD
 *  YYYY-MM-DDThh:mmTZD
 *  YYYY-MM-DDThh:mm:ssTZD
 *  YYYY-MM-DDThh:mm:ss.STZD
 *
 *
 * @see: https://www.w3.org/TR/NOTE-datetime
 */
const ISO8601_STRICT_PATTERN = /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z){1})?)?)?$/i;
/* Regex to test a string for an ISO8601 partial time or full time:
 * hh:mm
 * hh:mm:ss
 * hh:mm:ss.S
 * full time = partial time + TZD
 */

const ISO8601_TIME_PATTERN = /^\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i;
const STANDARD_TIME_FORMAT = 'HH:mm:ss.SSS';
const STANDARD_DATE_FORMAT = 'YYYY-MM-DD';
const TIME_SEPARATOR = 'T';
const TIMEZONE_INDICATOR = /(Z|([+-])(\d{2}):(\d{2}))$/;
function isValidISODateTimeString(dateTimeString) {
  return isValidISO8601String(dateTimeString) && isValidDate(dateTimeString);
}
function isValidISOTimeString(timeString) {
  if (!isValidISO8601TimeString(timeString)) {
    return false;
  }

  const timeOnly = removeTimeZoneSuffix(timeString);
  return isValidDate(`2018-09-09T${timeOnly}Z`);
}
function removeTimeZoneSuffix(dateTimeString) {
  if (typeof dateTimeString === 'string') {
    return dateTimeString.split(TIMEZONE_INDICATOR)[0];
  }

  return dateTimeString;
}

function isValidISO8601String(dateTimeString) {
  if (typeof dateTimeString !== 'string') {
    return false;
  }

  return ISO8601_STRICT_PATTERN.test(dateTimeString);
}

function isValidISO8601TimeString(timeString) {
  if (typeof timeString !== 'string') {
    return false;
  }

  return ISO8601_TIME_PATTERN.test(timeString);
}

function isValidDate(value) {
  // Date.parse returns NaN if the argument doesn't represent a valid date
  const timeStamp = Date.parse(value);
  return isFinite(timeStamp);
}

var _tmpl$9 = void 0;

var labelSecondsLater = 'in a few seconds';

var labelSecondsAgo = 'a few seconds ago';

const fallbackFutureLabel = 'in {0} {1}'; // e.g. in 1 minute

const fallbackPastLabel = '{0} {1} ago'; // e.g. 1 minute ago

const fallbackPluralSuffix = 's'; // plural suffix for the units, e.g. in 10 minutes
// The threshold values come from moment.js

const units = {
  SECONDS: {
    name: 'second',
    threshold: 45
  },
  // a few seconds to minute
  MINUTES: {
    name: 'minute',
    threshold: 45
  },
  // minutes to hour
  HOURS: {
    name: 'hour',
    threshold: 22
  },
  // hours to day
  DAYS: {
    name: 'day',
    threshold: 26
  },
  // days to month
  MONTHS: {
    name: 'month',
    threshold: 11
  },
  // months to year
  YEARS: {
    name: 'year'
  }
};
const SECOND_TO_MILLISECONDS = 1000;
const MINUTE_TO_MILLISECONDS = 6e4; // 60 * SECOND_TO_MILLISECONDS;

const HOUR_TO_MILLISECONDS = 36e5; // 60 * MINUTE_TO_MILLISECONDS

const DAY_TO_MILLISECONDS = 864e5; // 24 * HOUR_TO_MILLISECONDS;

class Duration {
  constructor(milliseconds) {
    this.milliseconds = 0;

    if (typeof milliseconds !== 'number') {
      this.isValid = false; // eslint-disable-next-line no-console

      console.warn(`The value of milliseconds passed into Duration must be of type number,
                but we are getting the ${typeof milliseconds} value "${milliseconds}" instead.
                `);
      return;
    }

    this.isValid = true;
    this.milliseconds = milliseconds;
  }

  humanize(locale) {
    if (!this.isValid) {
      return '';
    }

    const unit = findBestUnitMatch(this);

    if (unit === units.SECONDS) {
      const isLater = this.milliseconds > 0;
      return isLater ? labelSecondsLater : labelSecondsAgo;
    }

    return format(locale, this.asIn(unit), unit.name);
  }

  asIn(unit) {
    switch (unit) {
      case units.SECONDS:
        return Math.round(this.milliseconds / SECOND_TO_MILLISECONDS);

      case units.MINUTES:
        return Math.round(this.milliseconds / MINUTE_TO_MILLISECONDS);

      case units.HOURS:
        return Math.round(this.milliseconds / HOUR_TO_MILLISECONDS);

      case units.DAYS:
        return Math.round(this.milliseconds / DAY_TO_MILLISECONDS);

      case units.MONTHS:
        return Math.round(daysToMonth(this.milliseconds / DAY_TO_MILLISECONDS));

      case units.YEARS:
      default:
        return Math.round(daysToMonth(this.milliseconds / DAY_TO_MILLISECONDS) / 12);
    }
  }

}

registerDecorators(Duration, {
  fields: ["milliseconds"]
});

var Duration$1 = registerComponent(Duration, {
  tmpl: _tmpl$9
});

function daysToMonth(days) {
  // 400 years have 146097 days (taking into account leap year rules)
  // 400 years have 12 months === 4800
  const daysToMonthRatio = 4800 / 146097;
  return days * daysToMonthRatio;
}

function findBestUnitMatch(duration) {
  // Traversing the object keys in order from Seconds to Years
  // http://exploringjs.com/es6/ch_oop-besides-classes.html#_traversal-order-of-properties
  const match = Object.keys(units).find(key => {
    const unit = units[key]; // Year is the max and doesn't have a threshold

    return unit === units.YEARS || Math.abs(duration.asIn(unit)) < unit.threshold;
  });
  return units[match];
}

function format(locale, value, unit) {
  if ('Intl' in window && Intl.RelativeTimeFormat) {
    const formatter = new Intl.RelativeTimeFormat(locale, {
      style: 'long',
      numeric: 'always'
    });
    return formatter.format(value, unit);
  }

  return fallbackFormatter(value, unit);
}

function fallbackFormatter(value, unit) {
  // eslint-disable-next-line no-console
  console.warn(`The current environment does not support formatters for relative time.`);
  const absoluteValue = Math.abs(value);
  const unitString = absoluteValue !== 1 ? unit + fallbackPluralSuffix : unit;
  const label = value > 0 ? fallbackFutureLabel : fallbackPastLabel;
  return formatLabel(label, absoluteValue, unitString);
}

// default implementation of localization service for en-US locale. This covers the current usage of the localizationService in the code base.
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DATE_FORMAT = {
  short: 'M/d/yyyy',
  medium: 'MMM d, yyyy',
  long: 'MMMM d, yyyy'
};
const TIME_FORMAT = {
  short: 'h:mm a',
  medium: 'h:mm:ss a',
  long: 'h:mm:ss a'
}; // The parseTime method normalizes the time format so that minor deviations are accepted

const TIME_FORMAT_SIMPLE = {
  short: 'h:m a',
  medium: 'h:m:s a',
  long: 'h:m:s a'
}; // Only works with dates and iso strings
// formats the date object by ignoring the timezone offset
// e.g. assume date is Mar 11 2019 00:00:00 GMT+1100:
// formatDate(date, 'YYYY-MM-DD') -> 2019-03-11

function formatDate(value, format) {
  let isUTC = false;
  let dateString = value;

  if (typeof value === 'string') {
    dateString = value.split(TIME_SEPARATOR)[0];
    isUTC = true;
  }

  return formatDateInternal(dateString, format, isUTC);
} // Only works with date objects.
// formats the date object according to UTC.
// e.g. assume date is Mar 11 2019 00:00:00 GMT+1100:
// formatDateUTC(date, 'YYYY-MM-DD') -> 2019-03-10


function formatDateUTC(value, format) {
  return formatDateInternal(value, format, true);
} // Only works with a date object


function formatTime(date, format) {
  if (!isDate(date)) {
    return new Date('');
  }

  const hours = (date.getHours() + 11) % 12 + 1;
  const suffix = date.getHours() >= 12 ? 'PM' : 'AM';

  switch (format) {
    case STANDARD_TIME_FORMAT:
      // 16:12:32.000
      return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.${doublePad(date.getMilliseconds())}`;

    case TIME_FORMAT.short:
      // 4:12 PM;
      return `${hours}:${pad(date.getMinutes())} ${suffix}`;

    case TIME_FORMAT.medium:
    case TIME_FORMAT.long:
    default:
      // 4:12:32 PM;
      return `${hours}:${pad(date.getMinutes())}:${pad(date.getSeconds())} ${suffix}`;
  }
} // Only works with a date object
// formats the date object according to UTC.
// e.g. assume date is Mar 11 2019 00:00:00 GMT+1100:
// formatDateTimeUTC(date) -> 2019-03-10  1:00:00 PM


function formatDateTimeUTC(value) {
  if (!isDate(value)) {
    return new Date('');
  }

  const date = new Date(value.getTime());
  return `${formatDateUTC(date)}, ${formatTime(addTimezoneOffset(date))}`;
} // parses ISO8601 date/time strings. Currently only used to parse ISO time strings without a TZD. Some examples:
// 20:00:00.000             -> Feb 26 2019 20:00:00 GMT-0500
// 2019-03-11               -> Mar 11 2019 00:00:00 GMT-0400
// 2019-03-11T00:00:00.000Z -> Mar 10 2019 20:00:00 GMT-0400


function parseDateTimeISO8601(value) {
  let isoString = null;
  let shouldAddOffset = true;

  if (isValidISOTimeString(value)) {
    isoString = `${getTodayInISO()}T${addTimezoneSuffix(value)}`;
  } else if (isValidISODateTimeString(value)) {
    if (value.indexOf(TIME_SEPARATOR) > 0) {
      isoString = addTimezoneSuffix(value);
      shouldAddOffset = false;
    } else {
      isoString = `${value}T00:00:00.000Z`;
    }
  }

  if (isoString) {
    // Browsers differ on how they treat iso strings without a timezone offset (local vs utc time)
    const parsedDate = new Date(isoString);

    if (shouldAddOffset) {
      addTimezoneOffset(parsedDate);
    }

    return parsedDate;
  }

  return null;
} // called by the datepicker and calendar for parsing iso and formatted date strings
// called by the timepicker to parse the formatted time string


function parseDateTime(value, format) {
  if (format === STANDARD_DATE_FORMAT && isValidISODateTimeString(value)) {
    return parseDateTimeISO8601(value);
  }

  if (Object.values(DATE_FORMAT).includes(format)) {
    return parseFormattedDate(value, format);
  }

  if (Object.values(TIME_FORMAT_SIMPLE).includes(format)) {
    return parseFormattedTime(value);
  }

  return null;
} // The input to this method is always an ISO string with timezone offset.


function parseDateTimeUTC(value) {
  return parseDateTimeISO8601(addTimezoneSuffix(value));
}

function isBefore(date1, date2, unit) {
  const normalizedDate1 = getDate(date1);
  const normalizedDate2 = getDate(date2);

  if (!normalizedDate1 || !normalizedDate2) {
    return false;
  }

  return startOf(normalizedDate1, unit).getTime() < startOf(normalizedDate2, unit).getTime();
} // unit can be millisecond, minute, day


function isAfter(date1, date2, unit) {
  const normalizedDate1 = getDate(date1);
  const normalizedDate2 = getDate(date2);

  if (!normalizedDate1 || !normalizedDate2) {
    return false;
  }

  return startOf(normalizedDate1, unit).getTime() > startOf(normalizedDate2, unit).getTime();
} // We're not doing timezone conversion in the default config. Only converting from UTC to system timezone


function UTCToWallTime(date, timezone, callback) {
  const utcDate = new Date(date.getTime());
  callback(subtractTimezoneOffset(utcDate));
} // We're not doing timezone conversion in the default config. Only converting from system timezone to UTC


function WallTimeToUTC(date, timezone, callback) {
  const localDate = new Date(date.getTime());
  callback(addTimezoneOffset(localDate));
} // We're assuming en-US locale so we don't need translation between calendar systems


function translateToOtherCalendar(date) {
  return date;
} // We're assuming en-US locale so we don't need translation between calendar systems


function translateFromOtherCalendar(date) {
  return date;
} // We're assuming en-US locale so we don't need translation of digits


function translateToLocalizedDigits(input) {
  return input;
} // We're assuming en-US locale so we don't need translation of digits


function translateFromLocalizedDigits(input) {
  return input;
} // This is called from the numberFormat library when the value exceeds the safe length.
// We currently rely on aura to format large numbers


function getNumberFormat() {
  return {
    format: value => {
      // eslint-disable-next-line no-console
      console.warn(`The current environment does not support large numbers and the original value of ${value} will be returned.`);
      return value;
    }
  };
} // relativeDateTime (currently the only user of duration) uses unit="minutes"
// The default implementation here assumes the unit is always minutes.


function duration(minutes) {
  return new Duration$1(minutes * 60 * 1000);
}

function displayDuration(value) {
  return value.humanize('en');
} // parses a time string formatted in en-US locale i.e. h:mm:ss a


function parseFormattedTime(value) {
  // for time strings it's easier to just split on :.\s
  const values = value.trim().split(/[:.\s*]/); // at least two parts i.e. 12 PM, and at most 5 parts i.e. 12:34:21.432 PM

  const length = values.length;

  if (!values || length < 2 || length > 5) {
    return null;
  }

  const ampm = values[length - 1];
  const isBeforeNoon = ampm.toLowerCase() === 'am';
  const isAfternoon = ampm.toLowerCase() === 'pm'; // remove ampm

  values.splice(-1, 1);
  const allNumbers = values.every(item => !isNaN(item));

  if (!isAfternoon && !isBeforeNoon || !allNumbers) {
    return null;
  }

  const hours = values[0];
  const hour24 = pad(isAfternoon ? hours % 12 + 12 : hours % 12);
  const minutes = length >= 3 && values[1] || '0';
  const seconds = length >= 4 && values[2] || '0';
  const milliseconds = length === 5 && values[3] || '0';
  const newDate = new Date(getTodayInISO());
  newDate.setHours(hour24, minutes, seconds, milliseconds);
  return isDate(newDate) ? newDate : null;
} // parses a date string formatted in en-US locale, i.e. MMM d, yyyy


function parseFormattedDate(value, format) {
  // default to medium style pattern
  let pattern = /^([a-zA-Z]{3})\s*(\d{1,2}),\s*(\d{4})$/;

  switch (format) {
    case DATE_FORMAT.short:
      pattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
      break;

    case DATE_FORMAT.long:
      pattern = /^([a-zA-Z]+)\s*(\d{1,2}),\s*(\d{4})$/;
      break;
  } // matches[1]: month, matches[2]: day, matches[3]: year


  const match = pattern.exec(value.trim());

  if (!match) {
    return null;
  }

  let month = match[1];
  const day = match[2];
  const year = match[3]; // for long and medium style formats, we need to find the month index

  if (format !== DATE_FORMAT.short) {
    month = MONTH_NAMES.findIndex(item => item.toLowerCase().includes(month.toLowerCase())); // the actual month for the ISO string is 1 more than the index

    month += 1;
  }

  const isoValue = `${year}-${pad(month)}-${pad(day)}`;
  const newDate = new Date(`${isoValue}T00:00:00.000Z`);
  return isDate(newDate) ? addTimezoneOffset(newDate) : null;
}

function formatDateInternal(value, format, isUTC) {
  const date = getDate(value);

  if (!date) {
    // return Invalid Date
    return new Date('');
  }

  if (isUTC && isDate(value)) {
    // if value is an ISO string, we already add the timezone offset when parsing the date string.
    addTimezoneOffset(date);
  }

  switch (format) {
    case STANDARD_DATE_FORMAT:
      return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

    case DATE_FORMAT.short:
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    case DATE_FORMAT.long:
      return `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    case DATE_FORMAT.medium:
    default:
      {
        const shortMonthName = MONTH_NAMES[date.getMonth()].substring(0, 3);
        return `${shortMonthName} ${date.getDate()}, ${date.getFullYear()}`;
      }
  }
} // unit can be 'day' or 'minute', otherwise will default to milliseconds. These are the only units that are currently used in the codebase.


function startOf(date, unit) {
  switch (unit) {
    case 'day':
      date.setHours(0);
      date.setMinutes(0);
    // falls through

    case 'minute':
      date.setSeconds(0);
      date.setMilliseconds(0);
      break;
  }

  return date;
}

function isDate(value) {
  return Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value.getTime());
}

function addTimezoneSuffix(value) {
  // first remove TZD if the string has one, and then add Z
  return removeTimeZoneSuffix(value) + 'Z';
}

function addTimezoneOffset(date) {
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  return date;
}

function subtractTimezoneOffset(date) {
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date;
}

function getDate(value) {
  if (!value) {
    return null;
  }

  if (isDate(value)) {
    return new Date(value.getTime());
  }

  if (isFinite(value) && (typeof value === 'number' || typeof value === 'string')) {
    return new Date(parseInt(value, 10));
  }

  if (typeof value === 'string') {
    return parseDateTimeISO8601(value);
  }

  return null;
}

function getTodayInISO() {
  return new Date().toISOString().split('T')[0];
}

function pad(n) {
  return Number(n) < 10 ? '0' + n : n;
}

function doublePad(n) {
  return Number(n) < 10 ? '00' + n : Number(n) < 100 ? '0' + n : n;
}

var localizationService = {
  formatDate,
  formatDateUTC,
  formatTime,
  formatDateTimeUTC,
  parseDateTimeISO8601,
  parseDateTime,
  parseDateTimeUTC,
  isBefore,
  isAfter,
  UTCToWallTime,
  WallTimeToUTC,
  translateToOtherCalendar,
  translateFromOtherCalendar,
  translateToLocalizedDigits,
  translateFromLocalizedDigits,
  getNumberFormat,
  duration,
  displayDuration
};

function getConfigFromAura($A) {
  return {
    getLocalizationService() {
      return $A.localizationService;
    },

    getPathPrefix() {
      return $A.getContext().getPathPrefix();
    },

    getToken(name) {
      return $A.getToken(name);
    }

  };
}

function createStandAloneConfig() {
  return {
    getLocalizationService() {
      return localizationService;
    },

    getPathPrefix() {
      return ''; // @sfdc.playground path-prefix DO-NOT-REMOVE-COMMENT
    },

    getToken() {
      return undefined; // @sfdc.playground token DO-NOT-REMOVE-COMMENT
    },

    getOneConfig() {
      return {
        densitySetting: ''
      };
    }

  };
}

function getDefaultConfig() {
  return window.$A !== undefined && window.$A.localizationService ? getConfigFromAura(window.$A) : createStandAloneConfig();
}

getDefaultConfig();

// Taken from https://github.com/jonathantneal/svg4everybody/pull/139
// Remove this iframe-in-edge check once the following is resolved https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8323875/
const isEdgeUA = /\bEdge\/.(\d+)\b/.test(navigator.userAgent);
const inIframe = window.top !== window.self;
const isIframeInEdge = isEdgeUA && inIframe;
var isIframeInEdge$1 = registerComponent(isIframeInEdge, {
  tmpl: _tmpl$9
});

// Taken from https://git.soma.salesforce.com/aura/lightning-global/blob/999dc35f948246181510df6e56f45ad4955032c2/src/main/components/lightning/SVGLibrary/stamper.js#L38-L60
function fetchSvg(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr);
        }
      }
    };
  });
}

// Which looks like it was inspired by https://github.com/jonathantneal/svg4everybody/blob/377d27208fcad3671ed466e9511556cb9c8b5bd8/lib/svg4everybody.js#L92-L107
// Modify at your own risk!

const newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/;
const webkitUA = /\bAppleWebKit\/(\d+)\b/;
const olderEdgeUA = /\bEdge\/12\.(\d+)\b/;
const isIE = newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537;
const supportsSvg = !isIE && !isIframeInEdge$1;
var supportsSvg$1 = registerComponent(supportsSvg, {
  tmpl: _tmpl$9
});

/**
This polyfill injects SVG sprites into the document for clients that don't
fully support SVG. We do this globally at the document level for performance
reasons. This causes us to lose namespacing of IDs across sprites. For example,
if both #image from utility sprite and #image from doctype sprite need to be
rendered on the page, both end up as #image from the doctype sprite (last one
wins). SLDS cannot change their image IDs due to backwards-compatibility
reasons so we take care of this issue at runtime by adding namespacing as we
polyfill SVG elements.

For example, given "/assets/icons/action-sprite/svg/symbols.svg#approval", we
replace the "#approval" id with "#${namespace}-approval" and a similar
operation is done on the corresponding symbol element.
**/
const svgTagName = /svg/i;

const isSvgElement = el => el && svgTagName.test(el.nodeName);

const requestCache = {};
const symbolEls = {};
const svgFragments = {};
const spritesContainerId = 'slds-svg-sprites';
let spritesEl;
function polyfill(el) {
  if (!supportsSvg$1 && isSvgElement(el)) {
    if (!spritesEl) {
      spritesEl = document.createElement('svg');
      spritesEl.xmlns = 'http://www.w3.org/2000/svg';
      spritesEl['xmlns:xlink'] = 'http://www.w3.org/1999/xlink';
      spritesEl.style.display = 'none';
      spritesEl.id = spritesContainerId;
      document.body.insertBefore(spritesEl, document.body.childNodes[0]);
    }

    Array.from(el.getElementsByTagName('use')).forEach(use => {
      // We access the href differently in raptor and in aura, probably
      // due to difference in the way the svg is constructed.
      const src = use.getAttribute('xlink:href') || use.getAttribute('href');

      if (src) {
        // "/assets/icons/action-sprite/svg/symbols.svg#approval" =>
        // ["/assets/icons/action-sprite/svg/symbols.svg", "approval"]
        const parts = src.split('#');
        const url = parts[0];
        const id = parts[1];
        const namespace = url.replace(/[^\w]/g, '-');
        const href = `#${namespace}-${id}`;

        if (url.length) {
          // set the HREF value to no longer be an external reference
          if (use.getAttribute('xlink:href')) {
            use.setAttribute('xlink:href', href);
          } else {
            use.setAttribute('href', href);
          } // only insert SVG content if it hasn't already been retrieved


          if (!requestCache[url]) {
            requestCache[url] = fetchSvg(url);
          }

          requestCache[url].then(svgContent => {
            // create a document fragment from the svgContent returned (is parsed by HTML parser)
            if (!svgFragments[url]) {
              const svgFragment = document.createRange().createContextualFragment(svgContent);
              svgFragments[url] = svgFragment;
            }

            if (!symbolEls[href]) {
              const svgFragment = svgFragments[url];
              const symbolEl = svgFragment.querySelector(`#${id}`);
              symbolEls[href] = true;
              symbolEl.id = `${namespace}-${id}`;
              spritesEl.appendChild(symbolEl);
            }
          });
        }
      }
    });
  }
}

const validNameRe = /^([a-zA-Z]+):([a-zA-Z]\w*)$/;
const underscoreRe = /_/g;
Object.assign(Object.create(null), {
  action: 'lightning.actionSprite',
  custom: 'lightning.customSprite',
  doctype: 'lightning.doctypeSprite',
  standard: 'lightning.standardSprite',
  utility: 'lightning.utilitySprite'
});
Object.assign(Object.create(null), {
  action: 'lightning.actionSpriteRtl',
  custom: 'lightning.customSpriteRtl',
  doctype: 'lightning.doctypeSpriteRtl',
  standard: 'lightning.standardSpriteRtl',
  utility: 'lightning.utilitySpriteRtl'
});
Object.assign(Object.create(null), {
  'lightning.actionSprite': '/assets/icons/action-sprite/svg/symbols.svg',
  'lightning.actionSpriteRtl': '/assets/icons/action-sprite/svg/symbols.svg',
  'lightning.customSprite': '/assets/icons/custom-sprite/svg/symbols.svg',
  'lightning.customSpriteRtl': '/assets/icons/custom-sprite/svg/symbols.svg',
  'lightning.doctypeSprite': '/assets/icons/doctype-sprite/svg/symbols.svg',
  'lightning.doctypeSpriteRtl': '/assets/icons/doctype-sprite/svg/symbols.svg',
  'lightning.standardSprite': '/assets/icons/standard-sprite/svg/symbols.svg',
  'lightning.standardSpriteRtl': '/assets/icons/standard-sprite/svg/symbols.svg',
  'lightning.utilitySprite': '/assets/icons/utility-sprite/svg/symbols.svg',
  'lightning.utilitySpriteRtl': '/assets/icons/utility-sprite/svg/symbols.svg'
});

const getMatchAtIndex = index => iconName => {
  const result = validNameRe.exec(iconName);
  return result ? result[index] : '';
};

const getCategory = getMatchAtIndex(1);
const getName = getMatchAtIndex(2);
const isValidName = iconName => validNameRe.test(iconName);
const computeSldsClass = iconName => {
  if (isValidName(iconName)) {
    const category = getCategory(iconName);
    const name = getName(iconName).replace(underscoreRe, '-');
    return `slds-icon-${category}-${name}`;
  }

  return '';
};

var dir = 'ltr';

// Cache for promises that import icon templates
const importPromises = {};
const iconTemplateCache = {};
function hasIconLibrary(dir, category) {
  const cacheKey = makeCacheKey(dir, category);
  return !!iconTemplateCache[cacheKey];
}
function getIconLibrary(dir, category) {
  const cacheKey = makeCacheKey(dir, category);
  return iconTemplateCache[cacheKey] || null;
}
function fetchIconLibrary(dir, category) {
  const cacheKey = makeCacheKey(dir, category); // If icon template is being requested, return the cached promise

  if (importPromises[cacheKey]) {
    return importPromises[cacheKey];
  }

  const promise = fetchIconTemplate(dir, category);
  promise.then(tmpl => {
    iconTemplateCache[cacheKey] = tmpl;
    delete importPromises[cacheKey];
  }).catch(() => {
    delete importPromises[cacheKey];
  }); // Cache the promise to import

  importPromises[cacheKey] = promise;
  return promise;
}

function makeCacheKey(dir, category) {
  return `${category}${dir}`;
} // eslint-disable-next-line @lwc/lwc/no-async-await


async function fetchIconTemplate(dir, category) {
  if (dir === 'rtl') {
    switch (category) {
      case 'utility':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesUtilityRtl-1949c231.js');
          return Lib;
        }

      case 'action':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesActionRtl-e2cc3dd6.js');
          return Lib;
        }

      case 'standard':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesStandardRtl-0225c310.js');
          return Lib;
        }

      case 'doctype':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesDoctypeRtl-83aea109.js');
          return Lib;
        }

      case 'custom':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesCustomRtl-75e1d739.js');
          return Lib;
        }

      default:
        return null;
    }
  } else {
    switch (category) {
      case 'utility':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesUtility-f8bb15b3.js');
          return Lib;
        }

      case 'action':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesAction-e1112933.js');
          return Lib;
        }

      case 'standard':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesStandard-0c36e298.js');
          return Lib;
        }

      case 'doctype':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesDoctype-6e9ffc9a.js');
          return Lib;
        }

      case 'custom':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesCustom-17d1035a.js');
          return Lib;
        }

      default:
        return null;
    }
  }
}

class LightningPrimitiveIcon extends LightningElement {
  constructor(...args) {
    super(...args);
    this.src = void 0;
    this.svgClass = void 0;
    this.size = 'medium';
    this.variant = void 0;
    this.iconLibrary = null;
    this._iconName = null;
  }

  get iconName() {
    return this._iconName;
  }

  set iconName(value) {
    if (value !== this._iconName) {
      this._iconName = value;
      this.requestIconTemplates();
    }
  }

  get category() {
    if (isValidName(this._iconName)) {
      const [spriteName] = this._iconName.split(':');

      return spriteName;
    }

    return null;
  }

  get isReady() {
    return !!this.iconLibrary;
  } // eslint-disable-next-line @lwc/lwc/no-async-await


  async requestIconTemplates() {
    if (hasIconLibrary(dir, this.category)) {
      this.iconLibrary = getIconLibrary(dir, this.category);
      return;
    }

    if (this.category) {
      try {
        this.iconLibrary = null;
        this.iconLibrary = await fetchIconLibrary(dir, this.category);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(`<lightning-primitive-icon> failed to dynamically import icon templates for ${this.category}: ${e.message}`);
      }
    }
  }

  renderedCallback() {
    if (this.isReady || this.iconName !== this.prevIconName) {
      this.prevIconName = this.iconName;
      const svgElement = this.template.querySelector('svg');
      polyfill(svgElement);
    }
  }

  render() {
    if (this.isReady) {
      // If src is present, should use default template reply on given svg src
      if (!this.src) {
        const name = this.iconName;

        if (isValidName(name)) {
          const [spriteName, iconName] = name.split(':');
          const template = this.iconLibrary[`${spriteName}_${iconName}`];

          if (template) {
            return template;
          }
        }
      }
    }

    return _tmpl$a;
  }

  get href() {
    return this.src || '';
  }

  get name() {
    return getName(this.iconName);
  }

  get normalizedSize() {
    return normalizeString(this.size, {
      fallbackValue: 'medium',
      validValues: ['xx-small', 'x-small', 'small', 'medium', 'large']
    });
  }

  get normalizedVariant() {
    // NOTE: Leaving a note here because I just wasted a bunch of time
    // investigating why both 'bare' and 'inverse' are supported in
    // lightning-primitive-icon. lightning-icon also has a deprecated
    // 'bare', but that one is synonymous to 'inverse'. This 'bare' means
    // that no classes should be applied. So this component needs to
    // support both 'bare' and 'inverse' while lightning-icon only needs to
    // support 'inverse'.
    return normalizeString(this.variant, {
      fallbackValue: '',
      validValues: ['bare', 'error', 'inverse', 'warning', 'success']
    });
  }

  get computedClass() {
    const {
      normalizedSize,
      normalizedVariant
    } = this;
    const classes = classSet(this.svgClass);

    if (normalizedVariant !== 'bare') {
      classes.add('slds-icon');
    }

    switch (normalizedVariant) {
      case 'error':
        classes.add('slds-icon-text-error');
        break;

      case 'warning':
        classes.add('slds-icon-text-warning');
        break;

      case 'success':
        classes.add('slds-icon-text-success');
        break;

      case 'inverse':
      case 'bare':
        break;

      default:
        // if custom icon is set, we don't want to set
        // the text-default class
        if (!this.src) {
          classes.add('slds-icon-text-default');
        }

    }

    if (normalizedSize !== 'medium') {
      classes.add(`slds-icon_${normalizedSize}`);
    }

    return classes.toString();
  }
  /*LWC compiler v2.13.3*/


}

registerDecorators(LightningPrimitiveIcon, {
  publicProps: {
    src: {
      config: 0
    },
    svgClass: {
      config: 0
    },
    size: {
      config: 0
    },
    variant: {
      config: 0
    },
    iconName: {
      config: 3
    }
  },
  fields: ["iconLibrary", "_iconName"]
});

var _lightningPrimitiveIcon = registerComponent(LightningPrimitiveIcon, {
  tmpl: _tmpl$a
});

const stc0$8 = {
  classMap: {
    "slds-form-element__icon": true
  },
  key: 0
};
const stc1$5 = {
  "type": "button"
};
const stc2$2 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 3
};
function tmpl$8($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [api_element("div", stc0$8, [api_element("button", {
    className: $cmp.computedButtonClass,
    attrs: stc1$5,
    key: 1
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "svgClass": "slds-button__icon",
      "iconName": $cmp.iconName,
      "variant": "bare"
    },
    key: 2
  }), api_element("span", stc2$2, [api_text(api_dynamic_text($cmp.alternativeText))])])])];
  /*LWC compiler v2.13.3*/
}
var _tmpl$8 = registerTemplate(tmpl$8);
tmpl$8.stylesheets = [];

var labelButtonAlternativeText = 'Help';

const POSITION_ATTR_NAME = 'data-position-id';

class BrowserWindow {
  get window() {
    if (!this._window) {
      this._window = window; // JTEST/Ingtegration: getComputedStyle may be null

      if (!this.window.getComputedStyle) {
        this.window.getComputedStyle = node => {
          return node.style;
        };
      }
    }

    return this._window;
  }

  mockWindow(value) {
    // For test, allow mock window.
    this._window = value;
  }

  get documentElement() {
    assert(this.window.document, 'Missing window.document');
    return this.window.document.documentElement;
  }

  get MutationObserver() {
    return this.window.MutationObserver;
  }

  isWindow(element) {
    return element && element.toString() === '[object Window]';
  }

}

const WindowManager = new BrowserWindow();
function isShadowRoot(node) {
  return node && node.nodeType === 11;
}

function enumerateParent(elem, stopEl, checker) {
  // document.body is not necessarily a body tag, because of the (very rare)
  // case of a frameset.
  if (!elem || elem === stopEl || elem === document.body) {
    return null;
  } // if overflow is auto and overflow-y is also auto,
  // however in firefox the opposite is not true


  try {
    // getComputedStyle throws an exception
    // if elem is not an element
    // (can happen during unrender)
    const computedStyle = WindowManager.window.getComputedStyle(elem);

    if (!computedStyle) {
      return null;
    }

    if (checker(computedStyle)) {
      return elem;
    }

    return enumerateParent(isShadowRoot(elem.parentNode) ? elem.parentNode.host : elem.parentNode, stopEl, checker);
  } catch (e) {
    return null;
  }
}

function getScrollableParent(elem, stopEl) {
  return enumerateParent(elem, stopEl, computedStyle => {
    const overflow = computedStyle['overflow-y'];
    return overflow === 'auto' || overflow === 'scroll';
  });
}
function getScrollableParentFromEventPath(eventPath) {
  var computedStyle;
  var overflow;

  for (let i = 0; i < eventPath.length; i++) {
    let element = eventPath[i];

    if (element instanceof HTMLElement) {
      computedStyle = WindowManager.window.getComputedStyle(element);
      overflow = computedStyle['overflow-y'];

      if (overflow === 'auto' || overflow === 'scroll') {
        return element;
      }
    }
  }

  return null;
}

function queryOverflowHiddenParent(elem, stopEl) {
  return enumerateParent(elem, stopEl, computedStyle => {
    return computedStyle['overflow-x'] === 'hidden' || computedStyle['overflow-y'] === 'hidden';
  });
}

function isInDom(el) {
  if (el === WindowManager.window) {
    return true;
  }

  if (!isShadowRoot(el.parentNode) && el.parentNode && el.parentNode.tagName && el.parentNode.tagName.toUpperCase() === 'BODY') {
    return true;
  }

  if (isShadowRoot(el.parentNode) && el.parentNode.host) {
    return isInDom(el.parentNode.host);
  }

  if (el.parentNode) {
    return isInDom(el.parentNode);
  }

  return false;
}
function isDomNode(obj) {
  return obj.nodeType && (obj.nodeType === 1 || obj.nodeType === 11);
}
function timeout(time) {
  return new Promise(resolve => {
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    setTimeout(() => {
      resolve();
    }, time);
  });
}
function getPositionTarget(element) {
  return element.tagName === 'TEXTAREA' ? isShadowRoot(element.parentNode) ? element.parentNode.host : element.parentNode : element;
}
let lastId = 1000000;
function generateUniqueSelector() {
  return `lgcp-${lastId++}`;
}
function normalizeElement(element) {
  const selector = generateUniqueSelector();
  element.setAttribute(POSITION_ATTR_NAME, selector);
  element = // eslint-disable-next-line @lwc/lwc/no-document-query
  document.querySelector(`[${POSITION_ATTR_NAME}="${selector}"]`) || element;
  return element;
}
function normalizePosition(element, overlay, nextIndex, target, alignWidth) {
  // Set element position to fixed
  // 1. element is inside overlay
  // or 2. When element isn't align with target's width, and target's parent has overflow-x:hidden setting.
  const isFixed = overlay.isInside || !alignWidth && queryOverflowHiddenParent(target, WindowManager.window);
  element.style.position = isFixed ? 'fixed' : 'absolute';
  element.style.zIndex = nextIndex || 0; // W-8042285 For RTL, left is positive value instead of negative.

  element.style.left = '-9999px'; // Avoid flicker
  // we always position from the left, but in RTL mode Omakase swaps left and right properties.
  // To always allow positioning from the left we set right to auto so position library can do its work.

  element.style.right = 'auto';
  element.style.top = '0px'; // Avoid flicker

  return {
    element,
    overlay
  };
}
function requestAnimationFrameAsPromise() {
  return new Promise(resolve => {
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    requestAnimationFrame(() => resolve());
  });
}

const Direction = {
  Center: 'center',
  Middle: 'middle',
  Right: 'right',
  Left: 'left',
  Bottom: 'bottom',
  Top: 'top',
  Default: 'default'
};
const VerticalMap = {
  top: Direction.Top,
  bottom: Direction.Bottom,
  center: Direction.Middle
};
const HorizontalMap = {
  left: Direction.Left,
  right: Direction.Right,
  center: Direction.Center
};
const FlipMap = {
  left: Direction.Right,
  right: Direction.Left,
  top: Direction.Bottom,
  bottom: Direction.Top,
  center: Direction.Center,
  default: Direction.Right
};

function getContainerSize(parent) {
  if (parent) {
    return parent.getBoundingClientRect();
  }

  const rect = {
    width: WindowManager.window.innerWidth || document.body.clientWidth || 0,
    height: WindowManager.window.innerHeight || document.body.clientHeight || 0,
    top: 0,
    left: 0
  };
  rect.bottom = rect.height;
  rect.right = rect.width;
  return rect;
}

function normalizeDirection(direction, defaultValue) {
  return normalizeString(direction, {
    fallbackValue: defaultValue || Direction.Default,
    validValues: [Direction.Center, Direction.Right, Direction.Left, Direction.Bottom, Direction.Top, Direction.Middle, Direction.Default]
  });
}
function mapToHorizontal(value) {
  value = normalizeDirection(value, Direction.Left);
  return HorizontalMap[value];
}
function mapToVertical(value) {
  value = normalizeDirection(value, Direction.Left);
  return VerticalMap[value];
}
function flipDirection(value) {
  value = normalizeDirection(value, Direction.Left);
  return FlipMap[value];
} // TODO: Remove, not currently in use.
function checkFlipPossibility(parent, element, target, leftAsBoundary) {
  const viewPort = getContainerSize(parent);
  const windowViewPort = getContainerSize();
  const elemRect = element.getBoundingClientRect();
  const referenceElemRect = target.getBoundingClientRect();
  const height = typeof elemRect.height !== 'undefined' ? elemRect.height : elemRect.bottom - elemRect.top;
  const width = typeof elemRect.width !== 'undefined' ? elemRect.width : elemRect.right - elemRect.left; // TODO: We'll need to revisit the leftAsBoundary config property. Either we'll need a better
  // name to cover the RTL language cases and maybe open up the possibility of bounding the
  // element to the target in both the horizontal and vertical directions.
  // The boundary shrinks the available area to the edge of the target rather than the viewport.

  let rightAsBoundary = false;

  if (document.dir === 'rtl') {
    rightAsBoundary = leftAsBoundary;
    leftAsBoundary = false;
  } // Bug Fix for https://gus.lightning.force.com/lightning/r/ADM_Work__c/a07B0000008DxOhIAK/view
  // If viewport is scrollableParent, then should count the top of scrollerParent,
  // otherwise, window top is 0. no change to original logic.
  // When used in console app, console's viewport is not window, but a scrollable div, then popup can be cut off easily.
  // scrollable parent => if any parent element set overflow-y:auto, then inner element won't popup, unless use position:fix.


  const aboveSpace = referenceElemRect.top - viewPort.top - height;
  const belowSpace = viewPort.height - referenceElemRect.bottom - height; // If there is scrollable parent, always check aboveSpace > 0

  const hasSpaceAbove = aboveSpace >= 0 || parent == null && belowSpace < 0 && aboveSpace > belowSpace;
  const hasSpaceBelow = belowSpace >= 0 || aboveSpace < 0 && belowSpace > aboveSpace; // Assuming left alignment is specified this tests if:
  // - there's room to accommodate the element with right alignment
  //      - within the viewport, if parent present
  // - there's not enough room to accommodate the element with left alignment

  let shouldAlignToRight = false;

  if (parent) {
    shouldAlignToRight = referenceElemRect.right - viewPort.left >= width && referenceElemRect.left + width > (rightAsBoundary ? referenceElemRect.right : viewPort.width);
  } else {
    shouldAlignToRight = referenceElemRect.right >= width && referenceElemRect.left + width > (rightAsBoundary ? referenceElemRect.right : viewPort.width);
  } // Assuming right alignment is specified this tests if:
  // - there's room to accommodate the element with left alignment
  //      - within the viewport if parent present
  // - there's not enough room to accommodate the element with right alignment


  let shouldAlignToLeft = false;

  if (parent) {
    shouldAlignToLeft = referenceElemRect.left + width <= viewPort.right && referenceElemRect.right - viewPort.left - width < (leftAsBoundary ? referenceElemRect.left : 0);
  } else {
    shouldAlignToLeft = referenceElemRect.left + width <= viewPort.width && referenceElemRect.right - width < (leftAsBoundary ? referenceElemRect.left : 0);
  }

  if (!shouldAlignToLeft && !shouldAlignToRight && parent) {
    shouldAlignToRight = (referenceElemRect.right - viewPort.left >= width || referenceElemRect.right >= width) && referenceElemRect.left + width > (rightAsBoundary ? referenceElemRect.right : viewPort.width);
    shouldAlignToLeft = (referenceElemRect.left + width <= viewPort.right || referenceElemRect.left + width <= windowViewPort.width) && referenceElemRect.right - width < (leftAsBoundary ? referenceElemRect.left : 0);
  } // Assuming center alignment, does the viewport have space to fit half of the element around
  // the target?


  const centerOverflow = {
    left: referenceElemRect.left - width * 0.5 < 0,
    right: referenceElemRect.right + width * 0.5 > viewPort.width,
    top: referenceElemRect.top - height * 0.5 < 0,
    bottom: referenceElemRect.bottom + height * 0.5 > viewPort.height
  };
  return {
    shouldAlignToLeft,
    shouldAlignToRight,
    hasSpaceAbove,
    hasSpaceBelow,
    centerOverflow
  };
}

class Transformer {
  constructor(pad, boxDirections, transformX, transformY) {
    this.pad = pad || 0;
    this.boxDirections = boxDirections || {
      left: true,
      right: true
    };

    this.transformX = transformX || function () {};

    this.transformY = transformY || function () {};
  }

  transform() {// no-op
  }

}

class TopTransformer extends Transformer {
  transform(targetBox, elementBox) {
    return {
      top: Math.floor(this.transformY(targetBox.top, targetBox, elementBox) + this.pad)
    };
  }
  /*LWC compiler v2.13.3*/


}

class BottomTransFormer extends Transformer {
  transform(targetBox, elementBox) {
    return {
      top: Math.floor(this.transformY(targetBox.top, targetBox, elementBox) - elementBox.height - this.pad)
    };
  }
  /*LWC compiler v2.13.3*/


}

class CenterTransformer extends Transformer {
  transform(targetBox, elementBox) {
    return {
      left: Math.floor(this.transformX(targetBox.left, targetBox, elementBox) - 0.5 * elementBox.width)
    };
  }
  /*LWC compiler v2.13.3*/


}

class MiddleTransformer extends Transformer {
  transform(targetBox, elementBox) {
    return {
      top: Math.floor(0.5 * (2 * targetBox.top + targetBox.height - elementBox.height))
    };
  }
  /*LWC compiler v2.13.3*/


}

class LeftTransformer extends Transformer {
  transform(targetBox, elementBox) {
    return {
      left: Math.floor(this.transformX(targetBox.left, targetBox, elementBox) + this.pad)
    };
  }
  /*LWC compiler v2.13.3*/


}

class RightTransformer extends Transformer {
  transform(targetBox, elementBox) {
    return {
      left: Math.floor(this.transformX(targetBox.left, targetBox, elementBox) - elementBox.width - this.pad)
    };
  }
  /*LWC compiler v2.13.3*/


}

class BelowTransformer extends Transformer {
  transform(targetBox, elementBox) {
    const top = targetBox.top + targetBox.height + this.pad;
    return elementBox.top < top ? {
      top
    } : {};
  }
  /*LWC compiler v2.13.3*/


}

const MIN_HEIGHT = 36; // Minimum Line Height

const MIN_WIDTH = 36;

class ShrinkingBoxTransformer extends Transformer {
  transform(targetBox, elementBox) {
    const retBox = {};

    if (this.boxDirections.top && elementBox.top < targetBox.top + this.pad) {
      retBox.top = targetBox.top + this.pad;
      retBox.height = Math.max(elementBox.height - (retBox.top - elementBox.top), MIN_HEIGHT);
    }

    if (this.boxDirections.left && elementBox.left < targetBox.left + this.pad) {
      retBox.left = targetBox.left + this.pad;
      retBox.width = Math.max(elementBox.width - (retBox.left - elementBox.left), MIN_WIDTH);
    }

    if (this.boxDirections.right && elementBox.left + elementBox.width > targetBox.left + targetBox.width - this.pad) {
      retBox.right = targetBox.left + targetBox.width - this.pad;
      retBox.width = Math.max(retBox.right - (retBox.left || elementBox.left), MIN_WIDTH);
    }

    if (this.boxDirections.bottom && elementBox.top + elementBox.height > targetBox.top + targetBox.height - this.pad) {
      retBox.bottom = targetBox.top + targetBox.height - this.pad;
      retBox.height = Math.max(retBox.bottom - (retBox.top || elementBox.top), MIN_HEIGHT);
    }

    return retBox;
  }
  /*LWC compiler v2.13.3*/


}

class BoundingBoxTransformer extends Transformer {
  transform(targetBox, elementBox) {
    const retBox = {};

    if (this.boxDirections.top && elementBox.top < targetBox.top + this.pad) {
      retBox.top = targetBox.top + this.pad;
    }

    if (this.boxDirections.left && elementBox.left < targetBox.left + this.pad) {
      retBox.left = targetBox.left + this.pad;
    }

    if (this.boxDirections.right && elementBox.left + elementBox.width > targetBox.left + targetBox.width - this.pad) {
      retBox.left = targetBox.left + targetBox.width - elementBox.width - this.pad;
    }

    if (this.boxDirections.bottom && elementBox.top + elementBox.height > targetBox.top + targetBox.height - this.pad) {
      retBox.top = targetBox.top + targetBox.height - elementBox.height - this.pad;
    }

    return retBox;
  }
  /*LWC compiler v2.13.3*/


}

class InverseBoundingBoxTransformer extends Transformer {
  transform(targetBox, elementBox) {
    const retBox = {};

    if (this.boxDirections.left && targetBox.left - this.pad < elementBox.left) {
      retBox.left = targetBox.left - this.pad;
    }

    if (this.boxDirections.right && elementBox.left + elementBox.width < targetBox.left + targetBox.width + this.pad) {
      retBox.left = targetBox.width + this.pad - elementBox.width + targetBox.left;
    }

    if (this.boxDirections.top && targetBox.top < elementBox.top + this.pad) {
      retBox.top = targetBox.top - this.pad;
    }

    if (this.boxDirections.bottom && elementBox.top + elementBox.height < targetBox.top + targetBox.height + this.pad) {
      retBox.top = targetBox.height + this.pad - elementBox.height + targetBox.top;
    }

    return retBox;
  }
  /*LWC compiler v2.13.3*/


}

const TransformFunctions = {
  center(input, targetBox) {
    return Math.floor(input + 0.5 * targetBox.width);
  },

  right(input, targetBox) {
    return input + targetBox.width;
  },

  left(input) {
    return input;
  },

  bottom(input, targetBox) {
    return input + targetBox.height;
  }

};
const Transformers = {
  top: TopTransformer,
  bottom: BottomTransFormer,
  center: CenterTransformer,
  middle: MiddleTransformer,
  left: LeftTransformer,
  right: RightTransformer,
  below: BelowTransformer,
  'bounding box': BoundingBoxTransformer,
  'shrinking box': ShrinkingBoxTransformer,
  'inverse bounding box': InverseBoundingBoxTransformer,
  default: Transformer
};
function toTransformFunctions(value) {
  return TransformFunctions[value] || TransformFunctions.left;
}

class TransformBuilder {
  type(value) {
    this._type = value;
    return this;
  }

  align(horizontal, vertical) {
    this._transformX = toTransformFunctions(horizontal);
    this._transformY = toTransformFunctions(vertical);
    return this;
  }

  pad(value) {
    this._pad = parseInt(value, 10);
    return this;
  }

  boxDirections(value) {
    this._boxDirections = value;
    return this;
  }

  build() {
    const AConstructor = Transformers[this._type] ? Transformers[this._type] : Transformers[Direction.Default];
    return new AConstructor(this._pad || 0, this._boxDirections || {}, this._transformX || toTransformFunctions(Direction.left), this._transformY || toTransformFunctions(Direction.left));
  }

}

class Constraint {
  constructor(type, config) {
    const {
      target,
      element,
      pad,
      boxDirections
    } = config;
    const {
      horizontal,
      vertical
    } = config.targetAlign;
    this._element = element;
    this._targetElement = target;
    this.destroyed = false;
    this._transformer = new TransformBuilder().type(type).align(horizontal, vertical).pad(pad).boxDirections(boxDirections).build();
  }

  detach() {
    this._disabled = true;
  }

  attach() {
    this._disabled = false;
  }

  computeDisplacement() {
    if (!this._disabled) {
      this._targetElement.refresh();

      this._element.refresh();

      this._pendingBox = this._transformer.transform(this._targetElement, this._element);
    }

    return this;
  }

  computePosition() {
    const el = this._element;

    if (!this._disabled) {
      Object.keys(this._pendingBox).forEach(key => {
        el.setDirection(key, this._pendingBox[key]);
      });
    }

    return this;
  }

  destroy() {
    this._element.release();

    this._targetElement.release();

    this._disabled = true;
    this.destroyed = true;
  }

}

class ElementProxy {
  constructor(el, id) {
    this.id = id;
    this.width = 0;
    this.height = 0;
    this.left = 0;
    this.top = 0;
    this.right = 0;
    this.bottom = 0;
    this._dirty = false;
    this._node = null;
    this._releaseCb = null;

    if (!el) {
      throw new Error('Element missing');
    } // W-3262919
    // for some reason I cannot figure out sometimes the
    // window, which clearly a window object, is not the window object
    // this will correct that. It might be related to locker


    if (WindowManager.isWindow(el)) {
      el = WindowManager.window;
    }

    this._node = el;
    this.setupObserver();
    this.refresh();
  }

  setupObserver() {
    // this check is because phantomjs does not support
    // mutation observers. The consqeuence here
    // is that any browser without mutation observers will
    // fail to update dimensions if they changwe after the proxy
    // is created and the proxy is not not refreshed
    if (WindowManager.MutationObserver && !this._node.isObserved) {
      // Use mutation observers to invalidate cache. It's magic!
      this._observer = new WindowManager.MutationObserver(this.refresh.bind(this)); // do not observe the window

      if (!WindowManager.isWindow(this._node)) {
        this._observer.observe(this._node, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });

        this._node.isObserved = true;
      }
    }
  }

  setReleaseCallback(cb, scope) {
    const scopeObj = scope || this;
    this._releaseCb = cb.bind(scopeObj);
  }

  checkNodeIsInDom() {
    // if underlying DOM node is gone,
    // this proxy should be released
    if (!isInDom(this._node)) {
      return false;
    }

    return true;
  }

  refresh() {
    const w = WindowManager.window;

    if (!this.isDirty()) {
      if (!this.checkNodeIsInDom()) {
        return this.release();
      }

      let box, x, scrollTop, scrollLeft;

      if (typeof w.pageYOffset !== 'undefined') {
        scrollTop = w.pageYOffset;
        scrollLeft = w.pageXOffset;
      } else {
        scrollTop = w.scrollY;
        scrollLeft = w.scrollX;
      }

      if (!WindowManager.isWindow(this._node)) {
        // force paint
        // eslint-disable-next-line no-unused-vars
        this._node.offsetHeight;
        box = this._node.getBoundingClientRect(); // not using integers causes weird rounding errors
        // eslint-disable-next-line guard-for-in

        for (x in box) {
          this[x] = Math.floor(box[x]);
        }

        this.top = Math.floor(this.top + scrollTop);
        this.bottom = Math.floor(this.top + box.height);
        this.left = Math.floor(this.left + scrollLeft);
        this.right = Math.floor(this.left + box.width);
      } else {
        box = {};
        this.width = WindowManager.documentElement.clientWidth;
        this.height = WindowManager.documentElement.clientHeight;
        this.left = scrollLeft;
        this.top = scrollTop;
        this.right = WindowManager.documentElement.clientWidth + scrollLeft;
        this.bottom = WindowManager.documentElement.clientHeight;
      }

      this._dirty = false;
    }

    return this._dirty;
  }

  getNode() {
    return this._node;
  }

  isDirty() {
    return this._dirty;
  }

  bake() {
    const w = WindowManager.window;

    const absPos = this._node.getBoundingClientRect();

    const style = w.getComputedStyle(this._node) || this._node.style;

    const hasPageOffset = typeof w.pageYOffset !== 'undefined';
    const scrollTop = hasPageOffset ? w.pageYOffset : w.scrollY;
    const scrollLeft = hasPageOffset ? w.pageXOffset : w.scrollX;
    const originalLeft = style.left.match(/auto|fixed/) ? '0' : parseInt(style.left.replace('px', ''), 10);
    const originalTop = style.top.match(/auto|fixed/) ? '0' : parseInt(style.top.replace('px', ''), 10);
    let leftDif = Math.round(this.left - (absPos.left + scrollLeft));
    const topDif = this.top - (absPos.top + scrollTop);
    const viewPortWidth = w.innerWidth || document.body.clientWidth;
    let rightPos = parseInt(style.right, 10);

    if (originalLeft + leftDif + parseInt(style.width, 10) > viewPortWidth && rightPos <= 0) {
      rightPos = rightPos < 0 ? -rightPos : leftDif;
      this._node.style.right = -rightPos + 'px';
      leftDif = 0;
    }

    this._node.style.left = `${originalLeft + leftDif}px`;
    this._node.style.top = `${originalTop + topDif}px`;

    if (this._restoreSize) {
      // Only store the first height/width which is the original height/width.
      if (this.originalHeight === undefined) {
        this.originalHeight = this._node.style.height;
      }

      if (this.originalWidth === undefined) {
        this.originalWidth = this._node.style.width;
      }

      this._node.style.width = `${this.width}px`;
      this._node.style.height = `${this.height}px`;
    }

    this._dirty = false;
  }

  setDirection(direction, val) {
    this[direction] = val;
    this._dirty = true; // if size is changed, should restore the original size.

    if (direction === 'height' || direction === 'width') {
      this._restoreSize = true;
    }
  }

  release() {
    if (this._restoreSize) {
      this._node.style.width = this.originalWidth;
      this._node.style.height = this.originalHeight;

      if (this._removeMinHeight) {
        this._node.style.minHeight = '';
      }
    }

    if (this._releaseCb) {
      this._releaseCb(this);
    } // Due to https://github.com/salesforce/lwc/pull/1423
    // require to call disconnect explicitly.


    if (this._observer) {
      this._observer.disconnect();

      this._observer = null;
    }
  }

  querySelectorAll(selector) {
    return this._node.querySelectorAll(selector);
  }

}

class ProxyCache {
  constructor() {
    this.proxyCache = {};
  }

  get count() {
    return Object.keys(this.proxyCache).length;
  }

  releaseOrphanProxies() {
    for (const proxy in this.proxyCache) {
      if (!this.proxyCache[proxy].el.checkNodeIsInDom()) {
        this.proxyCache[proxy].el.release();
      }
    }
  }

  bakeOff() {
    for (const proxy in this.proxyCache) {
      if (this.proxyCache[proxy].el.isDirty()) {
        this.proxyCache[proxy].el.bake();
      }
    }
  }

  getReferenceCount(proxy) {
    const id = proxy.id;

    if (!id || !this.proxyCache[id]) {
      return 0;
    }

    return this.proxyCache[id].refCount;
  }

  release(proxy) {
    const proxyInstance = this.proxyCache[proxy.id];

    if (proxyInstance) {
      --proxyInstance.refCount;
    }

    if (proxyInstance && proxyInstance.refCount <= 0) {
      delete this.proxyCache[proxy.id];
    }
  }

  reset() {
    this.proxyCache = {};
  }

  create(element) {
    let key = 'window';

    if (!WindowManager.isWindow(element)) {
      key = element ? element.getAttribute(POSITION_ATTR_NAME) : null; // 1 - Node.ELEMENT_NODE, 11 - Node.DOCUMENT_FRAGMENT_NODE

      assert(key && element.nodeType && (element.nodeType !== 1 || element.nodeType !== 11), `Element Proxy requires an element and has property ${POSITION_ATTR_NAME}`);
    }

    if (this.proxyCache[key]) {
      this.proxyCache[key].refCount++;
      return this.proxyCache[key].el;
    }

    const newProxy = new ElementProxy(element, key);
    newProxy.setReleaseCallback(release, newProxy);
    this.proxyCache[key] = {
      el: newProxy,
      refCount: 1
    }; // run GC

    timeout(0).then(() => {
      this.releaseOrphanProxies();
    });
    return this.proxyCache[key].el;
  }

}

registerDecorators(ProxyCache, {
  fields: ["proxyCache"]
});

const elementProxyCache = new ProxyCache();
function bakeOff() {
  elementProxyCache.bakeOff();
}
function release(proxy) {
  return elementProxyCache.release(proxy);
}
function createProxy(element) {
  return elementProxyCache.create(element);
}

class RepositionQueue {
  constructor() {
    this.callbacks = [];
    this.repositionScheduled = false;
    this._constraints = [];
    this.timeoutId = 0;
    this.lastIndex = getZIndexBaseline();
    this.eventsBound = false;
  }

  get nextIndex() {
    return this.lastIndex++;
  }

  get constraints() {
    return this._constraints;
  }

  set constraints(value) {
    this._constraints = this._constraints.concat(value);
  }

  dispatchRepositionCallbacks() {
    while (this.callbacks.length > 0) {
      this.callbacks.shift()();
    }
  }

  add(callback) {
    if (typeof callback === 'function') {
      this.callbacks.push(callback);
      return true;
    }

    return false;
  }

  scheduleReposition(callback) {
    if (this.timeoutId === 0) {
      // eslint-disable-next-line @lwc/lwc/no-async-operation
      this.timeoutId = setTimeout(() => {
        this.reposition(callback);
      }, 10);
    }
  }

  reposition(callback) {
    // all the callbacks will be called
    if (typeof callback === 'function') {
      this.callbacks.push(callback);
    } // this is for throttling


    clearTimeout(this.timeoutId);
    this.timeoutId = 0; // this semaphore is to make sure
    // if reposition is called twice within one frame
    // we only run this once

    if (!this.repositionScheduled) {
      // eslint-disable-next-line @lwc/lwc/no-async-operation
      requestAnimationFrame(() => {
        this.repositionScheduled = false; // this must be executed in order or constraints
        // will behave oddly

        this._constraints = this._constraints.filter(constraint => {
          if (!constraint.destroyed) {
            constraint.computeDisplacement().computePosition();
            return true;
          }

          return false;
        });
        bakeOff();
        this.dispatchRepositionCallbacks();
      });
      this.repositionScheduled = true;
    }
  }

  get repositioning() {
    if (!this._reposition) {
      this._reposition = this.scheduleReposition.bind(this);
    }

    return this._reposition;
  }

  bindEvents() {
    if (!this.eventsBound) {
      window.addEventListener('resize', this.repositioning);
      window.addEventListener('scroll', this.repositioning);
      this.eventsBound = true;
    }
  }

  detachEvents() {
    window.removeEventListener('resize', this.repositioning);
    window.removeEventListener('scroll', this.repositioning);
    this.eventsBound = false;
  }

  rebase(index) {
    if (this.lastIndex <= index) {
      this.lastIndex = index + 1;
    }
  }

}

registerDecorators(RepositionQueue, {
  fields: ["callbacks", "repositionScheduled", "_constraints", "timeoutId", "lastIndex", "eventsBound"]
});

const positionQueue = new RepositionQueue();
function scheduleReposition(callback) {
  positionQueue.scheduleReposition(callback);
}
function bindEvents() {
  positionQueue.bindEvents();
}
function addConstraints(list) {
  positionQueue.constraints = list;
}
function reposition(callback) {
  positionQueue.reposition(callback);
}
function nextIndex() {
  return positionQueue.nextIndex;
}
function rebaseIndex(index) {
  return positionQueue.rebase(index);
}

class Relationship {
  constructor(config, constraintList, scrollableParent, observer) {
    this.config = config;
    this.constraintList = constraintList;
    this.scrollableParent = scrollableParent;
    this.observer = observer;
  }

  disable() {
    this.constraintList.forEach(constraintToDisable => {
      constraintToDisable.detach();
    });
  }

  enable() {
    this.constraintList.forEach(constraintToEnable => {
      constraintToEnable.attach();
    });
  }

  destroy() {
    if (this.config.removeListeners) {
      this.config.removeListeners();
      this.config.removeListeners = undefined;
    }

    while (this.constraintList.length > 0) {
      this.constraintList.pop().destroy();
    } // Clean up node appended to body of dom


    if (this.config.appendToBody && this.config.element) {
      // eslint-disable-next-line @lwc/lwc/no-document-query
      const nodeToRemove = document.querySelector(`[${POSITION_ATTR_NAME}="${this.config.element.getAttribute(POSITION_ATTR_NAME)}"]`);

      if (nodeToRemove) {
        nodeToRemove.parentNode.removeChild(nodeToRemove);
      }
    } // Due to https://github.com/salesforce/lwc/pull/1423
    // require to call disconnect explicitly.


    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  reposition() {
    return new Promise(resolve => {
      reposition(() => {
        resolve();
      });
    });
  }

}

const OVERLAY_TYPE = {
  NONE: 'none',
  MODAL: 'uiModal',
  DIALOG: 'lightning-dialog',
  POPOVER: 'lightning-popover',
  PANEL: 'uiPanel'
};
function isOverlay(element) {
  const isDialog = element.localName === OVERLAY_TYPE.DIALOG;

  if (isDialog) {
    return OVERLAY_TYPE.DIALOG;
  }

  const isPopover = element.localName === OVERLAY_TYPE.POPOVER;

  if (isPopover) {
    return OVERLAY_TYPE.POPOVER;
  }

  const isModal = element.classList && element.classList.contains(OVERLAY_TYPE.MODAL);

  if (isModal) {
    return OVERLAY_TYPE.MODAL;
  }

  const isPanel = element.classList && element.classList.contains(OVERLAY_TYPE.PANEL);

  if (isPanel) {
    return OVERLAY_TYPE.PANEL;
  }

  return OVERLAY_TYPE.NONE;
}

function isInsideOverlay(element) {
  if (!element) {
    return {
      isInside: false,
      type: null,
      overlay: null
    };
  }

  const type = isOverlay(element);

  if (type !== OVERLAY_TYPE.NONE) {
    return {
      isInside: true,
      type,
      overlay: element
    };
  }

  if (!element.parentNode) {
    return {
      isInside: false,
      type: null,
      overlay: null
    };
  }

  return isInsideOverlay(isShadowRoot(element.parentNode) ? element.parentNode.host : element.parentNode);
}

class OverlayDetector {
  constructor(element) {
    this._element = element;
    this._detection = isInsideOverlay(this._element) || {
      isInside: false,
      overlay: null
    };
  }

  get isInsideModal() {
    return this.isInside && (this._detection.type === OVERLAY_TYPE.MODAL || this._detection.type === OVERLAY_TYPE.DIALOG);
  }

  get isInside() {
    return this._detection.isInside;
  }

  get overlay() {
    return this._detection.overlay;
  }

}

const DEFAULT_MIN_HEIGHT = '1.875rem';

function setupObserver(config, scrollableParent) {
  const observedElement = config.element;
  let observer = null;

  if (WindowManager.MutationObserver && !observedElement.isObserved) {
    observer = new WindowManager.MutationObserver(() => {});
    observer.observe(observedElement, {
      attributes: true,
      subtree: true,
      childList: true
    });
    observedElement.isObserved = true;
  }

  if (scrollableParent) {
    scrollableParent.addEventListener('scroll', scheduleReposition);

    config.removeListeners = () => {
      scrollableParent.removeEventListener('scroll', scheduleReposition);
    };
  }

  return observer;
}

function validateConfig(config) {
  assert(config.element && isDomNode(config.element), 'Element is undefined or missing, or not a Dom Node');
  assert(config.target && (WindowManager.isWindow(config.target) || isDomNode(config.target)), 'Target is undefined or missing');
}

function createRelationship(originalConfig, disableReposition, eventComposedPath) {
  bindEvents();
  let scrollableParent = getScrollableParent(getPositionTarget(originalConfig.target), WindowManager.window);

  if (!scrollableParent && eventComposedPath) {
    scrollableParent = getScrollableParentFromEventPath(eventComposedPath);
  }

  const config = normalizeConfig(scrollableParent, originalConfig);

  if (config.alignWidth && config.element.style.position === 'fixed') {
    config.element.style.width = config.target.getBoundingClientRect().width + 'px';
  }

  const constraintList = []; // This observer and the test for scrolling children
  // is so that if a panel contains a scroll we do not
  // proxy the events to the "parent"  (actually the target's parent)

  const observer = setupObserver(config, scrollableParent);

  if (config.appendToBody) {
    document.body.appendChild(config.element);
  }

  config.element = createProxy(config.element);
  config.target = createProxy(config.target); // Add horizontal constraint.

  const horizontalConfig = Object.assign({}, config);

  if (horizontalConfig.padLeft !== undefined) {
    horizontalConfig.pad = horizontalConfig.padLeft;
  } // Add vertical constraint.


  const verticalConfig = Object.assign({}, config);

  if (verticalConfig.padTop !== undefined) {
    verticalConfig.pad = verticalConfig.padTop;
  }

  constraintList.push(new Constraint(mapToHorizontal(config.align.horizontal), horizontalConfig));
  constraintList.push(new Constraint(mapToVertical(config.align.vertical), verticalConfig));
  const autoShrink = config.autoShrink.height || config.autoShrink.width;

  if (config.scrollableParentBound && scrollableParent) {
    const parent = normalizeElement(scrollableParent);
    const boxConfig = {
      element: config.element,
      enabled: config.enabled,
      target: createProxy(parent),
      align: {},
      targetAlign: {},
      pad: 3,
      boxDirections: {
        top: true,
        bottom: true,
        left: true,
        right: true
      }
    };

    if (autoShrink) {
      const style = boxConfig.element.getNode().style;

      if (!style.minHeight) {
        style.minHeight = config.minHeight;
        boxConfig.element._removeMinHeight = true;
      }

      boxConfig.boxDirections = {
        top: !!config.autoShrink.height,
        bottom: !!config.autoShrink.height,
        left: !!config.autoShrink.width,
        right: !!config.autoShrink.width
      };
      constraintList.push(new Constraint('shrinking box', boxConfig));
    } else {
      constraintList.push(new Constraint('bounding box', boxConfig));
    }
  }

  if (config.keepInViewport) {
    constraintList.push(new Constraint('bounding box', {
      element: config.element,
      enabled: config.enabled,
      target: createProxy(window),
      align: {},
      targetAlign: {},
      pad: 3,
      boxDirections: {
        top: true,
        bottom: true,
        left: true,
        right: true
      }
    }));
  }

  addConstraints(constraintList);

  if (!disableReposition) {
    reposition();
  }

  return new Relationship(config, constraintList, scrollableParent, observer);
}

function isAutoFlipHorizontal(config) {
  return config.autoFlip || config.autoFlipHorizontal;
}

function isAutoFlipVertical(config) {
  return config.autoFlip || config.autoFlipVertical;
}

function normalizeAlignments(config, flipConfig) {
  const align = {
    horizontal: config.align.horizontal,
    vertical: config.align.vertical
  };
  const targetAlign = {
    horizontal: config.targetAlign.horizontal,
    vertical: config.targetAlign.vertical
  }; // Horizontal alignments flip for RTL languages.

  if (document.dir === 'rtl') {
    align.horizontal = flipDirection(align.horizontal);
    targetAlign.horizontal = flipDirection(targetAlign.horizontal);
  } // When using the autoFlip flags with center alignment, we change the element alignment to fit
  // within the viewport when it's detected that it overflows the edge of the viewport.


  let vFlip = false;

  if (isAutoFlipVertical(config)) {
    if (align.vertical === Direction.Bottom) {
      vFlip = !flipConfig.hasSpaceAbove && flipConfig.hasSpaceBelow;
    } else if (align.vertical === Direction.Top) {
      vFlip = flipConfig.hasSpaceAbove && !flipConfig.hasSpaceBelow;
    } else if (align.vertical === Direction.Center) {
      if (flipConfig.centerOverflow.top && !flipConfig.centerOverflow.bottom) {
        align.vertical = targetAlign.vertical = Direction.Top;
      } else if (flipConfig.centerOverflow.bottom && !flipConfig.centerOverflow.top) {
        align.vertical = targetAlign.vertical = Direction.Bottom;
      }
    }
  }

  let hFlip = false;

  if (isAutoFlipHorizontal(config)) {
    if (align.horizontal === Direction.Left) {
      hFlip = flipConfig.shouldAlignToRight && !flipConfig.shouldAlignToLeft;
    } else if (align.horizontal === Direction.Right) {
      hFlip = flipConfig.shouldAlignToLeft && !flipConfig.shouldAlignToRight;
    } else if (align.horizontal === Direction.Center) {
      if (flipConfig.centerOverflow.left && !flipConfig.centerOverflow.right) {
        align.horizontal = targetAlign.horizontal = Direction.Left;
      } else if (flipConfig.centerOverflow.right && !flipConfig.centerOverflow.left) {
        align.horizontal = targetAlign.horizontal = Direction.Right;
      }
    }
  }

  return {
    align: {
      horizontal: hFlip ? flipDirection(align.horizontal) : normalizeDirection(align.horizontal, Direction.Left),
      vertical: vFlip ? flipDirection(align.vertical) : normalizeDirection(align.vertical, Direction.Top)
    },
    targetAlign: {
      horizontal: hFlip ? flipDirection(targetAlign.horizontal) : normalizeDirection(targetAlign.horizontal, Direction.Left),
      vertical: vFlip ? flipDirection(targetAlign.vertical) : normalizeDirection(targetAlign.vertical, Direction.Bottom)
    }
  };
}

function normalizeConfig(parent, config) {
  config.align = config.align || {};
  config.targetAlign = config.targetAlign || {};
  const flipConfig = checkFlipPossibility(config.overlay.isInside ? null : parent, // For modal/panel, dialog/popover, should always popup.
  // And consider window is the viewport, ignore scrollable parent.
  // Otherwise, when stay on flat page, should use scrollable parent as viewpoint.
  config.element, config.target, config.leftAsBoundary);
  const {
    align,
    targetAlign
  } = normalizeAlignments(config, flipConfig); // When inside modal, element may expand out of the viewport and be cut off.
  // So if inside modal, and don't have enough space above or below, will add bounding box rule.
  // IMPORTANT: config.isInsideModal is for element, not target.

  if (config.isInsideModal && !flipConfig.hasSpaceAbove && !flipConfig.hasSpaceBelow) {
    config.scrollableParentBound = true;
  }

  return {
    target: config.target,
    element: config.element,
    align,
    targetAlign,
    alignWidth: config.alignWidth,
    scrollableParentBound: config.scrollableParentBound,
    keepInViewport: config.keepInViewport,
    pad: config.pad,
    padTop: config.padTop,
    padLeft: config.padLeft,
    autoShrink: {
      height: config.autoShrink || config.autoShrinkHeight,
      width: config.autoShrink || config.autoShrinkWidth
    },
    minHeight: config.minHeight || DEFAULT_MIN_HEIGHT
  };
}

function toElement(root, target) {
  if (target && typeof target === 'string') {
    return root.querySelector(target);
  } else if (target && typeof target === 'function') {
    return target();
  }

  return target;
}

function startPositioning(root, config, disableReposition) {
  assert(root, 'Root is undefined or missing');
  assert(config, 'Config is undefined or missing');
  const node = normalizeElement(root);
  const target = toElement(node, config.target);
  const element = toElement(node, config.element); // when target/element is selector, there is chance, dom isn't present anymore.

  if (!target || !element) {
    return null;
  }

  config.target = normalizeElement(target);
  config.element = normalizeElement(element); // Check if element is inside modal overlay.

  const result = new OverlayDetector(config.element); // IMPORTANT: config.isInsideModal will be used to decide if element should use modal as viewport.

  config.isInsideModal = result.isInsideModal; // stackManager will increase the zIndex too.
  // if detect inside modal, read modal zIndex and rebase to it.

  if (config.isInsideModal && result.overlay) {
    const index = parseInt(result.overlay.style.zIndex, 10);
    rebaseIndex(index);
  } // Also should check if target inside modal too.


  const targetResult = new OverlayDetector(config.target); // if detect target is inside modal, read modal zindex and rebase to it.
  // for example, lightning-helptext, lightning-primitive-bubble by default is global.
  // So it won't be in any modal. For other use case, target and element is inside same modal.

  if (targetResult.isInsideModal && targetResult.overlay) {
    const index = parseInt(targetResult.overlay.style.zIndex, 10);
    rebaseIndex(index);
  } // Element absolute / fixed must be set prior to getBoundingClientRect call or
  // the scrollable parent (usually due to uiModal/uiPanel) will push the page down.


  const overlayCheck = normalizePosition(config.element, result, nextIndex(), config.target, config.alignWidth);
  config.element = overlayCheck.element;
  config.overlay = overlayCheck.overlay;
  validateConfig(config);
  const relationship = createRelationship(config, disableReposition); // Scroll regions within a shadowRoot are skipped while traversing parent nodes.
  // Components that contain a scroll region in their template
  // must handle the `privatescrollablecontainer` event and execute the callback with the event path.
  // The event path is used to find the scrollable parent and the constraints
  // for positioning are set according to this element.
  // Usage in parent component with scroll region:
  // addEventListener('privatescrollablecontainer', (event) => {
  //     const { callback } = event.detail;
  //     callback(event.composedPath());
  //     event.stopPropagation();
  // });

  root.dispatchEvent(new CustomEvent('privatescrollablecontainer', {
    composed: true,
    bubbles: true,
    detail: {
      callback: eventComposedPath => {
        var updatedReltnWrtoScrollParent = createRelationship(config, disableReposition, eventComposedPath);
        relationship.config.align.horizontal = updatedReltnWrtoScrollParent.config.align.horizontal;
        relationship.config.align.vertical = updatedReltnWrtoScrollParent.config.align.vertical;
      }
    }
  }));
  return relationship;
}
function stopPositioning(relationship) {
  if (relationship) {
    relationship.destroy();
  }
}
class AutoPosition {
  constructor(root) {
    this._autoPositionUpdater = null;
    this._root = root;
  }

  start(config) {
    return requestAnimationFrameAsPromise().then(() => {
      let promise = Promise.resolve();

      if (!this._autoPositionUpdater) {
        this._autoPositionUpdater = startPositioning(this._root, config);
      } else {
        promise = promise.then(() => {
          return this._autoPositionUpdater.reposition();
        });
      }

      return promise.then(() => {
        return this._autoPositionUpdater;
      });
    });
  }

  stop() {
    if (this._autoPositionUpdater) {
      stopPositioning(this._autoPositionUpdater);
      this._autoPositionUpdater = null;
    }

    return Promise.resolve();
  }

}

registerDecorators(AutoPosition, {
  fields: ["_autoPositionUpdater"]
});

const stc0$7 = {
  "slds-popover__body": true
};
const stc1$4 = {
  lwc: {
    dom: "manual"
  }
};
function tmpl$7($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_element("div", {
    classMap: stc0$7,
    context: stc1$4,
    key: 0,
    on: {
      "mouseleave": _m0 || ($ctx._m0 = api_bind($cmp.handleMouseLeave))
    }
  })];
  /*LWC compiler v2.13.3*/
}
var _tmpl$7 = registerTemplate(tmpl$7);
tmpl$7.stylesheets = [];

const DEFAULT_ALIGN = {
  horizontal: 'left',
  vertical: 'bottom'
};

class LightningPrimitiveBubble extends LightningElement {
  constructor(...args) {
    super(...args);
    this.state = {
      visible: false,
      contentId: ''
    };
    this.divElement = void 0;
  }

  get contentId() {
    return this.state.contentId;
  }

  set contentId(value) {
    this.state.contentId = value;

    if (this.state.inDOM) {
      this.divEl.setAttribute('id', this.state.contentId);
    }
  }

  connectedCallback() {
    this.updateClassList();
    this.setAttribute('role', 'tooltip');
    this.state.inDOM = true;
  }

  disconnectedCallback() {
    this.state.inDOM = false;
  }

  renderedCallback() {
    // set content manually once rendered
    // - this is required to avoid the content update being in the wrong 'tick'
    this.setContentManually();
    this.setIdManually();
  }

  set content(value) {
    this.state.content = value;

    if (this.state.inDOM) {
      this.setContentManually();
    }
  }

  get content() {
    return this.state.content || '';
  }

  get align() {
    return this.state.align || DEFAULT_ALIGN;
  }

  set align(value) {
    this.state.align = value;
    this.updateClassList();
  }

  get visible() {
    return this.state.visible;
  }

  set visible(value) {
    this.state.visible = value;
    this.updateClassList();
  }

  setIdManually() {
    this.setAttribute('id', this.state.contentId);
  } // manually set the content value


  setContentManually() {
    /* manipulate DOM directly */
    this.template.querySelector('.slds-popover__body').textContent = this.state.content;
  } // compute class value for this bubble


  updateClassList() {
    const classes = classSet('slds-popover').add('slds-popover_tooltip'); // show or hide bubble

    classes.add({
      'slds-rise-from-ground': this.visible,
      'slds-fall-into-ground': !this.visible
    }); // apply the proper nubbin CSS class

    const {
      horizontal,
      vertical
    } = this.align;
    classes.add({
      'slds-nubbin_top-left': horizontal === 'left' && vertical === 'top',
      'slds-nubbin_top-right': horizontal === 'right' && vertical === 'top',
      'slds-nubbin_bottom-left': horizontal === 'left' && vertical === 'bottom',
      'slds-nubbin_bottom-right': horizontal === 'right' && vertical === 'bottom',
      'slds-nubbin_bottom': horizontal === 'center' && vertical === 'bottom',
      'slds-nubbin_top': horizontal === 'center' && vertical === 'top',
      'slds-nubbin_left': horizontal === 'left' && vertical === 'center',
      'slds-nubbin_right': horizontal === 'right' && vertical === 'center'
    });
    classListMutation(this.classList, classes);
  }

  handleMouseLeave() {
    this.visible = false;
  }
  /*LWC compiler v2.13.3*/


}

registerDecorators(LightningPrimitiveBubble, {
  publicProps: {
    contentId: {
      config: 3
    },
    content: {
      config: 3
    },
    align: {
      config: 3
    },
    visible: {
      config: 3
    }
  },
  track: {
    state: 1
  },
  fields: ["divElement"]
});

var LightningPrimitiveBubble$1 = registerComponent(LightningPrimitiveBubble, {
  tmpl: _tmpl$7
});

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty$1(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const BUBBLE_PREFIX = `salesforce-lightning-tooltip-bubble`;
const BUBBLE_ID = `${BUBBLE_PREFIX}_${guid()}`;

function isResizeObserverSupported() {
  return window.ResizeObserver != null;
}

function buildResizeObserver(callback) {
  if (isResizeObserverSupported()) {
    return new ResizeObserver(callback);
  }

  return {
    observe() {},

    unobserve() {}

  };
}
/**
 * Shared instance of a primitive bubble used as a tooltip by most components. This was originally
 * defined in the helptext component which is where the minWidth style came from.
 * TODO: We may want to revisit the minWidth style with the PO and/or UX.
 */


let CACHED_BUBBLE_ELEMENT;

function getCachedBubbleElement() {
  if (!CACHED_BUBBLE_ELEMENT) {
    CACHED_BUBBLE_ELEMENT = createElement('lightning-primitive-bubble', {
      is: LightningPrimitiveBubble$1
    });
    CACHED_BUBBLE_ELEMENT.contentId = BUBBLE_ID;
    CACHED_BUBBLE_ELEMENT.style.position = 'absolute';
    CACHED_BUBBLE_ELEMENT.style.minWidth = '75px'; // hide bubble element on create

    CACHED_BUBBLE_ELEMENT.classList.add('slds-hide');
    CACHED_BUBBLE_ELEMENT.addEventListener('transitionend', () => {
      // W-7201022 https://gus.lightning.force.com/lightning/r/ADM_Work__c/a07B00000079kNjIAI/view
      // The tooltip uses absolute positioning and visibility gets set to hidden to
      // hide it from view which means it's still part of the document layout.
      // If we don't hide the bubble it could stay on the page and accidentally scroll pages
      // in the console app after a tab switch, especially when the tab content lengths differ.
      if (!CACHED_BUBBLE_ELEMENT.visible) {
        CACHED_BUBBLE_ELEMENT.classList.add('slds-hide');
      }
    });
  }

  return CACHED_BUBBLE_ELEMENT;
}

const ARIA_DESCRIBEDBY$1 = 'aria-describedby';
/**
 * Used as a position offset to compensate for the nubbin. The dimensions of the nubbin are not
 * included in the position library bounding box calculations. This is the size in pixels of the
 * nubbin.
 * TODO: We may want to measure this instead in cases it changes.
 */

const NUBBIN_SIZE = 16;
/**
 * Used in the calculation that moves the tooltip to a location that places the nubbin at the
 * center of the target element. This is the nubbin offset from the edge of the bubble in pixels
 * when using slds-nubbin_bottom-left or slds-nubbin_bottom-right.
 * TODO: We may want to measure this instead in case it changes.
 */

const NUBBIN_OFFSET = 24;
/**
 * Known tooltip types:
 * - info: used in cases where target already has click handlers such as button-icon
 * - toggle: used in cases where target only shows a tooltip such as helptext
 */

const TooltipType = {
  Info: 'info',
  Toggle: 'toggle'
};
/**
 * Allows us to attach a tooltip to components. Typical usage is as follows:
 * - Create an instance of Tooltip
 * - Call Tooltip.initialize() to add the appropriate listeners to the element that needs a tooltip
 * See buttonIcon and buttonMenu for example usage.
 */

class Tooltip {
  /**
   * A shared instance of primitiveBubble is used when an element is not specified in the config
   * object.
   * @param {string} value the content of the tooltip
   * @param {object} config specifies the root component, target element of the tooltip
   */
  constructor(value, config) {
    this._autoPosition = null;
    this._disabled = true;
    this._initialized = false;
    this._visible = false;
    this._config = {};
    assert(config.target, 'target for tooltip is undefined or missing');
    this.value = value;
    this._root = config.root;
    this._target = config.target;
    this._config = _objectSpread$1({}, config);
    this._config.align = config.align || {};
    this._config.targetAlign = config.targetAlign || {};
    this._type = normalizeString(config.type, {
      fallbackValue: TooltipType.Info,
      validValues: Object.values(TooltipType)
    }); // If a tooltip element is not given, fall back on the globally shared instance.

    this._element = config.element;

    if (!this._element) {
      this._element = getCachedBubbleElement;
      const bubbleElement = getCachedBubbleElement();

      if (bubbleElement.parentNode === null) {
        document.body.appendChild(bubbleElement);
      }
    }

    this.handleDocumentTouch = this.handleDocumentTouch.bind(this);
  }
  /**
   * Disables the tooltip.
   */


  detach() {
    this._disabled = true;
  }
  /**
   * Enables the tooltip.
   */


  attach() {
    this._disabled = false;
  }
  /**
   * Adds the appropriate event listeners to the target element to make the tooltip appear. Also
   * links the tooltip and target element via the aria-describedby attribute for screen readers.
   */


  initialize() {
    const target = this._target();

    if (!this._initialized && target) {
      switch (this._type) {
        case TooltipType.Toggle:
          this.addToggleListeners();
          break;

        case TooltipType.Info:
        default:
          this.addInfoListeners();
          break;
      }

      const ariaDescribedBy = normalizeAriaAttribute([target.getAttribute(ARIA_DESCRIBEDBY$1), this._element().contentId]);
      target.setAttribute(ARIA_DESCRIBEDBY$1, ariaDescribedBy);
      this._initialized = true;
    }
  }

  addInfoListeners() {
    const target = this._target();

    if (!this._initialized && target) {
      ['mouseenter', 'focus'].forEach(name => target.addEventListener(name, () => this.show())); // Unlike the tooltip in Aura, we want clicks and keys to dismiss the tooltip.

      ['mouseleave', 'blur', 'click', 'keydown'].forEach(name => target.addEventListener(name, event => this.hideIfNotSelfCover(event)));
    }
  }

  hideIfNotSelfCover(event) {
    if (event.type === 'mouseleave' && event.clientX && event.clientY) {
      // In any chance, if mouseleave is caused by tooltip itself, it would means
      // tooltip cover the target which mostly caused by dynamic resize of tooltip by CSS or JS.
      try {
        const elementMouseIsOver = document.elementFromPoint ? document.elementFromPoint(event.clientX, event.clientY) : null;

        if (elementMouseIsOver === this._element()) {
          if (!isResizeObserverSupported()) {
            this.startPositioning();
          }

          return;
        }
      } catch (ex) {// Jest Throw Exception
      }
    }

    this.hide();
  }

  handleDocumentTouch() {
    if (this._visible) {
      this.hide();
    }
  }

  addToggleListeners() {
    const target = this._target();

    if (!this._initialized && target) {
      target.addEventListener('touchstart', e => {
        e.stopPropagation();
        this.toggle();
      });
      ['mouseenter', 'focus'].forEach(name => target.addEventListener(name, () => this.show()));
      ['mouseleave', 'blur'].forEach(name => target.addEventListener(name, event => this.hideIfNotSelfCover(event)));
    }
  }

  get resizeObserver() {
    if (!this._resizeObserver) {
      this._resizeObserver = buildResizeObserver(() => {
        if (this._visible && this._autoPosition) {
          this.startPositioning();
        }
      });
    }

    return this._resizeObserver;
  }

  show() {
    if (this._disabled) {
      return;
    }

    this._visible = true;

    const tooltip = this._element();
    /* We only change the visibility of the cached bubble element here,
       for custom bubble elements, we expect them to react to `visible`
       property change */


    if (CACHED_BUBBLE_ELEMENT) {
      // Show cached bubble element
      CACHED_BUBBLE_ELEMENT.classList.remove('slds-hide');
    }

    tooltip.content = this._value;
    this.startPositioning();
    document.addEventListener('touchstart', this.handleDocumentTouch);
    this.resizeObserver.observe(tooltip);
  }

  hide() {
    this._visible = false;

    const tooltip = this._element();

    tooltip.visible = this._visible;
    this.stopPositioning();
    document.removeEventListener('touchstart', this.handleDocumentTouch);
    this.resizeObserver.unobserve(tooltip);
  }

  toggle() {
    if (this._visible) {
      this.hide();
    } else {
      this.show();
    }
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this._disabled = !value;
  }

  get initialized() {
    return this._initialized;
  }

  get visible() {
    return this._visible;
  }

  startPositioning() {
    if (!this._autoPosition) {
      this._autoPosition = new AutoPosition(this._root);
    } // The lightning-helptext component was originally left aligned.


    const align = {
      horizontal: this._config.align.horizontal || Direction.Left,
      vertical: this._config.align.vertical || Direction.Bottom
    };
    const targetAlign = {
      horizontal: this._config.targetAlign.horizontal || Direction.Left,
      vertical: this._config.targetAlign.vertical || Direction.Top
    }; // Pads the tooltip so its nubbin is at the center of the target element.

    const targetBox = this._target().getBoundingClientRect();

    const padLeft = targetBox.width * 0.5 - NUBBIN_OFFSET;

    this._autoPosition.start({
      target: this._target,
      element: this._element,
      align,
      targetAlign,
      autoFlip: true,
      padTop: NUBBIN_SIZE,
      padLeft
    }).then(autoPositionUpdater => {
      // The calculation above may have flipped the alignment of the tooltip. When the
      // tooltip changes alignment we need to update the nubbin class to have it draw in
      // the appropriate place.
      if (autoPositionUpdater) {
        const tooltip = this._element();

        tooltip.align = autoPositionUpdater.config.align;
        tooltip.visible = this._visible;
      }
    });
  }

  stopPositioning() {
    if (this._autoPosition) {
      this._autoPosition.stop();
    }
  }

}

registerDecorators(Tooltip, {
  fields: ["_autoPosition", "_disabled", "_initialized", "_visible", "_config"]
});

const DEFAULT_BUTTON_ALT_TEXT = labelButtonAlternativeText;
const DEFAULT_ICON_NAME = 'utility:info';
const DEFAULT_ICON_VARIANT = 'bare';
/**
 * An icon with a text popover used for tooltips.
 */

class LightningHelptext extends LightningElement {
  constructor(...args) {
    super(...args);
    this.state = {
      iconName: DEFAULT_ICON_NAME,
      iconVariant: DEFAULT_ICON_VARIANT,
      alternativeText: DEFAULT_BUTTON_ALT_TEXT
    };
    this._tooltip = null;
  }

  /**
   * Text to be shown in the popover.
   * @type {string}
   * @param {string} value - The plain text string for the tooltip
   */
  get content() {
    return this._tooltip ? this._tooltip.value : undefined;
  }

  set content(value) {
    if (this._tooltip) {
      this._tooltip.value = value;
    } else if (value) {
      // Note that because the tooltip target is a child element it may not be present in the
      // dom during initial rendering.
      this._tooltip = new Tooltip(value, {
        root: this,
        target: () => this.template.querySelector('button'),
        type: TooltipType.Toggle
      });

      this._tooltip.initialize();
    }
  }

  set iconName(value) {
    this.state.iconName = value;
  }
  /**
   * The Lightning Design System name of the icon used as the visible element.
   * Names are written in the format 'utility:info' where 'utility' is the category,
   * and 'info' is the specific icon to be displayed.
   * The default is 'utility:info'.
   * @type {string}
   * @param {string} value the icon name to use
   * @default utility:info
   */


  get iconName() {
    if (isValidName(this.state.iconName)) {
      return this.state.iconName;
    }

    return DEFAULT_ICON_NAME;
  }

  set iconVariant(value) {
    this.state.iconVariant = value;
  }
  /**
   * Changes the appearance of the icon.
   * Accepted variants include inverse, warning, error.
   * @type {string}
   * @param {string} value the icon variant to use
   * @default bare
   */


  get iconVariant() {
    // NOTE: Leaving a note here because I just wasted a bunch of time
    // investigating why both 'bare' and 'inverse' are supported in
    // lightning-primitive-icon. lightning-icon also has a deprecated
    // 'bare', but that one is synonymous to 'inverse'. This 'bare' means
    // that no classes should be applied. So this component needs to
    // support both 'bare' and 'inverse' while lightning-icon only needs to
    // support 'inverse'.
    return normalizeString(this.state.iconVariant, {
      fallbackValue: DEFAULT_ICON_VARIANT,
      validValues: ['bare', 'error', 'inverse', 'warning']
    });
  }
  /**
   * The assistive text for the button icon. The default is "Help".
   * Screen readers announce the assistive text and help text content as {alternativeText} button {content}.
   * If not set, screen readers announce "Help button {content}".
   * The text should describe the function of the icon, for example, "Show help text".
   *
   * @type {string}
   * @param {string} value The assistive text to set
   * @default Help
   */


  get alternativeText() {
    return this.state.alternativeText;
  }

  set alternativeText(value) {
    // typeof 'string' check prevents <lightning-helptext alternative-text>
    //   from setting 'true' as the a11y help text
    // lwc treats above alternative-text as: true (typeof 'boolean')
    //   we want to prevent 'true' or empty string as a11y text, instead default to 'Help'
    if (value && typeof value === 'string' && value.trim() !== '') {
      this.state.alternativeText = value;
    } else {
      // warn why they can't unset the value
      // eslint-disable-next-line no-console
      console.warn(`<lightning-helptext> Invalid alternativeText value: ${value}`);
    }
  }
  /**
   * Sets focus on the button.
   */


  focus() {
    this.template.querySelector('button').focus();
  }

  disconnectedCallback() {
    // W-6441609 helptext maybe destroyed first, and tooltip won't receive events to hide.
    if (this._tooltip && !this._tooltip.initialized) {
      this._tooltip.hide();
    }

    this._tooltip = null;
  }

  renderedCallback() {
    if (this._tooltip && !this._tooltip.initialized) {
      this._tooltip.initialize();
    }
  } // Get the classes to be applied to button based on the icon variant


  get computedButtonClass() {
    const classes = classSet('slds-button slds-button_icon');

    switch (this.iconVariant) {
      case 'error':
        classes.add('slds-button_icon-error');
        break;

      case 'warning':
        classes.add('slds-button_icon-warning');
        break;

      case 'inverse':
        classes.add('slds-button_icon-inverse');
        break;
    }

    return classes.toString();
  }
  /*LWC compiler v2.13.3*/


}

registerDecorators(LightningHelptext, {
  publicProps: {
    content: {
      config: 3
    },
    iconName: {
      config: 3
    },
    iconVariant: {
      config: 3
    },
    alternativeText: {
      config: 3
    }
  },
  publicMethods: ["focus"],
  track: {
    state: 1
  },
  fields: ["_tooltip"]
});

var _lightningHelptext = registerComponent(LightningHelptext, {
  tmpl: _tmpl$8
});

const stc0$6 = {
  "role": "status"
};
const stc1$3 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 1
};
const stc2$1 = {
  classMap: {
    "slds-spinner__dot-a": true
  },
  key: 2
};
const stc3$1 = {
  classMap: {
    "slds-spinner__dot-b": true
  },
  key: 3
};
function tmpl$6($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [api_element("div", {
    className: $cmp.computedClass,
    attrs: stc0$6,
    key: 0
  }, [$cmp.validAlternativeText ? api_element("span", stc1$3, [api_text(api_dynamic_text($cmp._altText))]) : null, api_element("div", stc2$1), api_element("div", stc3$1)])];
  /*LWC compiler v2.13.3*/
}
var _tmpl$6 = registerTemplate(tmpl$6);
tmpl$6.stylesheets = [];

/**
 * Displays an animated spinner.
 */

class LightningSpinner extends LightningElement {
  constructor(...args) {
    super(...args);
    this.alternativeText = void 0;
    this.size = 'medium';
    this.variant = void 0;
    this._altText = '';
  }

  connectedCallback() {
    this.classList.add('slds-spinner_container');
    this.template.addEventListener('mousewheel', this.stopScrolling);
    this.template.addEventListener('touchmove', this.stopScrolling);
  }

  renderedCallback() {
    // [W-10320761] We set the _altText in the next tick because screen readers are not reading out
    // the text when the text along the aria-live container is inserted into the DOM together.
    // It is only working when only aria-live container is setup on load and later the content changes
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    setTimeout(() => {
      this._altText = this.alternativeText;
    }, 0);
  }

  get normalizedVariant() {
    return normalizeString(this.variant, {
      fallbackValue: 'base',
      validValues: ['base', 'brand', 'inverse']
    });
  }

  get normalizedSize() {
    return normalizeString(this.size, {
      fallbackValue: 'medium',
      validValues: ['small', 'medium', 'large']
    });
  }

  get computedClass() {
    const {
      normalizedVariant,
      normalizedSize
    } = this;
    const classes = classSet('slds-spinner'); // add variant-specific class

    if (normalizedVariant !== 'base') {
      classes.add(`slds-spinner_${normalizedVariant}`);
    } // add size-specific class


    classes.add(`slds-spinner_${normalizedSize}`);
    return classes.toString();
  } // alternativeText validation


  get validAlternativeText() {
    const hasAlternativeText = !!this.alternativeText; // if we have an empty value output a console warning

    if (!hasAlternativeText) {
      // eslint-disable-next-line no-console
      console.warn(`<lightning-spinner> The alternativeText attribute should not be empty. Please add a description of what is causing the wait.`);
    }

    return hasAlternativeText;
  } // prevent scrolling


  stopScrolling(event) {
    event.preventDefault();
  }
  /*LWC compiler v2.13.3*/


}

registerDecorators(LightningSpinner, {
  publicProps: {
    alternativeText: {
      config: 0
    },
    size: {
      config: 0
    },
    variant: {
      config: 0
    }
  },
  fields: ["_altText"]
});

var _lightningSpinner = registerComponent(LightningSpinner, {
  tmpl: _tmpl$6
});

const stc0$5 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 2
};
function tmpl$5($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("button", {
    className: $cmp.computedButtonClass,
    attrs: {
      "disabled": $cmp.disabled ? "" : null,
      "name": $cmp.name,
      "title": $cmp.computedTitle,
      "accesskey": $cmp.computedAccessKey,
      "type": $cmp.normalizedType,
      "value": $cmp.value,
      "aria-label": $cmp.computedAriaLabel,
      "aria-expanded": $cmp.computedAriaExpanded,
      "aria-live": $cmp.computedAriaLive,
      "aria-atomic": $cmp.computedAriaAtomic,
      "aria-haspopup": $cmp.computedAriaHasPopup
    },
    key: 0,
    on: {
      "focus": _m0 || ($ctx._m0 = api_bind($cmp.handleFocus)),
      "blur": _m1 || ($ctx._m1 = api_bind($cmp.handleBlur))
    }
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": $cmp.iconName,
      "svgClass": $cmp.computedIconClass,
      "variant": "bare"
    },
    key: 1
  }), $cmp.alternativeText ? api_element("span", stc0$5, [api_text(api_dynamic_text($cmp.alternativeText))]) : null])];
  /*LWC compiler v2.13.3*/
}
var _tmpl$5 = registerTemplate(tmpl$5);
tmpl$5.stylesheets = [];

const stc0$4 = [];
function tmpl$4($api, $cmp, $slotset, $ctx) {
  return stc0$4;
  /*LWC compiler v2.13.3*/
}
var _tmpl$4 = registerTemplate(tmpl$4);
tmpl$4.stylesheets = [];

const ARIA_DESCRIBEDBY = 'aria-describedby';
const ARIA_CONTROLS = 'aria-controls';
const ARIA_LABELLEDBY = 'aria-labelledby';
/**
 * Primitive for button, buttonIcon and buttonIconStateful
 */

class LightningPrimitiveButton extends LightningElement {
  /**
   * Specifies whether this button should be displayed in a disabled state.
   * Disabled buttons can't be clicked. This value defaults to false.
   *
   * @type {boolean}
   * @default false
   */
  get disabled() {
    return this.state.disabled;
  }

  set disabled(value) {
    this.state.disabled = normalizeBoolean(value);
  }

  set accessKey(value) {
    this.state.accesskey = value;
  }
  /**
   * Specifies a shortcut key to activate or focus an element.
   *
   * @type {string}
   */


  get accessKey() {
    return this.state.accesskey;
  }

  get computedAccessKey() {
    return this.state.accesskey;
  }
  /**
   * Displays tooltip text when the mouse cursor moves over the element.
   *
   * @type {string}
   */


  get title() {
    return this.state.title;
  }

  set title(value) {
    this.state.title = value;
  }
  /**
   * Label describing the button to assistive technologies.
   *
   * @type {string}
   */


  get ariaLabel() {
    return this.state.ariaLabel;
  }

  set ariaLabel(value) {
    this.state.ariaLabel = value;
  }

  get computedAriaLabel() {
    return this.state.ariaLabel;
  }
  /**
   * Specifies the ID or list of IDs of the element or elements that
   * contain visible descriptive text to describe the button.
   */


  get ariaLabelledBy() {
    return this.state.ariaLabelledBy;
  }

  set ariaLabelledBy(value) {
    this.state.ariaLabelledBy = value;
    const button = this.template.querySelector('button');
    synchronizeAttrs(button, {
      [ARIA_LABELLEDBY]: value
    });
  }

  get computedAriaLabelledBy() {
    return this.state.ariaLabelledBy;
  }
  /**
   * A space-separated list of element IDs that provide descriptive labels for the button.
   *
   * @type {string}
   */


  get ariaDescribedBy() {
    return this.state.ariaDescribedBy;
  }

  set ariaDescribedBy(value) {
    this.state.ariaDescribedBy = value;
    const button = this.template.querySelector('button');
    synchronizeAttrs(button, {
      [ARIA_DESCRIBEDBY]: value
    });
  }
  /**
   * A space-separated list of element IDs whose presence or content is controlled by this button.
   *
   * @type {string}
   */


  get ariaControls() {
    return this.state.ariaControls;
  }

  set ariaControls(value) {
    this.state.ariaControls = value;
    const button = this.template.querySelector('button');
    synchronizeAttrs(button, {
      [ARIA_CONTROLS]: value
    });
  }
  /**
   * Indicates whether an element that the button controls is expanded or collapsed.
   * Valid values are 'true' or 'false'. The default value is undefined.
   *
   * @type {string}
   * @default undefined
   */


  get ariaExpanded() {
    return this.state.ariaExpanded;
  }

  set ariaExpanded(value) {
    this.state.ariaExpanded = normalizeString(value, {
      fallbackValue: undefined,
      validValues: ['true', 'false']
    });
  }

  get computedAriaExpanded() {
    return this.state.ariaExpanded || null;
  }

  set ariaLive(value) {
    this.state.ariaLive = value;
  }
  /**
   * Indicates that the button has an interactive popup element.
   * Valid values are 'true', 'dialog', 'menu', 'listbox', 'tree', and 'grid' based on ARIA 1.1 specifications.
   * The default value is undefined.
   *
   * @type {string}
   * @default undefined
   */


  get ariaHasPopup() {
    return this.state.ariaHasPopup;
  }

  set ariaHasPopup(value) {
    this.state.ariaHasPopup = normalizeString(value, {
      fallbackValue: undefined,
      validValues: ['true', 'dialog', 'menu', 'listbox', 'tree', 'grid']
    });
  }

  get computedAriaHasPopup() {
    return this.state.ariaHasPopup || null;
  }
  /**
   * Indicates that the button can be updated when it doesn't have focus.
   * Valid values are 'polite', 'assertive', or 'off'. The polite value causes assistive
   * technologies to notify users of updates at a low priority, generally without interrupting.
   * The assertive value causes assistive technologies to notify users immediately,
   * potentially clearing queued speech updates.
   *
   * @type {string}
   */


  get ariaLive() {
    return this.state.ariaLive;
  }

  get computedAriaLive() {
    return this.state.ariaLive;
  }
  /**
   * Indicates whether assistive technologies present all, or only parts of,
   * the changed region. Valid values are 'true' or 'false'.
   *
   * @type {string}
   */


  get ariaAtomic() {
    return this.state.ariaAtomic || null;
  }

  set ariaAtomic(value) {
    this.state.ariaAtomic = normalizeString(value, {
      fallbackValue: undefined,
      validValues: ['true', 'false']
    });
  }

  get computedAriaAtomic() {
    return this.state.ariaAtomic || null;
  }
  /**
   * Sets focus on the element.
   */


  focus() {}
  /**
   * Reserved for internal use only.
   * Describes the order of this element (first, middle or last) inside lightning-button-group.
   * @type {string}
   */


  constructor() {
    super(); // Workaround for an IE11 bug where click handlers on button ancestors
    // receive the click event even if the button element has the `disabled`
    // attribute set.

    this._initialized = false;
    this.state = {
      accesskey: null,
      ariaAtomic: null,
      ariaControls: null,
      ariaDescribedBy: null,
      ariaLabelledBy: null,
      ariaExpanded: null,
      ariaHasPopup: null,
      ariaLabel: null,
      ariaLive: null,
      disabled: false
    };
    this.groupOrder = '';

    if (isIE11) {
      this.template.addEventListener('click', event => {
        if (this.disabled) {
          event.stopImmediatePropagation();
        }
      });
    }
  }

  renderedCallback() {
    if (!this._initialized) {
      const button = this.template.querySelector('button');
      synchronizeAttrs(button, {
        [ARIA_CONTROLS]: this.state.ariaControls,
        [ARIA_DESCRIBEDBY]: this.state.ariaDescribedBy,
        [ARIA_LABELLEDBY]: this.state.ariaLabelledBy
      });
      this._initialized = true;
    }
  }

  get computedButtonClass() {
    const classes = classSet('slds-button');
    classes.add(buttonGroupOrderClass(this.groupOrder));
    return classes.toString();
  }
  /*LWC compiler v2.13.3*/


}

registerDecorators(LightningPrimitiveButton, {
  publicProps: {
    disabled: {
      config: 3
    },
    accessKey: {
      config: 3
    },
    title: {
      config: 3
    },
    ariaLabel: {
      config: 3
    },
    ariaLabelledBy: {
      config: 3
    },
    ariaDescribedBy: {
      config: 3
    },
    ariaControls: {
      config: 3
    },
    ariaExpanded: {
      config: 3
    },
    ariaHasPopup: {
      config: 3
    },
    ariaLive: {
      config: 3
    },
    ariaAtomic: {
      config: 3
    },
    groupOrder: {
      config: 0
    }
  },
  publicMethods: ["focus"],
  track: {
    state: 1
  },
  fields: ["_initialized"]
});

var LightningPrimitiveButton$1 = registerComponent(LightningPrimitiveButton, {
  tmpl: _tmpl$4
});

const DEFAULT_SIZE = 'medium';
const DEFAULT_VARIANT = 'border';
const DEFAULT_TYPE = 'button';
/**
 * An icon-only HTML button.
 */

class LightningButtonIcon extends LightningPrimitiveButton$1 {
  constructor(...args) {
    super(...args);
    this.name = void 0;
    this.value = void 0;
    this.variant = DEFAULT_VARIANT;
    this.iconName = void 0;
    this.iconClass = void 0;
    this.size = DEFAULT_SIZE;
    this.type = DEFAULT_TYPE;
    this.alternativeText = void 0;
    this._tooltip = null;
  }

  // remove-next-line-for-c-namespace
  set tooltip(value) {
    if (this._tooltip) {
      this._tooltip.value = value;
    } else if (value) {
      // Note that because the tooltip target is a child element it may not be present in the
      // dom during initial rendering.
      this._tooltip = new Tooltip(value, {
        root: this,
        target: () => this.template.querySelector('button')
      });

      this._tooltip.initialize();
    }
  } // remove-next-line-for-c-namespace

  /**
   * Text to display when the user mouses over or focuses on the button.
   * The tooltip is auto-positioned relative to the button and screen space.
   * @type {string}
   * @param {string} value - The plain text string for the tooltip
   */


  get tooltip() {
    return this._tooltip ? this._tooltip.value : undefined;
  } // remove-next-line-for-c-namespace


  // this is there because raptor currently doesnt support inheritance
  render() {
    return _tmpl$5;
  }

  get computedTitle() {
    return this.state.title || this.alternativeText || '';
  }

  get normalizedVariant() {
    return normalizeString(this.variant, {
      fallbackValue: DEFAULT_VARIANT,
      validValues: ['bare', 'brand', 'container', 'border', 'border-filled', 'bare-inverse', 'border-inverse']
    });
  }

  get normalizedType() {
    return normalizeString(this.type, {
      fallbackValue: DEFAULT_TYPE,
      validValues: ['button', 'reset', 'submit']
    });
  }

  get normalizedSize() {
    return normalizeString(this.size, {
      fallbackValue: DEFAULT_SIZE,
      validValues: ['xx-small', 'x-small', 'small', 'medium', 'large']
    });
  }

  getVariantBase() {
    return this.normalizedVariant.split('-')[0];
  }

  getVariantModifier() {
    return this.normalizedVariant.split('-')[1] || '';
  }

  get computedButtonClass() {
    const classes = classSet(super.computedButtonClass);
    const {
      normalizedSize,
      normalizedVariant
    } = this;
    const isBare = this.getVariantBase(normalizedSize) === 'bare';
    classes.add('slds-button_icon');

    if (!isBare) {
      // If the variant is not bare, then size the button instead of the icon
      switch (normalizedSize) {
        case 'small':
          classes.add('slds-button_icon-small');
          break;

        case 'x-small':
          classes.add('slds-button_icon-x-small');
          break;

        case 'xx-small':
          classes.add('slds-button_icon-xx-small');
          break;

        case 'large':
          // There is no `large` modifier for buttons so we should drop down one size to `medium`
          console.warn(`<lightning-button-icon> The non-bare variants of buttonIcon do not support a size value of "large". Supported values include "xx-small", "x-small", "small", and "medium". Falling back to size value "medium".`);
      }
    }

    return classes.add({
      'slds-button_icon-bare': isBare,
      'slds-button_icon-container': normalizedVariant === 'container',
      'slds-button_icon-border': normalizedVariant === 'border',
      'slds-button_icon-border-filled': normalizedVariant === 'border-filled',
      'slds-button_icon-border-inverse': normalizedVariant === 'border-inverse',
      'slds-button_icon-inverse': normalizedVariant === 'bare-inverse',
      'slds-button_icon-brand': normalizedVariant === 'brand'
    }).toString();
  }

  get computedIconClass() {
    const {
      normalizedSize,
      normalizedVariant
    } = this;
    const isBare = this.getVariantBase(normalizedVariant) === 'bare';
    const iconClass = this.iconClass || '';
    const classes = classSet('slds-button__icon');
    classes.add(iconClass);

    if (isBare) {
      // If the variant is bare, then size the icon instead of the button
      switch (normalizedSize) {
        case 'large':
          classes.add('slds-button__icon_large');
          break;

        case 'small':
          classes.add('slds-button__icon_small');
          break;

        case 'xx-small':
          // There is no `xx-small` modifier for bare so we should drop down one size to `x-small`
          console.warn(`<lightning-button-icon> The bare variant of buttonIcon does not support a size value of "xx-small". Supported values include "x-small", "small", "medium", and "large". The default is "medium".`);

        /* falls through */

        case 'x-small':
          classes.add('slds-button__icon_x-small');
          break;
      }
    }

    if (this.getVariantModifier(normalizedVariant) === 'inverse') {
      classes.add('slds-button_icon-inverse');
    }

    return classes.toString();
  }

  handleFocus() {
    this.dispatchEvent(new CustomEvent('focus'));
  }

  handleBlur() {
    this.dispatchEvent(new CustomEvent('blur'));
  }
  /**
   * Sets focus on the button.
   */


  focus() {
    if (this._connected) {
      this.template.querySelector('button').focus();
    }
  }
  /**
   * Simulates a mouse click on the button.
   */


  click() {
    if (this._connected) {
      this.template.querySelector('button').click();
    }
  }
  /**
   * Once we are connected, we fire a register event so the button-group (or other) component can register
   * the buttons.
   */


  connectedCallback() {
    this._connected = true;
  }

  renderedCallback() {
    // initialize aria attributes in primitiveButton
    super.renderedCallback(); // remove-next-line-for-c-namespace

    if (this._tooltip && !this._tooltip.initialized) {
      this._tooltip.initialize();
    } // button is inherit from primitiveButton, button.css not working in this case.
    // change host style to disable pointer event.


    this.template.host.style.pointerEvents = this.disabled ? 'none' : '';
  }

  disconnectedCallback() {
    this._connected = false;
  }
  /*LWC compiler v2.13.3*/


}

LightningButtonIcon.delegatesFocus = true;

registerDecorators(LightningButtonIcon, {
  publicProps: {
    name: {
      config: 0
    },
    value: {
      config: 0
    },
    variant: {
      config: 0
    },
    iconName: {
      config: 0
    },
    iconClass: {
      config: 0
    },
    size: {
      config: 0
    },
    type: {
      config: 0
    },
    alternativeText: {
      config: 0
    },
    tooltip: {
      config: 3
    }
  },
  publicMethods: ["focus", "click"],
  fields: ["_tooltip"]
});

var _lightningButtonIcon = registerComponent(LightningButtonIcon, {
  tmpl: _tmpl$5
});

const stc0$3 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 1
};
function tmpl$3($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": $cmp._iconName,
      "size": $cmp.size,
      "variant": $cmp.variant,
      "src": $cmp._src
    },
    key: 0
  }), $cmp.alternativeText ? api_element("span", stc0$3, [api_text(api_dynamic_text($cmp.alternativeText))]) : null];
  /*LWC compiler v2.13.3*/
}
var _tmpl$3 = registerTemplate(tmpl$3);
tmpl$3.stylesheets = [];

function normalizeVariant$1(variant, iconName) {
  // Unfortunately, the `bare` variant was implemented to do what the
  // `inverse` variant should have done. Keep this logic for as long as
  // we support the `bare` variant.
  if (variant === 'bare') {
    // TODO: Deprecation warning using strippable assertion
    variant = 'inverse';
  }

  if (getCategory(iconName) === 'utility') {
    return normalizeString(variant, {
      fallbackValue: '',
      validValues: ['error', 'inverse', 'warning', 'success']
    });
  }

  return 'inverse';
}

/**
 * Represents a visual element that provides context and enhances usability.
 */

class LightningIcon extends LightningElement {
  constructor(...args) {
    super(...args);
    this._src = void 0;
    this.privateIconName = void 0;
    this._iconName = void 0;
    this._size = void 0;
    this._variant = void 0;
    this.alternativeText = void 0;
  }

  /**
   * A uri path to a custom svg sprite, including the name of the resouce,
   * for example: /assets/icons/standard-sprite/svg/test.svg#icon-heart
   * @type {string}
   */
  get src() {
    return this.privateSrc;
  }

  set src(value) {
    this.privateSrc = value; // if value is not present, then we set the state back
    // to the original iconName that was passed
    // this might happen if the user sets a custom icon, then
    // decides to revert back to SLDS by removing the src attribute

    if (!value) {
      this._iconName = this.iconName;
      this.classList.remove('slds-icon-standard-default');
    } // if isIE11 and the src is set
    // we'd like to show the 'standard:default' icon instead
    // for performance reasons.


    if (value && isIE11) {
      this.setDefault();
      return;
    }

    this._src = value;
  }
  /**
   * The Lightning Design System name of the icon.
   * Names are written in the format 'utility:down' where 'utility' is the category,
   * and 'down' is the specific icon to be displayed.
   * @type {string}
   * @required
   */


  get iconName() {
    return this.privateIconName;
  }

  set iconName(value) {
    this.privateIconName = value; // if src is set, we don't need to validate
    // iconName

    if (this.src) {
      return;
    }

    if (isValidName(value)) {
      const isAction = getCategory(value) === 'action'; // update classlist only if new iconName is different than _iconName
      // otherwise classListMutation receives class:true and class: false and removes slds class

      if (value !== this._iconName) {
        classListMutation(this.classList, {
          'slds-icon_container_circle': isAction,
          [computeSldsClass(value)]: true,
          [computeSldsClass(this._iconName)]: false
        });
      }

      this._iconName = value;
    } else {
      console.warn(`<lightning-icon> Invalid icon name ${value}`); // eslint-disable-line no-console
      // Invalid icon names should render a blank icon. Remove any
      // classes that might have been previously added.

      classListMutation(this.classList, {
        'slds-icon_container_circle': false,
        [computeSldsClass(this._iconName)]: false
      });
      this._iconName = undefined;
    }
  }
  /**
   * The size of the icon. Options include xx-small, x-small, small, medium, or large.
   * The default is medium.
   * @type {string}
   * @default medium
   */


  get size() {
    return normalizeString(this._size, {
      fallbackValue: 'medium',
      validValues: ['xx-small', 'x-small', 'small', 'medium', 'large']
    });
  }

  set size(value) {
    this._size = value;
  }
  /**
   * The variant changes the appearance of a utility icon.
   * Accepted variants include inverse, success, warning, and error.
   * Use the inverse variant to implement a white fill in utility icons on dark backgrounds.
   * @type {string}
   */


  get variant() {
    return normalizeVariant$1(this._variant, this._iconName);
  }

  set variant(value) {
    this._variant = value;
  }

  connectedCallback() {
    this.classList.add('slds-icon_container');
  }

  setDefault() {
    this._src = undefined;
    this._iconName = 'standard:default';
    this.classList.add('slds-icon-standard-default');
  }
  /*LWC compiler v2.13.3*/


}

registerDecorators(LightningIcon, {
  publicProps: {
    alternativeText: {
      config: 0
    },
    src: {
      config: 3
    },
    iconName: {
      config: 3
    },
    size: {
      config: 3
    },
    variant: {
      config: 3
    }
  },
  fields: ["_src", "privateIconName", "_iconName", "_size", "_variant"]
});

var _lightningIcon = registerComponent(LightningIcon, {
  tmpl: _tmpl$3
});

const stc0$2 = {
  "slds-required": true
};
const stc1$2 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 4
};
const stc2 = {
  "slds-dueling-list": true
};
const stc3 = {
  "slds-assistive-text": true
};
const stc4 = {
  "slds-form-element__label": true
};
const stc5 = {
  "slds-listbox": true,
  "slds-listbox_vertical": true
};
const stc6 = {
  "slds-listbox__item": true
};
const stc7 = {
  "role": "presentation"
};
const stc8 = {
  classMap: {
    "slds-media__body": true
  },
  key: 14
};
const stc9 = {
  "slds-truncate": true
};
const stc10 = {
  key: 16
};
const stc11 = {
  classMap: {
    "slds-dueling-list__column": true
  },
  key: 18
};
const stc12 = {
  classMap: {
    "slds-dueling-list__column": true,
    "slds-dueling-list__column_responsive": true
  },
  key: 21
};
const stc13 = {
  classMap: {
    "slds-media__body": true
  },
  key: 27
};
const stc14 = {
  classMap: {
    "slds-media__figure": true,
    "slds-media__figure_reverse": true
  },
  key: 29
};
const stc15 = {
  classMap: {
    "slds-dueling-list__column": true
  },
  key: 31
};
const stc16 = {
  "slds-has-error": true,
  "slds-form-element__help": true
};
function tmpl$2($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, t: api_text, h: api_element, d: api_dynamic_text, c: api_custom_element, b: api_bind, k: api_key, ti: api_tab_index, i: api_iterator} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9} = $ctx;
  return [api_element("div", {
    attrs: {
      "role": "group",
      "aria-labelledby": api_scoped_id("group-label")
    },
    key: 0
  }, [api_element("div", {
    className: $cmp.computedGroupLabelClass,
    attrs: {
      "id": api_scoped_id("group-label")
    },
    key: 1
  }, [$cmp.required ? api_element("abbr", {
    classMap: stc0$2,
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 2
  }, [api_text("*")]) : null, api_text(api_dynamic_text($cmp.label))]), $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp
    },
    key: 3
  }) : null, api_element("div", stc1$2, [api_element("div", {
    classMap: stc2,
    key: 5,
    on: {
      "focusin": _m0 || ($ctx._m0 = api_bind($cmp.handleFocus)),
      "focusout": _m1 || ($ctx._m1 = api_bind($cmp.handleBlur))
    }
  }, [api_element("div", {
    classMap: stc3,
    attrs: {
      "id": api_scoped_id("assertive-thing"),
      "aria-live": "assertive"
    },
    key: 6
  }, [api_text(api_dynamic_text($cmp._messageToDisplay))]), api_element("div", {
    classMap: stc3,
    attrs: {
      "id": api_scoped_id("keyboard-interacton")
    },
    key: 7
  }, [api_text(api_dynamic_text($cmp.i18n.componentAssistiveText))]), api_element("div", {
    className: $cmp.computedLeftColumnClass,
    key: 8
  }, [api_element("span", {
    classMap: stc4,
    attrs: {
      "id": api_scoped_id("source-list-label")
    },
    key: 9
  }, [api_text(api_dynamic_text($cmp.sourceLabel))]), api_element("div", {
    className: $cmp.computedListboxContainerClass,
    style: $cmp.computedColumnStyle,
    key: 10
  }, [api_element("ul", {
    classMap: stc5,
    attrs: {
      "data-source-list": "",
      "id": api_scoped_id("source-list"),
      "aria-describedby": api_scoped_id("keyboard-interacton"),
      "aria-labelledby": api_scoped_id("source-list-label"),
      "aria-multiselectable": "true",
      "role": "listbox",
      "aria-disabled": $cmp.ariaDisabled
    },
    key: 11
  }, api_iterator($cmp.computedSourceList, function (option, index) {
    return api_element("li", {
      classMap: stc6,
      attrs: stc7,
      key: api_key(12, option.value)
    }, [api_element("div", {
      className: option.classList,
      attrs: {
        "aria-selected": option.selected,
        "role": "option",
        "tabindex": api_tab_index(option.tabIndex),
        "data-index": index,
        "data-value": option.value,
        "data-type": $cmp.computedSourceListId
      },
      key: 13,
      on: {
        "click": _m2 || ($ctx._m2 = api_bind($cmp.handleOptionClick)),
        "keydown": _m3 || ($ctx._m3 = api_bind($cmp.handleOptionKeyDown))
      }
    }, [api_element("span", stc8, [api_element("span", {
      classMap: stc9,
      attrs: {
        "title": option.label
      },
      key: 15
    }, [api_text(api_dynamic_text(option.label))])])])]);
  }))]), $cmp.showActivityIndicator ? api_element("div", stc10, [api_custom_element("lightning-spinner", _lightningSpinner, {
    props: {
      "size": "small",
      "variant": "brand",
      "alternativeText": $cmp.i18n.loadingText
    },
    key: 17
  })]) : null]), api_element("div", stc11, [api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    props: {
      "iconName": "utility:right",
      "variant": "container",
      "disabled": $cmp.moveButtonsDisabled,
      "title": $cmp.addButtonLabel,
      "alternativeText": $cmp.addButtonLabel
    },
    key: 19,
    on: {
      "click": _m4 || ($ctx._m4 = api_bind($cmp.handleRightButtonClick))
    }
  }), api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    props: {
      "iconName": "utility:left",
      "variant": "container",
      "disabled": $cmp.moveButtonsDisabled,
      "title": $cmp.removeButtonLabel,
      "alternativeText": $cmp.removeButtonLabel
    },
    key: 20,
    on: {
      "click": _m5 || ($ctx._m5 = api_bind($cmp.handleLeftButtonClick))
    }
  })]), api_element("div", stc12, [api_element("span", {
    classMap: stc4,
    attrs: {
      "id": api_scoped_id("selected-list-label")
    },
    key: 22
  }, [api_text(api_dynamic_text($cmp.selectedLabel))]), api_element("div", {
    className: $cmp.computedListboxContainerClass,
    style: $cmp.computedColumnStyle,
    key: 23
  }, [api_element("ul", {
    classMap: stc5,
    attrs: {
      "data-selected-list": "",
      "id": api_scoped_id("selected-list"),
      "aria-describedby": api_scoped_id("keyboard-interacton"),
      "aria-labelledby": api_scoped_id("selected-list-label"),
      "aria-multiselectable": "true",
      "role": "listbox",
      "aria-disabled": $cmp.ariaDisabled
    },
    key: 24
  }, api_iterator($cmp.computedSelectedList, function (option, index) {
    return api_element("li", {
      classMap: stc6,
      attrs: stc7,
      key: api_key(25, option.value)
    }, [api_element("div", {
      className: option.classList,
      attrs: {
        "aria-selected": option.selected,
        "role": "option",
        "tabindex": api_tab_index(option.tabIndex),
        "data-index": index,
        "data-value": option.value,
        "data-type": $cmp.computedSelectedListId
      },
      key: 26,
      on: {
        "click": _m6 || ($ctx._m6 = api_bind($cmp.handleOptionClick)),
        "keydown": _m7 || ($ctx._m7 = api_bind($cmp.handleOptionKeyDown))
      }
    }, [api_element("span", stc13, [api_element("span", {
      classMap: stc9,
      attrs: {
        "title": option.label
      },
      key: 28
    }, [api_text(api_dynamic_text(option.label))])]), option.isLocked ? api_element("span", stc14, [api_custom_element("lightning-icon", _lightningIcon, {
      props: {
        "iconName": "utility:lock",
        "size": "x-small",
        "alternativeText": $cmp.computedLockAssistiveText
      },
      key: 30
    })]) : null])]);
  }))])]), !$cmp.disableReordering ? api_element("div", stc15, [api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    props: {
      "iconName": "utility:up",
      "variant": "container",
      "disabled": $cmp.disabled,
      "title": $cmp.upButtonLabel,
      "alternativeText": $cmp.upButtonLabel
    },
    key: 32,
    on: {
      "click": _m8 || ($ctx._m8 = api_bind($cmp.handleUpButtonClick))
    }
  }), api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    props: {
      "iconName": "utility:down",
      "variant": "container",
      "disabled": $cmp.disabled,
      "title": $cmp.downButtonLabel,
      "alternativeText": $cmp.downButtonLabel
    },
    key: 33,
    on: {
      "click": _m9 || ($ctx._m9 = api_bind($cmp.handleDownButtonClick))
    }
  })]) : null])]), $cmp.errorMessage ? api_element("span", {
    classMap: stc16,
    attrs: {
      "id": api_scoped_id("error-message"),
      "aria-live": "assertive"
    },
    key: 34
  }, [api_text(api_dynamic_text($cmp.errorMessage))]) : null])];
  /*LWC compiler v2.13.3*/
}
var _tmpl$2 = registerTemplate(tmpl$2);
tmpl$2.stylesheets = [];


if (_implicitStylesheets$1) {
  tmpl$2.stylesheets.push.apply(tmpl$2.stylesheets, _implicitStylesheets$1);
}
if (_implicitStylesheets$1 || _implicitScopedStylesheets$1) {
  tmpl$2.stylesheetToken = "lightning-dualListbox_dualListbox";
}

var labelComponentAssistiveText = 'Press Ctrl (Cmd on Mac) + Left Arrow or Ctrl (Cmd on Mac) + Right Arrow to move items between lists.';

var labelDownButtonAssistiveText = 'Move selection down';

var labelMaxError = 'Select at most {0} options';

var labelMaxHelp = ' [and a maximum of {0}]';

var labelMinErrorPlural = 'Select at least {0} options';

var labelMinErrorSingular = 'Select at least 1 option';

var labelMinHelp = ' [and a minimum of {0}]';

var labelMinRequiredErrorPlural = 'At least {0} options must be selected';

var labelMinRequiredErrorSingular = 'At least 1 option must be selected';

var labelOptionLockAssistiveText = ': item cannot be removed from {0}';

var labelRequired = 'required';

var labelRequiredError = 'An option must be selected';

var labelRequiredOptionError = '{0} must be selected';

var labelUpButtonAssistiveText = 'Move selection up';

var labelMoveSelectionToAssistiveText = 'Move selection to {0}';

var labelLoadingText = 'Loading';

var labelMovedOptionsSingular = 'Item {0} moved to the list {1}';

var labelMovedOptionsPlural = 'Items {0} moved to the list {1}';

function preventDefaultAndStopPropagation(event) {
  event.preventDefault();
  event.stopPropagation();
}

function setFocusOnNextOption(option, moveUp, intf) {
  const index = parseInt(option.getAttribute('data-index'), 10);
  const i = index + (moveUp ? -1 : 1);
  const options = intf.getElementsOfList(option.getAttribute('data-type'));
  const next = options[i];

  if (next) {
    next.focus();
  }
}

function selectNextOption(option, moveUp, intf) {
  const selected = option.getAttribute('aria-selected') === 'true';
  const index = parseInt(option.getAttribute('data-index'), 10);
  const i = index + (selected ? moveUp ? -1 : 1 : 0);
  const options = intf.getElementsOfList(option.getAttribute('data-type'));
  const next = options[i];

  if (next) {
    intf.updateSelectedOptions(next, true, false);
  }
}

function selectNextOptionFromShift(option, moveUp, isMultiple, intf) {
  const curr = parseInt(option.getAttribute('data-index'), 10);

  if (intf.getShiftIndex() < 0) {
    intf.setShiftIndex(curr);
    intf.setLastShift(moveUp);
  }

  const next = curr + (intf.getLastShift() !== moveUp ? 0 : moveUp ? -1 : 1);
  const pos = next < intf.getShiftIndex();
  const shiftAdd = pos === moveUp || intf.getShiftIndex() === next;
  const options = intf.getElementsOfList(option.getAttribute('data-type'));
  const nextOption = options[next];

  if (nextOption) {
    intf.updateSelectedOptions(nextOption, shiftAdd, true);
    intf.setLastShift(moveUp);
  }
}

function handleKeyDownOnOption(event, keyboardInterface) {
  if (event.metaKey || event.ctrlKey) {
    keyboardInterface.setShiftIndex(-1);
    const keyCodesA = 'A'.charCodeAt(0);
    const selected = event.target.getAttribute('aria-selected') === 'true';

    switch (event.keyCode) {
      case keyCodes.up:
        preventDefaultAndStopPropagation(event);
        setFocusOnNextOption(event.target, true, keyboardInterface);
        break;

      case keyCodes.down:
        preventDefaultAndStopPropagation(event);
        setFocusOnNextOption(event.target, false, keyboardInterface);
        break;

      case keyCodes.right:
        preventDefaultAndStopPropagation(event);
        keyboardInterface.moveOptionsBetweenLists(true);
        break;

      case keyCodes.left:
        preventDefaultAndStopPropagation(event);
        keyboardInterface.moveOptionsBetweenLists(false);
        break;

      case keyCodes.space:
        preventDefaultAndStopPropagation(event);
        keyboardInterface.updateSelectedOptions(event.target, !selected, true);
        break;

      case keyCodesA:
        preventDefaultAndStopPropagation(event);
        keyboardInterface.selectAllOptions(event.target);
        break;

    }
  } else if (event.shiftKey) {
    switch (event.keyCode) {
      case keyCodes.up:
        preventDefaultAndStopPropagation(event);
        selectNextOptionFromShift(event.target, true, true, keyboardInterface);
        break;

      case keyCodes.down:
        preventDefaultAndStopPropagation(event);
        selectNextOptionFromShift(event.target, false, true, keyboardInterface);
        break;

    }
  } else {
    keyboardInterface.setShiftIndex(-1);

    switch (event.keyCode) {
      case keyCodes.up:
        preventDefaultAndStopPropagation(event);
        selectNextOption(event.target, true, keyboardInterface);
        break;

      case keyCodes.down:
        preventDefaultAndStopPropagation(event);
        selectNextOption(event.target, false, keyboardInterface);
        break;

    }
  }
}

/**
 Represents an object which keeps track of a user's interacting state.
 @constructor InteractingState
 @param {Object} options - The options object.
 @param {Object} [options.duration=2000] - The number of milliseconds of idle time to wait before exiting the interacting state.
 @param {Object} [options.debounceInteraction=false] - Whether to debounce interaction to ignore consecutive leave-enter interactions.
 **/

class InteractingState {
  constructor(options) {
    const duration = options && options.duration >= 0 ? options.duration : 2000;
    this.eventemitter = new EventEmitter();
    this._interacting = false;
    this._debouncedLeave = debounce(this.leave.bind(this), duration);
    this._debounceInteraction = options && options.debounceInteraction;
    this._interactedRecently = false;

    if (this._debounceInteraction) {
      // debounce leave until a short time later
      this._debouncedEmitLeave = debounce(() => {
        if (!this._interacting) {
          this._interactedRecently = false;
          this.eventemitter.emit('leave');
        }
      }, 200); // debounce enter until left

      this._debouncedEmitEnter = () => {
        if (!this._interactedRecently) {
          this._interactedRecently = true;
          this.eventemitter.emit('enter');
        }
      };
    }
  }
  /**
   Checks whether or not we are in the interacting state.
   @method InteractingState#isInteracting
   @return {Boolean} - Whether or not we are interacting.
   **/


  isInteracting() {
    return this._interacting;
  }
  /**
   Enters the interacting state.
   @method InteractingState#enter
   @returns {void}
   **/


  enter() {
    if (!this._interacting) {
      this._interacting = true;

      if (this._debounceInteraction) {
        this._debouncedEmitEnter();
      } else {
        this.eventemitter.emit('enter');
      }
    }
  }
  /**
   Registers a handler to execute when we enter the interacting state.
   @method InteractingState#onenter
   @param {Function} handler - The callback function.
   **/


  onenter(handler) {
    this.eventemitter.on('enter', handler);
  }
  /**
   Leaves the interacting state.
   @method InteractingState#leave
   @returns {void}
   **/


  leave() {
    if (this._interacting) {
      this._interacting = false;

      if (this._debounceInteraction) {
        this._debouncedEmitLeave();
      } else {
        this.eventemitter.emit('leave');
      }
    }
  }
  /**
   Registers a handler to execute when we leave the interacting state.
   @method InteractingState#onleave
   @param {Function} handler - The callback function.
   **/


  onleave(handler) {
    this.eventemitter.on('leave', handler);
  }
  /**
   Signals the start of the transition into the interacting state and
   schedules a transition out of the interacting state after an idle
   duration. Calling this method multiple times will reset the timer.
   @method InteractingState#interacting
   @returns {void}
   **/


  interacting() {
    this.enter();

    this._debouncedLeave();
  }

}
/**
 Creates a debounced function that delays invoking `func` until after
 `delay` milliseconds have elapsed since the last time the debounced
 function was invoked.
 @function debounce
 @param {Function} func - The function to debounce
 @param {Number} delay - The number of milliseconds to delay
 @param {Object} options - The options object
 @param {Boolean} options.leading - Specify invoking on the leading edge of the timeout
 @return {Function} - debounced function
 **/

function debounce(func, delay, options) {
  const _options = options || {};

  let invokeLeading = _options.leading;
  let timer;
  return function debounced() {
    const args = Array.prototype.slice.apply(arguments);

    if (invokeLeading) {
      func.apply(this, args);
      invokeLeading = false;
    }

    clearTimeout(timer); // eslint-disable-next-line @lwc/lwc/no-async-operation

    timer = setTimeout(function () {
      func.apply(this, args);
      invokeLeading = _options.leading; // reset for next debounce sequence
    }, delay);
  };
}

var labelBadInput = 'Enter a valid value.';

var labelPatternMismatch = 'Your entry does not match the allowed pattern.';

var labelRangeOverflow = 'The number is too high.';

var labelRangeUnderflow = 'The number is too low.';

var labelStepMismatch = 'Your entry isn\'t a valid increment.';

var labelTooLong = 'Your entry is too long.';

var labelTooShort = 'Your entry is too short.';

var labelTypeMismatch = 'You have entered an invalid format.';

var labelValueMissing = 'Complete this field.';

var labelSelectAtleastOneValue = 'You must select at least one choice from this set.';

const constraintsSortedByPriority = ['customError', 'badInput', 'patternMismatch', 'rangeOverflow', 'rangeUnderflow', 'stepMismatch', 'tooLong', 'tooShort', 'typeMismatch', 'valueMissing', 'selectAtleastOneValue'];
const defaultLabels = {
  badInput: labelBadInput,
  customError: labelBadInput,
  patternMismatch: labelPatternMismatch,
  rangeOverflow: labelRangeOverflow,
  rangeUnderflow: labelRangeUnderflow,
  stepMismatch: labelStepMismatch,
  tooLong: labelTooLong,
  tooShort: labelTooShort,
  typeMismatch: labelTypeMismatch,
  valueMissing: labelValueMissing,
  selectAtleastOneValue: labelSelectAtleastOneValue
};

function resolveBestMatch(validity) {
  let validityState;

  if (validity && validity.valid === false) {
    validityState = 'badInput';
    constraintsSortedByPriority.some(stateName => {
      if (validity[stateName] === true) {
        validityState = stateName;
        return true;
      }

      return false;
    });
  }

  return validityState;
}

function computeConstraint(valueProvider, constraint) {
  const provider = valueProvider[constraint];

  if (typeof provider === 'function') {
    return provider();
  }

  if (typeof provider === 'boolean') {
    return provider;
  }

  return false;
} // We're doing the below to avoid exposing the constraintsProvider in the ValidityState


function newValidityState(constraintsProvider) {
  class ValidityState {
    get valueMissing() {
      return computeConstraint(constraintsProvider, 'valueMissing');
    }

    get typeMismatch() {
      return computeConstraint(constraintsProvider, 'typeMismatch');
    }

    get patternMismatch() {
      return computeConstraint(constraintsProvider, 'patternMismatch');
    }

    get tooLong() {
      return computeConstraint(constraintsProvider, 'tooLong');
    }

    get tooShort() {
      return computeConstraint(constraintsProvider, 'tooShort');
    }

    get rangeUnderflow() {
      return computeConstraint(constraintsProvider, 'rangeUnderflow');
    }

    get rangeOverflow() {
      return computeConstraint(constraintsProvider, 'rangeOverflow');
    }

    get stepMismatch() {
      return computeConstraint(constraintsProvider, 'stepMismatch');
    }

    get customError() {
      return computeConstraint(constraintsProvider, 'customError');
    }

    get badInput() {
      return computeConstraint(constraintsProvider, 'badInput');
    }

    get selectAtleastOneValue() {
      return computeConstraint(constraintsProvider, 'validitySelectAtleastOneValue');
    }

    get valid() {
      return !(this.valueMissing || this.typeMismatch || this.patternMismatch || this.tooLong || this.tooShort || this.rangeUnderflow || this.rangeOverflow || this.stepMismatch || this.customError || this.badInput || this.selectAtleastOneValue);
    }

  }

  return new ValidityState();
}

function buildSyntheticValidity(constraintProvider) {
  return Object.freeze(newValidityState(constraintProvider));
}
function getErrorMessage(validity, labelMap) {
  const key = resolveBestMatch(validity);

  if (key) {
    return labelMap[key] ? labelMap[key] : defaultLabels[key];
  }

  return '';
}
class FieldConstraintApi {
  constructor(inputComponentProvider, constraintProviders) {
    assert(typeof inputComponentProvider === 'function');
    this._inputComponentProvider = inputComponentProvider;
    this._constraintsProvider = Object.assign({}, constraintProviders);

    if (!this._constraintsProvider.customError) {
      this._constraintsProvider.customError = () => typeof this._customValidityMessage === 'string' && this._customValidityMessage !== '';
    }
  }

  get validity() {
    if (!this._constraint) {
      this._constraint = buildSyntheticValidity(this._constraintsProvider);
    }

    return this._constraint;
  }

  checkValidity() {
    const isValid = this.validity.valid;

    if (!isValid) {
      if (this.inputComponent) {
        this.inputComponent.dispatchEvent(new CustomEvent('invalid', {
          cancellable: true
        }));
      }
    }

    return isValid;
  }

  reportValidity(callback) {
    const valid = this.checkValidity(); // the input might have been removed from the DOM by the time we query it

    if (this.inputComponent) {
      this.inputComponent.classList.toggle('slds-has-error', !valid);

      if (callback) {
        callback(this.validationMessage);
      }
    }

    return valid;
  }

  setCustomValidity(message) {
    this._customValidityMessage = message;
  }

  get validationMessage() {
    return getErrorMessage(this.validity, {
      customError: this._customValidityMessage,
      badInput: this.inputComponent.messageWhenBadInput,
      patternMismatch: this.inputComponent.messageWhenPatternMismatch,
      rangeOverflow: this.inputComponent.messageWhenRangeOverflow,
      rangeUnderflow: this.inputComponent.messageWhenRangeUnderflow,
      stepMismatch: this.inputComponent.messageWhenStepMismatch,
      tooShort: this.inputComponent.messageWhenTooShort,
      tooLong: this.inputComponent.messageWhenTooLong,
      typeMismatch: this.inputComponent.messageWhenTypeMismatch,
      valueMissing: this.inputComponent.messageWhenValueMissing,
      selectAtleastOneValue: this.inputComponent.messageWhenValueMissing
    });
  }

  get inputComponent() {
    if (!this._inputComponentElement) {
      this._inputComponentElement = this._inputComponentProvider();
    }

    return this._inputComponentElement;
  }

}

const VARIANT = {
  STANDARD: 'standard',
  LABEL_HIDDEN: 'label-hidden',
  LABEL_STACKED: 'label-stacked',
  LABEL_INLINE: 'label-inline'
};
/**
A variant normalization utility for attributes.
@param {Any} value - The value to normalize.
@return {Boolean} - The normalized value.
**/

function normalizeVariant(value) {
  return normalizeString(value, {
    fallbackValue: VARIANT.STANDARD,
    validValues: [VARIANT.STANDARD, VARIANT.LABEL_HIDDEN, VARIANT.LABEL_STACKED, VARIANT.LABEL_INLINE]
  });
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const i18n = {
  componentAssistiveText: labelComponentAssistiveText,
  downButtonAssistiveText: labelDownButtonAssistiveText,
  maxError: labelMaxError,
  maxHelp: labelMaxHelp,
  minErrorPlural: labelMinErrorPlural,
  minErrorSingular: labelMinErrorSingular,
  minHelp: labelMinHelp,
  minRequiredErrorPlural: labelMinRequiredErrorPlural,
  minRequiredErrorSingular: labelMinRequiredErrorSingular,
  optionLockAssistiveText: labelOptionLockAssistiveText,
  required: labelRequired,
  requiredError: labelRequiredError,
  requiredOptionError: labelRequiredOptionError,
  upButtonAssistiveText: labelUpButtonAssistiveText,
  moveSelectionToAssistiveText: labelMoveSelectionToAssistiveText,
  loadingText: labelLoadingText,
  movedOptionsSingular: labelMovedOptionsSingular,
  movedOptionsPlural: labelMovedOptionsPlural
};
/**
 * A pair of listboxes that enables multiple options to be selected and reordered.
 */

class LightningDualListbox extends LightningElement {
  constructor(...args) {
    super(...args);
    this.sourceLabel = void 0;
    this.selectedLabel = void 0;
    this.label = void 0;
    this.options = void 0;
    this.min = 0;
    this.max = void 0;
    this.name = void 0;
    this._showActivityIndicator = false;
    this._requiredOptions = [];
    this._selectedValues = [];
    this._variant = void 0;
    this._disabled = void 0;
    this._disableReordering = false;
    this._required = false;
    this._addButtonLabel = void 0;
    this._removeButtonLabel = void 0;
    this._upButtonLabel = void 0;
    this._downButtonLabel = void 0;
    this._size = void 0;
    this.errorMessage = '';
    this.highlightedOptions = [];
    this.focusableInSource = void 0;
    this.focusableInSelected = void 0;
    this.highlightedOptionsLabel = [];
    this._messageToDisplay = '';
    this.isFocusOnList = false;
    this.messageWhenValueMissing = i18n.requiredError;
    this.fieldLevelHelp = void 0;
  }

  /**
   * Error message to be displayed when a range overflow is detected.
   * @type {string}
   */
  get messageWhenRangeOverflow() {
    return this._messageWhenRangeOverflow || this._overflowMessage;
  }

  set messageWhenRangeOverflow(message) {
    this._messageWhenRangeOverflow = message;
  }
  /**
   * Error message to be displayed when a range underflow is detected.
   * @type {string}
   */


  get messageWhenRangeUnderflow() {
    return this._messageWhenRangeUnderflow || this._underflowMessage;
  }

  set messageWhenRangeUnderflow(message) {
    this._messageWhenRangeUnderflow = message;
  }
  /**
   * If present, the listbox is disabled and users cannot interact with it.
   * @type {string}
   */


  get disabled() {
    return this._disabled || false;
  }

  set disabled(value) {
    this._disabled = normalizeBoolean(value);
  }
  /**
   * If present, the user must add an item to the selected listbox before submitting the form.
   * @type {string}
   * @default false
   */


  get required() {
    return this._required;
  }

  set required(value) {
    this._required = normalizeBoolean(value);
  }
  /**
   * A list of default options that are included in the selected options listbox. This list is populated with values from the options attribute.
   * @type {list}
   */


  get value() {
    return this._selectedValues;
  }

  set value(newValue) {
    this.updateHighlightedOptions(newValue);
    this._selectedValues = newValue || [];

    if (this._connected) {
      this.addRequiredOptionsToValue();
    }
  }
  /**
   * A list of required options that cannot be removed from selected options listbox. This list is populated with values from the options attribute.
   * @type {list}
   */


  get requiredOptions() {
    return this._requiredOptions;
  }

  set requiredOptions(newValue) {
    this._requiredOptions = newValue || [];

    if (this._connected) {
      this.addRequiredOptionsToValue();
    }
  }
  /**
   * The variant changes the appearance of the dual listbox.
   * Accepted variants include standard, label-hidden, label-inline, and label-stacked.
   * This value defaults to standard.
   * Use label-hidden to hide the label but make it available to assistive technology.
   * Use label-inline to horizontally align the label and dual listbox.
   * Use label-stacked to place the label above the dual listbox.
   * @type {string}
   */


  get variant() {
    return this._variant || VARIANT.STANDARD;
  }

  set variant(value) {
    this._variant = normalizeVariant(value);
    this.updateClassList();
  }

  set size(value) {
    this._size = value;
  }
  /**
   * Number of items that display in the listboxes before vertical scrollbars are displayed. Determines the vertical size of the listbox.
   * @type {number}
   * @default
   */


  get size() {
    return this._size;
  }
  /**
   * Help text detailing the purpose and function of the dual listbox.
   * @type {string}
   */


  set disableReordering(value) {
    this._disableReordering = normalizeBoolean(value);
  }
  /**
   * If present, the Up and Down buttons used for reordering the selected list items are hidden.
   * @type {boolean}
   * @default false
   */


  get disableReordering() {
    return this._disableReordering;
  }
  /**
   * If present, a spinner is displayed in the first listbox to indicate loading activity.
   * @type {boolean}
   * @default false
   */


  get showActivityIndicator() {
    return this._showActivityIndicator;
  }

  set showActivityIndicator(value) {
    this._showActivityIndicator = normalizeBoolean(value);
  }
  /**
   * Sets focus on the first option from either list.
   * If the source list doesn't contain any options, the first option on the selected list is focused on.
   */


  focus() {
    // focus on the first option from either list
    // if nothing on source, then it'll pick the one on selected
    const firstOption = this.template.querySelector(`div[data-index='0']`);

    if (firstOption) {
      firstOption.focus();
      this.updateSelectedOptions(firstOption, true, false);
    }
  }
  /**
   * Represents the validity states that an element can be in, with respect to constraint validation.
   * @type {object}
   */


  get validity() {
    return this._constraint.validity;
  }
  /**
   * Returns the valid attribute value (Boolean) on the ValidityState object.
   * @returns {boolean} Indicates whether the dual listbox meets all constraint validations.
   */


  checkValidity() {
    return this._constraint.checkValidity();
  }
  /**
   * Displays the error messages and returns false if the input is invalid.
   * If the input is valid, reportValidity() clears displayed error messages and returns true.
   * @returns {boolean} - The validity status of the input fields.
   */


  reportValidity() {
    return this._constraint.reportValidity(message => {
      this.errorMessage = message;
    });
  }
  /**
   * Sets a custom error message to be displayed when the dual listbox value is submitted.
   * @param {string} message - The string that describes the error. If message is an empty string, the error message
   *     is reset.
   */


  setCustomValidity(message) {
    this._constraint.setCustomValidity(message);
  }
  /**
   * Displays an error message if the dual listbox value is required.
   */


  showHelpMessageIfInvalid() {
    this.reportValidity();
  }

  connectedCallback() {
    this.classList.add('slds-form-element');
    this.updateClassList();
    this.keyboardInterface = this.selectKeyboardInterface();
    this._connected = true;
    this.addRequiredOptionsToValue(); // debounceInteraction since DualListbox has multiple focusable elements

    this.interactingState = new InteractingState({
      debounceInteraction: true
    });
    this.interactingState.onenter(() => {
      this.dispatchEvent(new CustomEvent('focus'));
    });
    this.interactingState.onleave(() => {
      this.showHelpMessageIfInvalid();
      this.dispatchEvent(new CustomEvent('blur')); // reset the optionToFocus otherwise dualListbox will steal the focus any time it's rerendered.

      this.optionToFocus = null;
    });
  }

  updateClassList() {
    classListMutation(this.classList, {
      'slds-form-element_stacked': this.variant === VARIANT.LABEL_STACKED,
      'slds-form-element_horizontal': this.variant === VARIANT.LABEL_INLINE
    });
  }

  renderedCallback() {
    this.assertRequiredAttributes();

    if (this.disabled) {
      return;
    }

    if (this.optionToFocus) {
      // value could have an apostrophe, which is why we need to escape it otherwise the queryselector will not work
      const option = this.template.querySelector(`div[data-value='${this.optionToFocus.replace(/'/g, "\\'")}']`);

      if (option) {
        this.isFocusOnList = true;
        option.focus();
      }
    }
  }

  get computedUniqueId() {
    return this.uniqueId;
  }

  get computedSourceListId() {
    return getRealDOMId(this.template.querySelector('[data-source-list]'));
  }

  get computedSelectedListId() {
    return getRealDOMId(this.template.querySelector('[data-selected-list]'));
  }

  get ariaDisabled() {
    // aria-disabled works only with String not Boolean value
    return String(this.disabled);
  }

  get computedSourceList() {
    let sourceListOptions = [];

    if (this.options) {
      const required = this.requiredOptions;
      const values = this.value;
      sourceListOptions = this.options.filter(option => values.indexOf(option.value) === -1 && required.indexOf(option.value) === -1);
    }

    return this.computeListOptions(sourceListOptions, this.focusableInSource);
  }

  get computedSelectedList() {
    const selectedListOptions = [];

    if (this.options) {
      const optionsMap = {};
      this.options.forEach(option => {
        optionsMap[option.value] = _objectSpread({}, option);
      });
      this.value.forEach(optionValue => {
        const option = optionsMap[optionValue];

        if (option) {
          option.isSelected = true;
        }
      });
      this.requiredOptions.forEach(optionValue => {
        const option = optionsMap[optionValue];

        if (option) {
          option.isLocked = true;
        }
      }); // add selected items in the given order

      this.value.forEach(optionValue => {
        const option = optionsMap[optionValue];

        if (option) {
          selectedListOptions.push(option);
        }
      });
    }

    return this.computeListOptions(selectedListOptions, this.focusableInSelected);
  }

  computeListOptions(options, focusableOptionValue) {
    if (options.length > 0) {
      const focusableOption = options.find(option => {
        return option.value === focusableOptionValue;
      });
      const focusableValue = focusableOption ? focusableOption.value : options[0].value;
      return options.map(option => {
        return this.computeOptionProperties(option, focusableValue);
      });
    }

    return [];
  }

  computeOptionProperties(option, focusableValue) {
    const isSelected = this.highlightedOptions.indexOf(option.value) > -1;
    const classList = classSet('slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline').add({
      'slds-is-selected': isSelected
    }).toString();
    return _objectSpread(_objectSpread({}, option), {}, {
      tabIndex: option.value === focusableValue ? '0' : '-1',
      selected: isSelected ? 'true' : 'false',
      classList
    });
  }

  get computedLeftColumnClass() {
    return classSet('slds-dueling-list__column slds-dueling-list__column_responsive').add({
      'slds-is-relative': this.showActivityIndicator
    }).toString();
  }

  get computedColumnStyle() {
    if (this.isNumber(this.size)) {
      // From the SLDS page on how to adjust the height: lightningdesignsystem.com/components/dueling-picklist/#Responsive
      const newHeight = parseInt(this.size, 10) * 2.25 + 1;
      return `height:${newHeight}rem`;
    }

    return '';
  }

  get isLabelHidden() {
    return this.variant === VARIANT.LABEL_HIDDEN;
  }

  get computedGroupLabelClass() {
    return classSet('slds-form-element__label slds-form-element__legend').add({
      'slds-assistive-text': this.isLabelHidden
    }).toString();
  }

  get computedListboxContainerClass() {
    return classSet('slds-dueling-list__options').add({
      'slds-is-disabled': this.disabled
    }).toString();
  }

  get computedLockAssistiveText() {
    return formatLabel(this.i18n.optionLockAssistiveText, this.selectedLabel);
  }

  get i18n() {
    return i18n;
  }

  getRightButtonAssistiveText() {
    return formatLabel(i18n.moveSelectionToAssistiveText, this.selectedLabel);
  }
  /**
   * Label for add button.
   * @type {string}
   * @default Move selection to {selectedLabel}
   */


  get addButtonLabel() {
    if (this._addButtonLabel) {
      return this._addButtonLabel;
    }

    return this.getRightButtonAssistiveText();
  }

  set addButtonLabel(value) {
    this._addButtonLabel = value;
  }

  getLeftButtonAssistiveText() {
    return formatLabel(i18n.moveSelectionToAssistiveText, this.sourceLabel);
  }
  /**
   * Label for remove button.
   * @type {string}
   * @default "Move selection to {sourceLabel}"
   */


  get removeButtonLabel() {
    if (this._removeButtonLabel) {
      return this._removeButtonLabel;
    }

    return this.getLeftButtonAssistiveText();
  }

  set removeButtonLabel(value) {
    this._removeButtonLabel = value;
  }
  /**
   * Label for up button.
   * @type {string}
   * @default "Move selection up"
   */


  get upButtonLabel() {
    return this._upButtonLabel || this.i18n.upButtonAssistiveText;
  }

  set upButtonLabel(value) {
    this._upButtonLabel = value;
  }
  /**
   * Label for down button.
   * @type {string}
   * @default "Move selection down"
   */


  get downButtonLabel() {
    return this._downButtonLabel || this.i18n.downButtonAssistiveText;
  }

  set downButtonLabel(value) {
    this._downButtonLabel = value;
  }

  get moveButtonsDisabled() {
    return this.disabled || this.showActivityIndicator;
  }

  handleOptionClick(event) {
    this.interactingState.interacting();

    if (this.disabled) {
      return;
    }

    const selectMultiple = event.metaKey || event.ctrlKey || event.shiftKey;
    const option = event.currentTarget;

    if (event.shiftKey) {
      this.selectAllFromLastSelectedToOption(option, false);
      return;
    }

    const selected = selectMultiple && option.getAttribute('aria-selected') === 'true';
    this.updateSelectedOptions(option, !selected, selectMultiple);
    this.shiftIndex = -1;
  }

  handleFocus(event) {
    this.interactingState.enter(); // select the focused option if entering a listbox

    const element = event.target;

    if (element.role === 'option') {
      if (!this.isFocusOnList) {
        this.isFocusOnList = true;
        this.updateSelectedOptions(element, true, false);
      }
    }
  }

  handleBlur(event) {
    this.interactingState.leave();
    const element = event.target;

    if (element.role !== 'option') {
      this.isFocusOnList = false;
    }
  }

  handleRightButtonClick() {
    this.interactingState.interacting();
    this.moveOptionsBetweenLists(true);
  }

  handleLeftButtonClick() {
    this.interactingState.interacting();
    this.moveOptionsBetweenLists(false);
  }

  handleUpButtonClick() {
    this.interactingState.interacting();
    this.changeOrderOfOptionsInList(true);
  }

  handleDownButtonClick() {
    this.interactingState.interacting();
    this.changeOrderOfOptionsInList(false);
  }

  handleOptionKeyDown(event) {
    this.interactingState.interacting();

    if (this.disabled) {
      return;
    }

    handleKeyDownOnOption(event, this.keyboardInterface);
  }

  moveOptionsBetweenLists(addToSelect, retainFocus) {
    const isValidList = addToSelect ? this.selectedList === this.computedSourceListId : this.selectedList === this.computedSelectedListId;

    if (!isValidList) {
      return;
    }

    const toMove = this.highlightedOptions;
    const values = this.computedSelectedList.map(option => option.value);
    const required = this.requiredOptions;
    let newValues = [];

    if (addToSelect) {
      newValues = values.concat(toMove);
    } else {
      newValues = values.filter(value => toMove.indexOf(value) === -1 || required.indexOf(value) > -1);
    }

    this.movedOptions(addToSelect);
    const oldSelectedValues = this._selectedValues;
    this._selectedValues = newValues;
    const invalidMove = this.validity.valueMissing || this.validity.rangeOverflow && this.selectedList === this.computedSourceListId || this.validity.rangeUnderflow && this.selectedList === this.computedSelectedListId;

    if (invalidMove || toMove.length === 0) {
      this.showHelpMessageIfInvalid();
      this._selectedValues = oldSelectedValues;
      return;
    }

    if (retainFocus) {
      const listId = addToSelect ? this.computedSelectedListId : this.computedSourceListId;
      this.selectedList = listId;
      this.updateFocusableOption(listId, toMove[0]);
    } else {
      this.interactingState.leave();
      this.isFocusOnList = false;
      this.highlightedOptions = [];
      this.highlightedOptionsLabel = [];
      this.optionToFocus = null;
    }

    this.dispatchChangeEvent(newValues);
  }

  changeOrderOfOptionsInList(moveUp) {
    const elementList = this.getElementsOfList(this.selectedList);
    const values = this.computedSelectedList.map(option => option.value);
    const toMove = values.filter(option => this.highlightedOptions.indexOf(option) > -1);
    const validSelection = toMove.length === 0 || this.selectedList !== this.computedSelectedListId;

    if (validSelection) {
      return;
    }

    let start = moveUp ? 0 : toMove.length - 1;
    let index = values.indexOf(toMove[start]);
    const validMove = moveUp && index === 0 || !moveUp && index === values.length - 1;

    if (validMove) {
      return;
    }

    if (moveUp) {
      while (start < toMove.length) {
        index = values.indexOf(toMove[start]);
        this.swapOptions(index, index - 1, values, elementList);
        start++;
      }
    } else {
      while (start > -1) {
        index = values.indexOf(toMove[start]);
        this.swapOptions(index, index + 1, values, elementList);
        start--;
      }
    }

    this._selectedValues = values;
    this.updateFocusableOption(this.selectedList, toMove[0]);
    this.optionToFocus = null;
    this.dispatchChangeEvent(values);
  }

  selectAllFromLastSelectedToOption(option, all) {
    const listId = option.getAttribute('data-type');
    this.updateCurrentSelectedList(listId, true);
    const options = this.getElementsOfList(listId);
    const end = all ? 0 : this.getOptionIndex(option);
    this.lastSelected = this.lastSelected < 0 ? end : this.lastSelected;
    const start = all ? options.length : this.lastSelected;
    let val, select;
    this.highlightedOptions = [];
    this.highlightedOptionsLabel = [];

    for (let i = 0; i < options.length; i++) {
      select = (i - start) * (i - end) <= 0;

      if (select) {
        val = options[i].getAttribute('data-value');
        this.highlightedOptions.push(val);
      }
    }
  }

  updateSelectedOptions(option, select, isMultiple) {
    const value = option.getAttribute('data-value');
    const listId = this.getListId(option);
    const optionIndex = this.getOptionIndex(option);
    this.updateCurrentSelectedList(listId, isMultiple);

    if (select) {
      if (this.highlightedOptions.indexOf(value) === -1) {
        this.highlightedOptions.push(value);
      }
    } else {
      this.highlightedOptions.splice(this.highlightedOptions.indexOf(value), 1);
    }

    this.updateFocusableOption(listId, value);
    this.lastSelected = optionIndex;
  }

  addRequiredOptionsToValue() {
    if (!this.options || !this.options.length || !this._requiredOptions || !this._requiredOptions.length) {
      // no options/requiredOptions, just ignore
      return;
    }

    const numOfSelectedValues = this._selectedValues.length;
    const allValues = this.options.map(option => option.value);

    const requiredValues = this._requiredOptions.filter(option => allValues.includes(option)); // add required options to the selected values as they are already displayed in the selected list


    this._selectedValues = [...new Set([...requiredValues, ...this._selectedValues])];

    if (numOfSelectedValues !== this._selectedValues.length) {
      // value was changed
      this.dispatchChangeEvent(this._selectedValues);
    }
  }

  get _constraint() {
    if (!this._constraintApi) {
      this._constraintApi = new FieldConstraintApi(() => this, {
        valueMissing: () => !this.disabled && this.required && this.computedSelectedList.length < 1,
        rangeUnderflow: () => this.computedSelectedList.length < this.min,
        rangeOverflow: () => this.computedSelectedList.length > this.max
      });
    }

    return this._constraintApi;
  }

  get _overflowMessage() {
    const minHelpMsg = this.min > 0 ? formatLabel(this.i18n.minHelp, this.min) : '';
    return formatLabel(this.i18n.maxError, this.max) + minHelpMsg;
  }

  get _underflowMessage() {
    const maxHelpMsg = this.max ? formatLabel(this.i18n.maxHelp, this.max) : '';
    const minRequiredError = this.min > 1 ? formatLabel(this.i18n.minRequiredErrorPlural, this.min) : this.i18n.minRequiredErrorSingular;
    const minError = this.min > 1 ? formatLabel(this.i18n.minErrorPlural, this.min) : this.i18n.minErrorSingular;
    return this.required ? minRequiredError + maxHelpMsg : minError + maxHelpMsg;
  }

  updateCurrentSelectedList(currentList, isMultiple) {
    if (this.selectedList !== currentList || !isMultiple) {
      if (this.selectedList) {
        this.highlightedOptions = [];
        this.highlightedOptionsLabel = [];
        this.lastSelected = -1;
      }

      this.selectedList = currentList;
    }
  }

  dispatchChangeEvent(values) {
    // the change event needs to propagate to elements outside of the light-DOM, hence making it composed.
    this.dispatchEvent(new CustomEvent('change', {
      composed: true,
      bubbles: true,
      detail: {
        value: values
      }
    }));
  }

  assertRequiredAttributes() {
    assert(!!this.label, `<lightning-dual-listbox> Missing required "label" attribute.`);
    assert(!!this.sourceLabel, `<lightning-dual-listbox> Missing required "sourceLabel" attribute.`);
    assert(!!this.selectedLabel, `<lightning-dual-listbox> Missing required "selectedLabel" attribute.`);
    assert(!!this.options, `<lightning-dual-listbox> Missing required "options" attribute.`);
  }

  swapOptions(i, j, array) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  getElementsOfList(listId) {
    const elements = this.template.querySelectorAll(`div[data-type='${listId}']`);
    return elements ? elements : [];
  }

  selectKeyboardInterface() {
    const that = this;
    that.shiftIndex = -1;
    that.lastShift = null;
    return {
      getShiftIndex() {
        return that.shiftIndex;
      },

      setShiftIndex(value) {
        that.shiftIndex = value;
      },

      getLastShift() {
        return that.lastShift;
      },

      setLastShift(value) {
        that.lastShift = value;
      },

      getElementsOfList(listId) {
        return that.getElementsOfList(listId);
      },

      selectAllOptions(option) {
        that.selectAllFromLastSelectedToOption(option, true);
      },

      updateSelectedOptions(option, select, isMultiple) {
        that.updateSelectedOptions(option, select, isMultiple);
      },

      moveOptionsBetweenLists(addToSelect) {
        that.moveOptionsBetweenLists(addToSelect, true);
      }

    };
  }

  getOptionIndex(optionElement) {
    return parseInt(optionElement.getAttribute('data-index'), 10);
  }

  getListId(optionElement) {
    return getRealDOMId(optionElement.parentElement.parentElement);
  }

  updateFocusableOption(listId, value) {
    if (listId === this.computedSourceListId) {
      this.focusableInSource = value;
    } else if (listId === this.computedSelectedListId) {
      this.focusableInSelected = value;
    }

    this.optionToFocus = value;
  }

  isNumber(value) {
    return value !== '' && value !== null && isFinite(value);
  }
  /**
   * If the new value is different than internal selected values,
   * we need to un-highlight the already highlighted options
   *
   * @param newValue
   */


  updateHighlightedOptions(newValue) {
    let isSame = false;

    if (newValue && newValue.length && this._selectedValues && this._selectedValues.length) {
      isSame = newValue.length === this._selectedValues.length && newValue.every(option => this._selectedValues.includes(option));
    }

    if (!isSame) {
      this.highlightedOptions = [];
      this.highlightedOptionsLabel = [];
    }
  }

  movedOptions(addToSelect) {
    const listName = addToSelect ? this.selectedLabel : this.sourceLabel;

    for (let i = 0; i < this.highlightedOptions.length; i++) {
      let selectedOption = addToSelect ? this.computedSourceList.filter(item => item.value === this.highlightedOptions[i]) : this.computedSelectedList.filter(item => item.value === this.highlightedOptions[i]);
      this.highlightedOptionsLabel.push(selectedOption[0].label);
    }

    if (this.highlightedOptions.length) {
      const strToFormat = this.highlightedOptions.length > 1 ? i18n.movedOptionsPlural : i18n.movedOptionsSingular;
      this._messageToDisplay = formatLabel(strToFormat, this.highlightedOptionsLabel.join(', '), listName);
    } else {
      this._messageToDisplay = '';
    }
  }
  /*LWC compiler v2.13.3*/


}

registerDecorators(LightningDualListbox, {
  publicProps: {
    sourceLabel: {
      config: 0
    },
    selectedLabel: {
      config: 0
    },
    label: {
      config: 0
    },
    options: {
      config: 0
    },
    min: {
      config: 0
    },
    max: {
      config: 0
    },
    name: {
      config: 0
    },
    messageWhenValueMissing: {
      config: 0
    },
    messageWhenRangeOverflow: {
      config: 3
    },
    messageWhenRangeUnderflow: {
      config: 3
    },
    disabled: {
      config: 3
    },
    required: {
      config: 3
    },
    value: {
      config: 3
    },
    requiredOptions: {
      config: 3
    },
    variant: {
      config: 3
    },
    size: {
      config: 3
    },
    fieldLevelHelp: {
      config: 0
    },
    disableReordering: {
      config: 3
    },
    showActivityIndicator: {
      config: 3
    },
    validity: {
      config: 1
    },
    addButtonLabel: {
      config: 3
    },
    removeButtonLabel: {
      config: 3
    },
    upButtonLabel: {
      config: 3
    },
    downButtonLabel: {
      config: 3
    }
  },
  publicMethods: ["focus", "checkValidity", "reportValidity", "setCustomValidity", "showHelpMessageIfInvalid"],
  track: {
    _showActivityIndicator: 1,
    _requiredOptions: 1,
    _selectedValues: 1,
    _variant: 1,
    _disabled: 1,
    _disableReordering: 1,
    _required: 1,
    _addButtonLabel: 1,
    _removeButtonLabel: 1,
    _upButtonLabel: 1,
    _downButtonLabel: 1,
    _size: 1,
    errorMessage: 1,
    highlightedOptions: 1,
    focusableInSource: 1,
    focusableInSelected: 1,
    highlightedOptionsLabel: 1
  },
  fields: ["_messageToDisplay", "isFocusOnList"]
});

var _lightningDualListbox = registerComponent(LightningDualListbox, {
  tmpl: _tmpl$2
});

const stc0$1 = {
  classMap: {
    "slds-box": true
  },
  key: 1
};
const stc1$1 = {
  key: 2
};
function tmpl$1($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, b: api_bind, c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_custom_element("lightning-dual-listbox", _lightningDualListbox, {
    props: {
      "id": api_scoped_id("selectOptions"),
      "name": "Select Options",
      "label": "Select Options",
      "sourceLabel": "Available Options",
      "selectedLabel": "Selected Options",
      "options": $cmp.listOptions,
      "value": $cmp.defaultOptions,
      "requiredOptions": $cmp.requiredOptions
    },
    key: 0,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleChange))
    }
  }), api_element("div", stc0$1, [api_element("p", stc1$1, [api_text("Selected values are: " + api_dynamic_text($cmp.selected))])])];
  /*LWC compiler v2.13.3*/
}
var _tmpl$1 = registerTemplate(tmpl$1);
tmpl$1.stylesheets = [];


if (_implicitStylesheets$2) {
  tmpl$1.stylesheets.push.apply(tmpl$1.stylesheets, _implicitStylesheets$2);
}
if (_implicitStylesheets$2 || _implicitScopedStylesheets$2) {
  tmpl$1.stylesheetToken = "tnf-list_list";
}

class List extends LightningElement {
  constructor(...args) {
    super(...args);
    this.listOptions = [{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }, {
      value: '3',
      label: 'Option 3'
    }, {
      value: '4',
      label: 'Option 4'
    }, {
      value: '5',
      label: 'Option 5'
    }, {
      value: '6',
      label: 'Option 6'
    }, {
      value: '7',
      label: 'Option 7'
    }, {
      value: '8',
      label: 'Option 8'
    }];
    this.defaultOptions = ['7', '2', '3'];
    this.requiredOptions = ['2', '7'];
  }

  handleChange(event) {
    // Get the list of the "value" attribute on all the selected options
    const selectedOptionsList = event.detail.value;
    alert(`Options selected: ${selectedOptionsList}`);
  }
  /*LWC compiler v2.13.3*/


}

registerDecorators(List, {
  fields: ["listOptions", "defaultOptions", "requiredOptions"]
});

var _tnfList = registerComponent(List, {
  tmpl: _tmpl$1
}); // Don't use the same name as tnf-list. It will break the functionality during composition

customElements.define('tnf-list-ce', List.CustomElementConstructor);

const stc0 = {
  key: 0
};
const stc1 = {
  key: 2
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, d: api_dynamic_text, t: api_text, h: api_element, c: api_custom_element} = $api;
  const {_m0} = $ctx;
  return [api_element("main", stc0, [api_element("button", {
    key: 1,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.onClick))
    }
  }, [api_text(api_dynamic_text($cmp.label))]), api_custom_element("tnf-list", _tnfList, stc1)])];
  /*LWC compiler v2.13.3*/
}
var _tmpl = registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets$3) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets$3);
}
if (_implicitStylesheets$3 || _implicitScopedStylesheets$3) {
  tmpl.stylesheetToken = "tnf-button_button";
}

class Button extends LightningElement {
  constructor(...args) {
    super(...args);
    this.label = "Submit";
  }

  onClick() {
    alert(`${this.label} button clicked`);
  }
  /*LWC compiler v2.13.3*/


}

registerDecorators(Button, {
  publicProps: {
    label: {
      config: 0
    }
  }
});

var button = registerComponent(Button, {
  tmpl: _tmpl
}); // Don't use the same name as tnf-button. It will break the functionality during composition

customElements.define('tnf-button-ce', Button.CustomElementConstructor);

export { _tmpl$9 as _, button as b };
