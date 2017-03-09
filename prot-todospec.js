var todoPage = require('../protractor-pom/prot-todopage.js');


describe('This is a sample Page Object Model for protractor', function() {
    
    
    it('should navigate to the angular web-page', function() {
        todoPage.go();
    });
    
    
    it('should add a new todopage', function() {
        todoPage.addItem('New Task Item');     
    });
        
});
    

