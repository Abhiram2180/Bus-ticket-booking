$(document).ready(function($) {

    $('#refresh').click(function() {
        location.reload(true);
    });

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
    var hour = today.getHours();
    var minute = today.getMinutes();

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    if (minute < 10) {
        minute = '0' + minute
    }
    if (hour < 10) {
        hour = '0' + hour
    }

    today = yyyy + '-' + mm + '-' + dd + 'T' + hour + ':' + minute;
    document.getElementById("date").setAttribute("min", today);
    $('#date').val(today);
    var counter = 0;
    var price = parseInt($('#price').text());
    console.log(price);
    console.log(typeof price);
    $('#payfrom').text('Kuala Lumpur (All Locations)');
    $('#payto').text('Johor bahru (All Locations)');
    $('#paydate').text($('#date').val())

    $('#num').text(Math.floor(100000 + Math.random() * 900000));

    $('#from').change(function() {
        switch ($('#from').val()) {
            case '0':
                $('#payfrom').text('Kuala Lumpur (All Locations)');
                break;
            case '1':
                $('#payfrom').text('Johor bahru (All Locations)');
                break;
            case '2':
                $('#payfrom').text('Malacca (All Locations)');
                break;
            case '3':
                $('#payfrom').text('Penang (All Locations)');
                break;
            case '4':
                $('#payfrom').text('Shah Alam (All Locations)');
                break;
            case '5':
                $('#payfrom').text('Ipoh (All Locations)');
                break;
            case '6':
                $('#payfrom').text('Kuantan (All Locations)');
                break;
            case '7':
                $('#payfrom').text('Batu Pahat (All Locations)');
                break;
            default:
                $('#payfrom').text('Kuala Lumpur (All Locations)');
        }
    });
    $('#to').change(function() {
        switch ($('#to').val()) {
            case '0':
                $('#payto').text('Kuala Lumpur (All Locations)');
                break;
            case '1':
                $('#payto').text('Johor bahru (All Locations)');
                break;
            case '2':
                $('#payto').text('Malacca (All Locations)');
                break;
            case '3':
                $('#payto').text('Penang (All Locations)');
                break;
            case '4':
                $('#payto').text('Shah Alam (All Locations)');
                break;
            case '5':
                $('#payto').text('Ipoh (All Locations)');
                break;
            case '6':
                $('#payto').text('Kuantan (All Locations)');
                break;
            case '7':
                $('#payto').text('Batu Pahat (All Locations)');
                break;
            default:
                $('#payto').text('Johor bahru (All Locations)');
        }
    });
    $('#date').change(function() {
        $('#paydate').text($('#date').val())
    });
    $('#seatclass').change(function() {
        switch ($('#seatclass').val()) {
            case '1':
                $('#classprice').text('50');
                $('#payclass').text('First Class');
                break;
            case '2':
                $('#classprice').text('30');
                $('#payclass').text('Business');
                break;
            case '3':
                $('#classprice').text('20');
                $('#payclass').text('Economy');
                break;
            default:
                $('#classprice').text('50');
                $('#payclass').text('First Class');
        }
    });

    $('td div').click(function() {
        console.log($(this).css('background-color'));
        if ($(this).css('background-color') == "rgb(0, 128, 0)") {
            $(this).css('backgroundColor', 'red');
            counter--;
            switch ($('#seatclass').val()) {
                case '1':
                    price = price - 50;
                    break;
                case '2':
                    price = price - 30;
                    break;
                case '3':
                    price = price - 20;
                    break;
                default:
                    price = 0;
            }
        } else if ($(this).css('background-color') == "rgb(128, 128, 128)") {
            return;
        } else {
            $(this).css('backgroundColor', 'green');
            switch ($('#seatclass').val()) {
                case '1':
                    price = price + 50;
                    break;
                case '2':
                    price = price + 30;
                    break;
                case '3':
                    price = price + 20;
                    break;
                default:
                    price = 0;
            }
            counter++;
        }
        $('#price').text(price);
        $('#pricepay').text(price);
    });
    $('#sec').click(function() {
        console.log(counter);
        $('#payseatnum').text(counter);
    });
    $('#pay').click(function() {
        console.log($('#price').text());
        $('#payamout').text($('#payamout').text() + $('#price').text());
    });
    $('#choseat').click(function() {
        switch ($('#seatclass').val()) {
            case '1':
                $('#seatselect').text("First Class");
                break;
            case '2':
                $('#seatselect').text("Business");
                break;
            case '3':
                $('#seatselect').text("Economy");
                break;
            default:
                $('#seatselect').text("Fares Class");
        }
        console.log("$('#seatclass').val()");
        console.log($('#seatclass').val());
    });

});