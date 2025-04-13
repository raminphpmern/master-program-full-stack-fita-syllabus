$(document).ready(function() {
    // Add a new list item
    $('#addItem').click(function() {
        $('#myList').append('<li>New Fruit</li>');
    });

    // Highlight all list items
    $('#highlight').click(function() {
        $('#myList li').css('color', 'red');
    });

    // Remove the last item
    $('#removeLast').click(function() {
        $('#myList li:last').remove();
    });
});
