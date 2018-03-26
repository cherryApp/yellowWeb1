export class JsonData {
    name: string;
    rounds: Array<Matchday>;
}

export class Matchday {
    name: string;
    matches: Array<Match>;
}

export class Match {
    date: Date;
    team1: Team;
    team2: Team;
    score1: number;
    score2: number;
}

export class Team {
    key: string;
    name: string;
    code: string;
}

