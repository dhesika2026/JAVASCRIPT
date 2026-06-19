function checkage(age){
    if (age<0){
        throw new Error("Age Can't Be Negative");
    }
    else{
        console.log("User Age:",age);
    }
}

checkage(-8)