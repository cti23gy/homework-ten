import * as MODEL from "../model/model.js";

function init() {
    let currentHeroImage = "home";
    MODEL;            //places code from model.js
    //nav control
    $("nav a").click(function(e) {
        let btnID = this.id;
        let contentID = btnID + "Content";
        let headerID = btnID + "Header";

        $(".hero")
            .removeClass(`${currentHeroImage}`)
            .addClass(`${btnID}`);
        currentHeroImage = btnID;
    
        

        console.log(btnID);
        

        MODEL.getPageContent(contentID);
        MODEL.getHeroContent(headerID);
    });

    //section control (currently does nothing)
    $("section a").click(function(e) {
        let btnID = this.id;
        let contentID = btnID + "Content";

        console.log(btnID);

        MODEL.getPageContent(contentID);
        
    });
}

//checks for all elemants to be read by browser
$(document).ready(function() {
    init();
    //MODEL.getPageContent("homeContent");
});