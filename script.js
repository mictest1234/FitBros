document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const wrapper = document.querySelector(".wrapper");

    const firstCard = carousel.querySelector(".card");
    const firstCardWidth = firstCard.offsetWidth;

    let isDragging = false,
        startX,
        startScrollLeft,
        timeoutId;

    const dragStart = (e) => { 
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
    
        // Calculate the new scroll position
        const newScrollLeft = startScrollLeft - (e.pageX - startX);
    
        // Check if the new scroll position exceeds 
        // the carousel boundaries
        if (newScrollLeft <= 0 || newScrollLeft >= 
            carousel.scrollWidth - carousel.offsetWidth) {
            
            // If so, prevent further dragging
            isDragging = false;
            return;
        }
    
        // Otherwise, update the scroll position of the carousel
        carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
        isDragging = false; 
        carousel.classList.remove("dragging");
    };

    const autoPlay = () => {
    
        // Return if window is smaller than 800
        if (window.innerWidth < 800) return; 
        
        // Calculate the total width of all cards
        const totalCardWidth = carousel.scrollWidth;
        
        // Calculate the maximum scroll position
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth;
        
        // If the carousel is at the end, stop autoplay
        if (carousel.scrollLeft >= maxScrollLeft) return;
        
        // Autoplay the carousel after every 2500ms
        timeoutId = setTimeout(() => 
            carousel.scrollLeft += firstCardWidth, 2500);
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    wrapper.addEventListener("mouseenter", () => 
        clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    // Add event listeners for the arrow buttons to 
    // scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? 
                -firstCardWidth : firstCardWidth;
        });
    });
});

// var appear = false
// function calculate_bmi(){
//     appear = true
// }

// if(appear == true){
//     alert("uig")
//     document.getElementById("bmi-calculator").style.display = "block"
//     document.getElementById("fat-percentage-calculator").style.display = "none"
//     document.getElementById("cal-intake-calculator").style.display = "none"
// }

// const anchor = document.getElementById("appear-bmi");
// anchor.addEventListener("click",calculate_bmi);

// window.onbeforeunload = function() {
//     localStorage.setItem('scrollPosition', window.scrollY);
// };

// window.onload = function() {
//     const scrollPosition = localStorage.getItem('scrollPosition');
//     if (scrollPosition) {
//         window.scrollTo(0, scrollPosition);
//         localStorage.removeItem('scrollPosition');
//     }
// };

function calculate(input){
    localStorage.setItem('calculator', input);
    window.location.href = "./pages/calculator.html"
}

window.addEventListener('load', function() {
    const calculator = localStorage.getItem('calculator');
    if(calculator == 'bmi'){
        document.getElementById('bmi-calculator').style.display = "block"
    }
    else if(calculator == 'fat'){
        document.getElementById('fat-percentage-calculator').style.display = "block"
    }
    else if(calculator == 'cal'){
        document.getElementById('cal-intake-calculator').style.display = "block"
    }
});

function list(input){
    localStorage.setItem('items', input);
    window.location.href = "./pages/exercise-list.html"
}

window.addEventListener('load', function() {
    const items = localStorage.getItem('items');
    if(items == 'Abdominal'){
        document.getElementById('list-head').innerHTML = (`${items}`)
        // document.getElementsByTagName('title').innerHTML = (`Fit Bros - ${items}`)
        document.getElementById('abdominal').style.display = 'grid'

    }
    else if(items == 'Chest'){
        document.getElementById('list-head').innerHTML = (`${items}`)
        // document.getElementsByTagName('title') = (`Fit Bros - ${items}`)
        document.getElementById('chest').style.display = 'grid'
    }
    else if(items == 'Back'){
       document.getElementById('list-head').innerHTML = (`${items}`)
        document.getElementById('back').style.display = 'grid'
    }
    else if(items == 'Shoulder'){
        document.getElementById('list-head').innerHTML = (`${items}`)
        document.getElementById('shoulder').style.display = 'grid'
    }
    else if(items == 'Biceps'){
        document.getElementById('list-head').innerHTML = (`${items}`)
        document.getElementById('bicep').style.display = 'grid'
    }
    else if(items == 'Triceps'){
       document.getElementById('list-head').innerHTML = (`${items}`)
        document.getElementById('tricep').style.display = 'grid'
    }
    else if(items == 'Legs'){
        document.getElementById('list-head').innerHTML = (`${items}`)
        document.getElementById('legs').style.display = 'grid'
    }
});

var value;
function update_goal(){
    var select = document.getElementById('goal');
    value = select.options[select.selectedIndex].value;
}
function divide_macro(){
    var calorie = document.getElementById("target-calorie").value 
    if(value == 'gain'){
        document.getElementById('macro-1').innerHTML = (`Protein = ${((calorie*0.3)/4).toFixed(1)} grams`)
        document.getElementById('macro-2').innerHTML = (`Fat = ${((calorie*0.2)/9).toFixed(1)} grams`)
        document.getElementById('macro-3').innerHTML = (`Carbohydrates = ${((calorie*0.5)/4).toFixed(1)} grams`)
    }
    else if(value == 'maintain'){
        document.getElementById('macro-1').innerHTML = (`Protein = ${((calorie*0.3)/4).toFixed(1)} grams`)
        document.getElementById('macro-2').innerHTML = (`Fat = ${((calorie*0.3)/9).toFixed(1)} grams`)
        document.getElementById('macro-3').innerHTML = (`Carbohydrates = ${((calorie*0.4)/4).toFixed(1)} grams`)
    }
    else if(value == 'lose'){
        document.getElementById('macro-1').innerHTML = (`Protein = ${((calorie*0.45)/4).toFixed(1)} grams`)
        document.getElementById('macro-2').innerHTML = (`Fat = ${((calorie*0.35)/9).toFixed(1)} grams`)
        document.getElementById('macro-3').innerHTML = (`Carbohydrates = ${((calorie*0.15)/4).toFixed(1)} grams`)
    }
}

function meal_plan(input){
    localStorage.setItem('message', input);
    window.location.href = "./pages/mealplan.html"
}

window.addEventListener('load', function() {
    const message = localStorage.getItem('message');
    if(message == '1800'){
        document.getElementById('meal-title').innerHTML = (`${message} CALORIES DIET PLAN`)
        document.getElementById('meal-1').innerHTML = '<li>OATS / DALIA (50gm)</li> <li>TONED MILK (250ml)</li> <li>PEANUT BUTTER (1 Tbsp)</li>'
        document.getElementById('meal-2').innerHTML = '<li>LENTIL(DAL)/CHHOLEY/RAJMA (50gm)</li> <li>BUTTER MILK (250ml)</li> <li>CHAPATI (3) / RICE (RAW 60 gm)</li> <li>SALAD (1 Plate)</li>'
        document.getElementById('meal-3').innerHTML = '<li>BLACK COFFEE/GREEN TEA/BEETROOT JUICE (1 Cup)</li> <li>BANANA / APPLE (1 Medium)</li>'
        document.getElementById('meal-4').innerHTML = '<li>WHEY (1 Scoop) / EGGS (3-4) / GREEK YOGURT (200 gm)</li> <li>BANANA (1 Medium)</li>'
        document.getElementById('meal-5').innerHTML = '<li>SOYA CHUNK (70gm) / CHICKEN(150 gm) / PANEER (200 gm)</li> <li>RICE (RAW 50 gm)</li> <li>SALAD (1 Plate)</li>'
    }
    else if(message == '2000'){
        document.getElementById('meal-title').innerHTML = (`${message} CALORIES DIET PLAN`)
        document.getElementById('meal-1').innerHTML = '<li>OATS / DALIA (50gm)</li> <li>BUTTER MILK (250ml)</li> <li>PEANUT BUTTER (1/2 Tbsp)</li> <li>ALMONDS (10 gm) + RAISINS (10 gm)</li><li>WHEY (1 Scoop)</li>'
        document.getElementById('meal-2').innerHTML = '<li>CHEELA : PANEER (100gm) + VEGGIES (1 Tomato + 1 Onion) + BESAN (50 gm)</li> <li>BUTTER MILK (250ml)</li>'
        document.getElementById('meal-3').innerHTML = '<li>BLACK COFFEE/GREEN TEA/BEETROOT JUICE (1 Cup)</li> <li>BANANA / APPLE (1/2 Medium)</li>'
        document.getElementById('meal-4').innerHTML = '<li>WHEY (1 Scoop) / EGGS (3-4) / GREEK YOGURT (200 gm)</li> <li>BANANA (2-3 Medium)</li>'
        document.getElementById('meal-5').innerHTML = '<li>SOYA CHUNK (70gm) / CHICKEN(150 gm) / PANEER (200 gm)</li> <li>RICE (RAW 50 gm)</li> <li>SALAD (1 Plate)</li>'
    }
    else if(message == '2500'){
        document.getElementById('meal-title').innerHTML = (`${message} CALORIES DIET PLAN`)
        document.getElementById('meal-1').innerHTML = '<li>OATS / DALIA (80gm)</li> <li>MILK (250ml)</li> <li>PEANUT BUTTER (1 Tbsp)</li> <li>BANANA (1 Medium)</li>'
        document.getElementById('meal-2').innerHTML = '<li>LENTIL(DAL)/CHHOLEY/RAJMA (60gm)</li> <li>CURD (250ml)</li> <li>CHAPATI (3-4)</li> <li>SALAD (1 Plate)</li>'
        document.getElementById('meal-3').innerHTML = '<li>BLACK COFFEE/GREEN TEA/BEETROOT JUICE (1 Cup)</li> <li>WHOLE WHEAT BREAD (1)</li> <li>PEANUT BUTTER (1 Tbsp)</li>'
        document.getElementById('meal-4').innerHTML = '<li>WHEY (1 Scoop) / EGGS (3-4) / GREEK YOGURT (200 gm)</li> <li>BANANA (1 Medium)</li>'
        document.getElementById('meal-5').innerHTML = '<li>SOYA CHUNK (70gm) / CHICKEN(150 gm) / PANEER (200 gm)</li> <li>RICE (RAW 60 gm)</li> <li>SALAD (1 Plate)</li>'
    }
    else if(message == '3000'){
        document.getElementById('meal-title').innerHTML = (`${message} CALORIES DIET PLAN`)
    }
    else if(message == '3500'){
        document.getElementById('meal-title').innerHTML = (`${message} CALORIES DIET PLAN`)
        document.getElementById('meal-1').innerHTML = '<li>OATS / DALIA (50gm)</li> <li>TONED MILK (250ml)</li> <li>PEANUT BUTTER (1 Tbsp)</li><li>EGGS (3 Whole + 3 Whites) / PANEER (200 gm)</li> <li>WALNUTS (30gm))</li>'
        document.getElementById('meal-2').innerHTML = '<li>CHICKEN BREAST (RAW 250 gm) / [ PANEER (250 gm) + WHEY (1 Scoop) ]</li> <li>LENTIL(DAL) (60gm)</li><li> CURD (250ml)</li> <li>RICE (RAW 100gm)</li> <li>SALAD (1 Plate)</li>'
        document.getElementById('meal-3').innerHTML = '<li>BLACK COFFEE/GREEN TEA/BEETROOT JUICE (1 Cup)</li> <li>WHOLE WHEAT BREAD (2)</li> <li>PEANUT BUTTER (1 Tbsp)</li><li>BANANA (1 Medium)</li>'
        document.getElementById('meal-4').innerHTML = '<li>WHEY (1 Scoop) / EGGS (3-4) / GREEK YOGURT (200 gm)</li> <li>DATES (5)</li>'
        document.getElementById('meal-5').innerHTML = '<li>PANEER (150gm)</li> <li>CHAPATI (4)</li> <li>SALAD (1 Plate)</li>'
    }
    else if(message == '4000'){
        document.getElementById('meal-title').innerHTML = (`${message} CALORIES DIET PLAN`)
    }
});