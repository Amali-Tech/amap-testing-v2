class Question {
      
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

    addnewquestion(){
        return cy.get(':nth-child(3) > #custom-button')
    }

    url_question_form(){
        return cy.url().should("include", "https://amap.amalitech-dev.net/dashboard/apps/questions/create-questions")
    }

    questionfield(){
        return cy.get('.ProseMirror')
    }

    questiontype(){
        return cy.get(':nth-child(1) > app-custom-dropdown > .secondary_select > .secondary')
    }

    domain(){
        return cy.get('.form-select')
    }

    category(){
        return cy.get('.block.ng-star-inserted > .form-select')
    }

    difficultylevel(){
       return cy.get(':nth-child(4) > app-custom-dropdown > .secondary_select > .secondary')
    }

    radio(){
        return cy.get(':nth-child(2) > .flex > div.ng-star-inserted > div > .radio')
    }

    score(){
        return cy.get('.w-12')
    }

    savebutton(){
        return cy.get('.ng-star-inserted > #custom-button')
    }

    url_createdquestion(){
        return cy.url().should("include", "https://amap.amalitech-dev.net/dashboard/apps/questions")
    }








}

export default Question;