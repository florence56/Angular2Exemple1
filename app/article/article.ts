/**
 * Article
 */
export class Article {
	id: number;
	code: number;
	desc: string;
	prixTTC: number;
	
	
	constructor(id: number, code: number, desc: string, prixTTC: number) {
		this.id = id;
		this.code = code;
		this.desc = desc;
		this.prixTTC = prixTTC;		
	}
}