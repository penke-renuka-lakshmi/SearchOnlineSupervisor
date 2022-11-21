import { Component, OnInit } from '@angular/core';
import { Supervisor } from 'src/app/models/supervisor-data';
import { Router } from '@angular/router';
import { ServiceList } from 'src/app/services/service-list.service';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { MatDialog } from '@angular/material/dialog';
import { ContactSupervisorComponent } from '../contact-supervisor/contact-supervisor.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datasource: Supervisor[] = [];
  supervisors: string[] = ["id", "employeeid", "name", "email", "role", "domain", "location", "experience", "status"];
  isDisabled = true;
  status!: boolean;
  rowClicked!: number;
  selectedRowIndex!: any;
  selectedRowData: any;
  showspinner = false;

  constructor(private _router: Router,
    public dialog: MatDialog,
    private service_list: ServiceList) {
    this.getSupervisorDetails();
  }

  ngOnInit(): void {
    this.rowClicked = -1;
    sessionStorage.clear();
  }

  navigate(id: string) {
    if (id == 'home') this._router.navigate(['/home']);
    if (id == 'about') this._router.navigate(['/about']);
    if (id == 'welcome') this._router.navigate(['/welcome']);
  }
  getSupervisorDetails() {
    this.showspinner = true;
    this.service_list.getSupervisorDetails().subscribe(
      (response) => {
        this.datasource = response;
        this.showspinner = false;
      });
  }
  selectedRow(idx: any, row: Supervisor) {
    this.selectedRowIndex = idx;
    this.selectedRowData = row;
    if (this.rowClicked === idx) {
      this.rowClicked = -1;
      this.isDisabled = true;
    } else {
      this.rowClicked = idx;
      if(this.selectedRowData.status === 'unassigned'){
      this.isDisabled = false;
    }else{
      this.isDisabled = true;
    }
    }
  }
  employeeStatus(status: string): string {
    if (status === 'assigned') {
      return 'green';
    }
    if (status === 'unassigned') {
      return 'red';
    }
    return 'nocolor';
  }
  sendRequest() {
    this.dialog.open(ContactSupervisorComponent, {});
  }
  contactUs() {
    this.dialog.open(ContactUsComponent, {});
  }
  ngOnDestroy(): void { }
}
