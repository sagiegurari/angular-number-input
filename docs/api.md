## Members

<dl>
<dt><a href="#NumberInputService+config">#config</a> : <code><a href="#Config">Config</a></code></dt>
<dd><p>Holds the current configuration of the service and is populated by the directive instance.</p>
</dd>
<dt><a href="#NumberInputService+min">#min</a> : <code>number</code></dt>
<dd><p>Optional min value.</p>
</dd>
<dt><a href="#NumberInputService+max">#max</a> : <code>number</code></dt>
<dd><p>Optional max value.</p>
</dd>
<dt><a href="#NumberInputService+step">#step</a> : <code>number</code></dt>
<dd><p>Optional step value.</p>
</dd>
<dt><a href="#numberInput">numberInput</a> ⇒ <code>object</code></dt>
<dd><p>The number-input is an angular directive which provides number validation, parsing and formatting capabilities.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#NumberInputService+create">#create()</a> ⇒ <code>object</code></dt>
<dd><p>Returns an instance of the service used by a specific directive instance.</p>
</dd>
<dt><a href="#NumberInputService+validate">#validate([modelValue], [viewValue])</a> ⇒ <code>boolean</code></dt>
<dd><p>Optional validation function.<br>
This function is optional and it is not required to implement it.</p>
</dd>
<dt><a href="#NumberInputService+parse">#parse([value])</a> ⇒ <code>object</code></dt>
<dd><p>Optional parser function.<br>
This function is optional and it is not required to implement it.</p>
</dd>
<dt><a href="#NumberInputService+format">#format([value])</a> ⇒ <code>object</code></dt>
<dd><p>Optional formatter function.<br>
This function is optional and it is not required to implement it.</p>
</dd>
<dt><a href="#NumberInputService+link">#link(scope, element, attributes, ngModelCtrl)</a></dt>
<dd><p>Will be called only once when the directive has access to the service.<br>
This function is optional and it is not required to implement it.</p>
</dd>
</dl>

## Events

<dl>
<dt><a href="#event_number-input$update-model">"number-input$update-model" ([modelValue])</a></dt>
<dd><p>Event which will update the model and view value.</p>
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
    * [#min](#NumberInputService+min) : <code>number</code>
    * [#max](#NumberInputService+max) : <code>number</code>
    * [#step](#NumberInputService+step) : <code>number</code>
    * [#create()](#NumberInputService+create) ⇒ <code>object</code>
    * [#validate([modelValue], [viewValue])](#NumberInputService+validate) ⇒ <code>boolean</code>
    * [#parse([value])](#NumberInputService+parse) ⇒ <code>object</code>
    * [#format([value])](#NumberInputService+format) ⇒ <code>object</code>
    * [#link(scope, element, attributes, ngModelCtrl)](#NumberInputService+link)

<a name="NumberInputService+config"></a>

### NumberInputService#config : <code>[Config](#Config)</code>
Holds the current configuration of the service and is populated by the directive instance.

**Kind**: global property of <code>[NumberInputService](#NumberInputService)</code>  
**Access:** public  
<a name="NumberInputService+min"></a>

### NumberInputService#min : <code>number</code>
Optional min value.

**Kind**: global property of <code>[NumberInputService](#NumberInputService)</code>  
**Access:** public  
<a name="NumberInputService+max"></a>

### NumberInputService#max : <code>number</code>
Optional max value.

**Kind**: global property of <code>[NumberInputService](#NumberInputService)</code>  
**Access:** public  
<a name="NumberInputService+step"></a>

### NumberInputService#step : <code>number</code>
Optional step value.

**Kind**: global property of <code>[NumberInputService](#NumberInputService)</code>  
**Access:** public  
<a name="NumberInputService+create"></a>

### NumberInputService#create() ⇒ <code>object</code>
Returns an instance of the service used by a specific directive instance.

**Kind**: global method of <code>[NumberInputService](#NumberInputService)</code>  
**Returns**: <code>object</code> - The service instance  
**Access:** public  
<a name="NumberInputService+validate"></a>

### NumberInputService#validate([modelValue], [viewValue]) ⇒ <code>boolean</code>
Optional validation function.<br>
This function is optional and it is not required to implement it.

**Kind**: global method of <code>[NumberInputService](#NumberInputService)</code>  
**Returns**: <code>boolean</code> - true if valid  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| [modelValue] | <code>object</code> | The model value |
| [viewValue] | <code>object</code> | The UI view value |

<a name="NumberInputService+parse"></a>

### NumberInputService#parse([value]) ⇒ <code>object</code>
Optional parser function.<br>
This function is optional and it is not required to implement it.

**Kind**: global method of <code>[NumberInputService](#NumberInputService)</code>  
**Returns**: <code>object</code> - The parsed value  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>object</code> | The value to parse |

<a name="NumberInputService+format"></a>

### NumberInputService#format([value]) ⇒ <code>object</code>
Optional formatter function.<br>
This function is optional and it is not required to implement it.

**Kind**: global method of <code>[NumberInputService](#NumberInputService)</code>  
**Returns**: <code>object</code> - The formatted value  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>object</code> | The value to format |

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
<!-- simple usage of the directive with custom validation/formatting/parsing -->
<input type="text" class="number-input"
  ng-model="value"
  min="-100"
  max="100"
  step="0.5"
  validation="myNumberValidation"
  formatter="myNumberFormatter"
  parser="myNumberParser">

<!-- using angular service for common custom validation/formatting/parsing -->
<input type="text" class="number-input"
  ng-model="value"
  min="-100"
  max="100"
  step="0.5"
  service="myService">
```
<a name="event_number-input$update-model"></a>

## "number-input$update-model" ([modelValue])
Event which will update the model and view value.

**Kind**: event emitted  

| Param | Type | Description |
| --- | --- | --- |
| [modelValue] | <code>object</code> | The new model value (undefined to use the ngModelCtrl.$modelValue instead) |

<a name="Config"></a>

## Config : <code>object</code>
The directive configuration.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| [min] | <code>number</code> | Optional min number value |
| [max] | <code>number</code> | Optional max number value |
| [step] | <code>number</code> | Optional step between numbers |

