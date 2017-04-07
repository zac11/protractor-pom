
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Purpose](https://github.com/zac11/protractor-pom#purpose)
- [Application Under Test](https://github.com/zac11/protractor-pom#application-under-test)
- [Pre-requisites](https://github.com/zac11/protractor-pom#pre-requisites)
- [Tests](https://github.com/zac11/protractor-pom#tests)
- [Test Files](https://github.com/zac11/protractor-pom#test-files)
- [Running Tests](https://github.com/zac11/protractor-pom#running-tests)

# Purpose
The above github repository contains a simple scenario of using Page Object Model(POM) in protractor tests. Page Object Model is on of the various good testing practises that allows us to have better maintainibility and resuability of the code use. You can read more about POM [here](http://www.guru99.com/page-object-model-pom-page-factory-in-selenium-ultimate-guide.html).


# Application Under Test
We will use simple test to add a new todo task in the angular website [homepage](https://angularjs.org/). This tutorial was originally created [here](http://moduscreate.com/protractor-and-page-objects/). All credits goes to Mallory Mooney for this simple example.


# Pre-requisites
The tests have been written with the pre-condition that the system used for testing has the following installed 

      * node.js
      * node package manager (npm)
      * protractor - latest version - please see the link here for latest version information.
      * webdriver-manager - this needs to be updated to latest version.

If you need information on how to install `node.js` or `protractor`, you can refer to my earlier github [post](https://github.com/zac11/protractor-demo-new) and use the information for there.


# Tests
There are three tests that are included in the files above -

* User is able to navigate to Angular homepage.
* Add button for adding a new todo is displayed.
* User is able to click on the add new button and add a new todo using a particular text.


# Test Files
The test contains three files -
* [prot-todopage.js](https://github.com/zac11/protractor-pom/blob/master/prot-todopage.js) -> This .js file has all the user methods defined that would be used later in the tests. In accordance with the POM guideliness, there are separate methods for separate actions.
* [prot-todospec.js](https://github.com/zac11/protractor-pom/blob/master/prot-todospec.js) -> This .js file is the .spec file that is used for getting the specs for the tests. The tests are based on jasmine syntax, which is the default test framework syntax for protractor.
* [prot-todoconf.js](https://github.com/zac11/protractor-pom/blob/master/prot-todoconf.js) -> This .js file is the conf file for the tests. 

You will notice that in the `prot-todoconf.js` file, there is a `jasmine-spec-reporter` used in. This is a JS library for displaying the protractor in a formatted way. You can refer to this [link](https://github.com/zac11/jasmine_spec_reporter) for information regarding how to add this to your protractor tests.


# Running Tests
You can simply run these tests by running the protractor `prot-todoconf.js` file from your command prompt.

```javascript

protractor prot-todoconf.js
```


which should give you a nice output like this [screenshot](https://github.com/zac11/protractor-pom/blob/master/Screen%20Shot%202017-03-12%20at%205.42.03%20PM.png).



