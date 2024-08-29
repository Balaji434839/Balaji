function sayHello(req,res){
    return res.send("Hello, World!")
}

function sayGoodMorning(req,res){
    return res.send("Hello, good morning!") 
}

function sayGoodAfetrNoon(req,res){
    return res.send("Hello, good afternoon!")
}

export {
    sayHello ,
    sayGoodMorning ,
    sayGoodAfetrNoon
}