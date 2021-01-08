
const util=require('../Utilities/browser.util')
const element=require('../Utilities/Element.util')
const productone=require('../Elements/ProductElements')


class product{

    SwitchingToWIindow()
    {
        
         util.switchToTab('Buy DELL Inspiron 3583 15.6inch HD Laptop (Pentium Gold 5405U/4GB/1TB HDD/Win10 + MS Office/Intel UHD Graphics/ Silver) SLV-C563119WIN9')
       
    }

    isImageDisplayed(){

       if( productone.Image.isDisplayed())
       {
           console.log("The image is dispalayed")
       }
    }

    Addquantity(index)
    {
         productone.quantity.selectByVisibleText(index)
    }
    AddingToCart(){

         productone.addToCart.click()
    }
    
}
module.exports=new product()