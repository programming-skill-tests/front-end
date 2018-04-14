//Model for Film
export class Film {
        public title: string;
        public director: string;
        public genre: string;
        public cast: string;
        public selected: false; //for selecting purpose
 		public id: number;	
        constructor(values: Object = {}) {
            Object.assign(this, values);
          }
}
