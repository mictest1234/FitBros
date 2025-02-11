function bmi_calculate(){
    if(document.getElementById("age").value==="" || document.getElementById("gender").value==="" || document.getElementById("height").value==="" || document.getElementById("weight").value===""){
        document.getElementById('bmi-result').innerHTML = "Enter Your Complete Details!!";
        document.getElementById("bmi-result-box").style.backgroundColor = "black"
        document.getElementById("bmi-result").style.color = "red"
    }
    else if(document.getElementById("age").value < 1 || document.getElementById("weight").value < 1 || document.getElementById("height").value < 1){
        document.getElementById('bmi-result').innerHTML = "Invalid Input!!";
        document.getElementById("bmi-result").style.color = "red"
    }
    else{
        var mass = document.getElementById("weight").value;
        var height =document.getElementById("height").value;
        var result =((mass/(height*height))*10000).toFixed(1);
        // document.getElementById('bmi-result').innerHTML = (`Result : BMI = ${result} kg/m^2 `);

        if(result<18.5){
            document.getElementById('bmi-result').innerHTML = (`Result : BMI = ${result} kg/m^2 (Underweight)`);
            document.getElementById("bmi-result-box").style.backgroundColor = "skyblue"
            document.getElementById("bmi-result").style.color = "black"
        }
        if(result>=18.5 && result<=24.9){
            document.getElementById('bmi-result').innerHTML = (`Result : BMI = ${result} kg/m^2 (Normal)`);
            document.getElementById("bmi-result-box").style.backgroundColor = "rgba(133, 189, 113, 1)"
            document.getElementById("bmi-result").style.color = "black"
        }
        if(result>=25 && result<=29.9){
            document.getElementById('bmi-result').innerHTML = (`Result : BMI = ${result} kg/m^2 (Overweight)`);
            document.getElementById("bmi-result-box").style.backgroundColor = "yellow"
            document.getElementById("bmi-result").style.color = "black"
        }
        if(result>=30 && result<=34.9){
            document.getElementById('bmi-result').innerHTML = (`Result : BMI = ${result} kg/m^2 (Obese)`);
            document.getElementById("bmi-result-box").style.backgroundColor = "orange"
            document.getElementById("bmi-result").style.color = "black"
        }
        if(result>=35){
            document.getElementById('bmi-result').innerHTML = (`Result : BMI = ${result} kg/m^2 (Extremely Obese)`);
            document.getElementById("bmi-result-box").style.backgroundColor = "red"
            document.getElementById("bmi-result").style.color = "black"
        }
    }
    document.getElementById("bmi-result-box").style.display = "block"
}

// var ele = document.getElementsByName('fat-gender');
//     for (i = 0; i < ele.length; i++) {
//         if (ele[i].checked && ele[i].value == "Female")
//             document.getElementsByClassName("hip-box").style.display = "block"
//         }

// if(document.getElementById('gender-male').checked) {
//         document.getElementsByClassName("hip-box").style.display = "none";
// }else if(document.getElementById('gender-female').checked) {
//         document.getElementsByClassName("hip-box").style.display = "block";
// }


function fat_calculate(){
    var waist_val = document.getElementById("waist").value/2.2;
    var neck_val =document.getElementById("neck").value/2.2;
    var height_val =document.getElementById("fat-height").value/2.2;
    var gender_val =document.getElementById("fat-gender");
    var hip_val =document.getElementById("hip").value/2.2;
    var age_val =document.getElementById("fat-age").value;

    if(age_val==="" || gender_val==="" || height_val==="" || neck_val==="" || waist_val==="" || hip_val===""){
        document.getElementById("fat-result").innerHTML = "Enter Your Complete Details!!";
        document.getElementById("fat-result-box").style.backgroundColor = "black"
        document.getElementById("fat-result").style.color = "red"
    }
    else if(age_val < 1 || height_val < 1 || neck_val < 1 || waist_val < 1 || hip_val < 1){
        document.getElementById("fat-result").innerHTML = "Invalid Input!!";
        document.getElementById("fat-result-box").style.backgroundColor = "black"
        document.getElementById("fat-result").style.color = "red"
    }
    else{
        var ele = document.getElementsByName('fat-gender');
            for (i = 0; i < ele.length; i++) {
                if (ele[i].checked)
                    gender_val = ele[i].value;
            }
        if(gender_val == "Male"){
            // var result_m =((495/(1.0324 - 0.19077*(Math.log10(waist_val-neck_val))+ 0.15456*(Math.log10(height_val))))-450).toFixed(1);
            var result_m =(86.010 * Math.log10(waist_val - neck_val) - 70.041 * Math.log10(height_val) + 35.76).toFixed(1);
            if(age_val<20){
                if(result_m<8){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Lean)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "skyblue"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result_m<14){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Ideal)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "rgba(133, 189, 113, 1)"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result_m<21){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Average)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "yellow"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result_m<25){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Overfat)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "orange"
                    document.getElementById("fat-result").style.color = "black"
                }
                else{
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Obese)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "red"
                    document.getElementById("fat-result").style.color = "black"
                }
            }
            else if(age_val<40){
                if(result_m<7){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Lean)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "skyblue"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result_m<20){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Ideal)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "rgba(133, 189, 113, 1)"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result_m<25){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Average)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "yellow"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result_m<35){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Overfat)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "orange"
                    document.getElementById("fat-result").style.color = "black"
                }
                else{
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Obese)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "red"
                    document.getElementById("fat-result").style.color = "black"
                }
            }
            else if(age_val<60){
                if(result_m<11){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Lean)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "skyblue"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result_m<22){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Ideal)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "rgba(133, 189, 113, 1)"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result_m<28){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Average)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "yellow"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result_m<37){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Overfat)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "orange"
                    document.getElementById("fat-result").style.color = "black"
                }
                else{
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Obese)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "red"
                    document.getElementById("fat-result").style.color = "black"
                }
            }
            else{
                if(result_m<12){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Lean)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "skyblue"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result_m<25){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Ideal)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "rgba(133, 189, 113, 1)"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result_m<30){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Average)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "yellow"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result_m<39){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Overfat)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "orange"
                    document.getElementById("fat-result").style.color = "black"
                }
                else{
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result_m} % (Obese)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "red"
                    document.getElementById("fat-result").style.color = "black"
                }
            }
            document.getElementById("fat-result-box").style.display = "block"
        }   
        else if(gender_val == "Female"){
            var result =(163.205 * Math.log10(waist_val + hip_val - neck_val) - 97.684 * Math.log10(height_val) - 78.387).toFixed(1);
            if(age_val<20){
                if(result<18){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Lean)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "skyblue"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result<23){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Ideal)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "rgba(133, 189, 113, 1)"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result<30){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Average)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "yellow"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result<35){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Overfat)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "orange"
                    document.getElementById("fat-result").style.color = "black"
                }
                else{
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Obese)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "red"
                    document.getElementById("fat-result").style.color = "black"
                }
            }
            else if(age_val<40){
                if(result<21){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Lean)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "skyblue"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result<33){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Ideal)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "rgba(133, 189, 113, 1)"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result<39){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Average)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "yellow"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result<45){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Overfat)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "orange"
                    document.getElementById("fat-result").style.color = "black"
                }
                else{
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Obese)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "red"
                    document.getElementById("fat-result").style.color = "black"
                }
            }
            else if(age_val<60){
                if(result<23){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Lean)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "skyblue"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result<34){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Ideal)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "rgba(133, 189, 113, 1)"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result<40){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Average)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "yellow"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result<47){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Overfat)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "orange"
                    document.getElementById("fat-result").style.color = "black"
                }
                else{
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Obese)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "red"
                    document.getElementById("fat-result").style.color = "black"
                }
            }
            else{
                if(result<24){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Lean)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "skyblue"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result<36){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Ideal)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "rgba(133, 189, 113, 1)"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result<42){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Average)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "yellow"
                    document.getElementById("fat-result").style.color = "black"
                }
                else if(result<50){
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Overfat)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "orange"
                    document.getElementById("fat-result").style.color = "black"
                }
                else{
                    document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Obese)`);
                    document.getElementById("fat-result-box").style.backgroundColor = "red"
                    document.getElementById("fat-result").style.color = "black"
                }
            }
        document.getElementById("fat-result-box").style.display = "block"
        }
    
        // if(result<18.5){
            // document.getElementById('fat-result').innerHTML = (`Result : BODY FAT = ${result} % (Normal) `);
            // document.getElementById("bmi-result-box").style.backgroundColor = "skyblue"
            // document.getElementById("bmi-result").style.color = "black"
        // }
    }
}

function appear_hip(){
    document.getElementById("hip").style.display = "block"
    document.getElementById("hip-label").style.display = "block"
}
function disappear_hip(){
    document.getElementById("hip").style.display = "none"
    document.getElementById("hip-label").style.display = "none"
}

var value;
function update_activity(){
    var select = document.getElementById('activity');
    value = select.options[select.selectedIndex].value;
}

function calorie_calculate(){
    var age_val =document.getElementById("cal-age").value;
    var height_val =document.getElementById("cal-height").value;
    var weight_val = document.getElementById("cal-weight").value;

    if(age_val==="" || height_val==="" || weight_val===""){
        document.getElementById("cal-result-1").innerHTML = "Enter Your Complete Details!!";
        document.getElementById("cal-result-box-1").style.backgroundColor = "black"
        document.getElementById("cal-result-1").style.color = "red"
    }
    else if(age_val < 1 || height_val < 1 || weight_val < 1){
        document.getElementById("cal-result-1").innerHTML = "Invalid Input!!";
        document.getElementById("cal-result-box-1").style.backgroundColor = "black"
        document.getElementById("cal-result-1").style.color = "red"
    }
    else{
        var ele = document.getElementsByName('cal-gender');
            for (i = 0; i < ele.length; i++) {
                if (ele[i].checked)
                    gender_val = ele[i].value;
            }
        if(gender_val == "Male"){
            var result = (10*weight_val + 6.25*height_val - 5*age_val + 5).toFixed(1);
        }
        else if(gender_val == "Female"){
            var result = (10*weight_val + 6.25*height_val - 5*age_val - 161).toFixed(1);
        }
        document.getElementById("cal-result-1").innerHTML = (`Maintain weight = ${result} calories/day`);
        document.getElementById("cal-result-box-1").style.backgroundColor = "rgba(133, 189, 113, 1)"
        document.getElementById("cal-result-1").style.color = "black"
        if(value == "sed"){
            document.getElementById("cal-result-1").innerHTML = (`Maintain weight = ${result*1.2} calories/day`);
            document.getElementById("cal-result-box-1").style.backgroundColor = "rgba(133, 189, 113, 1)"
            document.getElementById("cal-result-1").style.color = "black"
        }
        else if(value == "light"){
            document.getElementById("cal-result-1").innerHTML = (`Maintain weight = ${result*1.375} calories/day`);
            document.getElementById("cal-result-box-1").style.backgroundColor = "rgba(133, 189, 113, 1)"
            document.getElementById("cal-result-1").style.color = "black"
        }
        else if(value == "mod"){
            document.getElementById("cal-result-1").innerHTML = (`Maintain weight = ${result*1.465} calories/day`);
            document.getElementById("cal-result-box-1").style.backgroundColor = "rgba(133, 189, 113, 1)"
            document.getElementById("cal-result-1").style.color = "black"
        }
        else if(value == "active"){
            document.getElementById("cal-result-1").innerHTML = (`Maintain weight = ${result*1.549} calories/day`);
            document.getElementById("cal-result-box-1").style.backgroundColor = "rgba(133, 189, 113, 1)"
            document.getElementById("cal-result-1").style.color = "black"
        }
        else if(value == "vactive"){
            document.getElementById("cal-result-1").innerHTML = (`Maintain weight = ${result*1.725} calories/day`);
            document.getElementById("cal-result-box-1").style.backgroundColor = "rgba(133, 189, 113, 1)"
            document.getElementById("cal-result-1").style.color = "black"
        }
        else if(value == "evactive"){
            document.getElementById("cal-result-1").innerHTML = (`Maintain weight = ${result*1.9} calories/day`);
            document.getElementById("cal-result-box-1").style.backgroundColor = "rgba(133, 189, 113, 1)"
            document.getElementById("cal-result-1").style.color = "black"
        }
    }
    document.getElementById("cal-result-box-1").style.display = "block"
}

function gain(){
    var age_val =document.getElementById("cal-age").value;
    var height_val =document.getElementById("cal-height").value;
    var weight_val = document.getElementById("cal-weight").value;
    var ele = document.getElementsByName('cal-gender');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            gender_val = ele[i].value;
    }
    if(gender_val == "Male"){
        var result = (10*weight_val + 6.25*height_val - 5*age_val + 5).toFixed(1);
    }
    else if(gender_val == "Female"){
        var result = (10*weight_val + 6.25*height_val - 5*age_val - 161).toFixed(1);
    }
    document.getElementById("cal-result-2").innerHTML = (`Mild weight gain = ${result*1.1} calories/day`);
    document.getElementById("cal-result-3").innerHTML = (`Weight gain = ${result*1.2} calories/day`);
    document.getElementById("cal-result-4").innerHTML = (`Fast Weight gain = ${result*1.4} calories/day`);

    document.getElementById("cal-result-box-2").style.display = "block"
    document.getElementById("cal-result-box-3").style.display = "block"
    document.getElementById("cal-result-box-4").style.display = "block"
}

function loss(){
    var age_val =document.getElementById("cal-age").value;
    var height_val =document.getElementById("cal-height").value;
    var weight_val = document.getElementById("cal-weight").value;
    var ele = document.getElementsByName('cal-gender');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            gender_val = ele[i].value;
    }
    if(gender_val == "Male"){
        var result = (10*weight_val + 6.25*height_val - 5*age_val + 5).toFixed(1);
    }
    else if(gender_val == "Female"){
        var result = (10*weight_val + 6.25*height_val - 5*age_val - 161).toFixed(1);
    }
    document.getElementById("cal-result-2").innerHTML = (`Mild weight loss = ${result*0.9} calories/day`);
    document.getElementById("cal-result-3").innerHTML = (`Weight loss = ${result*0.8} calories/day`);
    document.getElementById("cal-result-4").innerHTML = (`Extreme weight loss = ${result*0.6} calories/day`);

    document.getElementById("cal-result-box-2").style.display = "block"
    document.getElementById("cal-result-box-3").style.display = "block"
    document.getElementById("cal-result-box-4").style.display = "block"
}