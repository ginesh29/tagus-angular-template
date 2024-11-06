import { Component } from '@angular/core';
import { FmSidebarComponent } from '../fm-sidebar/fm-sidebar.component';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-fm-assets',
    standalone: true,
    imports: [FmSidebarComponent, RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatCheckboxModule],
    templateUrl: './fm-assets.component.html',
    styleUrls: ['./fm-assets.component.scss']
})
export class FmAssetsComponent {}