const Personne = function (Nom , Prenom, Age , Sexe , ) {
    this.Nom = Nom ;
    this.Prenom = Prenom ;
    this.Age = Age ;
    this.Sexe = Sexe ;



//first method
    this.getIronMan = function () {
        return this.Nom + " " + this.Prenom + " " + this.Age + " "
            + this.Sexe + " ";
    }

//second merhod
    this.getTony = function (Newnom , newPrenom) {
        this.Nom = Newnom ;
        this.Prenom = newPrenom ;
    }

}

let ironman = new Personne('Tony' ,'Stark' ,'56' ,'homme');
let captain = new Personne('Steve' ,'Rogers' ,'40' ,'homme');
let widow = new Personne('Black' ,'widow' ,'37' ,'femme');
let spider = new Personne('Peter' ,'Parker' ,' 25' ,'homme');
let hulk = new Personne('Bruce' ,'Banner' ,'54 ' ,'homme');

let avengers = [
    ironman,
    captain,
    widow,
    spider,
    hulk
];

let hero = { personne: [ironman, captain, widow, spider, hulk]}

for (let i = 0 ; i < hero.personne.length ; i++) {
    let div = document.createElement('div');
    document.body.append(div);
    div.innerHTML= hero.personne[i].getIronMan()
}
