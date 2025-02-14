var days;
function update_days(){
    var select = document.getElementById('days');
    days = select.options[select.selectedIndex].value;
}

function generate(){
    
    var goal = document.getElementsByName('goal');
        for (i = 0; i < goal.length; i++) {
            if (goal[i].checked)
                var goal_val = goal[i].value;
        }
    var equip = document.getElementsByName('equipments');
        for (i = 0; i < equip.length; i++) {
            if (equip[i].checked)
                var equip_val = equip[i].value;
        }
    var exp = document.getElementsByName('experience');
        for (i = 0; i < exp.length; i++) {
            if (exp[i].checked)
                var exp_val = exp[i].value;
        }

    if(goal_val == "gain"){
        if(equip_val == "weight" && exp_val == "beginner" && days == 2){
           generate2('g-w-b-2')
        }
        else if(equip_val == "weight" && exp_val == "beginner" && days == 3){
            generate2('g-w-b-3')
        }
        else if(equip_val == "weight" && exp_val == "beginner" && days == 4){
            generate2('g-w-b-4')
        }
        else if(equip_val == "weight" && exp_val == "beginner" && days == 6){
            generate2('g-w-b-6')
        }
        else if(equip_val == "weight" && exp_val == "intermediate" && days == 3){
            generate2('g-w-i-3')
        }
        else if(equip_val == "weight" && exp_val == "intermediate" && days == 4){
            generate2('g-w-i-4')
        }
        else if(equip_val == "weight" && exp_val == "intermediate" && days == 5){
            generate2('g-w-i-5')
        } 
        else if(equip_val == "weight" && exp_val == "intermediate" && days == 6){
            generate2('g-w-i-6')
        }
        else if(equip_val == "weight" && exp_val == "advanced" && days == 5){
            generate2('g-w-a-5')
        }
        else if(equip_val == "weight" && exp_val == "advanced" && days == 6){
            generate2('g-w-a-6')
        }
        else if(equip_val == "body" && exp_val == "beginner" && days == 2){
            generate2('g-b-b-2')
        }
        else if(equip_val == "body" && exp_val == "beginner" && days == 3){
            generate2('g-b-b-3')
        }
        else if(equip_val == "body" && exp_val == "beginner" && days == 4){
            generate2('g-b-b-4')
        }
        else if(equip_val == "body" && exp_val == "beginner" && days == 6){
            generate2('g-b-b-6')
        }
        else if(equip_val == "body" && exp_val == "intermediate" && days == 2){
            generate2('g-b-i-2')
        }
        else if(equip_val == "body" && exp_val == "intermediate" && days == 3){
            generate2('g-b-i-3')
        }
        else if(equip_val == "body" && exp_val == "intermediate" && days == 4){
            generate2('g-b-i-4')
        }
        else if(equip_val == "body" && exp_val == "intermediate" && days == 5){
            generate2('g-b-i-5')
        }
        else if(equip_val == "body" && exp_val == "advanced" && days == 3){
            generate2('g-b-a-5')
        }
        else if(equip_val == "body" && exp_val == "advanced" && days == 6){
            generate2('g-b-a-6')
        }
    }
    
//     if(goal_val == "lose"){
//         if(equip_val == "weight" && exp_val == "beginner" && days == 2){
//            generate2('g-w-b-2')
//         }
//         else if(equip_val == "weight" && exp_val == "beginner" && days == 3){
//             generate2('g-w-b-3')
//         }
//         else if(equip_val == "weight" && exp_val == "beginner" && days == 4){
//             generate2('g-w-b-4')
//         }
//         else if(equip_val == "weight" && exp_val == "beginner" && days == 6){
//             generate2('g-w-b-6')
//         }
//         else if(equip_val == "weight" && exp_val == "intermediate" && days == 3){
//             generate2('g-w-i-3')
//         }
//         else if(equip_val == "weight" && exp_val == "intermediate" && days == 4){
//             generate2('g-w-i-4')
//         }
//         else if(equip_val == "weight" && exp_val == "intermediate" && days == 5){
//             generate2('g-w-i-5')
//         } 
//         else if(equip_val == "weight" && exp_val == "intermediate" && days == 6){
//             generate2('g-w-i-6')
//         }
//         else if(equip_val == "weight" && exp_val == "advanced" && days == 5){
//             generate2('g-w-a-5')
//         }
//         else if(equip_val == "weight" && exp_val == "advanced" && days == 6){
//             generate2('g-w-a-6')
//         }
//         else if(equip_val == "body" && exp_val == "beginner" && days == 2){
//             generate2('g-b-b-2')
//         }
//         else if(equip_val == "body" && exp_val == "beginner" && days == 3){
//             generate2('g-b-b-3')
//         }
//         else if(equip_val == "body" && exp_val == "beginner" && days == 4){
//             generate2('g-b-b-4')
//         }
//         else if(equip_val == "body" && exp_val == "beginner" && days == 6){
//             generate2('g-b-b-6')
//         }
//         else if(equip_val == "body" && exp_val == "intermediate" && days == 3){
//             generate2('g-b-i-3')
//         }
//         else if(equip_val == "body" && exp_val == "intermediate" && days == 4){
//             generate2('g-b-i-4')
//         }
//         else if(equip_val == "body" && exp_val == "intermediate" && days == 5){
//             generate2('g-b-i-5')
//         }
//         else if(equip_val == "body" && exp_val == "advanced" && days == 5){
//             generate2('g-b-a-5')
//         }
//         else if(equip_val == "body" && exp_val == "advanced" && days == 6){
//             generate2('g-b-a-6')
//         }
//     }
}

function day_temp(input){
    if(input == 2){
        document.getElementById('photo-2').style.display = 'none'
        document.getElementById('photo-3').style.display = 'none'
        document.getElementById('black-box-3').style.display = 'none'
        document.getElementById('black-box-4').style.display = 'none'
        document.getElementById('black-box-5').style.display = 'none'
        document.getElementById('black-box-6').style.display = 'none'
        document.getElementById('inverted-3').style.display = 'none'
        document.getElementById('inverted-4').style.display = 'none'
        document.getElementById('inverted-5').style.display = 'none'
        document.getElementById('inverted-6').style.display = 'none'
        document.getElementById('bg-bluebox').style.height = '2200px'
        document.getElementById('rest-1').innerHTML = 'Tuesday - Rest <br> Wednesday - Rest'
        document.getElementById('rest-2').innerHTML = 'Friday - Rest <br> Saturday - Rest <br> Sunday - Rest'
        document.getElementById('rest-3').style.display = 'none'
        document.getElementById('rest-4').style.display = 'none'
        document.getElementById('rest-5').style.display = 'none'
        document.getElementById('rest-6').style.display = 'none'
        document.getElementById('footer').style.top = '2100px'
        document.getElementById('day-1').innerHTML = 'Monday'
        document.getElementById('day-2').innerHTML = 'Thursday'
    }
    else if(input == 3){
        document.getElementById('photo-2').style.height = '940px'
        document.getElementById('photo-3').style.display = 'none'
        document.getElementById('black-box-4').style.display = 'none'
        document.getElementById('black-box-5').style.display = 'none'
        document.getElementById('black-box-6').style.display = 'none'
        document.getElementById('inverted-4').style.display = 'none'
        document.getElementById('inverted-5').style.display = 'none'
        document.getElementById('inverted-6').style.display = 'none'
        document.getElementById('bg-bluebox').style.height = '3320px'
        document.getElementById('rest-1').innerHTML = 'Tuesday - Rest'
        document.getElementById('rest-2').innerHTML = 'Thursday - Rest'
        document.getElementById('rest-3').innerHTML = 'Saturday - Rest <br> Sunday - Rest'
        document.getElementById('rest-4').style.display = 'none'
        document.getElementById('rest-5').style.display = 'none'
        document.getElementById('rest-6').style.display = 'none'
        document.getElementById('footer').style.top = '3240px'
        document.getElementById('day-1').innerHTML = 'Monday'
        document.getElementById('day-2').innerHTML = 'Wednesday'
        document.getElementById('day-3').innerHTML = 'Friday'
    }
    else if(input == 4){
        document.getElementById('photo-3').style.display = 'none'
        document.getElementById('black-box-5').style.display = 'none'
        document.getElementById('black-box-6').style.display = 'none'
        document.getElementById('inverted-5').style.display = 'none'
        document.getElementById('inverted-6').style.display = 'none'
        document.getElementById('bg-bluebox').style.height = '3850px'
        document.getElementById('rest-1').style.display = 'none'
        document.getElementById('rest-2').innerHTML = 'Wednesday - Rest'
        document.getElementById('rest-3').style.display = 'none'
        document.getElementById('rest-4').innerHTML = 'Saturday - Rest <br> Sunday - Rest'
        document.getElementById('rest-5').style.display = 'none'
        document.getElementById('rest-6').style.display = 'none'
        document.getElementById('footer').style.top = '3750px'
        document.getElementById('day-1').innerHTML = 'Monday'
        document.getElementById('day-1').innerHTML = 'Tuesday'
        document.getElementById('day-1').innerHTML = 'Thursday'
        document.getElementById('day-1').innerHTML = 'Friday'
    }
    else if(input == 5){
        
    }
    else if(input == 6){
        document.getElementById('rest-1').style.display = 'none'
        document.getElementById('rest-2').style.display = 'none'
        document.getElementById('rest-3').style.display = 'none'
        document.getElementById('rest-4').style.display = 'none'
        document.getElementById('rest-5').style.display = 'none'
        document.getElementById('rest-6').innerHTML = 'Sunday - Rest'
        document.getElementById('day-1').innerHTML = 'Monday'
        document.getElementById('day-1').innerHTML = 'Tuesday'
        document.getElementById('day-1').innerHTML = 'Wednesday'
        document.getElementById('day-1').innerHTML = 'Thursday'
        document.getElementById('day-1').innerHTML = 'Friday'
        document.getElementById('day-1').innerHTML = 'Saturday'
    }
}


function generate2(input){
    localStorage.setItem('workout', input);
    window.location.href = "workoutplan.html"
}
window.addEventListener('load', function() {
    const workout = localStorage.getItem('workout');
    // weighted
    if( workout == 'g-w-b-2'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Weighted"
        document.getElementById('exp-title').innerHTML = "Beginner"
        document.getElementById('day-title').innerHTML = "2 days"
        day_temp(2);
        document.getElementById('warmup-1').innerHTML = 'WARM-UP : 5 min cycling, 15-20 reps shoulder rolls , <br> 1 set push-ups and 1 set pull ups'
        document.getElementById('warmup-2').innerHTML = 'WARM-UP : 5 min cycling, 15-20 reps shoulder rolls , <br> 1 set push-ups and 1 set pull ups'
        document.getElementById('worklist-1').innerHTML = '<li>Flat bench press : 10-12 reps</li> <li>Barbell bent over rows : 10-12 reps</li> <li>Squats : 10-12 reps</li> <li>Dumbbell shoulder press : 10-12 reps</li> <li>Pec dec fly : 12-15 reps</li> <li>Straight bar tricep pushdown : 12-15 reps</li> <li>Dumbbell curls : 10-12 reps</li>'
        document.getElementById('worklist-2').innerHTML = '<li>Incline dumbbell press : 10-12 reps</li> <li>Lat pulldown : 10-12 reps</li> <li>Leg curls : 12-15 reps</li> <li> Dumbbell lateral raises : 10-12 reps</li> <li>Hyper-extensions : 12-15 reps</li> <li>Dumbbell overhand extensions : 10-12 reps</li> <li>Hammer curls : 10-12 reps</li>'
    }
    else if(workout == 'g-w-b-3'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Weighted"
        document.getElementById('exp-title').innerHTML = "Beginner"
        document.getElementById('day-title').innerHTML = 3
        day_temp(3);
        document.getElementById('warmup-1').innerHTML = 'WARM-UP : 5 min cycling, 15-20 reps shoulder rolls , <br> 1 set push-ups and 1 set pull ups'
        document.getElementById('warmup-2').innerHTML = 'WARM-UP : 5 min cycling, 15-20 reps shoulder rolls , <br> 1 set push-ups and 1 set pull ups'
        document.getElementById('warmup-3').innerHTML = 'WARM-UP : 5 min cycling, 15-20 reps shoulder rolls , <br> 1 set push-ups and 1 set pull ups'
        
    }
    else if(workout == 'g-w-b-4'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Weighted"
        document.getElementById('exp-title').innerHTML = "Beginner"
        document.getElementById('day-title').innerHTML = 4
        day_temp(4);
        document.getElementById('warmup-1').innerHTML = 'WARM-UP : 5 min cycling, 15-20 reps shoulder rolls , <br> 1 set push-ups and 1 set pull ups'
        document.getElementById('warmup-2').innerHTML = 'WARM-UP : 5 min cycling, 15-20 reps shoulder rolls , <br> 1 set push-ups and 1 set pull ups'
        document.getElementById('warmup-3').innerHTML = 'WARM-UP : 5 min cycling, 15-20 reps shoulder rolls , <br> 1 set push-ups and 1 set pull ups'
        document.getElementById('warmup-4').innerHTML = 'WARM-UP : 5 min cycling, 15-20 reps shoulder rolls , <br> 1 set push-ups and 1 set pull ups'
        }
    else if(workout == 'g-w-b-6'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Weighted"
        document.getElementById('exp-title').innerHTML = "Beginner"
        document.getElementById('day-title').innerHTML = 6
        day_temp(6);
        document.getElementById('warmup-1').innerHTML = 'WARM-UP : 5 min cycling, 15-20 reps shoulder rolls , <br> 1 set push-ups and 1 set pull ups'
        document.getElementById('warmup-2').innerHTML = 'WARM-UP : 5 min cycling, 15-20 reps shoulder rolls , <br> 1 set push-ups and 1 set pull ups'
        document.getElementById('warmup-3').innerHTML = 'WARM-UP : 5 min cycling, 15-20 reps shoulder rolls , <br> 1 set push-ups and 1 set pull ups'
        document.getElementById('warmup-4').innerHTML = 'WARM-UP : 5 min cycling, 15-20 reps shoulder rolls , <br> 1 set push-ups and 1 set pull ups'
        document.getElementById('warmup-5').innerHTML = 'WARM-UP : 5 min cycling, 15-20 reps shoulder rolls , <br> 1 set push-ups and 1 set pull ups'
        document.getElementById('warmup-6').innerHTML = 'WARM-UP : 5 min cycling, 15-20 reps shoulder rolls , <br> 1 set push-ups and 1 set pull ups'
    }
    else if(workout == 'g-w-i-3'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Weighted"
        document.getElementById('exp-title').innerHTML = "Intermediate"
        document.getElementById('day-title').innerHTML = 3
        day_temp(3);
        document.querySelectorAll('.warmup-txt').forEach(element => element.remove());
    }
    else if(workout == 'g-w-i-4'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Weighted"
        document.getElementById('exp-title').innerHTML = "Intermediate"
        document.getElementById('day-title').innerHTML = 4
        day_temp(4);
        document.querySelectorAll('.warmup-txt').forEach(element => element.remove());
    }
    else if(workout == 'g-w-i-5'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Weighted"
        document.getElementById('exp-title').innerHTML = "Intermediate"
        document.getElementById('day-title').innerHTML = 5
        day_temp(5);
        document.querySelectorAll('.warmup-txt').forEach(element => element.remove());
    }
    else if(workout == 'g-w-i-6'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Weighted"
        document.getElementById('exp-title').innerHTML = "Intermediate"
        document.getElementById('day-title').innerHTML = 6
        day_temp(6);
        document.querySelectorAll('.warmup-txt').forEach(element => element.remove());
    }
    else if(workout == 'g-w-a-5'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Weighted"
        document.getElementById('exp-title').innerHTML = "Advanced"
        document.getElementById('day-title').innerHTML = 5
        day_temp(5);
        document.querySelectorAll('.warmup-txt').forEach(element => element.remove());
    }
    else if(workout == 'g-w-a-6'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Weighted"
        document.getElementById('exp-title').innerHTML = "Advanced"
        document.getElementById('day-title').innerHTML = 6
        day_temp(6);
        document.querySelectorAll('.warmup-txt').forEach(element => element.remove());
    }
    // body weight
    if( workout == 'g-b-b-2'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Body-Weighted"
        document.getElementById('exp-title').innerHTML = "Beginner"
        document.getElementById('day-title').innerHTML = 2
        day_temp(2);
        // document.getElementById('black-box-1').style.display = 'none'
    }
    else if(workout == 'g-b-b-3'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Body-Weighted"
        document.getElementById('exp-title').innerHTML = "Beginner"
        document.getElementById('day-title').innerHTML = 3
        day_temp(3);
    }
    else if(workout == 'g-b-b-4'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Body-Weighted"
        document.getElementById('exp-title').innerHTML = "Beginner"
        document.getElementById('day-title').innerHTML = 4
        day_temp(4);
    }
    else if(workout == 'g-b-b-6'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Body-Weighted"
        document.getElementById('exp-title').innerHTML = "Beginner"
        document.getElementById('day-title').innerHTML = 6
        day_temp(6);
    }
    else if(workout == 'g-b-i-2'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Body-Weighted"
        document.getElementById('exp-title').innerHTML = "Intermediate"
        document.getElementById('day-title').innerHTML = 2
        day_temp(2);
    }
    else if(workout == 'g-b-i-3'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Body-Weighted"
        document.getElementById('exp-title').innerHTML = "Intermediate"
        document.getElementById('day-title').innerHTML = 3
        day_temp(3);
    }
    else if(workout == 'g-b-i-4'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Body-Weighted"
        document.getElementById('exp-title').innerHTML = "Intermediate"
        document.getElementById('day-title').innerHTML = 4
        day_temp(4);
    }
    else if(workout == 'g-b-i-6'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Body-Weighted"
        document.getElementById('exp-title').innerHTML = "Intermediate"
        document.getElementById('day-title').innerHTML = 6
        day_temp(6);
    }
    else if(workout == 'g-b-a-3'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Body-Weighted"
        document.getElementById('exp-title').innerHTML = "Advanced"
        document.getElementById('day-title').innerHTML = 3
        day_temp(3);
        document.querySelectorAll('.warmup-txt').forEach(element => element.remove());
    }
    else if(workout == 'g-b-a-6'){
        document.getElementById('goal-title').innerHTML = "Gain Muscle"
        document.getElementById('equip-title').innerHTML = "Body-Weighted"
        document.getElementById('exp-title').innerHTML = "Advanced"
        document.getElementById('day-title').innerHTML = 6
        day_temp(6);
        document.querySelectorAll('.warmup-txt').forEach(element => element.remove());
    }

});
// function calculate(input){
//     localStorage.setItem('calculator', input);
//     window.location.href = "./pages/calculator.html"
// }

// window.addEventListener('load', function() {
//     const calculator = localStorage.getItem('calculator');
//     if(calculator == 'bmi'){
//         document.getElementById('bmi-calculator').style.display = "block"
//     }
//     else if(calculator == 'fat'){
//         document.getElementById('fat-percentage-calculator').style.display = "block"
//     }
//     else if(calculator == 'cal'){
//         document.getElementById('cal-intake-calculator').style.display = "block"
//     }
// });