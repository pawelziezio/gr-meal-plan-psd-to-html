document.addEventListener("DOMContentLoaded", function() {

    const prevWeek = document.querySelector('.plan__button--prev');
    const nextWeek = document.querySelector('.plan__button--next');
    const week = document.querySelector('.plan__week-nr--active');

    const updateProgressBar = (activeWeek) =>{

        const weeks = document.getElementsByClassName('plan__progress--week');
        const weeksArray = [...weeks];

        if(activeWeek === 1){
            weeksArray[0].style.backgroundImage = "url(../../img/circleActive.png)";
            for(let i = 1 ; i < weeks.length ; i++ ){
                weeksArray[i].style.backgroundImage = "url(../../img/circle+line.png)";
            }
        };

        if(activeWeek === 2){
            weeksArray[0].style.backgroundImage = "url(../../img/circleG.png)";
            weeksArray[1].style.backgroundImage = "url(../../img/circleActive+line.png)";
            for(let i = 2 ; i < weeks.length ; i++ ){
                weeksArray[i].style.backgroundImage = "url(../../img/circle+line.png)";
            }
        };

        if(activeWeek > 2){
            weeksArray[0].style.backgroundImage = "url(../../img/circleG.png)";
            for(let i = 1 ; i < weeksArray.length ; i++  ){
                if( i < (activeWeek-1)){
                    weeksArray[i].style.backgroundImage = "url(../../img/circle+lineG.png)";
                }
                weeksArray[activeWeek-1].style.backgroundImage = "url(../../img/circleActive+line.png)";
            for(let i = activeWeek ; i < weeks.length ; i++ ){
                weeksArray[i].style.backgroundImage = "url(../../img/circle+line.png)";
            }
            };
        };

    }

    const showDayNumber = (weekNr) => {
        const dayNrCells = document.querySelectorAll('.plan__table--day-nr');
        const dayNrCellsArray = [...dayNrCells];

        dayNrCellsArray.forEach((day, index)=>{
            let dayNumber = (index+1) + (weekNr-1)*7;
            day.innerText = dayNumber;
        })
    }

    activeWeek = parseInt(week.innerText);
    updateProgressBar(activeWeek);
    showDayNumber(activeWeek);

    prevWeek.addEventListener('click',function(e){
        activeWeek = parseInt(week.innerText);

        if(activeWeek > 1){
            activeWeek--;
        };

        week.innerText = activeWeek;

        updateProgressBar(activeWeek);
        showDayNumber(activeWeek);
    })

    nextWeek.addEventListener('click',function(e){
        activeWeek = parseInt(week.innerText);

        if(activeWeek < 12){
            activeWeek++;
        };

        week.innerText = activeWeek;

        updateProgressBar(activeWeek);
        showDayNumber(activeWeek);
    })

    const mealCells = document.querySelectorAll('.plan__table--meal')
    const mealCellsArray = [...mealCells];

    mealCellsArray.forEach((mealCell, i)=>{
        mealCell.addEventListener('click',function(e){
            let imgEatenMark = this.firstElementChild.nextElementSibling;

            if(imgEatenMark.style.display === "block"){
                imgEatenMark.style.display = "none";
            }else{
                imgEatenMark.style.display = "block";
            }
        })
    });

    const workoutCells = document.querySelectorAll('.plan__table--workout');
    const workoutCellsArray = [...workoutCells];

    workoutCellsArray.forEach((workoutCell, i)=>{
        if( i > 0 ){
            workoutCell.addEventListener('click',function(e){
                if(this.style.backgroundImage === 'url("../../img/workout-active.png")'){
                    this.style.backgroundImage = 'url("../../img/workout.png")';
                }else{
                    this.style.backgroundImage = 'url("../../img/workout-active.png")';
                }

            })
        }
    })

    // style="background-image:url(../../img/workout-active.png);"

});


