import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DropdownComponent} from "./dropdown/dropdown.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, DropdownComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    dropdownOptions = [
        {
            id: 1,
            name: 'a',
            desc: 'a desc'
        },
        {
            id: 2,
            name: 'b',
            desc: 'b desc'
        }, {
            id: 3,
            name: 'c',
            desc: 'c desc'
        },
    ];
}
