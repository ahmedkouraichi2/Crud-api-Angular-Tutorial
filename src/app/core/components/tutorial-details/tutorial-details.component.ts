import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from '../../models/models/tutorial.model';
import { TutorialService } from '../../services/tutorial.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.scss']
})
export class TutorialDetailsComponent implements OnInit {


  @Input() viewMode = false;
  @Input() currentTutorial:Tutorial = {
     title:'',
     description:'',
     published:false,
     
  }

  message = '';
  constructor(
    private tutorialService :TutorialService,
    private route :ActivatedRoute,
    private router :Router 
        
    
    ) { }

  ngOnInit(): void {
    if(!this.viewMode){
       this.message = '';
       this.getTutorial(this.route.snapshot.params["id"]);
    }

  }

    getTutorial(id:string):void{
       this.tutorialService.get(id).
          subscribe(
               { 
                   next : (data) =>{
                       this.currentTutorial = data;
                       console.log(data)
                   },

                   error: (e) =>console.error(e)
               }
          )
    }




    updatePublished(status :boolean):void {
        const data = {
             title :this.currentTutorial.title,
             description : this.currentTutorial.description,
             published :status

        };

        this.message = '';

        this.tutorialService.update(this.currentTutorial.id,data).subscribe(

          {
             next:(res) =>{
                console.log(res);
                this.currentTutorial.published = status;
                this.message = res.message? res.message :'this status was updated '

             },
             error: (e) => console.error( e )
          }

        );
    }

  

    deleteTutorial():void{
      this.tutorialService.delete(this.currentTutorial.id).subscribe(
        {
          next : (res) =>{
             console.log(res);
             this.router.navigate(['/tutorials']);

          },

          error : (e) => console.error(e)
        }
      );
    }






}
