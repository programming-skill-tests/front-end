//Model for Film
export class Film {
    constructor(
        public id: number,
        public title: string,
        public director: string,
        public genre: string,
        public cast: string,
        public selected: false //for selecting purpose
     ) {}
}
