            /*
            VARIABLES, OBJECTS
            */
            let gameOver = false;
            let counter = 0; // checkes if the selected img is the first one or the second one 
            let firstImg = {
                id1:"0",
                src1:"ddz"
            };
            let secondImg = {
                id2:"0",
                src2:"ddz"
            };
            let transVar = "";
            
            let turnsL;

            //var used to shuffle the parts in the puzzle
            var mySrc = [
            'Puzzle-Parts/1.jpg','Puzzle-Parts/2.jpg','Puzzle-Parts/3.jpg',
            'Puzzle-Parts/4.jpg','Puzzle-Parts/5.jpg','Puzzle-Parts/6.jpg',
            'Puzzle-Parts/7.jpg','Puzzle-Parts/8.jpg','Puzzle-Parts/9.jpg'];

            /*
            FUNCTIONS
            */

            function checkGameOver() //Checks if the game is over after every turn 
            {
                if(
                    document.getElementById("1").src == "file:///Users/martinvichev/Documents/Programming/Web%20Design/JS-Puzzle-master/Puzzle-Parts/1.jpg" &&
                    document.getElementById("2").src == "file:///Users/martinvichev/Documents/Programming/Web%20Design/JS-Puzzle-master/Puzzle-Parts/2.jpg" &&
                    document.getElementById("3").src == "file:///Users/martinvichev/Documents/Programming/Web%20Design/JS-Puzzle-master/Puzzle-Parts/3.jpg" &&
                    document.getElementById("4").src == "file:///Users/martinvichev/Documents/Programming/Web%20Design/JS-Puzzle-master/Puzzle-Parts/4.jpg" &&
                    document.getElementById("5").src == "file:///Users/martinvichev/Documents/Programming/Web%20Design/JS-Puzzle-master/Puzzle-Parts/5.jpg" &&
                    document.getElementById("6").src == "file:///Users/martinvichev/Documents/Programming/Web%20Design/JS-Puzzle-master/Puzzle-Parts/6.jpg" &&
                    document.getElementById("7").src == "file:///Users/martinvichev/Documents/Programming/Web%20Design/JS-Puzzle-master/Puzzle-Parts/7.jpg" &&
                    document.getElementById("8").src == "file:///Users/martinvichev/Documents/Programming/Web%20Design/JS-Puzzle-master/Puzzle-Parts/8.jpg" &&
                    document.getElementById("9").src == "file:///Users/martinvichev/Documents/Programming/Web%20Design/JS-Puzzle-master/Puzzle-Parts/9.jpg"
                )
                {
                    gameOver = true;

                    //Displays the "WINNER" sign
                    document.getElementById("winner").innerHTML = "WINNER";

                    //Display the refresh button
                    document.getElementById("refresh").innerHTML = "Refresh";
                    document.getElementById("refresh").style.padding = "15px 32px";
                }
                else if(document.getElementById("counter").innerHTML == 0)
                {
                    gameOver = true;

                    //Display the "LOSER" sign
                    document.getElementById("winner").innerHTML = "LOSER";

                    //Display the refresh button
                    document.getElementById("refresh").innerHTML = "Refresh";
                    document.getElementById("refresh").style.padding = "15px 32px";
                }
            }
            
            //shuffles all the pieces in the puzzle
            function shuffle() 
            {
                var j, x, i;
                for (i = mySrc.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = mySrc[i];
                    mySrc[i] = mySrc[j];
                    mySrc[j] = x;
                }

                for (i=0; i<9; i++)
                {
                    document.getElementById(i+1).src = mySrc[i];
                }
            }
            
            function changeCounter(a)
            {   
                if(a>0)
                {
                    a--;
                    document.getElementById("counter").innerHTML = a;
                }
                //-10 is passed only by the function refresh()
                if(a == -10)
                {
                    document.getElementById("counter").innerHTML = 10;
                }
            }

            function swapImg(a) //Swaps Images
            {
                if(gameOver==false){
                    if(counter==0)
                    {
                        firstImg.id1 = a;
                        firstImg.src1 = document.getElementById(a).src;

                        //Marking the selected img with a border
                        document.getElementById(a).style.border = "3px solid red";
                        document.getElementById(a).style.width = "194px";
                        document.getElementById(a).style.height = "106.36px";
                        counter++;
                    }
                    
                    else{
                        secondImg.id2 = a;
                        secondImg.src2 = document.getElementById(a).src;

                        transVar = firstImg.src1;

                        //Bringing the style back to normal
                        document.getElementById(firstImg.id1).style.border = "none";
                        document.getElementById(firstImg.id1).style.width = "200px";
                        document.getElementById(firstImg.id1).style.height = "112.36px";
                        
                        //Swaping the 2 images
                        document.getElementById(firstImg.id1).src = secondImg.src2;
                        document.getElementById(secondImg.id2).src = transVar; 
                        counter = 0;
                        
                        changeCounter(document.getElementById("counter").innerHTML);
                        checkGameOver();
                    }
                    
                }
            }

            function refresh()
            {
                shuffle();

                //Hide the "WINNER" sign
                document.getElementById("winner").innerHTML = "";

                //Hide the refresh button
                document.getElementById("refresh").innerHTML = "";
                document.getElementById("refresh").style.padding = "0px 0px";

                //restarts game
                gameOver = false;
                changeCounter(-10);
            }