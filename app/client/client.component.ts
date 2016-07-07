import { Component, Input, OnInit } from '@angular/core';
import { Client }    from './client';
import { ClientService } from '../service';

@Component({
    selector: 'client-form',
    templateUrl: 'app/client/client.component.html',
    providers: [ClientService]

})

export class ClientDetailComponent implements OnInit{
    private _listeClients: Client[];
    private _clientService: ClientService;
    private _indiceEnCours: number;

    constructor(clientService: ClientService) {
        this._clientService = clientService;
    }

    @Input() enrClient: Client;
    titre = 'Saisie client';

    submitted = false;

    ngOnInit() {
        this._listeClients = this._clientService.getClients();
        this.setEncours(0);
       /* this._clientService.getClients()
            .then(clients => {
                this._listeClients = clients;
                this.setEncours(0);
                });*/
    }

    onSubmit() {
        this.submitted = true;
        if (this.enrClient.id < 0)
            this._clientService.addClient(this.enrClient);
        else
            this._clientService.setClient(this.enrClient);
        this._listeClients[this._indiceEnCours] = this.enrClient;
    }

    active = true;

    private ajouterClient() {
        this.enrClient = new Client(-1, '', '', 0, 0, 0,'');
        this.active = false;
        setTimeout(() => this.active = true, 0);
        this._indiceEnCours = this._listeClients.push(this.enrClient) - 1;
    }

    private supprimerClient() {
        this._clientService.suppClient(this.enrClient);
        this._listeClients.splice(this._indiceEnCours, 1);
        if (this._indiceEnCours > 0)
            this._indiceEnCours--;
        this.setEncours(this._indiceEnCours);
    }

 private supprimerTout() {
        this._listeClients.splice(0);   //indice 0 supprime tout les clients.
        this.enrClient = new Client(-1, '', '', 0, 0, 0,'');  //on écrit cette ligne pour afficher un formulaire vide.
        
    } 

    private setEncours(ind: number): void {
        this.enrClient = this._listeClients[ind];
        this._indiceEnCours = ind;
    }

    private setSuivant() {
        if (this._indiceEnCours < this._listeClients.length - 1)
            this.setEncours(++this._indiceEnCours);
    }

    private setPrecedent() {
        if (this._indiceEnCours > 0)
            this.setEncours(--this._indiceEnCours);
    }

}
