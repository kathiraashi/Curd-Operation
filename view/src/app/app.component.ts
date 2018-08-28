import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CurdService } from './service/curd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   FormType;
   Form: FormGroup;

   _List: any[] = [];

   constructor( private service: CurdService) {
      this.FormType = 'Submit';
      this.service.List().subscribe(response => {
         const Result = JSON.parse(response['_body']);
         if (response['status'] === 200 && Result['Status']) {
            this._List = Result['Response'];
         }
      });
    }

   ngOnInit() {
      this.Form = new FormGroup({
         Name : new FormControl(''),
         Email : new FormControl(''),
         Phone : new FormControl('')
      });
   }

   Submit() {
      this.service.Create(this.Form.value).subscribe(response => {
         const Result = JSON.parse(response['_body']);
         if (response['status'] === 200 && Result['Status']) {
            this._List.splice(0, 0, Result['Response']);
         }
      });
   }

   Delete(_index) {
      this.service.Delete(this._List[_index]['_id']).subscribe(response => {
         const Result = JSON.parse(response['_body']);
         if (response['status'] === 200 && Result['Status']) {
            this._List.splice(_index, 1);
         }
      });
   }

   Edit(_index) {
      this.FormType = 'Update';
      const obj = this._List[_index];
      this.Form.controls['Name'].setValue(obj['Name']);
      this.Form.controls['Email'].setValue(obj['Email']);
      this.Form.controls['Phone'].setValue(obj['Phone']);
      this.Form.removeControl('User_Id');
      this.Form.addControl('User_Id', new FormControl(obj['_id'], Validators.required));
   }

   Reset() {
      this.Form.removeControl('User_Id');
      this.Form.reset();
      this.FormType = 'Submit';
      this.Form.updateValueAndValidity();
   }

   Update() {
      this.service.Update(this.Form.value).subscribe(response => {
         const Result = JSON.parse(response['_body']);
         if (response['status'] === 200 && Result['Status']) {
            const _Index = this._List.findIndex(obj => obj._id === Result['Response']['_id'] );
            this._List[_Index] = Result['Response'];
         }
      });
   }
}
