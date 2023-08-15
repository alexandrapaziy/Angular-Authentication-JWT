import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WorkerService } from 'src/app/services/worker.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private workerService: WorkerService,
    private snack: MatSnackBar) { }

  hide = true;

  public worker = {
    id: '',
    name: '',
    surname: '',
    patronymic: '',
    email: '',
    phone: '',
    password: ''
  }

  formSubmit() {
    console.log(this.worker);
    if (this.worker.id == '' || this.worker.id == null
      || this.worker.name == '' || this.worker.name == null
      || this.worker.surname == '' || this.worker.surname == null
      || this.worker.patronymic == '' || this.worker.patronymic == null
      || this.worker.email == '' || this.worker.email == null
      || this.worker.phone == '' || this.worker.phone == null
      || this.worker.password == '' || this.worker.password == null) {
      this.snack.open('Some field was left empty', '', {
        duration: 1000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right'
      });
      return;
    }

    this.workerService.createWorker(this.worker).subscribe(
      (_data: any) => {
        console.log(_data);
        Swal.fire('Success', 'Worker is registered', 'success');
      },
      (_error: any) => {
        console.log(_error);
        this.snack.open('This email is already exists', '', {
          duration: 100,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        });
      }
    )


  }

}
