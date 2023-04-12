const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

if(holidays[futureId]){
console.log(futureId.name)
}else{
    console.log('ID 9 not created yet')
}

const time=new Date(`25 December ${currentYear}`).getTime(0,0)
const futureTime=new Date (`25 December ${currentYear}`).getTime(13,25)

copied =holidays[6].name='X-mas'
copied2=holidays[6].date=new Date(`25 December ${currentYear} ${time}`),
correctDate = holidays[6].date
correctTime=time
isEarlier = futureTime > time 

if (isEarlier){
    true 
}else{
    false 
}
console.log('New date is earlier:',false || true)

if(copied){
    console.log('ID change:',false)
    console.log('Name change:', copied)
    console.log('Date change:', copied2)
}

const firstHolidayTimestamp = Math.min(
    new Date (holidays[0].date).getTime(),
    new Date (holidays[1].date).getTime(),
    new Date (holidays[2].date).getTime(),
    new Date (holidays[3].date).getTime(),
    new Date (holidays[4].date).getTime(),
    new Date (holidays[5].date).getTime(),
    new Date (holidays[6].date).getTime(),
    new Date (holidays[7].date).getTime(),
    new Date (holidays[8].date).getTime(),

)

const lastHolidayTimestamp = Math.max(
    new Date (holidays[0].date).getTime(),
    new Date (holidays[1].date).getTime(),
    new Date (holidays[2].date).getTime(),
    new Date (holidays[3].date).getTime(),
    new Date (holidays[4].date).getTime(),
    new Date (holidays[5].date).getTime(),
    new Date (holidays[6].date).getTime(),
    new Date (holidays[7].date).getTime(),
    new Date (holidays[8].date).getTime(),
   
);

const firstDay=new Date(firstHolidayTimestamp).getDate()
const firstMonth=new Date(firstHolidayTimestamp).getMonth()
const lastDay= new Date(lastHolidayTimestamp).getDate()
const lastMonth=new Date(lastHolidayTimestamp).getMonth()

 console.log(`First holiday:${'0' + firstDay}/${'0'+ ( firstMonth + 1)}/${currentYear}`);
 console.log(`Last holiday:${lastDay}/${lastMonth + 1}/${currentYear}`);

// Get the number of holidays
// Choose a random holiday ID
// Get the date of the chosen holiday
//.Length check the number of items in the holidays object

const holidayCount = Object.keys(holidays).length; 
const randomHolidayId = Math.floor(Math.random(holidays) * holidayCount);
const randomHolidayDate = holidays[randomHolidayId];

console.log(randomHolidayDate);



  