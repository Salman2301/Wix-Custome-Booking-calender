let today = new Date();

let config = {};
config.mode = "range";
config.minDate = today;
config.onChange = function(selectedDates, dateStr, instance) {
   console.log("Date changed" , selectedDates ,dateStr,instance );
   if(selectedDates.length > 1) {
       sendDateMessage(selectedDates[0] , selectedDates[1]);
   }
}
var datepicker = flatpickr("#myDatePicker", config);

$('#icon-calender').click(() => {
    // Toggle is not working it's not closing the date picker
    datepicker.toggle();
});

$("#icon-clear").click(function (e) {
    datepicker.clear();
    let postMessage = {
        clear:true
    }
    window.parent.postMessage(postMessage , '*')
});

function sendDateMessage(fromDate, toDate) {
    let postMessage = {
        rangeDate: true,
        fromDate,
        toDate,
    }
    window.parent.postMessage(postMessage , '*')
}
window.onmessage = event => {
    console.log(event)
    if (event.data) {
        let msg = event.data;
        if (msg.disable) {
            config.disable = msg.disableData;
            datepicker = flatpickr("#myDatePicker", config);
        }

        if(msg.ready){
            sendReadyMessage()
        }
    }
}

function sendReadyMessage(){
     let postMessage = {
        ready: true,
    }
    window.parent.postMessage(postMessage, "*")
}