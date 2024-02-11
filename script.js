$(document).ready(function() {
    // Listen for changes in candle color
    $('#candleColor').on('input', function() {
        let color = $(this).val(); // Retrieve the selected color
        $('#candle').css('background-color', color); // Set the candle's color
    });

    // Listen for changes in flame color
    $('#flameColor').on('input', function() {
        let color = $(this).val(); // Retrieve the selected flame color
        // Apply the flame color and update glow effect
        $('#flame').css({
            'background-color': color,
            'box-shadow': `0 0 8px 2px ${color}, 0 0 12px 4px ${color}`
        });
    });
});

