import {Equipment} from './Equipment';
export interface Restaurants{
    _name: string;
    _equipment: Equipment;
    cook(item: string): void;
}