## Members

<dl>
<dt><a href="#NumberInputService+config">#config</a> : <code><a href="#Config">Config</a></code></dt>
<dd><p>Holds the current configuration of the service and is populated by the directive instance.</p>
</dd>
<dt><a href="#NumberInputService+min">#min</a> : <code>Number</code></dt>
<dd><p>Optional min value.</p>
</dd>
<dt><a href="#NumberInputService+max">#max</a> : <code>Number</code></dt>
<dd><p>Optional max value.</p>
</dd>
<dt><a href="#NumberInputService+step">#step</a> : <code>Number</code></dt>
<dd><p>Optional step value.</p>
</dd>
<dt><a href="#numberInput">numberInput</a> ⇒ <code>Object</code></dt>
<dd><p>The number-input is an angular directive which provides number validation, parsing and formatting capabilities.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#NumberInputService+create">#create()</a> ⇒ <code>Object</code></dt>
<dd><p>Returns an instance of the service used by a specific directive instance.</p>
</dd>
<dt><a href="#NumberInputService+validate">#validate([modelValue], [viewValue])</a> ⇒ <code>Boolean</code></dt>
<dd><p>Optional validation function.<br>
This function is optional and it is not required to implement it.</p>
</dd>
<dt><a href="#NumberInputService+parse">#parse([value])</a> ⇒ <code>Object</code></dt>
<dd><p>Optional parser function.<br>
This function is optional and it is not required to implement it.</p>
</dd>
<dt><a href="#NumberInputService+format">#format([value])</a> ⇒ <code>Object</code></dt>
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
<dt><a href="#Config">Config</a> : <code>Object</code></dt>
<dd><p>The directive configuration.</p>
</dd>
</dl>

<a name="NumberInputService"></a>

## NumberInputService
Service definition used by the number input to extend the number input capabilities.

**Kind**: global interface  
**Access**: public  
**Author**: Sagie Gur-Ari  

* [NumberInputService](#NumberInputService)
    * [#config](#NumberInputService+config) : [<code>Config</code>](#Config)
    * [#min](#NumberInputService+min) : <code>Number</code>
    * [#max](#NumberInputService+max) : <code>Number</code>
    * [#step](#NumberInputService+step) : <code>Number</code>
    * [#create()](#NumberInputService+create) ⇒ <code>Object</code>
    * [#validate([modelValue], [viewValue])](#NumberInputService+validate) ⇒ <code>Boolean</code>
    * [#parse([value])](#NumberInputService+parse) ⇒ <code>Object</code>
    * [#format([value])](#NumberInputService+format) ⇒ <code>Object</code>
    * [#link(scope, element, attributes, ngModelCtrl)](#NumberInputService+link)

<a name="NumberInputService+config"></a>

### NumberInputService#config : [<code>Config</code>](#Config)
Holds the current configuration of the service and is populated by the directive instance.

**Kind**: global property of [<code>NumberInputService</code>](#NumberInputService)  
**Access**: public  
<a name="NumberInputService+min"></a>

### NumberInputService#min : <code>Number</code>
Optional min value.

**Kind**: global property of [<code>NumberInputService</code>](#NumberInputService)  
**Access**: public  
<a name="NumberInputService+max"></a>

### NumberInputService#max : <code>Number</code>
Optional max value.

**Kind**: global property of [<code>NumberInputService</code>](#NumberInputService)  
**Access**: public  
<a name="NumberInputService+step"></a>

### NumberInputService#step : <code>Number</code>
Optional step value.

**Kind**: global property of [<code>NumberInputService</code>](#NumberInputService)  
**Access**: public  
<a name="NumberInputService+create"></a>

### NumberInputService#create() ⇒ <code>Object</code>
Returns an instance of the service used by a specific directive instance.

**Kind**: global method of [<code>NumberInputService</code>](#NumberInputService)  
**Returns**: <code>Object</code> - The service instance  
**Access**: public  
<a name="NumberInputService+validate"></a>

### NumberInputService#validate([modelValue], [viewValue]) ⇒ <code>Boolean</code>
Optional validation function.<br>
This function is optional and it is not required to implement it.

**Kind**: global method of [<code>NumberInputService</code>](#NumberInputService)  
**Returns**: <code>Boolean</code> - true if valid  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [modelValue] | <code>Object</code> | The model value |
| [viewValue] | <code>Object</code> | The UI view value |

<a name="NumberInputService+parse"></a>

### NumberInputService#parse([value]) ⇒ <code>Object</code>
Optional parser function.<br>
This function is optional and it is not required to implement it.

**Kind**: global method of [<code>NumberInputService</code>](#NumberInputService)  
**Returns**: <code>Object</code> - The parsed value  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>Object</code> | The value to parse |

<a name="NumberInputService+format"></a>

### NumberInputService#format([value]) ⇒ <code>Object</code>
Optional formatter function.<br>
This function is optional and it is not required to implement it.

**Kind**: global method of [<code>NumberInputService</code>](#NumberInputService)  
**Returns**: <code>Object</code> - The formatted value  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>Object</code> | The value to format |

<a name="NumberInputService+link"></a>

### NumberInputService#link(scope, element, attributes, ngModelCtrl)
Will be called only once when the directive has access to the service.<br>
This function is optional and it is not required to implement it.

**Kind**: global method of [<code>NumberInputService</code>](#NumberInputService)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| scope | <code>Object</code> | The angular scope for the element |
| element | <code>Object</code> | The jquery element on which the directive is defined on |
| attributes | <code>Object</code> | Provides access to the element attributes |
| ngModelCtrl | <code>Object</code> | The angular model controller |

<a name="numberInput"></a>

## numberInput ⇒ <code>Object</code>
The number-input is an angular directive which provides number validation, parsing and formatting capabilities.

**Kind**: global variable  
**Returns**: <code>Object</code> - The directive definition  
**Ngdoc**: directive  
**Restrict**: ECA  

| Param | Type | Description |
| --- | --- | --- |
| ng-model | <code>Number</code> | The model for the number input |
| [min] | <code>Number</code> | Optional min number value |
| [max] | <code>Number</code> | Optional max number value |
| [step] | <code>Number</code> | Optional step between numbers |
| [validation] | <code>function</code> | Optional external validation function |
| [parser] | <code>function</code> | Optional external parser function |
| [formatter] | <code>function</code> | Optional external formatter function |
| [service] | <code>String</code> | Optional service to inject which will be used to control the directive behaviour (will override validation, parser and formatter attributes) |

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
  service="myService">
```
<a name="event_number-input$update-model"></a>

## "number-input$update-model" ([modelValue])
Event which will update the model and view value.

**Kind**: event emitted  

| Param | Type | Description |
| --- | --- | --- |
| [modelValue] | <code>Object</code> | The new model value (undefined to use the ngModelCtrl.$modelValue instead) |

<a name="Config"></a>

## Config : <code>Object</code>
The directive configuration.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| [min] | <code>Number</code> | Optional min number value |
| [max] | <code>Number</code> | Optional max number value |
| [step] | <code>Number</code> | Optional step between numbers |

