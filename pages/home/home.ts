import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  gender: string;
  height: number;
  weight: number;
  lifestyle: number;
  bmr: number;
  age: number;
  calorie: number;

  constructor(public navCtrl: NavController) {}
  calculateCalorieIntake() {
    if (this.gender == "male") {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
      this.calorie = this.bmr * this.lifestyle;
    } else {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
      this.calorie = this.bmr * this.lifestyle;
    }
    this.calorie = parseFloat(this.calorie.toFixed(2));
  }
}