import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { echartStyles } from 'src/app/shared/echart-styles';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/_services/projects.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  active = 1;
  name="nombreProyecto";
  chartPie1: any;
  chartLineOption3: any;
  products$: any;

  items = ['Javascript', 'Typescript'];
  autocompletes$;
  tagsCtrl1 = new FormControl(this.items);
    id : any;
proyecto : any;
equipo:any = [];


userRequerimentForm : FormGroup;
softwareRequerimentForm : FormGroup;
testCaseForm : FormGroup;




  constructor
  (
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private dl: DataLayerService,
    private proyectoService : ProjectsService
  )
  {
    this.id = this.route.snapshot.params['id'];
    proyectoService.get(this.id).subscribe((data) => {
        this.proyecto = data[0];
        console.log(this.proyecto);
        this.proyectoService.getUsersFromProject(this.id).subscribe((data2) => {
            this.equipo = data2;
        });
    });

    this.userRequerimentForm = new FormGroup({
      urInputCode   : new FormControl(''),
      urPriority    : new FormControl(''),
      urStability  : new FormControl(''),
      urState      : new FormControl(''),
      urCost        : new FormControl(''),
      urDescription : new FormControl('')
    });

    this.softwareRequerimentForm = new FormGroup({
      srInputCode   : new FormControl(''),
      srPriority    : new FormControl(''),
      srStability  : new FormControl(''),
      srState      : new FormControl(''),
      srCost        : new FormControl(''),
      srDescription : new FormControl(''),
      userRequerimentReference : new FormControl('')
    });

    this.testCaseForm = new FormGroup({
      tcCode   : new FormControl(''),
      tcState   : new FormControl(''),
      urReference   : new FormControl(''),
      aResult   : new FormControl(''),
      oResult   : new FormControl('')
    });
  }

  public onSelect(item) {
    console.log('tag selected: value is ' + item);
  }




  ngOnInit() {
    this.chartPie1 = {
      ...echartStyles.defaultOptions, ...{
        legend: {
          show: true,
          bottom: 0,
        },
        series: [{
          type: 'pie',
          ...echartStyles.pieRing,

          label: echartStyles.pieLabelCenterHover,
          data: [{
            name: 'Exitosos',
            value: 80,
            itemStyle: {
              color: '#663399',
            }
          }, {
            name: 'Fallidos',
            value: 20,
            itemStyle: {
              color: '#ced4da',
            }
          }]
        }]
      }
    };
  }

  addUserRequeriment(modal, event)
  {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' });

  }

  addSoftwareRequeriment(modal, event)
  {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' });
  }

  addTestCase(modal, event)
  {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' });

  }

  addIncrement(modal, event)
  {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' });
  }

  editIncrement(modal, event)
  {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' });
  }

  deleteIncrement(modal, event)
  {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' });
  }


  imprimirtc()
  {
    console.log(this.testCaseForm.value);
  }

  imprimirur()
  {
    console.log(this.userRequerimentForm.value);

  }

  imprimirsr()
  {
    console.log(this.softwareRequerimentForm.value);
  }
 


}
