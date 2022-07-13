
const elevatorArray = [
    { id: 1, active: false, elevatorOn: 1 },
    { id: 2, active: false, elevatorOn: 1 },
    { id: 3, active: false, elevatorOn: 1 }
];

console.log("slider".toUpperCase());

const MAIN_BACKGROUND = document.querySelector('.main-background');
const ELEVATOR_BODY = document.createElement('div');
const ELEVATOR_BODY_PART = document.createElement('div');
const ELEVATOR = document.createElement('div');
const SWITCH = document.createElement('label');
const CHECKBOX = document.createElement('input');
const SLIDER = document.createElement('span');
// MAIN_BACKGROUND.appendChild()

const floor = id => {
    let floorButton = Number(id.slice(-1));
    let minimumDistance = elevatorArray.map(elevator => Math.abs(elevator.elevatorOn - floorButton));
    let num = minimumDistance.indexOf(Math.min(...minimumDistance));

    let workingElevator = document.getElementById(`elevator-${num + 1}-${floorButton}`);
    let workingElevatorOn = document.getElementById(`elevator-${num + 1}-${elevatorArray[num].elevatorOn}`);

    workingElevatorOn.classList.toggle('hidden');
    workingElevatorOn.classList.toggle('show');
    workingElevator.classList.toggle('hidden');
    workingElevator.classList.toggle('show');

    elevatorArray[num].elevatorOn = floorButton;
}

// const checkElevator = elevatorId => {
//     let elevator = document.getElementById(elevatorId);
//     elevatorArray[elevatorId - 1].active = elevator.checked;
//     elevatorArray.splice(elevatorArray.map(elevator => elevator.id).indexOf(elevatorId), 1);
//     console.log(elevatorArray);
// }













/*
  let workingElevator;

    if (elevatorArray.filter(elevator => elevator.floor == 1).length == 3) {
        let elevator = elevatorArray.filter(elevator => elevator.active == false).map(elevator => elevator.id - 1);
        workingElevator = elevatorArray[elevator[0]];
        console.log(workingElevator);
    }
    else {
        console.log(elevatorArray.filter(elevator => elevator.active === false));
        let elevator = document.getElementById(`elevator-${id.slice(-1)}-${}`)
    }

    */



/*
  let temporaryElevator;
let from = Number(id.slice(-1));
    let to = Number(elevatorArray[2].elevatorOn)
    if (from - to > 0) {
        for (let i = from+1; i < to; i++) {
            temporaryElevator = document.getElementById(`elevator-3-${i}`);
            if (temporaryElevator.classList.contains('hidden'))
                temporaryElevator.classList.remove('hidden');
            // if (workingElevator.classList.contains('hidden'))
            //     workingElevator.classList.remove('hidden');
        }
    }
    else {
        for (let i = to; i < from; i++) {

        }
    }
    */








// elevatorArray.map(elevator => elevator.id).findIndex(ElevatorId).active = false;

        // let activeElevator = document.getElementsByClassName(`elevator-${id}`);

/*
FLOOR_UP_1.addEventListener('click', function() {
    console.log(FLOOR_UP_1);
});

FLOOR_UP_2.addEventListener('click', function() {
    console.log(FLOOR_UP_2);
});

FLOOR_UP_3.addEventListener('click', function() {
    console.log(FLOOR_UP_3);
});

FLOOR_UP_4.addEventListener('click', function() {
    console.log(FLOOR_UP_4);
});

FLOOR_DOWN_2.addEventListener('click', function() {
    console.log(FLOOR_DOWN_2);
});

FLOOR_DOWN_3.addEventListener('click', function() {
    console.log(FLOOR_DOWN_3);
});

FLOOR_DOWN_4.addEventListener('click', function() {
    console.log(FLOOR_DOWN_4);
});

FLOOR_DOWN_5.addEventListener('click', function() {
    console.log(FLOOR_DOWN_5);
});

*/

/*
const FLOOR_UP_1 = document.querySelector('#up-1');
const FLOOR_UP_2 = document.querySelector('#up-2');
const FLOOR_UP_3 = document.querySelector('#up-3');
const FLOOR_UP_4 = document.querySelector('#up-4');
const FLOOR_DOWN_2 = document.querySelector('#down-2');
const FLOOR_DOWN_3 = document.querySelector('#down-3');
const FLOOR_DOWN_4 = document.querySelector('#down-4');
const FLOOR_DOWN_5 = document.querySelector('#down-5');
*/
