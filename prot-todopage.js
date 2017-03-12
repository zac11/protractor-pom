'use strict'
module.exports={
    toDo :{
        addField: element(by.css('[placeholder="add new todo here"]')),
        checkedBox: element(by.model('todo.done')),
        addButton: element(by.css('[value="add"]'))
    },

    go: function(){
        browser.get('https://angularjs.org/'); //override the baseURL here
        browser.waitForAngular();
    },

    addItem: function(){
        var todo = this.toDo;
        todo.addButton.isDisplayed();
        todo.addField.sendKeys('item');
        todo.addButton.click();
    }


};