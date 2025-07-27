async function findEnlement(locator){
    return new Promise((resolve, reject) => {
        if(locator == "valid-locator"){
            resolve("Element found");}
            else{
            reject("Element not found");
        }
});
}

async function clickElement(locator){}

async function test1(){
    await clickElement("valid-locator");
}
async function test2() {
  await clickElement("invalid-locator");
}
async function test3() {
  await clickElement("invalid-locator");
}