import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";
import { ProjectService } from "../project.service";
import { Project } from "../project";
import { Router } from '@angular/router';

@Component({
  selector: 'app-projeto-novo',
  templateUrl: './projeto-novo.component.html',
  styleUrls: ['./projeto-novo.component.css']
})
export class ProjetoNovoComponent implements OnInit {

 
  projeto: Project = new Project();
  submitted = false;

  constructor(private service: ProjectService,
    private router: Router) { }

  ngOnInit() {
  }

  novoProjeto(): void {
    this.submitted = false;
    this.projeto = new Project();
  }

  save() {
    this.service.create(this.projeto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.projeto = new Project();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/projects']);
  }

}
