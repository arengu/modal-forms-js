# Arengu Modal Forms
Tiny modal library to easily embed our forms into your website. This library requires [Arengu Forms JavaScript SDK](https://github.com/arengu/forms-js-sdk) to be loaded first.

## Getting started
To get started, paste this snippets into the `head` tag of your website:

```html
<script async src="https://sdk.arengu.com/forms.js"></script>
<script async src="https://sdk.arengu.com/modal.js"></script>
```

This snippets will load our JavaScript SDK and our tiny modal library into your website asynchronously, so it won’t affect your website load speed.

Trigger your modal form using any of the following techniques:

### **Method 1: Add a HTML attribute** (Recommended)
Place the following attribute where you want to add a click listener to trigger your modal:

```html
<button data-arengu-modal-form-id="YOUR_FORM_ID">Trigger modal</button>
```

You have to replace `YOUR_FORM_ID` with your **Form ID**, which you can find in your form settings or share page.

You can place **multiple HTML attributes** on the same page, our modal library will detect all tags with `data-arengu-modal-form-id` attribute and attach a click listener.

### **Method 2:** Calling our `show` method

Our modal library has a show method that allows to trigger your modal form on the website.

`show` method example:
```javascript
ArenguModal.show('5073697614331904');
```
The `show` call has the following fields:

| Parameter | Type | Description |
| ------ | ------ | ------ |
| formId _(required)_| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The **Form ID** of your form. You can find it in your form settings or share page. |

You can also close the modal form using the `hide` method, this method doesn't require to pass a form ID as our modal flow uses the same tag.

```javascript
ArenguModal.hide();
```