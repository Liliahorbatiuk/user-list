import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userLogin = '';
  userPassword= '';
  userEmail= '';
  users = [];
  regExpLog = (/^[a-zA-Z]{3,16}\D$/);
  regExpPas = (/^[a-zA-Z\-\.\d\_]{4,16}$/);
  regExpE = (/^([a-zA-Z\d\.\_])*@([a-zA-Z])*(.[a-z]\D{2,3})$/g);
  editIndex: number;
  editStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addUser(): void {
    if (this.regExpLog.test(this.userLogin) && this.regExpPas.test(this.userPassword) && this.regExpE.test(this.userEmail)){
      const user = {
        login: this.userLogin,
        password: this.userPassword,
        email: this.userEmail,
      };
      this.users.push(user);
      this.userLogin = '';
      this.userPassword = '';
      this.userEmail= '';
    }
  }

  delete(index: number): void {
    this.users.splice(index, 1)
  }

  edit(index: number): void {
    this.userLogin = this.users[index].login;
    this.userPassword = this.users[index].password;
    this.userEmail = this.users[index].email;
    this.editIndex = index;
    this.editStatus = true;
  }

  save(): void {
    this.users[this.editIndex].login = this.userLogin;
    this.users[this.editIndex].password = this.userPassword;
    this.users[this.editIndex].email = this.userEmail;
    this.userLogin = '';
    this.userPassword = '';
    this.userEmail = '';
    this.editStatus = false;
  }
}
