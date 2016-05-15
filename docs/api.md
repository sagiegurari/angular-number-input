## Members

<dl>
<dt><a href="#NumberInputService+config">#config</a> : <code><a href="#Config">Config</a></code></dt>
<dd><p>Holds the current configuration of the service and is populated by the directive instance.</p>
</dd>
<dt><a href="#numberInput">numberInput</a> ⇒ <code>object</code></dt>
<dd><p>The number-input is an angular directive which provides number validation, parsing and formatting capabilities.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#NumberInputService+create">#create()</a></dt>
<dd><p>Returns an instance of the service used by a specific directive instance.</p>
</dd>
<dt><a href="#NumberInputService+parser">#parser()</a> ⇒ <code>function</code></dt>
<dd><p>Optional parser function.<br>
This function is optional and it is not required to implement it.</p>
</dd>
<dt><a href="#NumberInputService+formatter">#formatter()</a> ⇒ <code>function</code></dt>
<dd><p>Optional formatter function.<br>
This function is optional and it is not required to implement it.</p>
</dd>
<dt><a href="#NumberInputService+link">#link(scope, element, attributes, ngModelCtrl)</a></dt>
<dd><p>Will be called only once when the directive has access to the service.<br>
This function is optional and it is not required to implement it.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Config">Config</a> : <code>object</code></dt>
<dd><p>The directive configuration.</p>
</dd>
</dl>

<a name="NumberInputService"></a>

## NumberInputService
Service definition used by the number input to extend the number input capabilities.

**Kind**: global interface  
**Access:** public  
**Author:** Sagie Gur-Ari  

* [NumberInputService](#NumberInputService)
    * [#config](#NumberInputService+config) : <code>[Config](#Config)</code>
    * [#create()](#NumberInputService+create)
    * [#parser()](#NumberInputService+parser) ⇒ <code>function</code>
    * [#formatter()](#NumberInputService+formatter) ⇒ <code>function</code>
    * [#link(scope, element, attributes, ngModelCtrl)](#NumberInputService+link)

<a name="NumberInputService+config"></a>

### NumberInputService#config : <code>[Config](#Config)</code>
Holds the current configuration of the service and is populated by the directive instance.

**Kind**: global property of <code>[NumberInputService](#NumberInputService)</code>  
**Access:** public  
<a name="NumberInputService+create"></a>

### NumberInputService#create()
Returns an instance of the service used by a specific directive instance.

**Kind**: global method of <code>[NumberInputService](#NumberInputService)</code>  
**Access:** public  
<a name="NumberInputService+parser"></a>

### NumberInputService#parser() ⇒ <code>function</code>
Optional parser function.<br>
This function is optional and it is not required to implement it.

**Kind**: global method of <code>[NumberInputService](#NumberInputService)</code>  
**Access:** public  
<a name="NumberInputService+formatter"></a>

### NumberInputService#formatter() ⇒ <code>function</code>
Optional formatter function.<br>
This function is optional and it is not required to implement it.

**Kind**: global method of <code>[NumberInputService](#NumberInputService)</code>  
**Access:** public  
<a name="NumberInputService+link"></a>

### NumberInputService#link(scope, element, attributes, ngModelCtrl)
Will be called only once when the directive has access to the service.<br>
This function is optional and it is not required to implement it.

**Kind**: global method of <code>[NumberInputService](#NumberInputService)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| scope | <code>object</code> | The angular scope for the element |
| element | <code>object</code> | The jquery element on which the directive is defined on |
| attributes | <code>object</code> | Provides access to the element attributes |
| ngModelCtrl | <code>object</code> | The angular model controller |

<a name="numberInput"></a>

## numberInput ⇒ <code>object</code>
The number-input is an angular directive which provides number validation, parsing and formatting capabilities.

**Kind**: global variable  
**Returns**: <code>object</code> - The directive definition  
**Ngdoc**: directive  
**Restrict**: ECA  

| Param | Type | Description |
| --- | --- | --- |
| ng-model | <code>number</code> | The model for the number input |
| [min] | <code>number</code> | Optional min number value |
| [max] | <code>number</code> | Optional max number value |
| [step] | <code>number</code> | Optional step between numbers |
| [validation] | <code>function</code> | Optional external validation function |
| [parser] | <code>function</code> | Optional external parser function |
| [formatter] | <code>function</code> | Optional external formatter function |
| [service] | <code>string</code> | Optional service to inject which will be used to control the directive behaviour (will override validation, parser and formatter attributes) |

**Example**  
```html
<input type="text" class="number-input"
  ng-model="value"
  min="-100"
  max="100"
  step="0.5"
  validation="myNumberValidation"
  formatter="myNumberFormatter"
  parser="myNumberParser">
```
<a name="Config"></a>

## Config : <code>object</code>
The directive configuration.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| [config.min] | <code>number</code> | Optional min number value |
| [config.max] | <code>number</code> | Optional max number value |
| [config.step] | <code>number</code> | Optional step between numbers |

