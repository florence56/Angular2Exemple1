import { Injectable } from '@angular/core';
import { CLIENTS } from './client.mock';
import { Client } from './client';

@Injectable()
export class ClientService {

    constructor() { }

    public getClients() {
        return (CLIENTS);
        //return Promise.resolve(CLIENTS);
    }

    public getClient(id : number) {
        return Promise.resolve(CLIENTS.filter(client => client.id === id));
    }

    public setClient(client : Client) : boolean {
        return false;
    }

    public addClient(client : Client) : boolean {
        return false;
    }

    public suppClient(client : Client) : boolean {
        return false;
    }

}