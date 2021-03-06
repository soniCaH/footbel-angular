# Footbel Data visualization via AngularJS #

Web version of this "documentation" available at http://footbel-ang.van-ransbeeck.be/.

## Usage ##

Getting up and running is easy. All you have to do is include some JavaScript files and add templates (Angular directives) to your HTML files (see below for examples).

Checkout the git repository for a quickstart: https://github.com/soniCaH/footbel-angular/tree/master/public.
You can throw away foundation and other libraries you don't need, remove everything inside the body for a clean start and start adding the Angular templates you need.</p>

Otherwise: here is how to do it yourself:

Add jQuery and AngularJS in your <head> section
```HTML
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
```

Load the module (with its filters and directives) in your <body> section (before closing the tag)
```HTML
<script src="js/angular.js"></script>
```

Bootstrap your application/module in your <body> section (before closing the tag)
```JavaScript
$(function () {
  angular.bootstrap(document, ['footbel']);
});
```

## Rankings ##

### Full Rankings ###

Full rankings of a season/division, sorted by position

```HTML
<div data-ranking=""
     data-season="1516"
     data-province="national"
     data-division="1">
</div>
```

### Short Rankings ###

Short rankings to display as a widget. 
Will retrieve the ranking of the team (in division/season we define), and fetch a defined number of teams who are ranked above and below. 
If there are no (or too few) teams ranked higher/lower, the focus will shift to the other side (so for example if the team we search for is in first position and we want 5 results, we will display our team + 4 teams below it).
    
```HTML
<div data-ranking_short=""
     data-season="[season]"
     data-province="[province code]"
     data-division="[division code]"
     data-teamname="[team name]"
     data-number="[number of total results]">
</div>
```

## Matches ##

### Overview ###

Create a listing of all matches, grouped per matchday, or select an individual matchday to display.
        
```HTML
<div data-matches_overview=""
     data-season="[season]"
     data-province="[province code]"
     data-division="[division code]"
     data-logo="[display teamlogos]"
     data-matchday="[specific matchday or 0]">
</div>
```

### Next/Previous matches for a reg number ###

Create a listing of all upcoming/previous matches per division of a specified regnumber.
        
```HTML
<div data-matches_next=""
     data-season="[season]"
     data-regnumber="[reg number]">
</div>
```
```HTML
<div data-matches_prev=""
     data-season="[season]"
     data-regnumber="[reg number]">
</div>
```

### Next/Previous match(es) for a specific division from a reg number ###

Display a number of next/last match(es) for 1 specific division in a club. Choice between small and large result (with club logos).
        
```HTML
<div data-matches_division_next=""
     data-season="[season]"
     data-regnumber="[regnumber]"
     data-division="[division]"
     data-number="[number]">
</div>
```
        
```HTML
<div data-matches_division_prev=""
     data-season="[season]"
     data-regnumber="[regnumber]"
     data-division="[division]"
     data-number="[number]">
</div>
```
        
```HTML
<div data-matches_division_next_full=""
     data-season="[season]"
     data-regnumber="[regnumber]"
     data-division="[division]"
     data-number="[number]">
</div>
```
        
```HTML
<div data-matches_division_prev_full=""
     data-season="[season]"
     data-regnumber="[regnumber]"
     data-division="[division]"
     data-number="[number]">
</div>
```
