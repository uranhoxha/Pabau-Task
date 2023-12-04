
interface Interns {
    name: string;
    age: number;
    skills: string[];
}

declare enum domain {
    Web = "Web",
    Connect = "Connect",
    Backend = "Backend"
}

interface Juniors{
    name: string;
    age: number;
    skills: string[];
    date_of_promotion: Date;
    domain: domain;
}

interface Company {
    Interns: Interns[];
    Juniors: Juniors[];
    Country: string;
}
export {Company};

