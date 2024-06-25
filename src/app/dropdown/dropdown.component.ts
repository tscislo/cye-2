import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-dropdown',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss'
})
export class DropdownComponent implements OnInit {
    @Input() items: any[] = [];
    @Input() template: TemplateRef<any> | null = null;

    ngOnInit(): void {
        console.log(this.template)
    }


}
