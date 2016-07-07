/**
 * Client
 */
export class Client {
	id: number;
	nom: string;
	prenom: string;
	age: number;
	caution: number;
	enfant:number;
	profession: string;
	
	constructor(id: number, nom: string, prenom: string, age: number, caution: number, enfant: number, profession: string) {
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.age = age;
		this.caution = caution;
		this.enfant = enfant;
		this.profession = profession;
	}
}