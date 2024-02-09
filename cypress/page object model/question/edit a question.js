class Edit {

    open() {
        return cy.visit("https://amap.amalitech-dev.net/login")
    }

    email() {
        return cy.get("input[type=email]")
    }

    password() {
        return cy.get("input[type=password]")
    }

    signinbutton() {
        return cy.get("#custom-button")
    }

    url() {
        return cy.url().should("include", "https://amap.amalitech-dev.net/dashboard/home")
    }

}

export default Edit;