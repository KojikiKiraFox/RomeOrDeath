const hero = () =>{
    const hero = document.getElementById("hero")
    const gameScreen = document.getElementsByClassName("game_screen")
    let xPosition = 0
    let yPosition = 0

    document.addEventListener('keydown', function(event) {
        if (event.code == 'ArrowUp') {

            yPosition = +yPosition - 10
            hero.style.top= yPosition+'px'

        } else if (event.code == 'ArrowRight') {

            xPosition = +xPosition + 10
            hero.style.left= xPosition+'px'
            hero.style.transform='scale(1,1)'

        } else if (event.code == 'ArrowDown') {

            yPosition = +yPosition + 10
            hero.style.top= yPosition+'px'

        } else if (event.code == 'ArrowLeft') {

            xPosition = +xPosition - 10
            hero.style.left= xPosition+'px'
            hero.style.transform='scale(-1,1)'

        } else if (event.code == 'Escape') {
            if (gameScreen == 0) {
                gameScreen.style.display="block" 
                gameScreen = 1
            } else {
                gameScreen.style.display="none"
                gameScreen = 0
            }
        }
      });

}
export default hero