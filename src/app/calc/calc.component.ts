
import { Component, NgModule  } from "@angular/core";

@Component({
    selector: 'app-calc',
    templateUrl: './calc.component.html',
    styleUrls: ['./calc.component.css']
})

export class CalcComponent
{
  public n1!: number;
  public n2!: number;
  public ans!: number;
  add(){
    this.ans = this.n1 + this.n2;
  }
  sub(){
    this.ans = this.n1 - this.n2;
  }
  mul(){
    this.ans = this.n1 * this.n2;
  }
  div(){
    this.ans = this.n1 / this.n2;
  }
  
  public num!: number;
  public ans2!: number;
  public f!: boolean;
  public str!: string;
  fact(num: number)
  {
    this.ans2=1;
    if(num<0)
      alert("Factorial of a negative number is not possible");
    for (let index = 1; index <= num; index++)
    {
      if (num==0)
        this.ans2=1;
      else
        this.ans2 = this.ans2*index;
    }
  }
  prime(num: number)
  {
    if(num>1){
      this.f=false;
      for (let index = 2; index <= num/2; index++){
        if(num%index==0){
          this.f=true;
          break;
        }
      }
      if(this.f==true)
        this.str="Composite";
      else
        this.str = "Prime";
    }
    else
      alert("Negative numbers and 0 are not considered for prime or composite");
  }
}