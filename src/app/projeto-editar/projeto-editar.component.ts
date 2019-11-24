import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';
@Component({
  selector: 'app-projeto-editar',
  templateUrl: './projeto-editar.component.html',
  styleUrls: ['./projeto-editar.component.css']
})
export class ProjetoEditarComponent implements OnInit {

  id: number;
  projeto: Project;

  constructor(private route: ActivatedRoute,private router: Router,
    private service: ProjectService) { }

  ngOnInit() {
    this.projeto = new Project();

    this.id = this.route.snapshot.params['id'];
    
    this.service.getProject(this.id)
      .subscribe(data => {
        console.log(data)
        this.projeto = data;
      }, error => console.log(error));
  }

  updateProject() {
    this.service.update(this.id, this.projeto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.projeto = new Project();
    this.gotoList();
  }

  onSubmit() {
    this.updateProject();    
  }

  gotoList() {
    this.router.navigate(['/projects']);
  }

}
