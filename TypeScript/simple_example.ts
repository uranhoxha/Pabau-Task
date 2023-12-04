import { Company } from './types';

const first_intern: Company ={
    Interns:[{
        name: "Florinda",
        age: 21,
        skills: ["HTML", "CSS", "JavaScript"]
    }],
    Juniors: [],
    Country: "Kosova"
    }

    function greet(){
        console.log(`Hello ${first_intern.Interns[0].name} from ${first_intern.Country}!`);
    }

    greet();