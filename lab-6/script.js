 document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('clickButton');
    var output = document.getElementById('output');

    button.addEventListener('click', function() {
        output.textContent = 'Button clicked!';
    });
});
