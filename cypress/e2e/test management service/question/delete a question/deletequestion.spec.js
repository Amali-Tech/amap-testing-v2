import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import data from "../../../../fixtures/login.json"
import Delete from "../../../../page object model/question/delete a question"

const myDelete = new Delete();

Given("the user visits the login page", () => {
    myDelete.open()
});

When("the user enters their credentials", () => {
    myDelete.email().type(data.email)
    myDelete.password().type(data.password)
    myDelete.signinbutton().click()
});

Then("the user is navigated to the dashboard", () => {
    myDelete.url()
});

Given("the user clicks on a test management tab", () => {
    myDelete.testmanagementtab().children().eq(1).click()
})

Then("the user is navigated to the question windows", () => {
    myDelete.url_question()
})

Given("the user clicks on an option icon on the list of the question windows", ()=>{
    myDelete.option().should("be.visible").click()
})

Then("the user removes a question card from the list of the question windows", ()=>{
    myDelete.remove().click({force:true})
})
