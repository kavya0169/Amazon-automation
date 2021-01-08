//nst { select } = require('../Elements/landingElements')
const selectElements= require('../Elements/landingElements')
const dataval=require('../Data/data');

class landingPage{
   
    SearchingProcess()
{
    selectElements.enteringSearchBox.setValue('Dell Laptop')
    selectElements.clickOnSearch.click()
    
}     

        searchResults() 
        {
            const list= $$("//span[@class='a-size-medium a-color-base a-text-normal']")
            console.log("length is", list.length)
            browser.pause(3000)

            for(let element of list)
            {
             if((element.$("//span[@class='a-size-medium a-color-base a-text-normal']").getText())==='DELL Inspiron 3583 15.6inch HD Laptop (Pentium Gold 5405U/4GB/1TB HDD/Win10 + MS Office/Intel UHD Graphics/ Silver) SLV-C563119WIN9')
                {
                element.$("//span[@class='a-size-medium a-color-base a-text-normal']").click();
                break;
                }
            }
        }


    }


    
        
    
    

            
module.exports= new landingPage();