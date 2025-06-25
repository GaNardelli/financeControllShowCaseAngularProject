import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ManageExpensesComponent } from '../../manage-expenses-component/manage-expenses-component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-modal-income',
  imports: [MatFormFieldModule, FormsModule, MatInputModule, MatSelectModule],
  templateUrl: './modal-income.html',
  styleUrl: './modal-income.scss'
})
export class ModalIncome {
  constructor(
    public dialogRef: MatDialogRef<ManageExpensesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close() {
    this.dialogRef.close(); // closes without saving
  }

  save() {
    this.dialogRef.close(this.data); // return updated data
  }
}
