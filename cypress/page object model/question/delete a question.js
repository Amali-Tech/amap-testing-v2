class Delete{

    open(){
        return cy.visit("https://amap.amalitech-dev.net/login")
    }

    email(){
        return cy.get("input[type=email]")
    }

    password(){
        return cy.get("input[type=password]")
    }

    signinbutton(){
        return cy.get("#custom-button")
    }

    url(){
        return cy.url().should("include", "https://amap.amalitech-dev.net/dashboard/home")
    }

    testmanagementtab(){
        return cy.get('ul.space-y-6')
    }

    url_question(){
    return cy.url().should("include", "https://amap.amalitech-dev.net/dashboard/apps/questions")
    }

    option(){
        // return cy.get("button.action-button.rounded-full.relative.cursor-pointer.p-1 ng-star-inserted")
        // return cy.get(":nth-child(1) > app-custom-question-card")
        return cy.get(':nth-child(1) > app-custom-question-card > .question-container > :nth-child(1) > .left > div.ng-star-inserted > app-action-button > .action-button')
    }

    remove(){
       return cy.get(".modal-menu.ml-1")
    }

}

export default Delete;