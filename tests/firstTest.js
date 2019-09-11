import { Selector } from "testcafe";
import percySnapshot from '@percy/testcafe';


fixture('Getting Started')
       .page('localhost:3000/login')
   
 

test('My first test', async testController => {
    // t is the test controller object
    await testController
       .typeText('.email-login', 'bethwambuimuniu@gmail.com')
       .typeText('.password-login', 'jigsawing' )
       .click('.login-button')
       .wait(4000)
       await percySnapshot(testController, "Succesfully login");
       const documentUri = await testController.eval(() => document.documentURI)
        await testController.expect(documentUri).eql("http://localhost:3000/dashboard")
})

