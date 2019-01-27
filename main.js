let today = new Date();

flatpickr("#myDatePicker", {
    mode: "range",
    disable: ["2019-01-30", "2019-01-29", "2019-02-21", "2019-02-08", new Date(2019, 2, 9)],
    minDate: "2019-01-28",
});
