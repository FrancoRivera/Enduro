# Enduro

## Basic operation
enduro is static page generator / cms / build tool.

It goes through all files in pages folder, applies context with the same name and outputs .html files in _src folder. On top of this it processses scss files and copies assets to _src/assets.

## Enduro commands

 * `Enduro create projectname`  - Creates new folder /projectname with neccessary scaffolding
 * `Enduro` - Starts enduro for development
 * `Enduro stsart` - Starts enduro on server - Without build tools such as watching...

## Project directory structure

```

├── project/
│   ├── _src // Production files go here
│   ├── assets
│   │   ├── css
│   │   │   ├── main.scss // sass proccesses this file only
│   │   ├── fonts
│   │   ├── img
│   │   ├── js
│   ├── cms
│   │   ├── global
│   │   │   ├── global.js // all files in global directory are accessible to all pages
│   │   ├── index.js // data file is included in index.hbs file
│   ├── components
│   │   ├── button.hbs // partial that can be included by {{> button}}
│   ├── pages
│   │   ├── index.hbs // Generated page

```

## Usage

### Using components

```hbs
<!-- components/button.hbs -->
<input type="button" value="button" class="{{button_class}}">
```

```hbs
<!-- page/index.hbs -->
<p>press this button to do something</p>
{{>button button_class='red'}}
```

Will generate
```html
<!-- _src/index.html -->
<p>press this button to do something</p>
<input type="button" value="button" class="red">
```

### Using associated content files
```hbs
<!-- page/somepage.hbs -->
<p>{{person}} came and said {{said_what}}</p>
```

```javascript
// cms/somepage.js
module.exports = {
	person: "Big guy",
    said_what: "here's your pizza",
}
```

Will generate
```html
<!-- _src/somepage.html -->
<p>Big guy came and said here's your pizza</p>
```


## Helpers
* * `{{default class 'red'}}` - If no class parameter is provided 'red is being used'