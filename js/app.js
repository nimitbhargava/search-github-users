var ViewModel = function () {
    var self = this;

    filterUsers = [];

    self.userInput = ko.observable('');
    console.log("Initialized");
    ko.computed(function () {
        var result = [];
        var query = self.userInput().toLowerCase();
        console.log(query);
    }, this);
};

ko.applyBindings(new ViewModel());

$('.sidebar-toggle').click(function(){
    $('.sidebar').toggleClass('d-none d-sm-block');
    var updatedToggleBtnText = $('.sidebar-toggle').text() === "Collapse" ? "Explore" : "Collapse";
    $('.sidebar-toggle').text(updatedToggleBtnText);
});