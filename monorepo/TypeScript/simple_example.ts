import { Company } from './types';

const first_intern: Company ={
    Interns:[{
        name: "Uran",
        age: 19,
        skills: ["HTML", "CSS", "JavaScript"]
    }],
    Juniors: [],
    Country: "Kosova"
    }

    function greet(){
        console.log(`Hello ${first_intern.Interns[0].name} from ${first_intern.Country}!`);
    }

    greet();