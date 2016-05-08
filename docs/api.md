<a name="numberInput"></a>

## numberInput
The number-input is an angular directive which provides number validation, parsing and formatting capabilities.

**Kind**: global variable  
**Ngdoc**: directive  
**Restrict**: ECA  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | The min number value |
| max | <code>number</code> | The max number value |
| step | <code>number</code> | The step between numbers |
| [validation] | <code>function</code> | Optional external validation function |
| [parser] | <code>function</code> | Optional external parser function |
| [formatter] | <code>function</code> | Optional external formatter function |

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
