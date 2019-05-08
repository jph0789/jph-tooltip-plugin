# jph-tooltip-plugin
A basic jQuery tooltips Plugin with detailed tutorial and built process

[write a jquery hover tooltips plugin step by step](https://www.jquerypluginhub.com/artdetail/12275021685.html)


## How to use
### Markup
Put the tooltip content to the hovered element's title or data-tip attribute.
``` html
<div data-tip="Hello" id="div1"> Hello</div>
<a href="#" title="Welcome to visit the website" id="website">website</a>
```

### Show tooltip on selected elements
Include the downloaded files in a link tag(jph-tooltip.css) or a script tag(jph-tooltip-plugin.js) after jQuery 
and call .jphToolTip() on the jQuery element you want to show tooltip.

``` html
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script src="/path/to/jph-tooltip-plugin.js"></script>
<link rel="stylesheet" type="text/css" media="screen" href="jph-tooltip.css">
</head>
<body>
    <script>
        $(function(){
            $("#div1").jphToolTip();
            $("#website").jphToolTip({theme:'red'});
            // $(".jTips").jphToolTip({theme:'green'});
        });
    </script>
</body>
```
