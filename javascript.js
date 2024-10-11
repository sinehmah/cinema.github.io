x = 0
function movieinfopage(id) {
    document.getElementById('moviecatalog').style.display = "none"
    document.getElementById('movieinfo').style.display = "block"
    if (id == "deadpool3") {
        document.getElementById('infodesc').innerHTML = "Deadpool and Wolverine are thrown together when a multiverse crisis emerges. They must team up to stop a powerful villain threatening to unleash chaos across realities. As they navigate hilarious misadventures and face off against alternate versions of familiar characters, their contrasting personalities lead to both comedic tension and unexpected camaraderie. Ultimately, they confront their pasts and save their worlds in a wild mix of action and humor, setting the stage for future adventures in the Marvel multiverse."
        document.getElementById('infotitle').innerHTML = "Deadpool & Wolverine"
        document.getElementById('infocoverimg').src = "images/DEADPOOLANDWOVERINE_cover.jpg"
        document.getElementById('inforating').innerHTML = "R"
        document.getElementById('moviereleasedate').innerHTML = "2024"
        x = 1
    } else if (id == "downfall") {
        document.getElementById('infodesc').innerHTML = "Adolf Hitler and his inner circle are trapped in the Führerbunker as Berlin falls to Allied forces. The film portrays the chaos and desperation of their final days, highlighting Hitler's deteriorating mental state and the loyalty of his aides. As supplies dwindle and defeat becomes inevitable, Hitler marries Eva Braun and ultimately commits suicide. The remaining bunker occupants face grim fates as the city collapses, illustrating the tragic consequences of war and fanaticism."
        document.getElementById('infotitle').innerHTML = "Downfall"
        document.getElementById('infocoverimg').src = "images/DOWNFALL_cover.jpg"
        document.getElementById('inforating').innerHTML = "PG-13"
        document.getElementById('moviereleasedate').innerHTML = "2004"
        x = 2
    } else if (id == "logan") {
        document.getElementById('infodesc').innerHTML = "Wolverine, known as Logan, cares for a frail Professor X. Living in hiding, Logan struggles with his fading powers. Their lives change when Laura, a young mutant with similar abilities, seeks refuge from a ruthless corporation. Reluctantly, Logan becomes her protector and embarks on a road trip to safety. The film explores themes of redemption and sacrifice, culminating in Logan's heroic death to save Laura, ensuring hope for the future of mutants."
        document.getElementById('infotitle').innerHTML = "Logan"
        document.getElementById('infocoverimg').src = "images/LOGAN_cover.jpg"
        document.getElementById('inforating').innerHTML = "R"
        document.getElementById('moviereleasedate').innerHTML = "2017"
        x = 3
    } else if (id == "oppenheimer") {
        document.getElementById('infodesc').innerHTML = "J. Robert Oppenheimer, the physicist behind the atomic bomb during World War II. The film depicts his early life, the development of the bomb in the Manhattan Project, and the moral dilemmas he faces as he grapples with the devastating consequences of his work after the bombings of Hiroshima and Nagasaki. It also explores his complex relationships and the fallout from his Communist ties during the Red Scare. Ultimately, Oppenheimer reflects on the ethical implications of his contributions to science and warfare during a Congressional hearing, highlighting themes of ambition, guilt, and the impact of technology on humanity."
        document.getElementById('infotitle').innerHTML = "Oppenheimer"
        document.getElementById('infocoverimg').src = "images/OPPENHEIMER_cover.jpg"
        document.getElementById('inforating').innerHTML = "R"
        document.getElementById('moviereleasedate').innerHTML = "2023"
        x = 4
    } else if (id == "despicableme4") {
        document.getElementById('infodesc').innerHTML = "Gru and Lucy are navigating their new roles as parents to their three daughters while facing an unexpected challenge: a villainous group threatening their peaceful lives. As they work together to protect their family and save the day, Gru's mischievous Minions add their signature humor to the mix. With heartwarming moments and comedic antics."
        document.getElementById('infotitle').innerHTML = "Despicable Me 4"
        document.getElementById('infocoverimg').src = "images/DESPICABLEME4_cover.jpg"
        document.getElementById('inforating').innerHTML = "PG"
        document.getElementById('moviereleasedate').innerHTML = "2024"
        x = 5
    }
}
function goback() {
    document.getElementById('moviecatalog').style.display = "block"
    document.getElementById('movieinfo').style.display = "none"
}
function goback2movie() {
    document.getElementById('movieinfo').style.display = "block"
    document.getElementById('moviepage').style.display = "none"
    document.getElementById('movieplayer').pause()
}
function beginmovie() {
    document.getElementById('movieinfo').style.display = "none"
    document.getElementById('moviepage').style.display = "block"
    if (x == 1) {
        document.getElementById('movieplayer').src = "movies/deadpool3_2024.mp4"
    } else if (x == 2) {
        document.getElementById('movieplayer').src = "movies/downfall_2004.mp4"
    } else if (x == 3) {
        document.getElementById('movieplayer').src = "movies/logan_2017.mp4"
    } else if (x == 4) {
        document.getElementById('movieplayer').src = "movies/oppenheimer_2023.mp4"
    } else if (x == 5) {
        document.getElementById('movieplayer').src = "movies/despicableme4_2024.mp4"
    }
}