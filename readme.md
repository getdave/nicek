# Frontend Developer Test

## Getting Started

1. Install Gulp globally (if not already installed on your system) - `npm install -g gulp`
2. Install all npm packages
3. Start coding! :)


## Objectives

The primary objective of the test is to convert the broken static site into a functioning Responsive web page.  In addition you should aim to address some of the following objectives:

* Apply browswer vendor prefixes where required by modern browsers - implement autoprefixr via Gulp
* Improve the general Acccessibility of the page being sure to fix any critical issues
* Optimise the page for Performance as best as you can.
* Improve the structure and utility of


### Responsive Aspects

* Navigation
  * care is taken to cater for layout of navigation across all viewports [1 mark]
  * solution is implemented to "manage" navigation on screens with less real estate [3 marks]
* Responsive Image approach taken on main banner image:
  * if solution loads both images - [1 mark]
  * if solution loads only loads the most appropriate image [2 marks]
* Picturefill implemented on `<img>` tags - [5 marks]


### Apply browswer vendor prefixes

* Suitable prefixes applied automatically to the output CSS via autoprefixr  [2 marks]
* Suitable prefixes applied by hand to the Sass  [1 mark]


### Accessibility

* `<header>`, `<footer>` and `<main>` tags are applied correctly [1 mark]
* ARIA `role` attributes applied to appropriate elements [1 mark]
* `alt` attributes applied to images [1 mark]

### Peformance

* Concatante CSS into a single file [1 mark]
* Move scripts before `</body>` [1 mark]
* Add `async` to `<script>` tags [2 marks]
* Optimise images [1 mark]
