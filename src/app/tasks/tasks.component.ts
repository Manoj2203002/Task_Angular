import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tasks',
  imports: [NgIf,NgFor,FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  Heading:any="";
  startingdate:Date=new Date;
  DueDate:Date=new Date;
  content:any="";
  edit_heading:any="";
  edit_starting:Date=new Date;
  edit_DueDate:Date=new Date;
  edit_content:any="";
  edit_id:number|null=null;
  list: { id: number; starting: Date; heading: any; due: Date; content: any }[] = [];
  clear() {
    this.Heading = "";
    this.startingdate = new Date();
    this.DueDate = new Date();
    this.content = "";
  }
  onclick() {
    this.list.push({
      starting: this.startingdate,
      heading: this.Heading,
      due: this.DueDate,
      content: this.content,
      id: this.list.length + 1
    });
    this.clear();
  }
  //edit_ the Values
  edit_(item: { id: number; starting: Date; heading: any; due: Date; content: any }) {
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
    if(this.edit_id !==null && this.Heading.trim()){
      const item=this.list.find(i=>i.id==this.edit_id)
      if(item){
        item.starting=this.edit_starting;
        item.heading=this.edit_heading
        item.due=this.edit_DueDate;
        item.content=this.edit_content;
      }
      this.cancle();
    }
  }
  //Delete 
  delete(id:number){
  this.list=this.list.filter(item=>item.id !==id);
  }
}
