import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import Edit from "../../../../page object model/question/edit a question"
import data from "../../../../fixtures/login.json"

const edit = new Edit();

Given("the user visits the login page", () => {
    edit.open()
})

When("the user enters their credentials", () => {
    edit.email().type(data.email)
    edit.password().type(data.password)
    edit.signinbutton()
})

Then("the user is navigated to the dashboard", () => {
    edit.url()
})
