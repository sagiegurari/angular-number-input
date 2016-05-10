## Members

<dl>
<dt><a href="#numberInput">numberInput</a> ⇒ <code>object</code></dt>
<dd><p>The number-input is an angular directive which provides number validation, parsing and formatting capabilities.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#NumberInputService+create">#create()</a></dt>
<dd><p>Returns an instance of the service used by a specific directive instance.</p>
</dd>
<dt><a href="#NumberInputService+setConfig">#setConfig(config)</a></dt>
<dd><p>Sets the current configuration of the service.</p>
</dd>
<dt><a href="#NumberInputService+getValidator">#getValidator()</a> ⇒ <code>function</code></dt>
<dd><p>Returns optional validation function.<br>
This function is optional and it is not required to implement it.</p>
</dd>
<dt><a href="#NumberInputService+getParser">#getParser()</a> ⇒ <code>function</code></dt>
<dd><p>Returns optional parser function.<br>
This function is optional and it is not required to implement it.</p>
</dd>
<dt><a href="#NumberInputService+getFormatter">#getFormatter()</a> ⇒ <code>function</code></dt>
<dd><p>Returns optional formatter function.<br>
This function is optional and it is not required to implement it.</p>
</dd>
<dt><a href="#NumberInputService+link">#link(scope, element, attrs, ngModelCtrl)</a></dt>
<dd><p>Will be called only once when the directive has access to the service.<br>
This function is optional and it is not required to implement it.</p>
</dd>
</dl>

<a name="NumberInputService"></a>

## NumberInputService
Service definition used by the number input to extend the number input capabilities.

**Kind**: global interface  
**Access:** public  
**Author:** Sagie Gur-Ari  

* [NumberInputService](#NumberInputService)
    * [#create()](#NumberInputService+create)
    * [#setConfig(config)](#NumberInputService+setConfig)
    * [#getValidator()](#NumberInputService+getValidator) ⇒ <code>function</code>
    * [#getParser()](#NumberInputService+getParser) ⇒ <code>function</code>
    * [#getFormatter()](#NumberInputService+getFormatter) ⇒ <code>function</code>
    * [#link(scope, element, attrs, ngModelCtrl)](#NumberInputService+link)

<a name="NumberInputService+create"></a>

### NumberInputService#create()
Returns an instance of the service used by a specific directive instance.

**Kind**: global method of <code>[NumberInputService](#NumberInputService)</code>  
**Access:** public  
<a name="NumberInputService+setConfig"></a>

### NumberInputService#setConfig(config)
Sets the current configuration of the service.

**Kind**: global method of <code>[NumberInputService](#NumberInputService)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>object</code> | The current configuration |
| [config.min] | <code>number</code> | Optional min number value |
| [config.max] | <code>number</code> | Optional max number value |
| [config.step] | <code>number</code> | Optional step between numbers |

<a name="NumberInputService+getValidator"></a>

### NumberInputService#getValidator() ⇒ <code>function</code>
Returns optional validation function.<br>
This function is optional and it is not required to implement it.

**Kind**: global method of <code>[NumberInputService](#NumberInputService)</code>  
**Returns**: <code>function</code> - Optional external validation function  
**Access:** public  
<a name="NumberInputService+getParser"></a>

### NumberInputService#getParser() ⇒ <code>function</code>
Returns optional parser function.<br>
This function is optional and it is not required to implement it.

**Kind**: global method of <code>[NumberInputService](#NumberInputService)</code>  
**Returns**: <code>function</code> - Optional external parser function  
**Access:** public  
<a name="NumberInputService+getFormatter"></a>

### NumberInputService#getFormatter() ⇒ <code>function</code>
Returns optional formatter function.<br>
This function is optional and it is not required to implement it.

**Kind**: global method of <code>[NumberInputService](#NumberInputService)</code>  
**Returns**: <code>function</code> - Optional external formatter function  
**Access:** public  
<a name="NumberInputService+link"></a>

### NumberInputService#link(scope, element, attrs, ngModelCtrl)
Will be called only once when the directive has access to the service.<br>
This function is optional and it is not required to implement it.

**Kind**: global method of <code>[NumberInputService](#NumberInputService)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| scope | <code>object</code> | The angular scope for the element |
| element | <code>object</code> | The jquery element on which the directive is defined on |
| attrs | <code>object</code> | Provides access to the element attributes |
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
