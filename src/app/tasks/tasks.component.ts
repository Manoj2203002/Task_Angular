import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tasks',
  imports: [NgIf,NgFor,FormsModule,NgClass],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  Heading:string ="";
  startingdate:Date=new Date;
  DueDate:Date=new Date;
  content:string ="";
  edit_heading:string ="";
  edit_starting:Date=new Date;
  edit_DueDate:Date=new Date;
  edit_content:string ="";
  edit_id:number|null=null;
  list: { id: number; starting: Date; heading: string ; due: Date; content: string  }[] = [];
  clear() {
    this.Heading = "";
    this.startingdate = new Date();
    this.DueDate = new Date();
    this.content = "";
  }
  onclick() {
    if(this.Heading.trim()  && this.content.trim())
    {
      this.list.push({
      starting: this.startingdate,
      heading: this.Heading,
      due: this.DueDate,
      content: this.content,
      id: this.list.length + 1
    });
    this.clear();
  }
  else{
    alert("Give some Value in it")
  }
  }
  //edit_ the Values
  edit_(item: { id: number; starting: Date; heading: string ; due: Date; content: string  }) {
    this.edit_id=item.id;
    this.edit_starting=item.starting;
    this.edit_heading=item.heading;
    this.edit_DueDate=item.due;
    this.edit_content=item.content;
  }
  // Cancle Update
  cancle(){
  this.edit_heading="";
  this.edit_starting=new Date;
  this.edit_DueDate=new Date;
  this.edit_content="";
  this.edit_id=null;
  }
  //update The Values
  update(){
    if(this.Heading.trim() || this.content.trim()){
      const item=this.list.find(i=>i.id==this.edit_id)
      if(item){
        item.starting=this.edit_starting;
        item.heading=this.edit_heading
        item.due=this.edit_DueDate;
        item.content=this.edit_content;
      }
      this.cancle();
  }
  else{
    alert("Give some Value in it")
  }
  }
  isSuccess = true;
  isError = false; 
  //Delete 
  delete(id:number){
  this.list=this.list.filter(item=>item.id !==id);
  }
}
