
     function szovegszincsere(input, focus) {
            const uzenet = document.getElementById(`uzenet${input.id.charAt(input.id.length - 1)}`);
            
            if (focus) {
                uzenet.textContent = "Rákattintott a beviteli mezőre";
                input.style.color = "green";
                uzenet.style.color = "green";
            } else {
                uzenet.textContent = "Na de mit csinálsz:)!";
                input.style.color = "black";
                uzenet.style.color = "red";
            }
        }