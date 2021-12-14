/**
 * Let's make a game 🕹
 */

{
    type Position = {
        x: number,
        y: number,
    }

    const position:Position = {
        x: 0,
        y: 0,
    }
    console.log(position); // { x: 0, y: 0}
    move('up');
    console.log(position); // { x: 0, y: 1}
    move('down');
    console.log(position); // { x: 0, y: 0}
    move('left');
    console.log(position); // { x: -1, y: 0}
    move('right');
    console.log(position); // { x: 0, y: 0}

    type Move = 'up' | 'down' | 'left' | 'right';
    function move(move: Move) {
        switch (move) {
            case 'up':
                position.y++;
                break;
            case 'down':
                position.y--;
                break;
            case 'left':
                position.x--;
                break;
            case 'right':
                position.x++;
                break;
            default: throw new Error('Unknown Error');
        }
    }
}