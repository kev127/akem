let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

   let firstDay = (new Date(year, month)).getDay();
   let daysInMonth = "32" - new Date(year, month, 32).getDate();

}

function name() {
     var Birthday=("input#Date");
     var Gender=("selcect#Gender");

     var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
     var MaleNames =['Kwasi','Kwadwo','Kwabena','Kwako','Yaw','Kofi','Kwame'];
               var FemaleNames =['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']; 

               var d = new Date(DateofBirth);
               var Name ="FemaleNames,Malenames";
       
               if(Gender =="Male"){
                   switch (dayName){
                     case 'Sunday':
                       Name =MaleName[0];
                       break;
                     case 'Monday':
                       Name =MaleName[1];
                       break; 
                     case 'Tuesday':
                       Name =MaleName[2];
                       break;
                     case 'Wednesday':
                       Name =MaleName[3];
                       break; 
                     case 'Thursday':
                       Name =MaleName[4];
                       break;
                     case 'Friday':
                       Name =MaleName[5];
                       break;
                     case 'Saturday':
                       Name =MaleName[6];
                       break;
                       default:
                   }
               }
               else {
                   switch (dayName){
                       case 'Sunday':
                       Name = FemaleNames[0];
                        break 
                       case 'Monday':
                       Name = FemaleNames[1];
                        break;
                       case 'Tuesday':
                       Name = FemaleNames[2];
                        break;
                       case 'Wednesday':
                       Name = FemaleNames[3];
                        break;
                       case 'Thursday':
                       Name = FemaleNames[4];
                        break;
                       case 'Friday':
                       Name = FemaleNames[5];
                        break;
                       case 'Saturday':
                       Name = FemaleNames[6];
                        break;
                       default:
                   }
               }  
}   
