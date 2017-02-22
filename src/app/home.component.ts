import { Component } from '@angular/core';
import { ElementRef, ViewChild,QueryList } from '@angular/core';

@Component({
    selector: 'page-home',
    styleUrls: ['app/home.css'],
    templateUrl: 'app/home.component.html',
})
export class HomeComponent {
    @ViewChild('textInput') textInput:ElementRef;
    @ViewChild('showText') showText:ElementRef;
    @ViewChild('cursor') cursor: ElementRef;
    userHome = "Pornmongkon@GuutonG > ~ $";
    textCommand="";
    constructor() {
        setInterval(() => {
            this.textInput.nativeElement.focus();
            if (this.cursor.nativeElement.innerHTML != "_") {
                this.cursor.nativeElement.innerHTML = "_";
            } else {
                this.cursor.nativeElement.innerHTML = "";
            }
        }, 500)
    }

    termClick(event:any){
        this.textInput.nativeElement.focus();
    }

    onKey(event: any) {
        var text = event.target.value;
        if (text != '' && event.keyCode == 13) {
            this.textCommand = '';
            if(text == 'clear'){
               this.showText.nativeElement.innerHTML = "";
            } else {
                this.showError(text);
            }
        } 
    }

    showError(text:string) {
        this.showText.nativeElement.insertAdjacentHTML('beforeend', this.userHome +"&nbsp;" + text + "<br><br><div class='oldtext'>-bash : " + text + ": command not found<br>Please use 'help' to find command<br><br></div>")
    }
}
