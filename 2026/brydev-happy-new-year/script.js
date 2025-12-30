            // ibutang dria ang countdown target date
            const countDownDate = new Date("Jan 1, 2026 00:00:00").getTime();

            // Setinterval para ga update ang conuntdown kada seconds
            const countdownFunction = setInterval(function() {
                const now = new Date().getTime();
                const distance = countDownDate - now;

                // Computation sa days, hours, minutes ug seconds
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Ipakita ang result
                document.getElementById("countdown").innerHTML = days + "Days " + hours + "Hours "
                + minutes + "Minutes " + seconds + "Seconds ";

                // Humana countdown
                if (distance < 0) {
                    clearInterval(countdownFunction);
                    document.getElementById("countdown").innerHTML = "HAPPY NEW YEAR!";
                }
            }, 1000);