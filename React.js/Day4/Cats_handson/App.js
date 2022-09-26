import React from "react";
import Contact from "./components/Contact"

function App(){
    return(
        <div className="contacts">
            <Contact 
                img ="./images/mr-whiskerson.png"
                name= "Mr. Whiskerson"
                phone = "(212) 555-1234"
                email ="mr.whiskaz@catnap.meow"
        />
         
            <Contact
                 img ="./images/fluffykins.png"
                 name= "Fluffykins"
                 phone = "(212) 555-2345"
                 email ="fluff@me.com"
        />

            <Contact
                 img ="./images/felix.png"
                 name= "Felix"
                 phone = "(212) 555-4567"
                 email ="thecat@hotmail.com"
        />

            <Contact
                 img ="./images/pumpkin.png"
                 name= "Pumpkin"
                 phone = "(212) 555-9876"
                 email ="pumpkin@scrimba.com"
        />
        </div>
    )
}

export default App