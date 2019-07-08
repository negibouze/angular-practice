import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupRoutingModule } from './group-routing.module';
import { GroupAddComponent } from './group-add/group-add.component';
import { GroupSearchComponent } from './group-search/group-search.component';

@NgModule({
  declarations: [GroupAddComponent, GroupSearchComponent],
  imports: [CommonModule, GroupRoutingModule]
})
export class GroupModule {}
