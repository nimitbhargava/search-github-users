var ViewModel = function () {
    var self = this;

    $userInfo = $("#user-info");

    self.userInput = ko.observable('');
    self.userInput.extend({rateLimit: 500})
    console.log("Initialized");
    self.filterUsers = ko.computed(function () {
        var result = [];
        var query = self.userInput().toLowerCase();
        if (query === '') return [];
        //Go to GitHub API and fetch the user
        var url = 'http://api.github.com/search/users?q=' + query;
        $.ajax({
            type: 'GET',
            url: url
        }).done(function (data) {
            result = data.items;
        }).fail(function () {
            result = [];
        });
        return result;
    }, this);
};

ko.applyBindings(new ViewModel());

$('.sidebar-toggle').click(function () {
    $('.sidebar').toggleClass('d-none d-sm-block');
    var updatedToggleBtnText = $('.sidebar-toggle').text() === "Collapse" ? "Explore" : "Collapse";
    $('.sidebar-toggle').text(updatedToggleBtnText);
});