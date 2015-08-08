# Footbel Data visualization via AngularJS #

## Usage ##

Getting up and running is easy. All you have to do is include some JavaScript files and add templates (Angular directives) to your HTML files (see below for examples).

Checkout the git repository for a quickstart: https://github.com/soniCaH/footbel-angular/tree/master/public.
You can throw away foundation and other libraries you don't need, remove everything inside the body for a clean start and start adding the Angular templates you need.</p>

Otherwise: here is how to do it yourself:

  <p>Add jQuery and AngularJS in your &lt;head&gt; section</p>
  <pre><code class="language-markup">&lt;script src="https://code.jquery.com/jquery-2.1.4.min.js"&gt;&lt;/script&gt;
&lt;script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"&gt;&lt;/script&gt;</code></pre>

  <p>Load your module (with its filters and directives) in your &lt;body&gt; section (before closing the tag)</p>
  <pre><code class="language-markup">&lt;script src="js/angular.js"&gt;&lt;/script&gt;</code></pre>

  <p>Bootstrap your application/module in your &lt;body&gt; section (before closing the tag)</p>
  <pre><code class="language-javascript">
$(function () {
  angular.bootstrap(document, ['footbel']);
});</code></pre>


## Rankings ##

```
<div data-ranking=""
     data-season="1516"
     data-province="national"
     data-division="1">
</div>
```

## Matches ##
