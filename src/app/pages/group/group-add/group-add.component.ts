import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Group, GroupService } from '@app/services/group.service';

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.styl']
})
export class GroupAddComponent implements OnInit {
  addForm = this.fb.group({
    name: ['', [Validators.required]],
    companyName: ['', [Validators.required]],
    representativeName: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private groupService: GroupService) {}

  ngOnInit() {}

  handleSubmit() {
    const vals: Group = this.addForm.value;
    this.groupService.addGroup(vals).subscribe();
  }
}
