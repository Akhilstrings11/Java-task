function getMarks(){

    var englishMarks = parseInt(document.getElementById("englishMarks").value);
    var teluguMarks = parseInt(document.getElementById("teluguMarks").value);
    var hindiMarks = parseInt(document.getElementById("hindiMarks").value);
    var mathsMarks = parseInt(document.getElementById("mathsMarks").value);
    var socialMarks = parseInt(document.getElementById("socialMarks").value);
    var scienceMarks = parseInt(document.getElementById("scienceMarks").value);
    
    

    var totalMarks = englishMarks + teluguMarks + hindiMarks + mathsMarks + socialMarks + scienceMarks

    console.log("English Marks = ",englishMarks,"Telugu Marks = " ,teluguMarks,"Hindi marks = ", hindiMarks,"Maths marks = ",
    mathsMarks,"Social marks = ", socialMarks, "Science marks = ", scienceMarks)
    var result;
    if(englishMarks >= 35 && teluguMarks >= 35 && hindiMarks >= 35 && mathsMarks >= 35 && socialMarks >= 35 && scienceMarks >= 35){
        console.log("passed")
        document.getElementById("passOrFail").innerHTML = `<span style="color:green" > passed the Exam </span>`
        result = "pass"
    } else {
        console.log("Failed the exam")
        document.getElementById("passOrFail").innerHTML = `<span style="color:red" > Failed the Exam <span>`
        result = "fail"
    }
    console.log(totalMarks,"total Marks")
    var studentPercentage = (totalMarks/6)
    document.getElementById("sudentMarks").innerHTML = totalMarks
    console.log("student percentage",studentPercentage)
    document.getElementById("studentPercentage").innerHTML =  `${studentPercentage.toFixed(2)} %`
    //  `studentPercentage.toFixed(2) + " " +  "%"`
    if(result == "pass"){
        if (studentPercentage == 100){
            console.log("Grade O")
            document.getElementById("gradePoints").innerHTML = "O grade"
        } else if(studentPercentage >= 91 && studentPercentage <= 99){
            console.log("Grade A")
            document.getElementById("gradePoints").innerHTML = "A grade"
        } else if(studentPercentage >= 81 && studentPercentage <=90){
            console.log("Grade B")
            document.getElementById("gradePoints").innerHTML = "B grade"
        } else if(studentPercentage >= 71 && studentPercentage <= 80){
            console.log("Grade B")
            document.getElementById("gradePoints").innerHTML = "B grade"
        } else if(studentPercentage >= 61 && studentPercentage <= 70){
            console.log("Grade C")
            document.getElementById("gradePoints").innerHTML = "C grade"
        } else if(studentPercentage >= 51 && studentPercentage <= 60){
            console.log("Grade C")
            document.getElementById("gradePoints").innerHTML = "C grade"
        } else if(studentPercentage >= 41 && studentPercentage <= 50){
            console.log("Grade D")
            document.getElementById("gradePoints").innerHTML = "D grade"
        } else if(studentPercentage >= 0 && studentPercentage <= 35){
            console.log("FAIL")
        } else {
            console.log("")
            document.getElementById("gradePoints").innerHTML = "On grades Obtained"
        }
    } else {
        document.getElementById("gradePoints").innerHTML = "No grade obtained"
    }

}

