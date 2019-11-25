import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projeto-lista',
  templateUrl: './projeto-lista.component.html',
  styleUrls: ['./projeto-lista.component.css']
})
export class ProjetoListaComponent implements OnInit {

  projetos: Observable<Project[]>;

  constructor(private service: ProjectService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.projetos = this.service.getProjectList();
  }

  deleteProject(id: number) {
    this.service.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  update(id: number){
    this.router.navigate(['update', id]);
  }

}
