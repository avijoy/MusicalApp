export class BankDetailsModel {
    /*{"bankname": "AXIS", 
    "accountnumber": "786554", 
    "firstname": "AVIJOY", 
    "lastname": "SIRCAR", 
    "primary": "option1",
    "username":"avijoys"*/
    bankname: String
    accountnumber: String
    firstname:String
    lastname:String
    primary:String
    username:String

    constructor(bankname:String,accountnumber:String,firstname:String,lastname:String,primary:String,username:String){
        this.bankname=bankname
        this.accountnumber=accountnumber
        this.firstname=firstname
        this.lastname=lastname
        this.primary=primary
        this.username=username
    }
}
