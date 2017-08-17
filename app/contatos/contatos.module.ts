import { NgModule } from '@angular/core';
import { ContatosListaComponent } from './contatos-lista.Component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ContatosListaComponent
    ],
    exports: [
        ContatosListaComponent
    ]
})
export class ContatosModule{}