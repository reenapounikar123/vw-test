import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test : Date = new Date();

    constructor(private router: Router ) {}

    ngOnInit() {

    }
    getPath(){
      return this.router.url;
    }
    name: any = 'Angular';
    section: any = 'section1';
    ngOnInit1() {
        this.section = localStorage.getItem("storage");
        this.scrollTo(this.section);
    }
    scrollTo(section) {
        localStorage.setItem('storage', section);
        this.section = section;
        console.log(section)
        document.querySelector('#' + section).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    onSectionChange(sectionId: string) {
        this.section = sectionId;
    }
}
