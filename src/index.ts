/// <reference types="@types/google.maps" />
import {User} from "./User";
import {Company} from "./Company";
import {CustomMap} from "./CustomMap";

const user = new User();

console.log(user);

const company = new Company();

console.log(company);

const mapDiv = document.getElementById('map');
console.log(mapDiv);

const customMap = new CustomMap(mapDiv);

customMap.addMarker(user);
customMap.addMarker(company);
