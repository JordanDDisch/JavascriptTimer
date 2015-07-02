timer = {

    runTimer: function() {

        date = this.TimerDate();

        this.timeCount = setInterval(function() {

            date = timer.minuteConstraint(date);

            date = timer.millisecondsConstraint(date);

            date.millSecValue -= 1;

            var timeString = date.minValue + ':' + date.secValue + ':' + date.millSecValue

            document.getElementsByClassName('timer')[0].innerHTML = timeString;

            timer.timerIsZero(date);

        }, 10);

    },

    timeCount: 0,

    TimerDate: function() {
        return {
            secValue: document.getElementById('secInput').value,
            minValue: document.getElementById('minInput').value,
            millSecValue: 0
        }
    },

    minuteConstraint: function(date) {
        if(date.secValue == 0 && date.minValue > 0) {
            date.secValue = 60;
            date.minValue -= 1;
        }
        return date;
    },

    millisecondsConstraint: function(date) {
        if(date.millSecValue == 0 && date.secValue > 0) {
            date.secValue -= 1;
            date.millSecValue = 100;
        }
        return date;
    },

    timerIsZero: function(date) {
        if(date.minValue <= 0 && date.secValue <= 0 && date.millSecValue <= 0) {
            clearInterval(timer.timeCount);
        }
    }

};
